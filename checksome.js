


function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {

		function checkIfPresent(elem){
			//console.log(elem);
			return (ar.indexOf(elem.id)!= -1);
		}

		let ar = goodUsers.map(function(ele){
			return ele.id;
		});

		return submittedUsers.every(checkIfPresent);

	};
}

module.exports = checkUsersValid;
let goodUsers = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 }
];

let submittedUsers = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 }
];
//write test case for empty goodUSer and EmptyUSer
let testAllValid = checkUsersValid(goodUsers)(submittedUsers);
console.log(testAllValid === true);
testAllValid = checkUsersValid([])(submittedUsers);
console.log(testAllValid === false);
testAllValid = checkUsersValid(goodUsers)([]);
console.log(testAllValid === true);
testAllValid = checkUsersValid([
	{ id: 1 },
	{ id: 2 },
	{ id: 3 },
	{id : 4},
	{id : 5}
])( []);
console.log(testAllValid);
testAllValid = checkUsersValid(goodUsers)( [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 },
	{id : 6},
	{id: 7}
]);
console.log(testAllValid === false);
