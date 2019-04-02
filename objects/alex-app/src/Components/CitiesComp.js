import React from 'react'
import Community from "./Community.js"
import City from "./city.js"
import cityFile from "./cityList.json";

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

 moveIn = event => {
         //console.log ("from child",this.state.name)
         //this.forceUpdate()

    };

	render(){
		return (
			<div className="cityCard" >
				<h2> {this.state.howBig} {this.state.name}</h2>
				<p> population: {this.state.population} </p>
				<p> Lat: {this.state.latitude} </p>
				<p> Long: {this.state.longitude} </p>
				<p> Hemisphere: {this.state.hemisphere}</p>
				<button
                    onClick={() => {
                        //this.props.funcMoveIn(this.props.name);
                        this.props.funcMoveIn(this.props.name);
                    }}
                >Move In </button>
				<br/>
			</div>
		)
	}
}


class CommunityController extends React.Component {

	constructor (props) {
		super(props)
		this.state = {
			arrayData : cityFile 
		}
	}

    showData = () => {
        let lista = [];
        const arr = this.state.arrayData;
        let tem = new Community(arr)
        lista.push ('Most Northern: ' +tem.getMostNorthern() + ' Most Southern: ' + tem.getMostSouthern() + ' Total Population: ' + tem.getPopulation()   )
        arr.forEach((element) => {
        	lista.push(
                <CityDisplay 
					key = {element.latitude+element.longitude}
					name = {element.name}
					latitude = {element.latitude}
					longitude = {element.longitude}
					population = {element.population}
                	hemisphere = {tem.whichSphere(element)}
                	funcMoveIn = {this.moveIn}
				/>
            );
        });
        return lista;
    }
  moveIn = (item) => {
  		let arrIndex = 0
        console.log("from parent",item)
        const arr = this.state.arrayData
        arr.forEach((element) => {
        	arrIndex++
        	if (element.name === item) {
        		const howMany = parseInt(prompt("enter the number of FOBs:"))
        		const tempCity = new City(element.name, element.longitude, element.latitude, element.population)
        		tempCity.movedIn(howMany)
        		console.log ("new population=", tempCity.population , arrIndex)
        		arr[arrIndex-1].population = tempCity.population

        		 console.log ("before=", arr)
        		// this.setState({ arrayData[arrIndex-1] : tempCity})
        		console.log ("after=", this.state.arrayData[arrIndex-1].population)
        		this.showData()
        	}
        })
         this.setState({ arrayData : arr})
    }

	render() {
		return (
			this.showData()
		)
	}
}


class CitiesComp extends React.Component {

	// constructor (){
	// 	super ()
	// }

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