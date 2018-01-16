function upperCaser(sentence){

  sentence = sentence.toUpperCase();
  let res = sentence;
    console.log(res);
  return res;
}

  module.exports = upperCaser;

console.log(upperCaser('i am a boy') === 'I AM A BOY');
