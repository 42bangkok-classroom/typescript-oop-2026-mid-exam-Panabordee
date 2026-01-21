const arr1 : number[] = [1, 2, 3, 4];
const arr2 : number[]= [3, 4, 5, 6];

export function getUniqueNumbers(arr1:number[], arr2:number[]): number[] {

  
  let arr = [...arr1, ...arr2];

  
  let uniqueArr = [...new Set(arr)];
  console.log(uniqueArr);
  


return uniqueArr
}