glb_counter=0;

function fun(){
  glb_counter++;
}
function hof(fun, num){
  glb_counter = 0;
  for(let i= 0; i < num; i++){
    fun();
  }

  return glb_counter;

}

module.exports = hof;


console.log(hof(fun,3) != 2);
console.log(hof(fun,4) == 4);
