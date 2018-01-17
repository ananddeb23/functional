
function countWords(inpWords){
	let resultObject = inpWords.reduce(function (result, word) {
		if (word in result) {
			result[word]++;
		}
		else {
			result[word] = 1;
		}
		return result;
	}, {});
	return resultObject;
}
module.exports = countWords;
function checkObjectEqual(obj1, obj2){
	let obj1Key = Object.getOwnPropertyNames(obj1);
	let obj2Key = Object.getOwnPropertyNames(obj2);

	if(obj1Key.length != obj2Key.length){
		return false;
	}
	for( let i=0; i < obj1Key.length; i++){
		let key1 = obj1Key[i];
		let key2 = obj2Key[i];
		if(obj1[key1] != obj2[key2]){
			return false;
		}
	}
	return true;
}

//console.log(countWords(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']));
console.log(checkObjectEqual(countWords(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']), {Apple :2, Banana: 1, Durian: 3}) === true);
console.log(checkObjectEqual({Apple :2, Banana: 1, Durian: 3}, { Banana: 1, Durian: 3}) === false);
console.log(checkObjectEqual({Apple :2, Banana: 1, Durian: 3}, {Apple2 :2, Banana: 1, Durian: 3}) === true);
console.log(checkObjectEqual({Apple :2, Banana: 1, Durian: 3}, {Apple2 :2, Banana: 1, Durian: 3}) === true);
