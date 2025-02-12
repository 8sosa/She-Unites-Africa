import React, { useState, useEffect } from 'react';

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({
    productName: '',
    price: '',
    quantity: '',
  });
  const [updateId, setUpdateId] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const result = await response.json();
      if (response.ok) {
        setProducts(result);
      } else {
        setMessage('Error fetching products');
      }
    } catch (error) {
      setMessage('Server error. Please try again later.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    try {
      const method = updateId ? 'PUT' : 'POST';
      const endpoint = updateId ? `/api/products/${updateId}` : '/api/products';
      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      const result = await response.json();
      if (response.ok) {
        setMessage(updateId ? 'Product updated successfully!' : 'Product created successfully!');
        fetchProducts();
        setProductData({ productName: '', price: '', quantity: '' });
        setUpdateId(null);
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage('Server error. Please try again later.');
    }
  };

  const handleEdit = (product) => {
    setProductData(product);
    setUpdateId(product._id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (response.ok) {
        setMessage('Product deleted successfully!');
        fetchProducts();
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage('Server error. Please try again later.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Product Manager</h1>
      {message && <p style={{ color: 'red' }}>{message}</p>}

      <form onSubmit={handleCreateOrUpdate} style={{ marginBottom: '20px' }}>
        <h2>{updateId ? 'Update Product' : 'Create Product'}</h2>
        <label>Product Name:</label>
        <input
          type="text"
          name="productName"
          value={productData.productName}
          onChange={handleInputChange}
          required
        />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={productData.price}
          onChange={handleInputChange}
          required
        />
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={productData.quantity}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{updateId ? 'Update' : 'Create'}</button>
      </form>

      <h2>Product List</h2>
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.productName}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManager;
