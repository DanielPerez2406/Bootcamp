//Ejercicio 1

function myFunc (theObject){
    theObject.make = 'Toyota';
}

var x, y;

var myCar = { make: 'Honda', model: 'Accord', year: 1998};

x = myCar.make;

console.log("El valor de x ", x);

myFunc(myCar);

y = myCar.make;

console.log("El valor de y ", y);

//Ejercicio 2

const square = function(number) {return number *number};
const square2 = number => number * number;

let a = square(4);
let b = square2(8);

console.log("El resultado de a ", a);
console.log("El resultado de b ", b);

//Ejercicio 3

const tasks = [
    {
        'name'      : 'Write for Envato Tuts+',
        'duration'  : 120
    },{
        'name'      : 'Workout',
        'duration'  : 60
    },{
        'name'      : 'Procrastinate on Duolingo',
        'duration'  : 240
    }
];

// const task_names = [];
// for (let i = 0, max = tasks.length; i < max; i++){
//     task_names.push(tasks[i].name);
// }

// console.log(task_names)

//Ejercicio 4

// const task_names = [];
// tasks.forEach(function (task){
//     task_names.push(task.name);
// });

// console.log(task_names)

//Ejercicio 5

const task_names = tasks.map(function (task, index, array){
    return task.name;
});

console.log(task_names)