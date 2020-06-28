import React, { Component } from 'react'
import { connect } from 'react-redux'
class Detail extends Component {
state ={
    quantity:''
}
    handleChange=(e)=>{
        this.setState({quantity:e.target.value})
    }
handleSubmit=(e)=>{
    e.preventDefault()
	this.props.addToCart(this.props.appetizer.id,this.props.appetizer,this.state.quantity)
	this.props.history.push('/menu')
}
  render() {
console.log(this.props)
    const appetizer = this.props.appetizer ? (
        <section className="content-shop-page">
		<div className="container">
			<div className="row">
				<div className="col-responsive-product col-sm-10 col-md-7">
					<div className="wrap-slide-img-product row" id="slide100-01">
							<div className="col-12">
								<div className="main-frame">
									<div className="fix-frame wrap-pic">
										<img src={require('../images/'+this.props.appetizer.id+'.jpg')} alt="IMG-SLIDE" height='350' className='img-fluid img-lg'/>
									</div>
								</div>
							</div>
							

					</div>	
				</div>

				<div className="col-responsive-product col-sm-10 col-md-5">
					<div className="product">
						<h3 className="name-product medium-text-2">{this.props.appetizer.name}</h3>
						<span className="price-product medium-text">$ {this.props.appetizer.price}</span>
						<p>
							</p>
                        <form onSubmit={this.handleSubmit}>
						<input className="input-num-product small-text" type="number" name="num-product"  placeholder="1" onChange={this.handleChange}/>
						
						<input type='submit' className="btn-add-to-cart-product btn-with-bg" value='ADD TO CART'/>
                        </form>
					</div>

					<div className="info-product">
						<h4 className="title-info-product show small-text ">Additionial Information<span className="small-text show-content-info-product">+</span></h4>
						<div className="content-info-product">
							<p>
								In ultricies arcu ac tellus mattis, rutrum semper felis gravida. Vestibulum dictum ante nibh, nec eleifend purus molestie nec. Vivamus ligula nulla, consectetur ornare velit at, vulputate iaculis nisi. Suspendisse placerat mauris aliquam nulla bibendum, et porta massa fermentum.
							</p>
							<p>
								Nateger condimentum a ante et molestie. Cras eu ante massa. Sed eget finibus risus. Proin aliquet ex ac imperdiet lobortis.
							</p>
						</div>
					</div>

					<div className="info-product">
						<h4 className="title-info-product small-text">Reviews<span className="small-text show-content-info-product">+</span></h4>
						<div className="content-info-product">
							<p>
								In ultricies arcu ac tellus mattis, rutrum semper felis gravida. Vestibulum dictum ante nibh, nec eleifend purus molestie nec. Vivamus ligula nulla, consectetur ornare velit at, vulputate iaculis nisi. Suspendisse placerat mauris aliquam nulla bibendum, et porta massa fermentum.
							</p>
							<p>
								Nateger condimentum a ante et molestie. Cras eu ante massa. Sed eget finibus risus. Proin aliquet ex ac imperdiet lobortis.
							</p>
						</div>
					</div>
				</div>
			</div>
			</div>
			</section>
    ) : (
      <div className="center">Loading appetizer...</div>
    );

    return (
      <div className="container">
        {appetizer}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.appetizer_id;
    return {
        carts: state.carts,
        appetizer: state.appetizers.find(appetizer => appetizer.id === id)
      }
}
const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id,appetizer,quantity) => {dispatch({
          type:'add to cart',
          id,
          name: appetizer.name,
          price:appetizer.price,
          quantity
      })}
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Detail)

