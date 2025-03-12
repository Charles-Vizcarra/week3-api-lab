// product-service.js

const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Sample Products Data
const products = [
    { id: 1, name: 'Espresso', price: 3.00, description: 'Strong and bold single shot of coffee' },
    { id: 2, name: 'Latte', price: 4.50, description: 'Creamy espresso with steamed milk' },
    { id: 3, name: 'Cappuccino', price: 4.00, description: 'Espresso, steamed milk, and milk foam' },
    { id: 4, name: 'Americano', price: 3.50, description: 'Espresso diluted with hot water' }
];

// Public Endpoint
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Coffee shop Service running on port ${PORT}`);
});
