function loadUsers(userIds, load, done) {
	let users = [];
	for (let i = 0; i < userIds.length; i++) {
		let val =load(userIds[i]);
		(setTimeout(function(){users.push(val);
			if(users.length === userIds.length){
				//console.log(users);
				done(users);}
		}));

	}
	return users;
}
function load(user){
	return user;
}
function done(userArray){
	return undefined;
}
function checkArraysEqual(arr1, arr2){
	if(arr1.length != arr2.length){
		console.log(arr1.length, arr2.length);
    		console.log('me1');
		return false;
	}
	for(let i = 0; i < arr1.length; i++){
		if(arr1[i] != arr2[i]){
			console.log('me');
			return false;
		}
	}
	return true;
}
module.exports = loadUsers;
console.log(loadUsers([1,2,3,4],load,done));
console.log('Test that returned array same as input array ',checkArraysEqual(loadUsers([1, 2, 3, 4],load,done),[1, 2, 3, 4]));
console.log('Output type is an array ',typeof(loadUsers([1, 2, 3, 4],load,done)) === 'object');
