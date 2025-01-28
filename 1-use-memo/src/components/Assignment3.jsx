import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    { name: "Tomato", value: 30 },
    { name: "Tomato", value: 30 },
    // Add more items as needed
    { name: "Tomato", value: 30 },
    { name: "Tomato", value: 30 },
    { name: "Tomato", value: 30 },
  ]);

  // Your code starts here
  var totalValue = 0;
  const cachedValue = useMemo(
    (EachValue) => {
      console.log("ASdas");
      items.map((EachItem) => {
        totalValue = totalValue + EachItem.value;
      });
      return totalValue;
    },
    [items]
  );
  // Your code ends here
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
    </div>
  );
};
