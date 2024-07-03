// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data

    let numberCount = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (/^\d+$/.test(this.data[i])) { //I want to check to make sure if someone makes a mistake it will not count words
        numberCount += 1;
      }
    }
    return numberCount;
  }
  printNumbers() {
    //print the numbers in data
    this.data.forEach((element) => {
        if (/^\d+$/.test(element)) { //I want to check to make sure if someone makes a mistake it will not count words
            console.log(`I am printing the numbers ${element}`);
          }
    });
  }
  odds() {
    //return the odd numbers in data
    const oddList = [];
    this.data.forEach((element) => {
      if (element % 2 == 0) {
        
      }else if(!isNaN(element)){ // Adding logic to make sure non numbers are not added
        oddList.push(element);
      }
    });
    return oddList;
  }
  evens() {
    //return the even numbers in data
    const evenList = [];
    this.data.forEach((element) => {
      if (element % 2 == 0 && !isNaN(element)) { //Adding logic to make sure non numbers are not added
        evenList.push(element);
      }
    });
    return evenList;
  }
  sum() {
    //return the sum of the numbers
    let numberSum = 0;
    this.data.forEach((element) => { 
        if (/^\d+$/.test(element)) { //I want to check to make sure if someone makes a mistake it will not count words
            numberSum += element; 
        }
        
    });
    return numberSum;
  }
  product() {
    //return the product of the numbers
    let numberProduct = 1;
    this.data.forEach((element) => {
        if (/^\d+$/.test(element)) { //I want to check to make sure if someone makes a mistake it will not count words
            numberProduct *= element; 
        }
        
    });

    return numberProduct;
  }
  greaterThan(target) {
    //return the numbers greater than the target
    let listOfNumbersGreaterThanTarget = [];
    this.data.forEach((element) => {
        if (/^\d+$/.test(element) && element > target) { //I want to check to make sure if someone makes a mistake it will not count words
            listOfNumbersGreaterThanTarget.push(element);
        }
    });
    return listOfNumbersGreaterThanTarget;
  }
  howMany(target) {
    //return the count of a given number
    let countOfTarget = 0;
    this.data.forEach((element) => {
        if (/^\d+$/.test(element) && element == target) { //I want to check to make sure if someone makes a mistake it will not count words
            countOfTarget++;
        }
    });
    
    return countOfTarget;
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
