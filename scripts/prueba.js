//0 factorial
function factorial (n) {
    if (n==1){
        return 1;
    }
    return n * factorial(n-1);
}


// Imprimir por columnas primero las letras y luego las consonantes de un string

var n = "abecidofug";
function vowelsAndConsonants(s) {

    var s = Array.from(s);
    function vowelTest(s) {
        return (/^[aeiou]$/i).test(s);
      }
    s.forEach(char => {
        if (vowelTest(char)) {
            console.log(char);
        }
    });

    s.forEach(char => {
        if (!vowelTest(char)) {
            console.log(char);
        }
    });
}
vowelsAndConsonants(n);

//
function getLetter(s) {
    // Write your code here
    switch (s.charAt(0)) {
        case (/^[aeiou]/):
            return "A";

        case (/^[bcdfg]/):
            return "B";

        case (/^[hjklm]/):
            return "C";
            
        case (/^[npqrstwxyz]/):
            return "D";
                
    }
}

// Retornar RegEx para evualuar si la entrada comienza y termina con la misma vocal 
function regexVar() {
    const re = new RegExp(/^a(.*)a$|^e(.*)e$|^i(.*)i$|^o(.*)o$|^u(.*)u$/); 
    return re;
}

function reverseString(s) {
    try {
        var s = s.split("").reverse().join("");
        console.log(s);
    } catch (error) {
        console.log(error.message);
        console.log(s);
    }
}


//Número positivo, si no, devolver error
function isPositive(a) {
    if (a > 0) {
        return "YES";
    }
    else if (a < 0) {
        throw new Error("Negative Error");
    }

    else if (a == 0) {
        throw new Error("Zero Error");
    } 
    
}


//Herencia

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function() {
    return(this.w * this.h); }

class Square extends Rectangle {
    constructor (lado) {
        super(lado,lado);
    }
}


// SORT
function getSecondLargest(nums) {
    var order = nums.sort((a,b) => b - a);
    
    var i=0;
    
    do {
        i++;
        var number = order[i]
    } while (order[i] == order[0]);
    
    
    return number;
}

// FILTER
function getCount(objects) {
    var condition = objects.filter((objeto) => objeto.x == objeto.y);
    return condition.length;
}


//class
class Polygon {
    constructor(array) {
        this.array = array;
    }
    perimeter(){
        var perimeter = 0;
        this.array.forEach(element => {
            perimeter += element;
        });
        return perimeter
    }

}

array.forEach(element => {
    
});
arr.f

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}


.forEach(element => {
    
});