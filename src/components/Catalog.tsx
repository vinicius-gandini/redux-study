import React from 'react'
import { useSelector, useStore } from 'react-redux';

function Catalog() {
  const catalog = useSelector(state => state);

  return (
    <h1>Catalog</h1>
  )
}

export default Catalog
