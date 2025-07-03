for (let i = 1; i <= 100; i++) { // lo uso per i numeri da 1 a 100
if (i % 3 === 0 && i % 5 === 0){ // Multipli di 3 e 5 
console.log("FizzBuzz");

} else if (i % 3 === 0){ // se è multiplo di 3 stampa fizz
  console.log("Fizz");

}else if (i % 5 === 0){ // se è multiplo di 5 stampa buzz
  console.log("Buzz")
} else {
      console.log(i);
  }
}
