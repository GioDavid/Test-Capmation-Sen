import React, {useState} from 'react'

export const FilterForm = (props) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const onPriceInputChange = (value, type) => {
    if(type) {
      if(type === 'min') {
        setMinPrice(value);
        props?.onPriceInputChange({  priceFrom: value, priceTo: maxPrice});
      } else {
        setMaxPrice(value);
        props?.onPriceInputChange({  priceFrom: minPrice, priceTo: value});
      }
    }
  }

  // TODO: bind handlers and props
  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        placeholder="Price from..."
        onChange={(e) => {
          const val = e.target.value;
          onPriceInputChange(val, 'min');
        }
      }
        />
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        id="priceTo"
        name="priceTo"
        placeholder="Price to..."
        onChange={(e) => {
          const val = e.target.value;
          onPriceInputChange(val, 'max');
        }
      } />
    </div>
  )
}
