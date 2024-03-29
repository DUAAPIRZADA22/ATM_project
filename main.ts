#! /usr/bin/env node
import inquirer from "inquirer";

let mybalance = 10000
let myPin = 1234

let pinAnswer= await inquirer.prompt([{
    name: "pin",
    message: "Enter your correct pin",
    type: "number"
}]);

// CONDITIONAL STATEMENT
 if(pinAnswer.pin === myPin){
    console.log("Correct pin code!!!");

let OperationAns = await inquirer.prompt([{
    name:"Operation",
    message:"Select one option:",
    type:"list",
    choices:["Withdraw" , "Check balance", "Fast cash"],
  }])

  if (OperationAns.Operation=== "Withdraw"){
 let amountAns = await inquirer.prompt([{
    name:"amount",
    message: "Enter the amount:",
    type:"number"
 }])
    mybalance -= amountAns.amount ;
    console.log("Your remaining balance is:" + mybalance) // withdraw
  }

   else if (OperationAns.Operation==="Check balance"){
    console.log("Your current balance is:" + mybalance) // check blnc
   }

  else if(OperationAns.Operation === "Fast cash"){        // Fast cash
    let Fast= await inquirer.prompt([{
      name: "Fast_opr",
      message:"How much money you use withdraw?:",
      type:"list",
      choices:["1000", "2000", "3000"]
    }])

    if (Fast.Fast_opr === "1000"){                      
      mybalance -= Fast.Fast_opr
      console.log(`Your remaining balance is ${mybalance}:`) // 1000 oprtn
    }

    if (Fast.Fast_opr === "2000"){                         
      mybalance -= Fast.Fast_opr
      console.log(`Your remaining balance is ${mybalance}:`)  /// 2000 oprtn
    }

    if (Fast.Fast_opr === "3000"){                           
      mybalance -= Fast.Fast_opr
      console.log(`Your remaining balance is ${mybalance}:`)   /// 3000 oprtn
    }}
    else {console.log ("Invalid pin number!")}
  }
    
 else{console.log("Incorrect Pin code!")}
