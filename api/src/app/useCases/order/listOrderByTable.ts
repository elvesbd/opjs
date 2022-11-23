import { Request, Response } from 'express';
import { Order } from '../../models';

export async function listOrdersByTable(req: Request, res: Response) {
  try {
    const { table } = req.params;

    const order = await Order.findOne().where({ table });

    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
