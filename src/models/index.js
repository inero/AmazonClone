// @ts-check
import { schema } from './schema';

const { Product, CartProduct, OrderProduct, Order } = schema.models;
const { PaymentIntent } = schema.nonModels;

export {
  Product,
  CartProduct,
  OrderProduct,
  Order,
  PaymentIntent
};