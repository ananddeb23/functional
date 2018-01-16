glb_counter=0;

function fun(){
  glb_counter++;
}
function hof(fun, num){

  for(let i= 0; i < num; i++){
    fun();
  }

  return glb_counter;

}

module.exports = hof;


hof(fun,3);
console.log(glb_counter === 3);
glb_counter = 0;
hof(fun,4);
console.log(glb_counter != 3);
glb_counter = 0;
