// Code your solutions in this file
 function writeCards(names, event){

    let messages = [];

    for (let k = 0; k < names.length; k++) {
    messages.push(`Thank you, ${names[k]}, for the wonderful ${event} gift!`);
 }
 return messages;
}



function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }





