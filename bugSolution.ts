function combineArrays(arr1: number[], arr2: number[]): number[] {
  // Type Guard to ensure all elements are numbers
  const isNumberArray = (arr: any[]): arr is number[] => arr.every(item => typeof item === 'number');
  
  if (!isNumberArray(arr2)) {
    throw new Error("arr2 is not a number array");
  }
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = combineArrays(arr1, arr2);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

//Alternative solution using type assertion (less safe)
function combineArraysAlternative(arr1: number[], arr2: (number | string)[]): number[]{
  return [...arr1, ...arr2.filter(item => typeof item === 'number')];
}

const arr3 = [1,2,3];
const arr4 = [4,5,"6" as unknown as number];
const combined2 = combineArraysAlternative(arr3,arr4);
console.log(combined2); //Output: [1,2,3,4,5]
 