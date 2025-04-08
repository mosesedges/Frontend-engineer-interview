// create a function that to reverse a string. 
// INPUT: 'Hello world' 
// OUTPUT: dlrow olleH)

function reverse(str){
  return str.split('').reverse().join('');
}

console.log(reverse('Hello world'))