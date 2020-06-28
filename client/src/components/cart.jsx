import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
	handleDelete = (id) => {
		this.props.deleteItem(id);
	  }
  render() {

	const { carts } = this.props
	const cartList = carts.length ? (
		carts.map(cart => {
		  return (
			
			
						<tr key={cart.id}>
							<td class="column-1">
								<div class="img-product">
									<img src={require('../images/'+cart.id+'.jpg')} alt="img-product"/>
								</div>
							</td>
							<td class="column-2">{cart.name}</td>
							<td class="column-3">$ {cart.price}</td>
							<td class="column-4">
								<input class="input-num-product small-text" type="text" disabled name="num-product" value={cart.quantity} placeholder="1"/>
							</td>
							<td class="column-5">$ {cart.quantity * cart.price}</td>
							<td class="column-6">
								<button onClick={()=>{this.handleDelete(cart.id)}}>
								<i class="btn-remove-product fa fa-times" aria-hidden="true" ></i>
								</button>
							</td>
						</tr>
						
			)
        } 
       
	)) :(
		<section>
		<div class="bg-title-sub-page bg-reservation-01-page">
			<div class="wrap-title-sub-page">
				<h2 class="title-l">Cart List</h2>
				<h6 class="title-s">No Item on cart list</h6>
			</div>
		</div>
	</section>
	)

    return (
		<section class="content-shopping-cart-page">
			<div class="container">
					<div class="wrap-table-shopping-cart">
						<table class="table-shopping-cart">
							<tr class="table_head">
								<th class="column-1">Product</th>
								<th class="column-2">Name & Description</th>
								<th class="column-3">Price</th>
								<th class="column-4">Quantity</th>
								<th class="column-5">Total</th>
								<th class="column-6"></th>
							</tr>
        {cartList}
		</table>
						</div>
					</div>
					</section>
        
    )
  }
}

const mapStateToProps = (state) => {
	return {
	  carts: state.carts
	}
  }
  const mapDispatchToProps = (dispatch) => {
	return {
	  deleteItem: (id) =>  {dispatch({
		type:'delete item',
		id,
	  })}
	}
  }


export default connect(mapStateToProps,mapDispatchToProps)(Cart)

