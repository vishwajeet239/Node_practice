const pizza= require("./pizzaShop");

const pizzaShop=new pizza();


pizzaShop.on("order",(size,topping)=>{
    console.log(`order received! baking ${size} pizza with ${topping}`)
})
pizzaShop.order("large","mushroom");
pizzaShop.displayOrderNumber();