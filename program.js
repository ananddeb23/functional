function upperCaser(sentence){

  sentence = sentence.toUpperCase();
  let res = sentence;
  return res;
}

  module.exports = upperCaser;

console.log(upperCaser('i am a boy') === 'I AM A BOY');
console.log(upperCaser('i am a boy') != ' i AM A BOY');
