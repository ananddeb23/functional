


function getShorterMessages(array_obj){
	res = [];
	//console.log(array_obj.map(message));
	res = array_obj.filter(function(sms){
		return sms.message.length <50;
	}).map(function (obj){
		return obj.message;
	});
	console.log(res);
	return res;
}

msg_obj1 = {
	message: 'his is to bring '

};
msg_obj2 = {
	message: 'at'

};
msg_obj3 = {
	message : 'hehwiuwehrwe'
};
obj_ar = [msg_obj1, msg_obj2, msg_obj3];

module.exports = getShorterMessages;
function test_equal(arr1, arr2){
	for(let i = 0; i < arr1.length; i++){
		if( arr1[i] != arr2[i]){
			return false;
		}
	}
	return true;
}
console.log(test_equal(getShorterMessages(obj_ar),[ 'his is to bring ', 'at', 'hehwiuwehrwe' ]));
