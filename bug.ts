function combineArrays(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, "six" as unknown as number]; //Type 'string' is not assignable to type 'number'.

const combined = combineArrays(arr1, arr2); //Error occurs here
console.log(combined); //This will not run because of error in the previous line
