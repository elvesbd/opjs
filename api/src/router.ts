import path from 'node:path';
import { Request, Response, Router } from 'express';
import multer from 'multer';

import { listCategories, createCategory, listProductsByCategoryId, deleteCategory } from './app/useCases/categories';
import { createProducts, deleteProduct, listProducts } from './app/useCases/products';
import { changeOrderStatus, createOrder, deleteOrder, listOrders, listOrdersByTable } from './app/useCases/order';


export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

router.get('/categories', listCategories);
router.post('/categories', createCategory);
router.delete('/categories/:categoryId', deleteCategory);


router.get('/products', listProducts);
router.post('/products', upload.single('image'), createProducts);
router.delete('/products/:productId', deleteProduct);
router.get('/categories/:categoryId/products', listProductsByCategoryId);

router.get('/orders', listOrders);
router.post('/orders', createOrder);
router.get('/orders/table/:table', listOrdersByTable);
router.patch('/orders/:orderId', changeOrderStatus);
router.delete('/orders/:orderId', deleteOrder);


