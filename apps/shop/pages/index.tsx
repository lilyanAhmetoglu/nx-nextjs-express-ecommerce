import React, { useEffect, useState, useCallback } from 'react';
import type { Product } from '@bahag/shared-types';
import styles from './index.module.css';

export function Index({
  q,
  products: initialProduct,
}: {
  q: string;
  products: Product[];
}) {
  const [search, setSearch] = useState(q);
  const [products, setProducts] = useState<Product[]>(initialProduct);
  useEffect(() => {
    fetch(`http://localhost:3333/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  const onSetSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);
  return (
    <div className={styles.page}>
      <input value={search} onChange={onSetSearch} />
      <ul>
        {products.map(({ id, name: { english } }) => (
          <li key={id}>{english}</li>
        ))}
      </ul>
    </div>
  );
}
//SSR
export async function getServerSideProps(context) {
  let products = [];
  if (context.query.q) {
    const res = await fetch(
      `http://localhost:3333/search?q=${context.query.q}`
    );
    products = await res.json();
  }

  return {
    props: {
      q: context.query.q ?? '',
      products,
    },
  };
}
export default Index;
