ar = [];

function checkIfPresent(elem){
  console.log(elem);
  return (ar.indexOf(elem.id)!= -1);
}
function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {


          ar = goodUsers.map(function(ele){
            return ele.id;
          });
          return submittedUsers.every(checkIfPresent);

      };
    }

    module.exports = checkUsersValid;
    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];

    var submittedUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];
var testAllValid = checkUsersValid(goodUsers)( submittedUsers);
console.log(testAllValid);
