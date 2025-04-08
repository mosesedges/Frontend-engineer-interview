//create a function that flattens Arrays
//INPUT: [1, 2, [3, 4, [5, 6, 7], 8], 9, 10]
// OUTPUT: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newArr: number[] = [];
export default function flatten(arr: number[]): number[] {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      newArr.concat(flatten(item));
    } else {
      newArr.push(item);
    }
  });
  return newArr;
}

console.log(flatten([1, 2, [3, 4, [5, 6, 7], 8], 9, 10] as number[]));
