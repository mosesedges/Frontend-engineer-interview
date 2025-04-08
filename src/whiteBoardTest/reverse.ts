// create a function that to reverse a string.
// INPUT: 'Hello world'
// OUTPUT: dlrow olleH)

export default function reverse(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverse("Hello world"));
