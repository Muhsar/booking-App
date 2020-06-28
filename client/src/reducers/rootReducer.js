const initState = {
  posts: [
    {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
  ],
  appetizers:[
    {val:'odd',id:'a1', name:'Pickled shrimp with creamy spinach dip',price:30},
    {val:'even',id:'a2', name:'Mini Burgers',price:30},
    {val:'odd',id:'a3', name:'Baked buffalo Chicken wings',price:30},
    {val:'even',id:'a4', name:'Caesar Salad Spears',price:30},
    {val:'odd',id:'a5', name:'Sticky Baked Chicken Wings',price:30},
    {val:'even',id:'a6', name:'Meatballs',price:30},
    {val:'odd',id:'a7', name:'Honey garlic chicken',price:30},
    {val:'even',id:'a8', name:'Bacon Crackers',price:30},
    {val:'odd',id:'a9', name:'Chicken and waffles',price:30},
    {val:'even',id:'a10', name:'Chicken and chips',price:30},
    {val:'odd',id:'d1', name:'Maltesers Tiramisu',price:30},
    {val:'even',id:'d2', name:'Anzac Biscuit Tarts',price:30},
    {val:'odd',id:'d3', name:'Apple and Butterscotch Pie',price:30},
    {val:'even',id:'d4', name:'Aniseed and Chocolate Parfait',price:30},
    {val:'odd',id:'d5', name:'Affogato',price:30},
    {val:'even',id:'d6', name:'Napoleon',price:30},
    {val:'odd',id:'d7', name:'Chocolate Bullets',price:30},
    {val:'even',id:'d8', name:'Sticky Date Pudding',price:30},
    {val:'odd',id:'d9', name:'Apple Cinnamon Custard',price:30},
    {val:'even',id:'d10', name:'Banana Split',price:30},
    {val:'odd',id:'m1', name:'Beef Stroganoff',price:30},
    {val:'even',id:'m2', name:'Casseroles',price:30},
    {val:'odd',id:'m3', name:'Goulash',price:30},
    {val:'even',id:'m4', name:'Lasagna',price:30},
    {val:'odd',id:'m5', name:'Macaroni and Cheese',price:30},
    {val:'even',id:'m6', name:'Salads',price:30},
    {val:'odd',id:'m7', name:'Soups and Stews',price:30},
    {val:'even',id:'m8', name:'Pasta',price:30},
    {val:'odd',id:'m9', name:'Rice',price:30},
    {val:'even',id:'m10', name:'Seafood',price:30},
    {val:'odd',id:'p1', name:'Pepperoni Pizza',price:30},
    {val:'even',id:'p2', name:'Mushrooms Pizza',price:30},
    {val:'odd',id:'p3', name:'Pizza Burger',price:30},
    {val:'even',id:'p4', name:'Sausage Pizza',price:30},
    {val:'odd',id:'p5', name:'Bacon Pizza',price:30},
    {val:'even',id:'p6', name:'Chicken Pizza',price:30},
    {val:'odd',id:'p7', name:'Garlic Pizza',price:30},
    {val:'even',id:'p8', name:'Cabbage Pizza',price:30},
    {val:'odd',id:'p9', name:'Pineapple Pizza',price:30},
    {val:'even',id:'p10', name:'Asparagus',price:30},
  ],
  carts:[],
  reservations:[]
}



const rootReducer = (state = initState, action) => {
  console.log(action);
  if(action.type === 'add to cart'){
   let newItem = [...state.carts, action]
   return {
     ...state,
     carts: newItem
   }
  }
  if(action.type === 'add to reservation'){
    console.log(action)
   let newReservation = [...state.reservations, action]
   return {
     ...state,
     reservations: newReservation
   }
  }
  if(action.type === 'delete item'){
    let deleteItem = state.carts.filter(cart => {
      return cart.id !== action.id
    });
    return {
      ...state,
      carts: deleteItem
    }
   }
  if(action.type === 'delete reservation'){
    let deleteReservation = state.reservations.filter(reservation => {
      return reservation.id !== action.id
    });
    return {
      ...state,
      reservations: deleteReservation
    }
   }
  return state;
}

export default rootReducer