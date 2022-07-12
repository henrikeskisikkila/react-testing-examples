import React from "react";

export interface Order {
  id: number;
  name: string;
  variety: string;
  amount: number;
}

export interface OrdersProps {
  order: Order[];
}

function Orders({ order }: OrdersProps) {
  return (
    <table data-testid="orders">
      <thead>
        <tr>
          <th>Name</th>
          <th>Variety</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {order.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.variety}</td>
              <td>{item.amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Orders;
