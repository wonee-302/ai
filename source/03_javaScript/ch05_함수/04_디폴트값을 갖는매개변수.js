console.log(pow(5,3));
console.log(pow(5));
console.log(pow(y=2, x=3)); //첫번째 매개변수는 무조건 x에 들어간다. 두번째 매개변수는 무조건 y에 들어간다. 파이썬과 다름. 
console.log(pow());

function pow(x=5,y=2){
  //x의 y승을 return 
  console.log('함수내의 x=${x}, y=${y}');
  result = x ** y;
  return result;
}