function convertToJSON(){
    let obj = {
        sayHello() {
            console.log('Hi');
        }
    }

    obj.sayHello()

    obj.printNum1 = () => console.log(1);

    obj.printNum1();
}

convertToJSON();