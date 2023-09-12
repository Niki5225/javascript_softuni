function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    let text = document.getElementsByTagName('textarea')[0].value;
    let jsonText = JSON.parse(text);
    let biggestAverageSalary = -Infinity;
    let bestRestaurant = undefined;
    let restaurantResult = document.querySelector('#bestRestaurant>p');
    let workersResult = document.querySelector('#workers>p');

    function onClick() {
        for (const jsonTextElement of jsonText) {
            let [restaurantName, workers] = jsonTextElement.split(' - ');
            const workersCollection = workers.split(', ');
            let totalWorkers = 0;
            let currentBestSalary = -Infinity;
            let totalSalaries = 0;
            let workersObj = [];
            for (const workersCollectionElement of workersCollection) {
                let [name, salaryStr] = workersCollectionElement.split(' ');
                totalWorkers++
                const parsedSalary = Number(salaryStr);
                totalSalaries += parsedSalary;
                if (parsedSalary > currentBestSalary) {
                    currentBestSalary = parsedSalary;
                }
                workersObj.push({name: name, salary: parsedSalary});
            }
            const averageSalary = (totalSalaries / totalWorkers).toFixed(2);
            if (averageSalary > biggestAverageSalary) {
                bestRestaurant = {
                    restaurantName,
                    averageSalary,
                    bestSalary: currentBestSalary.toFixed(2),
                    workersObj,
                }
            }
        }
        restaurantResult.textContent = `Name: ${bestRestaurant['restaurantName']} Average Salary: ${bestRestaurant['averageSalary']} Best Salary:
${bestRestaurant['bestSalary']}`;
        let workersRes = [];

        bestRestaurant.workersObj.forEach((worker) => {
            workersRes.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
        });
        workersResult.textContent = workersRes.join(' ');
    }

}