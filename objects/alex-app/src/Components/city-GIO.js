class City {

    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = parseInt(latitude);
        this.longitude = parseInt(longitude);
        this.population = parseInt(population);
    }

    show() {
        const result = JSON.stringify(this);
        return result
    }

    movedIn(people) {
        this.population += people
    }

    movedOut(people) {
        this.population -= people
    }

    howBig(population) {
        const x = population
        switch (true) {
            case (x < 100):
                return "Hamlet";
                break;
            case (x < 1000):
                return "Village";
                break;
            case (x < 20000):
                return "Town";
                break;
            case (x < 100000):
                return "Large Town";
                break;
            default:
                return "City";
                break;
        }
    }

}

export default City