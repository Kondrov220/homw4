//1
let textOne = prompt("Введіть текст або залиште його порожнім");
let textTwo = prompt("Введіть текст або залиште його порожнім");
if(Boolean(textOne) === true && Boolean(textTwo) === true){
console.log("Обидва поля заповнені");
}else{
   console.log("Не всі поля заповнені") 
}
//2
let numOne = prompt("Введіть першу число від 1 до 10");
let numTwo = prompt("Введіть друге число від 1 до 10");
const sum = Number(numOne) + Number(numTwo);
console.log(sum);
if(sum > 10){
console.log("Сума більша за 10");
}else{
   console.log("Сума менша або дорівнює 10") 
}
//3
let javaText = prompt("Введіть текст який може містити JavaScript");
const java = "JavaScript";
if(javaText == java){
    console.log("Текст містить слово JavaScript");
    }else{
       console.log("Текст не містить слово JavaScript") 
    }
//4
let myNum = prompt("Введіть будь яке число");
if(myNum > 10 && myNum < 20 ){
    console.log("Число входить в діапазон від 10 до 20");
    }else{
       console.log("Число не входить в діапазон від 10 до 20") 
    }
//5 
let names = prompt("Введіть своє імя");
let adres = prompt("Введіть свою електрону почту ");
let password = prompt("Введіть пароль");
if(names.length >= 3 && adres.includes("@") && password.length >= 6){
    console.log("Ви зареєструвалися");
    }else{
       console.log("Error") 
    }