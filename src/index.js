module.exports = function solveEquation(equation) {
  //ax^2 + bx+c
  //..                               0 1  2  3  4 5 6 7 8
  //const solutions = solveEquation('2 * x^2 - 10 * x + 12');
  //console.log(solutions); // [2, 3
 let arr = equation.split(' ');// your implementation
 let a = arr[0];
 let b = arr[4];
 let c = arr[8];
 let x1;
 let x2;
 let solution = [];
 let discr;
 if (arr[7] === '-'){
  c = -1*c;
 }
   
 if(arr[3] === '-'){
   b = -1*b;
 }
 discr = b*b - 4*a*c;

   x1 = Math.round((-1*b + Math.sqrt(discr))/(2*a));
   x2 = Math.round((-1*b - Math.sqrt(discr))/(2*a));
 
 if (x1>x2){
   solution[0] = x2;
   solution[1] = x1;
 }
 else{
  solution[0] = x1;
  solution[1] = x2;
 }
 return solution;
}


/*мне надо занести equation в массив
далее обращаться к a b и с как 0, 4, 8
решить уравнение, получить два конря
упорядочить их в */
