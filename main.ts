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


// -------------


 function returnMinNum(one:number,two:number){
return Math.min(one,two);
 }
returnMinNum(3,5);

function targilTwo(one:number,two:number,three:number){
return Math.min(one,two,three);

}
targilTwo(35,45,2);

function targilThree(one:number,two:number,three:number){
return (one+two+three)/3;
}
targilThree(55,11,32);

function targilFour(one:number,two:number,three:number,four:number){
return (one+two+three+four);

}
targilFour(11,3,44,7);


function targilFive(myArray:number[]){
let sum:number[]=0;
    myArray.forEach(item =>
    sum+=item;)

    return sum / myArray.length;

}
targilFive([43, 5, 33]);

function targilTen(myArray:number[]){
let sum:number[]=0;
    myArray.forEach(item =>
    sum+=item;)

    return sum;

}
targilFive([43, 5, 33]);



function tarigilEleven(myArray:string[]){
return myArray[1];


}
tarigilEleven(["one", "two", "three"]);
 
function targilTweleve(myArray:string[]):String{
    let sum:string;
 myArray.forEach(item=>{

 if(item.charAt(0) == "A"){
sum=item;}
 })
 return sum;

}
 let a:string[]=["soli","Aoli","doli"];
console.log(targilTweleve(a));

function tarigilTwelev(myDate:string){


return new Date(myDate);


}
tarigilTwelev("2002-11-03");
 



function targilThirteen(num:number,txt:string){


for(let i=0;i<num;i++){

    console.log(txt);
}

}
targilThirteen(5, "hello");


function targilFourteen(name:string,age:number){

if(age>18){
console.log(`Welcome Back ${name}`);
}
else{
console.log(`NO Entry ${name}`);

}


}
targilFourteen("soli", 31);

function targilFifteen(firstName:string,lastName:string):any{

if(  firstName.charAt(0)==lastName.charAt(0)){

return firstName.charAt(0);

}
else{
return 0;

}

}

targilFifteen("Soli", "Soly");


function targilEithteen(myArray:string[]){


switch(myArray.length){
case 0:
return myArray[0];

case 1:
return "NO DATA";


case 2:
return `${myArray[0]} ${myArray[1]}`;


default:
return "there are many items";
}



}
targilEithteen(["one"]);
 