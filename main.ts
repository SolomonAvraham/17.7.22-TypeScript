function calcFunc(): void {
  let num: any = document.querySelector("#inputCalc");
  if (num.value > 10) {
    console.log("greater then 10");
  } else {
    console.log("less then 10");
  }
}

function clacFuncTwo() {
  let num: any = document.querySelector("#inputCalc");
  if (num.value > 10) {
    console.log("greater then 10");
  } else if (num.value < 10) {
    console.log("less then 10");
  } else {
    console.log("equle to 10");
  }
}

function clacFuncThree() {
  let first: any = document.querySelector("#inputCalc");
  let second: any = document.querySelector("#inputCalc");
  if (first.value < second.value) {
    console.log(second.value);
  } else if (first.value > second.value) {
    console.log(first.value);
  } else {
    console.log("values are equle");
  }
}
