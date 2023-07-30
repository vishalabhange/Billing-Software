import React, { useState } from 'react';
import './createBillPage.css'; // Import the CSS file

const CreateBillPage = () => {
  const [customerName, setCustomerName] = useState('');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleCreateBill = (e) => {
    e.preventDefault();
    // Perform bill creation logic here
    // You can store the bill details or make an API call
    console.log('Bill created!');
    console.log('Customer Name:', customerName);
    console.log('Item Name:', itemName);
    console.log('Quantity:', quantity);
    console.log('Price:', price);
    // Reset form fields
    setCustomerName('');
    setItemName('');
    setQuantity('');
    setPrice('');
  };

  return (
    <div className="create-bill-container">
      <h2>Create Invoice</h2>
      <form className="create-bill-form" onSubmit={handleCreateBill}>
        <div>
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Invoice</button>
      </form>
    </div>
  );
};

export default CreateBillPage;
