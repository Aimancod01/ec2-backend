import express from 'express';
import 'dotenv/config';
import categoryRoutes from './routes/category.routes.js';
import productRoutes from './routes/product.routes.js';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
