import defaultCityData from "./cityList.json";

class CityController {
	constructor(myData = defaultCityData) {
		this.cityData = myData;
	}

	whichSphere(city) {
		const last = city.latitude.length - 1;
		const lat = city.latitude[last];
		return lat === "N" ? "Northern Hemisphere" : "Southern Hemisphere";
	}

	getMostNorthern() {
		const t2 = this.cityData.filter(function(element) {
			const last = element.latitude.length - 1;
			return element.latitude[last] == "N";
		});
		t2.sort((a, b) => (a.latitude > b.latitude ? 1 : -1));
		return t2[0].name;
	}

	getMostSouthern() {
				const t2 = this.cityData.filter(function(element) {
			const last = element.latitude.length - 1;
			return element.latitude[last] == "S";
		});
		t2.sort((a, b) => (a.latitude > b.latitude ? 1 : -1));
		return t2[0].name;
	}

	getPopulation() {
		const totPopulation = this.cityData.reduce((acum, nextval) => ({
			population: acum.population + nextval.population
		}));
		return totPopulation.population;
	}
}

export default CityController;
