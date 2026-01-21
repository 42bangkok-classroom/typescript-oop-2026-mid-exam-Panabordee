const arr1 : number[] = [1, 2, 3, 4];
const arr2 : number[]= [3, 4, 5, 6];

function getUniqueAfterMerge(arr1:number[], arr2:number[]): number[] {

  // merge two arrays
  let arr = [...arr1, ...arr2];

  // removing duplicate
  let uniqueArr = [...new Set(arr)];

  console.log(uniqueArr);


return uniqueArr
}
