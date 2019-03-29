class city {

	constructor (name, latitude, longitude, population){
		this.name = name;
		this.latitude = parseInt(latitude);
		this.longitude = parseInt(longitude);
		this.population = parseInt(population);
	}

	movedIn (num) {
		this.population += num
	}

	movedOut (num) {
		this.population -= parseInt(num)
	}

	howBig(num) {
        switch (true) {
            case (num < 100):
                return "Hamlet";
                break;
            case (num < 1000):
                return "Village";
                break;
            case (num < 20000):
                return "Town";
                break;
            case (num < 100000):
                return "Large Town";
                break;
            default:
                return "City";
                break;
        }
    }


	show () {
		const display =JSON.stringify(this)
		return JSON.stringify(this)
	}
}

export default city
