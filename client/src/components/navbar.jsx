import React,{Component} from 'react'
import logo from '../logo.png'
import {NavLink} from 'react-router-dom'
import logoMobile from '../logo-mobile.png'
import { connect } from 'react-redux'
class Navbar extends Component{
	render(){
	const {carts} = this.props
	const {reservations} = this.props
	const cartLength = carts.length
	const reservationLength = reservations.length
    return(
        <header>
        <div id="wrap_header" >
       
			<div className="logo col_header">
				<NavLink to="/"><img alt="logo-deli" src={logo}/></NavLink>
			</div>
			<div className="main_nav">
				<nav className="menu col_header">
					<ul className="main_menu">
						
						<li><NavLink to="/menu">Menus</NavLink>
							
						</li>
						<li><NavLink to="/reservation" className="have_sub_menu">Reservation</NavLink>
						</li>
						<li><NavLink to="/cart"><i className="fa fa-shopping-cart"></i><sup className='badge badge-danger badge-sm'>{cartLength}</sup></NavLink></li>
						<li><NavLink to="/reserve"><i className="fa fa-list-alt"></i><sup className='badge badge-danger badge-sm'>{reservationLength}</sup></NavLink></li>
						</ul>
						</nav>
						</div>

		
		</div>
		
		<div id="wrap_header_mobile">
		
			<div className="logo-mobile">
				<NavLink to="/"><img alt="logo-deli" src={logoMobile}/></NavLink>
			</div>

			<div className="btn-show-menu">
			<button className="btn-show-menu-mobile hamburger hamburger--squeeze" type="button">
			<span className="hamburger-box">
			<span className="hamburger-inner"></span>
					</span>
					</button>
			</div>	
			</div>
			
			<div className="wrap-side-menu" >
			<nav className="side-menu">
			<ul className="main-menu">
			
			<li>
			<NavLink to="/menu">Menus</NavLink>
						
			</li>
			<li>
			<NavLink to="/reservation">Reservation</NavLink>
			
			</li>
			
			<li><NavLink to="/cart"><i className="fa fa-shopping-cart"><sup className='badge badge-danger badge-sm'>{cartLength}</sup></i></NavLink></li>
			<li><NavLink to="/reserve"><i className="fa fa-list-alt"></i><sup className='badge badge-danger badge-sm'>{reservationLength}</sup></NavLink></li>
				</ul>
			</nav>
		</div>
	</header>

    )}
}
const mapStateToProps = (state) => {
	return {
	  carts: state.carts,
	  reservations: state.reservations
	}
  }
export default connect(mapStateToProps)(Navbar)