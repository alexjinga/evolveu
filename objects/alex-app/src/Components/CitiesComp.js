import React from 'react'
import Community from "./Community.js"
import City from "./city.js"

class CityDisplay extends React.Component {

	constructor (props){
		super(props)
		const thisCity = new City(
							this.props.name, 
							this.props.latitude, 
							this.props.longitude, 
							this.props.population
							)
		this.state = {
			population: thisCity.population,
			name: thisCity.name,
			howBig: thisCity.howBig(this.props.population),
			hemisphere: this.props.hemisphere,
			latitude: thisCity.latitude,
			longitude: thisCity.longitude,
		}
	}

	

	render(){
		return (
			<div>
				<h2> {this.state.howBig} {this.state.name}</h2>
				<p> population: {this.state.population} </p>
				<p> Lat: {this.state.latitude} </p>
				<p> Long: {this.state.longitude} </p>
				<p> Hemosphere: {this.state.hemisphere}</p>
				<br/>
			</div>
		)
	}
}


class CommunityController extends React.Component {

	constructor (props) {
		super(props)

		const thisCommunity = new Community 

		this.state = {

		}
	}

	render() {
		return (
			<CityDisplay 
					name = "Quetzaltenango" 
					latitude = "14.83472N" 
					longitude = "-91.51806W"
					population = "400"
				/>
		)
	}

}

class CitiesComp extends React.Component {

	constructor (){
		super ()

	}

	render(){
		return (
			<div>
				<h2> Hello From Cities Component </h2>
				<CommunityController/>
			</div>
		)
	}

}

export default CitiesComp