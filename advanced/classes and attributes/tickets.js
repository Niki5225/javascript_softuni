class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }


}


function ticketManager(arrayOfItems, paramToSort) {
    let arr = [];
    for (const arrElement of arrayOfItems) {
        const [destination, price, status] = arrElement.split('|');
        arr.push(new Ticket(destination, Number(price), status));
    }

    switch (paramToSort) {
        case 'destination':
            arr.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'status':
            arr.sort((a, b) => a.status.localeCompare(b.status));
            break;
        case 'price':
            arr.sort((a, b) => a.price - b.price);
            break;
    }
    console.log(arr);
}

ticketManager(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination');
console.log('--------------------------------');
ticketManager(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
);