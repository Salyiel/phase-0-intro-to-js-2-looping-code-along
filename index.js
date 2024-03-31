// Code your solutions in this file

function writeCards(array, event) {
    let myArray = []
    for(let c = 0; c< array.length; c++) {
        let message = `Thank you, ${array[c]}, for the wonderful ${event} gift!`
        myArray.push(message)
    }
    return myArray;
}


function countDown() {
    let i = 10;
    while(i > -1){
        console.log(i);
        i--
    }
}