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
         const howMany = parseInt(prompt("enter the number of FOBs:"))
         
         this.setState({ population : this.state.population+howMany})
         //this.setState({ howBig : this.thisCity.howBig(this.state.population+howMany)})
         console.log ("from child",this.state.population)
         let a = new City ("a",0,0,0)
         this.setState({ howBig : a.howBig(this.props.population-howMany)})
         return howMany
    }

    moveOut = event => {
 		 const howMany = parseInt(prompt("enter the number of fleeing Rats:"))
         
         this.setState({ population : this.state.population-howMany})
         
         let a = new City ("a",0,0,0)
         //console.log(a.howBig(this.props.population-howMany))
         this.setState({ howBig : a.howBig(this.props.population-howMany)})
         console.log ("from child",this.state.population)
         return howMany
    }

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
                        this.props.funcMoveIn(this.state.name,this.moveIn());
                    }}
                >Move In 
                </button>

                <button
                    onClick={() => {
                        //this.props.funcMoveIn(this.props.name);
                        this.props.funcMoveOut(this.state.name,this.moveOut());
                    }}
                >Move Out 
                </button>
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

    showData = (arrDataP = this.state.arrayData) => {
        let lista = [];
        //const arr = this.state.arrayData;
        const arr = arrDataP;
        let tem = new Community(arr)
        lista.push ('Most Northern: ' +tem.getMostNorthern() + ' Most Southern: ' + tem.getMostSouthern() + ' Total Population: ' + tem.getPopulation().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')   )
        
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
                	funcMoveOut = {this.moveOut}
				/>
            )

        })
        return lista;
    }
    
   moveIn = (item,pop) => {
  		let arrIndex = 0
        console.log("from parent",item,pop)
        const arr = this.state.arrayData
        arr.forEach((element) => {
        	arrIndex++
        	if (element.name === item) {
        		//const howMany = parseInt(prompt("enter the number of FOBs:"))
        		const howMany = pop
        		const tempCity = new City(element.name, element.longitude, element.latitude, element.population)
        		tempCity.movedIn(howMany)
        		//console.log ("new population=", tempCity.population , arrIndex)
        		arr[arrIndex-1].population = tempCity.population

        		// console.log ("before=", arr)
        		// this.setState({ arrayData[arrIndex-1] : tempCity})
        		//console.log ("after=", this.state.arrayData[arrIndex-1].population)
        		//this.showData()
        	}
        })
         //this.showData(arr)
         this.setState({ arrayData : arr})
         
    }


moveOut = (item,pop) => {
  		let arrIndex = 0
        console.log("from parent",item,pop)
        const arr = this.state.arrayData
        arr.forEach((element) => {
        	arrIndex++
        	if (element.name === item) {
        		const howMany = pop
        		const tempCity = new City(element.name, element.longitude, element.latitude, element.population)
        		tempCity.movedOut(howMany)
        		arr[arrIndex-1].population = tempCity.population
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