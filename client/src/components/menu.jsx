import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Menu extends Component {
  render(){
	  console.log(this.props)
	const { appetizers } = this.props
	const AppetizersList1 =  appetizers.map(appetizer => {
	if (appetizer.val==='odd'&&(appetizer.id==='a1'||appetizer.id==='a3'||appetizer.id==='a5'||appetizer.id==='a7'||appetizer.id==='a9')){
			return (
				<div className="col-md-10 col-lg-6" key={appetizer.id}>
				<div className="item-food row wow fadeInDown" data-wow-delay="0.2s">
					<div className="col-12 col-sm-2 img-list-food wow zoomIn " data-wow-delay="0.2s">
		<Link to={'/' + appetizer.id}>
		<img alt="food" src={require('../images/'+appetizer.id+'.jpg')}></img>
		</Link>
					</div>
					<div className="col-12 col-sm-8 text-list-food ">
						<div className="name-price row">
							<div className="name-food col-12 col-sm-auto"><Link className="hover-link-color" to={'/' + appetizer.id}>{appetizer.name}</Link></div>
							<div className="line-food col">
								<div className="add-line-run"></div>
							</div>
						</div>
						<div className="row"> 
							<div className="col-12 col-sm-12 info-food">
								
							</div>
						</div>
					</div>
					<div className="price-food col-12 col-sm-2">&#36;{appetizer.price}</div>
				</div>
			</div>
			)
		}
	})
	const AppetizersList2 =  appetizers.map(appetizer => {
	if (appetizer.val==='even'&&(appetizer.id==='a2'||appetizer.id==='a4'||appetizer.id==='a6'||appetizer.id==='a8'||appetizer.id==='a10')){
			return (
				<div className="col-md-10 col-lg-6" key={appetizer.id}>
				<div className="item-food row wow fadeInDown" data-wow-delay="0.2s">
					<div className="col-12 col-sm-2 img-list-food wow zoomIn " data-wow-delay="0.2s">
		<Link to={'/' + appetizer.id}>
		<img alt="food" src={require('../images/'+appetizer.id+'.jpg')}></img>
		</Link>
					</div>
					<div className="col-12 col-sm-8 text-list-food ">
						<div className="name-price row">
							<div className="name-food col-12 col-sm-auto"><Link className="hover-link-color" to={'/' + appetizer.id}>{appetizer.name}</Link></div>
							<div className="line-food col">
								<div className="add-line-run"></div>
							</div>
						</div>
						<div className="row"> 
							<div className="col-12 col-sm-12 info-food">
								
							</div>
						</div>
					</div>
					<div className="price-food col-12 col-sm-2">&#36;{appetizer.price}</div>
				</div>
			</div>
			)
		}
	})
	const DessertList1 =  appetizers.map(appetizer => {
	if (appetizer.val==='odd'&&(appetizer.id==='d1'||appetizer.id==='d3'||appetizer.id==='d5'||appetizer.id==='d7'||appetizer.id==='d9')){
			return (
				<div className="col-md-10 col-lg-6" key={appetizer.id}>
				<div className="item-food row wow fadeInDown" data-wow-delay="0.2s">
					<div className="col-12 col-sm-2 img-list-food wow zoomIn " data-wow-delay="0.2s">
		<Link to={'/' + appetizer.id}>
		<img alt="food" src={require('../images/'+appetizer.id+'.jpg')}></img>
		</Link>
					</div>
					<div className="col-12 col-sm-8 text-list-food ">
						<div className="name-price row">
							<div className="name-food col-12 col-sm-auto"><Link className="hover-link-color" to={'/' + appetizer.id}>{appetizer.name}</Link></div>
							<div className="line-food col">
								<div className="add-line-run"></div>
							</div>
						</div>
						<div className="row"> 
							<div className="col-12 col-sm-12 info-food">
								
							</div>
						</div>
					</div>
					<div className="price-food col-12 col-sm-2">&#36;{appetizer.price}</div>
				</div>
			</div>
			)
		}
	})
	const DessertList2 =  appetizers.map(appetizer => {
	if (appetizer.val==='even'&&(appetizer.id==='d2'||appetizer.id==='d4'||appetizer.id==='d6'||appetizer.id==='d8'||appetizer.id==='d10')){
			return (
				<div className="col-md-10 col-lg-6" key={appetizer.id}>
				<div className="item-food row wow fadeInDown" data-wow-delay="0.2s">
					<div className="col-12 col-sm-2 img-list-food wow zoomIn " data-wow-delay="0.2s">
		<Link to={'/' + appetizer.id}>
		<img alt="food" src={require('../images/'+appetizer.id+'.jpg')}></img>
		</Link>
					</div>
					<div className="col-12 col-sm-8 text-list-food ">
						<div className="name-price row">
							<div className="name-food col-12 col-sm-auto"><Link className="hover-link-color" to={'/' + appetizer.id}>{appetizer.name}</Link></div>
							<div className="line-food col">
								<div className="add-line-run"></div>
							</div>
						</div>
						<div className="row"> 
							<div className="col-12 col-sm-12 info-food">
								
							</div>
						</div>
					</div>
					<div className="price-food col-12 col-sm-2">&#36;{appetizer.price}</div>
				</div>
			</div>
			)
		}
	})
	const MealList1 =  appetizers.map(appetizer => {
	if (appetizer.val==='odd'&&(appetizer.id==='m1'||appetizer.id==='m3'||appetizer.id==='m5'||appetizer.id==='m7'||appetizer.id==='m9')){
			return (
				<div className="col-md-10 col-lg-6" key={appetizer.id}>
				<div className="item-food row wow fadeInDown" data-wow-delay="0.2s">
					<div className="col-12 col-sm-2 img-list-food wow zoomIn " data-wow-delay="0.2s">
		<Link to={'/' + appetizer.id}>
		<img alt="food" src={require('../images/'+appetizer.id+'.jpg')}></img>
		</Link>
					</div>
					<div className="col-12 col-sm-8 text-list-food ">
						<div className="name-price row">
							<div className="name-food col-12 col-sm-auto"><Link className="hover-link-color" to={'/' + appetizer.id}>{appetizer.name}</Link></div>
							<div className="line-food col">
								<div className="add-line-run"></div>
							</div>
						</div>
						<div className="row"> 
							<div className="col-12 col-sm-12 info-food">
								
							</div>
						</div>
					</div>
					<div className="price-food col-12 col-sm-2">&#36;{appetizer.price}</div>
				</div>
			</div>
			)
		}
	})
	const MealList2 =  appetizers.map(appetizer => {
	if (appetizer.val==='even'&&(appetizer.id==='m2'||appetizer.id==='m4'||appetizer.id==='m6'||appetizer.id==='m8'||appetizer.id==='m10')){
			return (
				<div className="col-md-10 col-lg-6" key={appetizer.id}>
				<div className="item-food row wow fadeInDown" data-wow-delay="0.2s">
					<div className="col-12 col-sm-2 img-list-food wow zoomIn " data-wow-delay="0.2s">
		<Link to={'/' + appetizer.id}>
		<img alt="food" src={require('../images/'+appetizer.id+'.jpg')}></img>
		</Link>
					</div>
					<div className="col-12 col-sm-8 text-list-food ">
						<div className="name-price row">
							<div className="name-food col-12 col-sm-auto"><Link className="hover-link-color" to={'/' + appetizer.id}>{appetizer.name}</Link></div>
							<div className="line-food col">
								<div className="add-line-run"></div>
							</div>
						</div>
						<div className="row"> 
							<div className="col-12 col-sm-12 info-food">
								
							</div>
						</div>
					</div>
					<div className="price-food col-12 col-sm-2">&#36;{appetizer.price}</div>
				</div>
			</div>
			)
		}
	})
	const PizzaList1 =  appetizers.map(appetizer => {
	if (appetizer.val==='odd'&&(appetizer.id==='p1'||appetizer.id==='p3'||appetizer.id==='p5'||appetizer.id==='p7'||appetizer.id==='p9')){
			return (
				<div className="col-md-10 col-lg-6" key={appetizer.id}>
				<div className="item-food row wow fadeInDown" data-wow-delay="0.2s">
					<div className="col-12 col-sm-2 img-list-food wow zoomIn " data-wow-delay="0.2s">
		<Link to={'/' + appetizer.id}>
		<img alt="food" src={require('../images/'+appetizer.id+'.jpg')}></img>
		</Link>
					</div>
					<div className="col-12 col-sm-8 text-list-food ">
						<div className="name-price row">
							<div className="name-food col-12 col-sm-auto"><Link className="hover-link-color" to={'/' + appetizer.id}>{appetizer.name}</Link></div>
							<div className="line-food col">
								<div className="add-line-run"></div>
							</div>
						</div>
						<div className="row"> 
							<div className="col-12 col-sm-12 info-food">
								
							</div>
						</div>
					</div>
					<div className="price-food col-12 col-sm-2">&#36;{appetizer.price}</div>
				</div>
			</div>
			)
		}
	})
	const PizzaList2 =  appetizers.map(appetizer => {
	if (appetizer.val==='even'&&(appetizer.id==='p2'||appetizer.id==='p4'||appetizer.id==='p6'||appetizer.id==='p8'||appetizer.id==='p10')){
			return (
				<div className="col-md-10 col-lg-6" key={appetizer.id}>
				<div className="item-food row wow fadeInDown" data-wow-delay="0.2s">
					<div className="col-12 col-sm-2 img-list-food wow zoomIn " data-wow-delay="0.2s">
		<Link to={'/' + appetizer.id}>
		<img alt="food" src={require('../images/'+appetizer.id+'.jpg')}></img>
		</Link>
					</div>
					<div className="col-12 col-sm-8 text-list-food ">
						<div className="name-price row">
							<div className="name-food col-12 col-sm-auto"><Link className="hover-link-color" to={'/' + appetizer.id}>{appetizer.name}</Link></div>
							<div className="line-food col">
								<div className="add-line-run"></div>
							</div>
						</div>
						<div className="row"> 
							<div className="col-12 col-sm-12 info-food">
								
							</div>
						</div>
					</div>
					<div className="price-food col-12 col-sm-2">&#36;{appetizer.price}</div>
				</div>
			</div>
			)
		}
	})
	
  return (
    <div>
    <section className="our-menu for-menu-page" >
		<div className="container">
			<div className="wrap-title-our-menu row">
				<div className="col-12 title-our-menu">
					<h6>try &amp; discover</h6>
					<h2>Our Appetizer</h2>
				</div>
			</div>

			<div className="wrap-list-food">
				<div className="row list-food">
					{AppetizersList1}
					{AppetizersList2}
				</div>

				
			</div>
			<div className="wrap-title-our-menu row">
				<div className="col-12 title-our-menu">
					<h2>Our Dessert</h2>
				</div>
			</div>

			<div className="wrap-list-food">
				<div className="row list-food">
					{DessertList1}
					{DessertList2}
				</div>

				
			</div>
			<div className="wrap-title-our-menu row">
				<div className="col-12 title-our-menu">
					<h2>Our Meal</h2>
				</div>
			</div>

			<div className="wrap-list-food">
				<div className="row list-food">
					{MealList1}
					{MealList2}
				</div>

				
			</div>
			<div className="wrap-title-our-menu row">
				<div className="col-12 title-our-menu">
					<h2>Our Pizza</h2>
				</div>
			</div>

			<div className="wrap-list-food">
				<div className="row list-food">
					{PizzaList1}
					{PizzaList2}
				</div>

				
			</div>
		</div>
	</section>
    </div>
  )
}
}
const mapStateToProps = (state) => {
	return {
	  appetizers: state.appetizers
	}
  }
  
  export default connect(mapStateToProps)(Menu)