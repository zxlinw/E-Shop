import express from 'express';
import products from './data/products.js';
const port = 2000;

const app = express();

app.get('/', (req, res) => { 
    res.send('API is running');
 });

 app.get('/api/products', (req, res) => {
    res.json(products);
 })

 app.get

 app.listen(port, () => console.log(`server running on port ${port}`));