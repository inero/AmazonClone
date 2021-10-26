
export declare class PaymentIntent {
  readonly clientSecret: string;
  constructor(init: any);
}

export declare class Product {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly image: string;
  readonly images: string[];
  readonly options?: string[];
  readonly avgRating?: number;
  readonly ratings?: number;
  readonly price: number;
  readonly oldPrice?: number;
  constructor(init: any);
  static copyOf(source: Product, mutator: (draft: any) => any | void): Product;
}

export declare class CartProduct {
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string;
  readonly productID: string;
  readonly product?: Product;
  constructor(init: any);
  static copyOf(source: CartProduct, mutator: (draft: any) => any | void): CartProduct;
}

export declare class OrderProduct {
  readonly id: string;
  readonly quantity: number;
  readonly option?: string;
  readonly productID: string;
  readonly product?: Product;
  readonly orderID: string;
  readonly order?: Order;
  constructor(init: any);
  static copyOf(source: OrderProduct, mutator: (draft: any) => any | void): OrderProduct;
}

export declare class Order {
  readonly id: string;
  readonly userSub: string;
  readonly fullName: string;
  readonly phoneNumber?: string;
  readonly country?: string;
  readonly city?: string;
  readonly address?: string;
  constructor(init: any);
  static copyOf(source: Order, mutator: (draft: any) => any | void): Order;
}