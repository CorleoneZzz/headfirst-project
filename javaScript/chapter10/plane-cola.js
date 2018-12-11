var passenger=[
    {name:"张三",paid:true},
    {name:"李四",paid:true},
    {name:"王五",paid:true},
    {name:"赵六",paid:true},
    // 对象组成的数组
];
function checkNoFlyList(passenger) {
return(passenger==="Dr.Evel");

}
function checkNoPaid(passenger) {
return(!passenger.paid);

}
function processPassengers(passengers,testFunction) {
    for (var i=0;i<passengers.length;i++)
    {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}
var allCanFly=processPassengers(passenger,checkNoFlyList);
var allPaid=processPassengers(passenger,checkNoPaid);
// function serveCustomer(passenger) {
//     createDrinkOrder(passenger);
//     createDrinkOrder(passenger);
//     createDrinkOrder(passenger);
//     createDrinkOrder(passenger);
// }
// function createDrinkOrder(passenger) {
//     if (passenger.ticket==="firstclass")
//     alert("鸡尾酒还是红酒");
//     else{
//         alert("可乐还是水");
//     }
// }
//实现了一个函数只做一件事，然而这样每次调用createDrinkOrder都会判断乘客类型
//实现方法：不多次调用createDrinkOrder，只调用一次，只是让它返回一个知道如何让乘客点饮料的函数
function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket==="firstclass")
    {
        orderFunction=function () {
            alert("鸡尾酒还是红酒");
        }
    //创建一个知道如何让头等舱乘客点饮料的函数
    }
    else {
        orderFunction=function () {
            alert("可乐还是水");
        }
    }
    //创建一个知道如何让头等舱乘客点饮料的函数
    return orderFunction;
    //返回创建的函数
}
function serveCustomer(passenger) {
   var getDrinkOrderFunction=createDrinkOrder(passenger);//createDrinkOrder返回一个函数，我们把函数存在变量getDrinkOrderFunction中
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    getDrinkOrderFunction();
}
var products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
    { name: "Orange", calories: 160, color: "orange", sold: 12101 },
    { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
    { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
    { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
    { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
    { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
    { name: "Water", calories: 0, color: "clear", sold: 62123 }
];
function compareSold(colaA,colaB) {
if (colaA.sold>colaB.sold)
    {
        return 1;
    }
    else if (colaA.sold===colaB.sold)
    {
        return 0;
    }
    else
    {
        return -1;
    }
}
function printProducts(products)
{
    for (var i=0;i<products.length;i++)
    {
        console.log("name:")
    }
}
products.sort(compareSold);