import React from 'react'

export const ProductList = (props) => {
  // TODO: display appropriate header
  // TODO: display only chosen columns
  // TODO: display products as new table rows
  return (
    <div id="product-list">
      <header>
        <strong>{`Product List (${props?.products?.length || 0} items)`}</strong>
      </header>
      <table>
        <thead>
          <tr>
            {props?.columns?.map((col) => <td>{col}</td>)}
          </tr>
        </thead>
        <tbody>
          {props?.products.map((prod) => {
            return (
              <tr key={prod.id}>
                {props?.columns?.map((col) => <td>{prod?.[col]}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
