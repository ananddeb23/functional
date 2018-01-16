

function doubleAll(arr){
  let res = arr.map(function(num){
    return num * 2;
  });
  console.log(res);
  return (res);
}

module.exports = doubleAll;
function cmp_array(arr1,arr2){
  if(arr1.length != arr2.length){
    return false;
  }
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] != arr2[i]){
      return false;
    }
  }
  return true;
}
console.log(cmp_array(doubleAll([1,2,3,4]), [2, 4, 6, 8]) === true);
console.log(cmp_array(doubleAll([1,2,3,4]), [1, 4, 6, 8]) === false);
