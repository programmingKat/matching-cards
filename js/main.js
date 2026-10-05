//document.querySelector('div').addEventListener('click', )
let container = document.querySelector('.container')
let card1 = undefined //why do we have to assign them as undefined
let card2 = undefined // why can't we just declare it w/o assignment
let cardsFlipped = 0
container.addEventListener('click', run)

//if a card is faceback and clicked, 
//then flip stay face foward
// function flip(){

// }

function setBoard(){
    container.innerHTML = ""
    //5cards - Math.random *5.floor()
    // array of 5 different values bc u need 2 matches 
    let cardsArr = ["💛", "🤎", "🧸","🍯", "✨", "💛", "🤎", "🧸","🍯", "✨"] 
    
    while(cardsArr.length > 0){
        //5cards - Math.random *5.floor()
        const index = Math.floor((Math.random() * cardsArr.length))

        let newDiv = document.createElement('div')
        newDiv.textContent = "card"
        container.appendChild(newDiv)

        newDiv.classList.add(cardsArr[index])

        cardsArr.splice(index,1)
    }

    card1 = undefined
    card2 = undefined
}
setBoard()
function run(event){
    console.log(event)
    event.target.textContent = event.target.className // don;t understand .className WHY
    if (card1 != undefined){
       card2 = event.target // SO CONFUSED
    }else{
        card1= event.target
        return
    }

    if (card1.className === card2.className){
        alert("Match!")
    }else{
        console.log("try again")
        card1.textContent = "card"
        card2.textContent = "card"
    }
}

function reset(){
    
}

//10 cards load
// on click container
//cardsflipped - to store how many cards flipped
// when flip() runs cardflipped +=1
//if card face = back, then flip
// if cardsFlippped = 2, then check for win? 
    // if card1.val == card2.val then win
    //else flip back cardFlipped reset to 0
