let btn = document.querySelector("button");
let input = document.querySelector("input");

function tap() {
  // let res=Number(input.textContent);
  let res = input.value;
  input.value += btn.textContent;
//   for (let i = 0; i < input.length; i++) {
//     input.value += btn[i].textContent;
//   }
}
// tap();
// console.log(tap());
