import React, { Component } from 'react';
import { connect } from 'react-redux'
class Reservation extends Component {
	state = { 
		table:'',
		date:'',
		hour:'',
		minute:'00',
		meridian:'AM',
		name:'',
		email:'',
		number:'',
		notes:''
	 }
	handleSubmit=(e)=>{
		e.preventDefault()
		this.props.addToReservation(this.state.table,
			this.state.date,
			this.state.hour,
			this.state.minute,
			this.state.meridian,
			this.state.name,
			this.state.email,
			this.state.number,
			this.state.notes)
		// console.log(this.state)
		this.props.history.push('/reserve')
	}
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value})
	}
    render() { 
		console.log(this.props)
        return ( 
            <section className="content-reservation-02">
		<div className="container">
			<div className="wrap-title-our-menu row">
				<div className="col-12 title-our-menu">
					<h6>Reservation</h6>
					<h2>Book a table</h2>
				</div>
			</div>
			
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="wrap-input-reservation-02 col-sm-10 col-md-10 col-lg-8">
						<div className="row">
							<div className="col-sm-12 col-md-6">
								<div className="row">
									<div className="col-field-input left col-md-12 wow fadeInLeft">
										<select className="form-control-plaintext form-control" onChange={this.handleChange} name="table">
											<option value=''></option>
											<option value='Singles Table'>Singles Table</option>
											<option value='Couples table'>Couples table</option>
											<option value='Table for 2'>Table for 2</option>
											<option value='Anniversaries'>Anniversaries</option>
											<option value='Candle lit Dinner'>Candle lit Dinner</option>
											<option value='Lunch meeting'>Lunch meeting</option>
											<option value='Birthday'>Birthday</option>
											<option value='Rom-Dinner'>Rom-Dinner</option>
										</select>
									</div>

									<div className="col-field-input left col-md-12 chose-calendar wow fadeInLeft">
										<input className="form-control form-control-plaintext" type="date" onChange={this.handleChange} name="date"/>
									</div>

									<div className="col-field-input left col-md-12 wow fadeInLeft">
										<div class="input-reservation row wow flipInX mx-auto" data-wow-delay="0.7s">
											<table className='table-borderless table-sm'>
											<tr>
											<td>
											<select class="form-control-plaintext form-control-sm" onChange={this.handleChange} name="hour"  aria-hidden="true">
										<option>0</option>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
										<option>6</option>
										<option>7</option>
										<option>8</option>
										<option>9</option>
										<option>10</option>
										<option>11</option>
										<option>12</option>
									</select>
									<span className='ml-1'>:</span>
									</td>
									<td>
									<select class="form-control-plaintext form-control-sm" onChange={this.handleChange} name="minute"  aria-hidden="true">
								<option>00</option>
								<option>15</option>
								<option>30</option>
								<option>45</option>
								</select>
								<span className='ml-1'>:</span>
								</td>
							<td>
							<select class="form-control-plaintext form-control-sm" onChange={this.handleChange} name="meridian"  aria-hidden="true">
						<option>AM</option>
						<option>PM</option>
					</select>
											</td>
											</tr>
											</table>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-12 col-md-6">
								<div className="row">
									<div className="col-field-input right col-md-12 wow fadeInRight">
										<input className="your-info form-control-plaintext your-name" type="text" onChange={this.handleChange} name="name" placeholder="Your name"/>
									</div>

									<div className="col-field-input right col-md-12 wow fadeInRight">
										<input className="your-info form-control-plaintext your-mail" type="email" onChange={this.handleChange} name="email" placeholder="Your mail"/>
									</div>

									<div className="col-field-input right col-md-12 wow fadeInRight">
										<input className="your-info form-control-plaintext your-phone" type="number" onChange={this.handleChange} name="number" placeholder="Your phone"/>
									</div>
								</div>
							</div>
						</div>
						
						<textarea className="your-info form-control-plaintext special-notes wow fadeInUp" data-wow-delay="0.5s" onChange={this.handleChange} name="notes" placeholder="Special notes"></textarea>

						<div className="btn-reservation-02">
							<input type='submit' className="btn-find-table wow zoomIn" data-wow-delay="0.6s" value='SUBMIT'/>
						</div>

					</div>
				</div>
			</form>
		</div>
	</section>

         );
    }
}
const mapStateToProps = (state) => {
    return {
        carts: state.carts,
        appetizers: state.appetizers
      }
}
const mapDispatchToProps = (dispatch) => {
    return {
      addToReservation: (table,date,hour,minute,meridian,name,email,number,notes) => {dispatch({
          type:'add to reservation',
		  table,
		  date,
		  hour,
		  minute,
		  meridian,
		  name,
		  email,
		  number,
		  notes,
		  id:Math.random()
      })}
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Reservation)