
let a = {
	i: 1,
	toString: function (){
		return a.i++;
	}
};

if ((a == 1) && (a == 2) && (a == 3)) {
	console.log('Wow!! This is crazy');
} else {
	console.log('This is what I expect');
}
