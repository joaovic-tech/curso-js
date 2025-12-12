// Utilize any apenas quando for necessário

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function showMessage(msg: any) {
  console.log(msg);
}

showMessage('Hello');
showMessage(123);
showMessage([1, 2, 3]);
