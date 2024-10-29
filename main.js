//Leap Year Checker 

function leapyear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;

    }
}
console.log(leapyear(year=500))
console.log(leapyear(year=20))

//Ticket Pricing

function agee(age){
let prix;
if (age <= 12) {
    prix = 10;
} else if (age >= 13 && age <= 17) {
    prix = 15;
} else {
    prix = 20;
}
return `prix de tiquet est: ${prix}`
}

//Function de puissance

function puissance(x, n) {
    if (n === 0) {
      return 1;
    }
    if (n < 0) {
      return 1 / puissance(x, -n);
    }
    return x * puissance(x, n - 1);
  }

  //palindrome

  
    function palindrome(str) {
    max=str.length();
      if (str[0] == str[max]) {
        return palindrome(str[0] + 1, str[max] - 1);
    }
      if (str[0] !== str[max]) {
        return false;
      }
    }
  
    return palindrome(0, str.length - 1);
  
  