let fun1 = function func1(val){
	return val * 2;
};
function arrayMap(arr, func){
	let res = [];
	arr.reduce( function(acc, num, idx, arr){
		res.push(func(num));
	}, null);
	return res;
}

module.exports = arrayMap;

function checkArrayEqual(arr1, arr2){
	if(arr1.length != arr2.length){
		return false;
	}
	for( let i = 0; i < arr1.length; i++){
		if(arr1[i] != arr2[i]){
			return false;
		}

	}
	return true;
}
console.log('check function is applying to input array ',checkArrayEqual(arrayMap([1, 2, 3, 4], fun1), [2, 4, 6, 8]) === true );
console.log('check empty array returning empty array  ',checkArrayEqual(arrayMap([], fun1), []) === true );
console.log('check return type is array/object or not',typeof(arrayMap([1, 2, 3, 4], fun1)) === 'object' );
console.log('chekc result length is same as input length or not ',arrayMap([1, 2, 3, 4], fun1).length === [1, 2, 3, 4].length) ;
