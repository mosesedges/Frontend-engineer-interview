// create a function that remove all duplicates in a string;\
// INPUT: This is is the test test case.
//OUTPUT: This is a test case.

export default function removeDuplicates(str: string): string {
  const strArr = str.split(" ");
  const set = new Set(strArr);

  return [...set].join(" ");
}

console.log(removeDuplicates("This is is the test test case"));
