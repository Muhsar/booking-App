export const addToCart = (id) => {
  return {
    type: 'add to cart',
    id,
    name:'',
    price:'',
    quantity:''
  }
}