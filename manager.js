// MY TASK MANAGER - TERMINAL

// SETUP CODE

const menu = () => {
    console.log("Welcome to your task manager, Press:");
    console.log("1. to see all your tasks");
    console.log("2. to add a task");
    console.log("3. to delete a task");
    console.log("4. to mark a task as done");
    console.log("5. to Exit the task manager");
};

const fs = require("fs");
const readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

let tasks = ["task 1", "task 2", "task 3",];
let i = tasks.length + 1;
let newTask = "task" + " " + i; 
let whichTask = tasks.indexOf(2);
let doneTask = tasks.indexOf(0);


/* See all your task */

const showtasks = () => {
    console.log(tasks);
};

/* Add a task */

const addtask = () => {
    tasks.push(newTask);
};

/* Delete a task */

const deletetask = () => {
    tasks.splice(whichTask);
};

/* Mark a task as done */

const taskdone = () => {
    console.log("task" + doneTask + " is done");
};

/* Exit the task manager */

const exit = () => {
    rl.close();
};

/* Programme */
menu();

    rl.question("What do you want? ", (answer) => {
        if (answer == 1) {
            showtasks();
            rl.close();
        } 
        else if (answer == 2) {
            rl.question("Which task do you want to add? ", (newTask) => {
                addtask();
                console.log(tasks);
                rl.close();
            });
        } 
        else if (answer == 3) {
            console.log(tasks);
            rl.question("Which task do you want to delete? ", (whichTask) => {
                deletetask();
                console.log(tasks);
                rl.close();
            });
        } 
        else if (answer == 4) {
            console.log(tasks);
            rl.question("Which task do you want to mark as done? ", (doneTask) => {
                taskdone();
                rl.close();
            });
        } 
        else if (answer == 5) {
            exit();
        }
    });