import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import Navbar from './Components/Navbar';
import Card from './Components/Card';

const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCH: 2
}

class App extends Component {
  constructor(props) {
    super(props);
    let cards = [
      {
        id: 0,
        cardState: CardState.HIDING,
        backgroundColor: "red"
      }, {
        id: 1,
        cardState: CardState.HIDING,
        backgroundColor: "red"
      }, {
        id: 2,
        cardState: CardState.HIDING,
        backgroundColor: "blue"
      }, {
        id: 3,
        cardState: CardState.HIDING,
        backgroundColor: "blue"
      }, {
        id: 4,
        cardState: CardState.HIDING,
        backgroundColor: "yellow"
      }, {
        id: 5,
        cardState: CardState.HIDING,
        backgroundColor: "yellow"
      }, {
        id: 6,
        cardState: CardState.HIDING,
        backgroundColor: "purple"
      }, {
        id: 7,
        cardState: CardState.HIDING,
        backgroundColor: "purple"
      }, {
        id: 8,
        cardState: CardState.HIDING,
        backgroundColor: "salmon"
      }, {
        id: 9,
        cardState: CardState.HIDING,
        backgroundColor: "salmon"
      }
    ];
    cards = shuffle(cards);
    this.state = {
      cards,
      noClick: false
    },
    this.handleClick = this
      .handleClick
      .bind(this);
    this.handleNewGame = this
      .handleNewGame
      .bind(this);
  }

  handleNewGame = () => {
    let cards = this
      .state
      .cards
      .map(c => ({
        ...c,
        cardState: CardState.HIDING
      }))
    cards = shuffle(cards);
    this.setState({cards});
  }

  // cardClicked = (id) => {
  //   this.setState(prevState => {
  //     let cards = prevState
  //       .cards
  //       .map(c => (c.id === id
  //         ? {
  //           ...c,
  //           cardState: c.cardState === CardState.HIDING
  //             ? CardState.MATCHING
  //             : CardState.HIDING
  //         }
  //         : c))
  //     return {cards}
  //   })
  // }

   handleClick(id) {
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(c => {
        if (idsToChange.includes(c.id)) {
          return {
            ...c,
            cardState: newCardState
          };
        }
        return c;
      });
    }

    const foundCard = this.state.cards.find(c => c.id === id);
    
    if (this.state.noClick || foundCard.cardState !== CardState.HIDING) {
      return;
    }
    
    let noClick = false;
    
    let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);
    
    const showingCards =  cards.filter((c) => c.cardState === CardState.SHOWING);
    
    const ids = showingCards.map(c => c.id);
    
    if (showingCards.length === 2 &&
        showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
      cards = mapCardState(cards, ids, CardState.MATCHING);
    } else if (showingCards.length === 2) {
      let hidingCards = mapCardState(cards, ids, CardState.HIDING);
      
      noClick = true;
      
      this.setState({cards, noClick}, () => {
        setTimeout(() => {
          // set the state of the cards to HIDING after 1.3 seconds
          this.setState({cards: hidingCards, noClick: false});
        }, 1300);
      });
      return;
    }
    
    this.setState({cards, noClick});
  }


  render() {
    const cards = this
      .state
      .cards
      .map(card => (<Card
        key={card.id}
        showing={card.cardState !== CardState.HIDING}
        backgroundColor={card.backgroundColor}
        clicked={() => this.handleClick(card.id)}/>))
    return (
      <div className="App">
        <Navbar onNewGame={this.handleNewGame}/> {cards}
      </div>
    );
  }
}

export default App;
