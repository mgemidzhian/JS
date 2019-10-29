// let money = +prompt ("Ваш бюджет на месяц?", "");
// console.log(money);

// let time = prompt ("Введите дату в формате YYYY-MM-DD", "");
// console.log(time);

let appData = {
    // budjet: money,
    // timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
// appData.expenses.stattya1 = znacheniye1;
// appData.expenses[stattya2] = znacheniye2;
// console.log(appData);

for (let i = 0; i < 2;){
    let a = prompt ("Введите обязательную статью расходов в этом месяце","");
    let b = prompt ("Во сколько обойдется?","");

    if (typeof(a) === "string" && 
        typeof(a) != null && 
        typeof(b) === "string" && 
        typeof(b) != null && 
        a != "" && 
        b != "" && 
        a.length < 50){
            console.log("Done");
            appData.expenses[a] = b;
            i++;
    } else {
        alert("Input Error");
    }
};
//     appData.moneyPerDay = appData.budjet / 30;
    
// alert("Eжедневный бюджет: " +appData.moneyPerDay);

// if (appData.moneyPerDay < 100){
//     console.log("Минимальный");
// } else if (appData.moneyPerDay > 200 && appData.moneyPerDay <2000){
//     console.log("Средний");
// } else if (appData.moneyPerDay > 2000){
//     console.log("Высокий");
// } else {
//     console.log("Ошибка");
// }