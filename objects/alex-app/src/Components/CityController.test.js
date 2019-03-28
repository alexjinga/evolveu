import CityController from "./CityController.js";

const testCities =[
	{
		"name": "Pelotillehue",
		"latitude": "14.83472N",
		"longitude": "-91.51806W",
		"population": 4000
	},

		{
		"name": "Managuador",
		"latitude": "51.042421S",
		"longitude": "-114.075664W",
		"population": 3000
	},	
		{
		"name": "Braavos",
		"latitude": "60.83472S",
		"longitude": "12.66806W",
		"population": 1000
	
		},	
		{
		"name": "Kings Landing",
		"latitude": "30.83472N",
		"longitude": "80.34806W",
		"population": 2000
	}
	]
	

test("testing CityController class & methods: ", () => {

	const obj = new CityController(testCities);
	expect(obj.cityData[1].name).toBe("Managuador");
	expect(obj.whichSphere(obj.cityData[1])).toBe("Southern Hemisphere");
	expect(obj.getMostNorthern()).toBe("Pelotillehue");
	expect(obj.getMostSouthern()).toBe("Managuador");
	expect(obj.getPopulation()).toBe(10000);
	
});
