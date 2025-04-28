let i = 1;
while (i <= 5) {
    console.log("interacion while: ", i);
    i++;
};
let cont = 1;
while (cont <= 10) {
    console.log(3, "x ", cont, " = ", 3 * cont);
    cont++;
};

let mult = 1;
console.log("Do...while");
do {
    console.log(5, "x ", mult, "=", 5 * mult);
    mult++;
} while (mult <= 10);

let n = 10;
do {
    console.log("n", n);
    n--;
} while (n >= 6);