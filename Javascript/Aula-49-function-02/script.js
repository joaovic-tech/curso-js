// Declaração de função (function hoisting)
falaOi();
function falaOi() {
  console.log('Oie');
}

// First-class objects (objetos de primeira classe)
// Function expression
const data = function() {
  console.log('Sou um dado.');
};
data();

// Arrow function
const arrowFunction = () => {
  console.log('Sou uma arrow function');
};
arrowFunction();

// Dentro de um objeto
const object = {
  fala() {
    console.log('Estou falando...');
  }
};
object.fala();
