import React , {useState} from 'react';
import './App.css';
import Card  from "./Card";
import { slide as Menu } from 'react-burger-menu'

function LoadCards() {
  let data = [
    {key: "1", id: 1, front:'front1 front1 front1 front1 front1 front1 front1 front1 front1 front1 front1 front1 front1 front1 front1 front1 front1 front1 ', back:'back1'},
    {key: "2", id: 2, front:'front2', back:'back2'},
    {key: "3", id: 3, front:'front3', back:'back3'},
  ]
  return data.map(d => <Card key={d.key} front={d.front} back={d.back} id={d.id}></Card>)
}
function App() {
const [cardIndex, setCardIndex] = useState(0)
let cards = LoadCards()

let showSettings = (event) => {
  event.preventDefault();
}

let moveIndex = (i) => {
  let updateIndex = cardIndex + i
  console.log(updateIndex)
  if(updateIndex < 0 )
    setCardIndex(cards.length-1)
  else 
    setCardIndex(updateIndex%cards.length)
}
  return (
    <div>
    <Menu>
      <a id="home" className="menu-item" href="/">Home</a>
      <a onClick={() => showSettings()} className="menu-item--small" href="">Settings</a>
    </Menu>
    <div >
      <header className="App-header">
        {cards[cardIndex]}
        <button onClick={() => moveIndex(-1)}>Previous</button>
        <button onClick={() => moveIndex(1)}>Next</button>
      </header>

    </div>
    </div>
  );
}

export default App;
