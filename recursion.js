





function reduce(arr, fn, initial,index){
	if(index === undefined){
		index =0;
	}
	console.log(initial);
	if(arr.length === index){

		return initial;
	}

	else{
		let modified = fn(initial, arr[index],index, arr);
		return reduce(arr,fn,modified,index+1);
	}
}

module.exports = reduce;

function fn(initial, val,index, arr){
	return initial + val;
}

console.log(reduce([1,2,3,4], fn,0) === 10);
console.log(reduce(['abc','def'], fn,'start') === 'startabcdef');
console.log(reduce([], fn,null) === null);
console.log(reduce([], fn,15) === 15);
//console.log(JSON.stringify(reduce([1,2,3,4], fn,{})) );
console.log(fn(0,4,0,[1,2,3,4]) === 4);
console.log(fn('start_','concat',0,['abc','cdf']) === 'start_concat');
