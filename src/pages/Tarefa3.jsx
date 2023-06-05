import React, { useState } from 'react';
import './Tarefa3.css';

const Tarefa3 = () => {
  const [customers, setCustomers] = useState([{ name: '', amount: 0 }]);
  const [products, setProducts] = useState([{ name: '', price: 0 }]);

  const handleCustomerNameChange = (e, index) => {
    const newCustomers = [...customers];
    newCustomers[index].name = e.target.value;
    setCustomers(newCustomers);
  };

  const handleCustomerAmountChange = (e, index) => {
    const newCustomers = [...customers];
    newCustomers[index].amount = parseFloat(e.target.value);
    setCustomers(newCustomers);
  };

  const handleProductChange = (e, index) => {
    const newProducts = [...products];
    newProducts[index].name = e.target.value;
    setProducts(newProducts);
  };

  const handleProductPriceChange = (e, index) => {
    const newProducts = [...products];
    newProducts[index].price = parseFloat(e.target.value);
    setProducts(newProducts);
  };

  const handleAddCustomer = () => {
    setCustomers([...customers, { name: '', amount: 0 }]);
  };

  const handleRemoveCustomer = (index) => {
    const newCustomers = [...customers];
    newCustomers.splice(index, 1);
    setCustomers(newCustomers);
  };

  const handleAddProduct = () => {
    setProducts([...products, { name: '', price: 0 }]);
  };

  const handleRemoveProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  const calculateTotalAmount = () => {
    return products.reduce((total, product) => total + product.price, 0);
  };

  const calculateIndividualAmount = (customer) => {
    const totalAmount = calculateTotalAmount();
    const customerAmount = customer.amount;
    const serviceCharge = (customerAmount / totalAmount) * 0.1 * totalAmount;
    return customerAmount + serviceCharge;
  };

  const handleCalculateClick = () => {
    const totalAmount = calculateTotalAmount();
    const individualAmounts = customers.map((customer) =>
      calculateIndividualAmount(customer)
    );

    alert(`Valor total da conta: R$ ${totalAmount.toFixed(2)}`);

    individualAmounts.forEach((amount, index) => {
      alert(`Valor para ${customers[index].name}: R$ ${amount.toFixed(2)}`);
    });
  };

  const handleGoBackClick = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h1 className="title">Divisor de Conta de Restaurante</h1>
      <div className="customers-container">
        <h2>Clientes:</h2>
        {customers.map((customer, index) => (
          <div className="customer" key={index}>
            <input
              type="text"
              value={customer.name}
              onChange={(e) => handleCustomerNameChange(e, index)}
              placeholder="Nome do cliente"
            />
            <input
              type="number"
              min="0"
              step="0.01"
              value={customer.amount}
              onChange={(e) => handleCustomerAmountChange(e, index)}
              placeholder="Valor consumido"
            />
            {index !== 0 && (
              <button className="remove-button" onClick={() => handleRemoveCustomer(index)}>
                Remover
              </button>
            )}
          </div>
        ))}
        <button className="add-button" onClick={handleAddCustomer}>
          Adicionar Cliente
        </button>
      </div>
      <div className="products-container">
        <h2>Produtos:</h2>
        {products.map((product, index) => (
          <div className="product" key={index}>
            <input
              type="text"
              value={product.name}
              onChange={(e) => handleProductChange(e, index)}
              placeholder="Nome do produto"
            />
            <input
              type="number"
              min="0"
              step="0.01"
              value={product.price}
              onChange={(e) => handleProductPriceChange(e, index)}
              placeholder="Preço"
            />
            {index !== 0 && (
              <button className="remove-button" onClick={() => handleRemoveProduct(index)}>
                Remover
              </button>
            )}
          </div>
        ))}
        <button className="add-button" onClick={handleAddProduct}>
          Adicionar Produto
        </button>
      </div>
      <button className="calculate-button" onClick={handleCalculateClick}>
        Calcular
      </button>
      <button className="go-back-button" onClick={handleGoBackClick}>
        Voltar para a página inicial
      </button>
    </div>
  );
};

export default Tarefa3;
