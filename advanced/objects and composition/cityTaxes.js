function cityTaxes(name, population, treasury) {
    const obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentageNumber) {
            let percentage = percentageNumber / 100;
            this.population += Math.floor(this.population * percentage);
        },
        applyRecession(percentageNumber) {
            let percentage = percentageNumber / 100;
            this.treasury -= Math.floor(this.treasury * percentage);
        }
    };

    return obj;

}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
