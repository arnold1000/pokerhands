import React, { useState } from 'react'



var cards = [
  "AC",
  "2C",
  "3C",
  "4C",
  "5C",
  "6C",
  "7C",
  "8C",
  "9C",
  "TC",
  "JC",
  "QC",
  "KC",
  "AS",
  "2S",
  "3S",
  "4S",
  "5S",
  "6S",
  "7S",
  "8S",
  "9S",
  "TS",
  "JS",
  "QS",
  "KS",
  "AD",
  "2D",
  "3D",
  "4D",
  "5D",
  "6D",
  "7D",
  "8D",
  "9D",
  "TD",
  "JD",
  "QD",
  "KD",
  "AH",
  "2H",
  "3H",
  "4H",
  "5H",
  "6H",
  "7H",
  "8H",
  "9H",
  "TH",
  "JH",
  "QH",
  "KH"
  
]





const App = () => {

  const [ url , setNewUrl ] = useState(["/PNG/AS.png","/PNG/AC.png"])
 
  const setCards = (x,y) => {
    var num1 = Math.floor(Math.random() * 52)
    var num2 = Math.floor(Math.random() * 52)
    
    if(num1 === num2){
      while(num1 === num2){
        num2 = Math.floor(Math.random() * 52)
      }
    }

    var card1 = cards[num1]
    var card2 = cards[num2]

    var card1url = "/PNG/" + card1 + ".png"
    var card2url= "/PNG/" + card2 + ".png"
    var newurl = [card1url,card2url]
    
    setNewUrl(newurl)

  }
  



 

  return (
    <div className = "container-fluid" style={{display : 'block'} } >
      
      <div>
        <img src = {url[0]} width = "200" height = "300" alt = ""></img>
        <img src = {url[1]} width = "200" height = "300" alt = ""></img>
        
      </div>

      <div style={{margin : 100} }>
      <button onClick = {() => setCards()} type="button" className="btn btn-dark">Generate</button>
      </div>

    



    </div>
  );
}

export default App;
