//         Task 1
//   Write a function named "convertFahrToCelsius" that takes a single parameter
//   and converts it to celsius.

function convertFahrToCelsius(F){
    let output;
    if (Array.isArray(F)){
        output = (`${JSON.stringify(F)} is not a valid number but a/an ${Array.isArray(F)?"array":typeof(F)}`);
    }
    else if (isNaN(parseInt(F)) || typeof(F) === "boolean" /*|| F.length === 0*/){
        output = (`${JSON.stringify(F)} is not a valid number but a/an ${typeof(F)}`);
    }
    else {
        let fInteger = parseInt(F)
        let c = ((F-32)*(5/9))
        //console.log(fInteger)
        output = Number(c.toFixed(4))    
    }
    console.log(output);
    return(output);
  }
  //Test Cases
  convertFahrToCelsius(true);
  convertFahrToCelsius("0");
  convertFahrToCelsius(0);
  convertFahrToCelsius("32");
  convertFahrToCelsius(32);
  convertFahrToCelsius("asdf");
  convertFahrToCelsius([]);
  convertFahrToCelsius([1,2,3]);
  convertFahrToCelsius({});
  convertFahrToCelsius({temp:0});
  convertFahrToCelsius("");

//           Task 2
// Write a function named "checkYuGiOh" that takes a number, n, as an argument,creates an 
// array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", 
// then returns the resulting array.
var output = [];

function checkYuGiOh(n) {
    if (isNaN(n)){
        output.push(`invalid parameter: ${n}`)
    }else
        for(var count = 1; count <= n; count++) {

            if (count % 2 === 0 && count % 3 === 0 && count % 5 === 0) {
            output.push("yu-gi-oh");
            }
            else if (count % 2 === 0 && count % 3 === 0) {
                output.push("yu-gi");
            }
            else if (count % 2 === 0 && count % 5 === 0) {
                output.push("yu-oh");
            }
            else if (count % 3 === 0 && count % 5 === 0) {
                output.push("gi-oh");
            }
            else if (count % 2 === 0) {
                output.push("yu");
            } 
            else if (count % 3 === 0) {
                output.push("gi");
            } 
            else if (count % 5 === 0) {
                output.push("oh")
            }
            else {
                output.push(count);
            }
        }

    console.log(output);
    return(output);

}

//checkYuGiOh(10) 
//checkYuGiOh("5") 
checkYuGiOh("fizzbuzz is meh")
 