import { Request, Response } from 'express';
import { Product } from '../../models';

export async function listProductsByCategoryId(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const products = await Product.find().where('category').equals(categoryId);

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
