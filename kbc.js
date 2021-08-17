console.log(" -: WEL COME KBC :- ")
let prompt = require("prompt-sync")();
let name = prompt("Enter your Good name :- ")
console.log("Thank You :- ",name)
let Question = ["1) How many continents are there ?","2) What is the capital of India ?","3) NG mei kaun se course padhaya jata hai ?"]
let Option = [["Four","Nine","Seven","Eight"],["Chandigarh","Bhopal","Chennai","Delhi"],["Software Engineering","Counselling","Tourism","Agriculture"]]
let Solution = [3,4,1]
let fifty = ["1 Four \n2 Seven","1 Bhopal \n2 Delhi","1 Counselling \n2 Software Engineering "]
// let index = 0
let check = 0
let Money = 0
let Amount = 0
for (let x in Question){
    console.log("Aapka Sawal hai :--")
    console.log(Question[x])
    console.log()
    var num = 1
    for (let y of Option[x]){
        console.log(num+") "+y)
        num++
    }
    Money +=1000
    console.log()
    console.log("First question  :- ", Money,"Rupye Ke liye\n:- Chooes any one option")
    if (check == x){
        console.log(":- You can use 5050 Life-Line")
    }
    let Guess = Number(prompt("Enter number :- "))
    if (Guess == Solution[x]) {
        console.log("Congrats ! Aapka Ans sahi hai")
        Amount += Money
    } else if (Guess == 5050){
        if (check == x ) {
            check +=1
            console.log()
            console.log("5050 Lifeline - You can use only one Time")
            for (let z in fifty) {
                if (z == x){
                    console.log(fifty[z])
                }
            }
            let chooes = Number(prompt("Choose any one :- "))
            if (chooes == 2){
                console.log("Congrats ! You are Right Answer")
                Amount +=Money
            } else {
                console.log("Sadly You have wrong Answer !")
                console.log("Sorry You are Out this Game")
                break
            }
        } else{
            console.log("Sorry You have alreday used Life-line")
            break
        }

    } else {
        console.log("Sadly You have wrong Answer !")
        console.log("Sorry You are Out this Game")
        break
    }
    check  +=1
    console.log("**************")
    console.log()
} console.log("You won :- ",Amount,"Rs.") 