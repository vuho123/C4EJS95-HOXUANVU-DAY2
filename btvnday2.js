//7 numbers, starting from 0
for(i=0;i<=7;i++){
    console.log(i)

}
//n numbers, starting from 0,
const number2= prompt("n=")
for(a1=0;a1<=number2;a1++){
    console.log(a1)

}
//A sequence of numbers, starting from 3, ending before n
const number3= prompt("enter m")
for(a=3;a<=number3;a++){
    console.log(a)
}
//A sequence of numbers, starting from c, ending before n
const number4= prompt("enter b")
const number5= prompt("enter c")
for(b=number4;b<=number5;b++){
    console.log(b)
}
//Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n)
let number6= prompt("pick 1 number")
let factorial1=1
for(let c=1;c<=number6;c++){
    factorial1=factorial1*c
}
alert("the factorial is"+factorial1)
//Write a program asking users their age, and then decide if they are old enough to view a 14+ content
let old= prompt("how old are you?")
if(old>14){
    alert("you can see this content")
}
else alert("you cant see this content")
//Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0-9
let x=prompt("write a number")
if(x>5){
    alert("higher half of 9")
}
else{
    alert("lower half of 9")
}
//Write a program asking user to enter two numbers, x and n, then check if x is in lower half of higher half of n


let y= prompt("pick numbery")
let z=prompt("pick number z")
if(y>z/2){
    alert("higher half of" + z)
}
else{
    alert("lower half of" +z)
}
//Write a script to check if a number is even (divisible by 2) or odd number
let t= prompt("pick number t")
if(t%2==0){
    alert(t+"is an even number")
}
else{
    alert(t+"is an odd number")
}
//calculate the BMI
let p= prompt("what is your weight in kilogram")
let q=prompt("what is your height in m")
const BMI= p/(q*q)
if(BMI<16){
    alert("underweight")
}

else if(BMI<25){
    alert("Normal")
  }
 else if(BMI<18.5){
     alert("s underweight")
 }
 else if (BMI<30){
     alert("overweight")
 }
 else
 alert("Obese")
//9a
const number15 = 6
number16 = Math.round(number15 / 2);
for (let i = 0; i < number16; i++) {
  console.log("L");
}
for (let i = number16; i < number15; i++) {
  console.log("H");
}
//n L’s and H’s in total, n entered by user
let number17 = prompt("enter the total number ")
number18= Math.round(number17/2)
for(let i2=0;i2<=number18;i2++){
     console.log("L")
}
for(let i3=number18;i3<number17;i3++){
    console.log("H")
}
