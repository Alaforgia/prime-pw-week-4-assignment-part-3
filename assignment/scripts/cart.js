console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem( item ){
  console.log(`Basket is ${basket}`);
  console.log(`Adding ${item} (expect true)`);
  basket.push(item);
  console.log(`Basket is now ${basket}`);

}
addItem('jar');
addItem('cup');
addItem('pen');
function listItems(){
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
}
listItems()

function empty(){
  basket = [];
}
empty();
console.log(`Basket is ${basket.length === 0 ? 'empty' : basket}`);
