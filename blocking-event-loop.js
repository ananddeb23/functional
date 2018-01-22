/*function repeat(operation, num) {
	// modify this so it can be interrupted
	setTimeout( function(){
		if (num <= 0) return;
		operation();
		return repeat(operation, --num);
	}, 100);
}*/

function repeat(operation, num){
	if(num <=0){
		return;
	}
	if(num %10 ==0){
		setTimeout( function(){
  		if (num <= 0) {
				return;}
			else{


  		operation();
  		return repeat(operation, --num);}
  	});
	}
	else{
		operation();
		return repeat(operation, --num);
	}
}

function oper(){
	console.log(' im an operation');
}
console.log('Soemthing else');
repeat(oper,2);
console.log('Soemthing else');
console.log('Soemthing else');
module.exports = repeat;
