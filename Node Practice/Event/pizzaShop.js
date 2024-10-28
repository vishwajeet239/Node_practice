const EventEmitter= require('events');

class PizzaShop extends EventEmitter {
    constructor(){
        super();
        this.orderNumber=0;
    }

    order(size,toppings) {
        this.orderNumber++;
        this.emit("order",size,toppings);
    }

    displayOrderNumber() {
        console.log(`order number is ${this.orderNumber}`);
    }
}

module.exports=PizzaShop;