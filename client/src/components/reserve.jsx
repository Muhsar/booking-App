import React, { Component } from 'react'
import { connect } from 'react-redux'

class Reserve extends Component {
	handleDelete = (id) => {
		this.props.deleteItem(id);
	  }
  render() {

    console.log(this.props)
	const { reservations } = this.props
	const reserveList = reservations.length ? (
		reservations.map(reservation => {
		  return (
			<section class="content-shopping-cart-page">
		<div class="container">
				<div class="wrap-table-shopping-cart">
					<table class="table-shopping-cart">
						<tr class="table_head">
							<th class="column-1">Description</th>
							<th class="column-2">Name </th>
							<th class="column-3">Date</th>
							<th class="column-4">Notes</th>
							<th class="column-5">Time</th>
							<th class="column-6"></th>
						</tr>

						<tr key={reservation.id}>
            <td>
            {reservation.table}
							</td>
							<td class="column-2">{reservation.name}</td>
							<td class="column-3">{reservation.date}</td>
							<td class="column-4">
								{reservation.notes}
							</td>
							<td class="column-5">{reservation.hour+":"+reservation.minute+":"+reservation.meridian}</td>
							<td class="column-6">
								<button onClick={()=>{this.handleDelete(reservation.id)}}>
								<i class="btn-remove-product fa fa-times" aria-hidden="true" ></i>
								</button>
							</td>
						</tr>
						</table>
						</div>
					</div>
					</section>
			)
        } 
       
	)) :(
		<section>
		<div class="bg-title-sub-page bg-reservation-01-page">
			<div class="wrap-title-sub-page">
				<h2 class="title-l">Reservations</h2>
				<h6 class="title-s">No item on reservation list</h6>
			</div>
		</div>
	</section>
	)

    return (
		<div>
        {reserveList}
		</div>
       
    )
  }
}

const mapStateToProps = (state) => {
	return {
	  reservations: state.reservations
	}
  }
  const mapDispatchToProps = (dispatch) => {
	return {
	  deleteReservation: (id) =>  {dispatch({
		type:'delete reservation',
		id,
	  })}
	}
  }


export default connect(mapStateToProps,mapDispatchToProps)(Reserve)

