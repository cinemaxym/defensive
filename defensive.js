/* The following program calculates distance, time or speed.
It uses defensive programming to anticipate errors and handle them. */

let flag;

do {         //the do while loop runs until a user finishes entering valid inputs and gets a result   
    flag = true;
    /*
    the following try block contains the code that may cause a runtime error to occur. 
    Code in the try block is executed as normal. 
    If an exception occurs during the execution of the code in the try block, the catch block is called.
    */

    try {
        input = prompt("What would you like to calculate ? \na.distance \nb.time \nc.speed"); //asks a user to choose whether to calculate distance, time, or speed.
        input = input.toLocaleLowerCase()   //converts any user input to lower case  
        if (input == "") {                  
            throw "You have not entered anything"; //if a user doesn't enter anything calls the catch block and throws a message to it 
        }
        if (input != "a" && input != "b" && input != "c") {        //if a user doesn't enter a valid input calls the catch block and throws a message to it 
            throw "You have to enter only \na.distance \nb.time \nc.speed";           
        }
        if (input == "a") { //if statement if a user chooses to calculate distance. 
            time = prompt("Please enter time");         //asks a user to enter time 
            if (time.length == 0) {
                throw "You have not entered time"; //if a user doesn't enter anything calls the catch block and throws a message to it 
            }
            if (isNaN(time)) {
                throw time + " is not a number" //if a user enters not a numerical value calls the catch block and throws a message to it 
            }
           
            speed = prompt("Please enter speed");       //asks a user to enter speed 
            
            if (speed.length == 0) {
                throw "You have not entered speed"; //if a user doesn't enter anything calls the catch block and throws a message to it 
            }
            if (isNaN(speed)) {
                throw speed + " is not a number" //if a user enters not a numerical value calls the catch block and throws a message to it 
            }
            console.log(`The distance is: ${speed * time}`)  //if the input is valid calculates a distance and logs the result
            flag = false
        }
        if (input == "b") {  //if statement if the user chooses to calculate time.

            distance = prompt("Please enter distance");      //asks a user to enter distance 

            if (distance.length == 0) {
                throw "You have not entered distance"; //if a user doesn't enter anything calls the catch block and throws a message to it 
            }
            if (isNaN(distance)) {
                throw distance + " is not a number" //if a user enters not a numerical value calls the catch block and throws a message to it 
            }

            speed = prompt("Please enter speed");            //asks a user to enter speed 

            if (speed.length == 0) {
                throw "You have not entered speed"; //if a user doesn't enter anything calls the catch block and throws a message to it 
            }
            if (isNaN(speed)) {
                throw speed + " is not a number" //if a user enters not a numerical value calls the catch block and throws a message to it 
            }
            console.log(`The time is: ${distance / speed}`)  //if the input is valid calculates a time and logs the result
            flag = false
        }
        if (input == "c") { //if statement if the user chooses to calculate speed.

            distance = prompt("Please enter distance");       //asks a user to enter distance 
            
            if (distance.length == 0) {
                throw "You have not entered distance"; //if a user doesn't enter anything calls the catch block and throws a message to it 
            }
            if (isNaN(distance)) {
                throw distance + " is not a number" //if a user enters not a numerical value calls the catch block and throws a message to it 
            }
            
            time = prompt("Please enter time");                //asks a user to enter time
            
            if (time.length == 0) {
                throw "You have not entered time"; //if a user doesn't enter anything calls the catch block and throws a message to it 
            }
            if (isNaN(time)) {
                throw time + " is not a number" //if a user enters not a numerical value calls the catch block and throws a message to it 
            }
            console.log(`The distance is: ${distance / time}`) //if the input is valid calculates a speed and logs the result
            flag = false
        }

    } catch (err) {          //the catch block is executed if an error occurs and logs a thrown message    
        console.log(err);
    }
} while (flag)


