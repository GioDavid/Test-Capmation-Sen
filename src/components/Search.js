import React, { useState } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    // TODO: implement price change handler
  }

  const onCheckboxClick = (value, column) => {
    // TODO: implement checkbox click handler
    const cols = columns;
    cols[column] = value;
    setColumns(columns);
  }

  const filterProducts = (value, column) => {
 
    // TODO: implement handler for filtering products by price range
  }


  let displayedProducts = props.products.filter((prod) => {
    if (price?.priceFrom && price?.priceTo) {
      return prod.price >= price.priceFrom && prod.price <= price.priceTo;
    } else if (price?.priceFrom) {
      return prod.price >= price.priceFrom;
    } else if (price?.priceTo) {
      return prod.price <= price.priceTo;
    } else {
      return true;
    }
  });

  const cols = ['id', 'name', 'department', 'price'];

  return (
    <div className="Products">
      <FilterForm
        priceFrom={price?.priceFrom}
        priceTo={price?.priceTo}
        onPriceInputChange={setPrice} />

      <ToggleColumns
        onCheckboxClick={onCheckboxClick}
        columns={cols} />

      <ProductList
        products={displayedProducts}
        columns={cols.filter(col => columns[col])} />
    </div>
  );
}

export default Search;
