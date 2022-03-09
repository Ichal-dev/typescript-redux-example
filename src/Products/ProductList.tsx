import React from "react";

const initialstate = [
  { title: "silve hunter", price: 60, id: "silver" },
  { title: "pubg mobile", price: 70, id: "pubg" },
  { title: "mobile legends", price: 80, id: "ml" },
];

export const ProductList: React.FC<{}> = ({}) => {
  return (
    <div>
      <h2>Games List</h2>
      {initialstate.map((product) => (
        <div key={product.id}>
          <span>{`${product.title}: ${product.price}`}</span>
        </div>
      ))}
    </div>
  );
};
