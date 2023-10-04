export {};

declare global {
  interface IProduct {
    id: Number;
    title: String;
    price: String;
    category: String;
    description: String;
    image: any;
  }
}
