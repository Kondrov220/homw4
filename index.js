//1
let drink = prompt("Виберіть чай,кава,сік");
switch (drink.toLowerCase()){
    case "чай" :console.log("Чай дуже смачний"); break;
    case "кава" :console.log("Кава дає енергії"); break;
    case "сік" :console.log("Сік роблять з фруктів"); break;
    default:console.log("Це не чай кава або сік");
}
//2
let day = prompt("Виберіть день тижня");
switch (day.toLowerCase()){
    case "понеділок" :
    case "вівторок" :
    case "середа" :
    case "четвер" :
    case "п'ятниця" :console.log("Це робочій день тижня. Йди працюй!!!"); break;
    case "субота" :
    case "неділя" :console.log("Це вихідний. Відпочивай!"); break;
    default:console.log("Це не день тижня");
}
//3
let mon = prompt("Виберіть номер місяця");
switch (mon.toLowerCase()){
    case "1" :
    case "2" :console.log("Це місяць  Зими"); break;
    case "3" :
    case "4" :
    case "5" :console.log("Це місяць  Весни"); break;
    case "6" :
    case "7" :
    case "8" :console.log("Це місяць  Літа"); break;
    case "9" :
    case "10" :
    case "11" :console.log("Це місяць  Осені"); break;
    case "12" :console.log("Це місяць  Зими"); break;
    default:console.log("Це місяць");
}
//4
let mont = prompt("Виберіть номер місяця");
switch (mont.toLowerCase()){
    case "1" :
    case "3" :
    case "5" :
    case "7" :
    case "8" :
    case "10" :
    case "12" :console.log("31"); break;
    case "4" :
    case "6" :
    case "9" :
    case "11" :console.log("30"); break;
    case "2" :console.log("28 або 29"); break;
    default:console.log("Це місяць");
}
//5
let color = prompt("Виберіть колір світлофора для людей");
switch (color.toLowerCase()){
    case "зелений" :console.log("Йди"); break;
    case "червоний" :console.log("Стій"); break;
    case "жовтій" :console.log("Готуйся"); break;
    default:console.log("Це не колір вітлофора для людей");
}
//6
let numOne = prompt("Виберіть перше число");
let numTwo = prompt("Виберіть друге число");
let operetion = prompt("Виберіть знак +,-, *, / (не діліть на нуль)");
switch (operetion){
    case "+" :console.log(Number(numOne) + Number(numTwo)); break;
    case "-" :console.log(Number(numOne) - Number(numTwo)); break;
    case "*" :console.log(Number(numOne) * Number(numTwo)); break;
    case "/" :console.log(Number(numOne) / Number(numTwo)); break;
    default:console.log("Це не знак");
}
