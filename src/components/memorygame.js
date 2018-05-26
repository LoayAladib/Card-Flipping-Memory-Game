import React, { Component } from 'react';
import Card from './card';
import PropTypes from 'prop-types';

class MemoryGame extends Component {
    constructor(props) {
        super(props);
        this.state = this.setInitialState(props.cards);
        this.clickedCard = this.clickedCard.bind(this);
      }

  componentWillReceiveProps(nextProps) {
    this.setState(this.setInitialState(nextProps.cards));
  }

  setCards(cards) {
    return cards
      .concat(cards)
      .reduce((array, current) => {
        array.push({
          card: current,
          selected: false,
          matched: false
        });
        return array;
      }, []);
  }

  setInitialState(cards) {
    return {
      cards: this.setCards(cards),
      selected: null,
      gameover: false,
      paused: false,
      matches: 0
    };
  }

  isMatch(index1, index2) {
    const cards = this.state.cards;
    const card1 = cards[index1].card.replace(/ /g, '-').toLowerCase();
    const card2 = cards[index2].card.replace(/ /g, '-').toLowerCase(); 
    return card1 === card2;
  }

  clickedCard(index) {
    if (this.state.paused) {
        return;
        }
    const cards = this.state.cards;
    cards[index].selected = true;
    
    this.setState({
    cards,
    paused: true
    });

    if (!this.state.selected && this.state.selected !== 0) {
      this.setState({
        selected: index,
        paused: false
      });

    } else {
      if (this.isMatch(index, this.state.selected)) {
        const matches = this.state.matches + 1;
        cards[index].matched = true;
        cards[this.state.selected].matched = true;
        this.setState({
          cards,
          selected: null,
          paused: false,
          matches,
          gameover: matches === this.state.cards.length / 2
        });
      } else {
        setTimeout(() => {
          cards[index].selected = false; 
          cards[this.state.selected].selected = false;
          this.setState({
            cards,
            selected: null,
            paused: false
          });
        }, 700);
      }
    }
  }

  render() {
    const finish = this.state.gameover ? (<div className="message">
      <h2>{`Congratulations! You've won the game`}</h2>
    </div>) : null;

    const cards = this.state.cards.map((card, index) => ((
      <Card
        key={index}
        card={card.card}
        matched={card.matched}
        selected={card.selected}
        index={index}
        clickedCard={this.clickedCard}
      />
    )));
    return (
      <div className="cards-wrapper clear">
       {finish}
        <div id="cards">
          {cards}
        </div>
      </div>
    );
  }
}

MemoryGame.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  };

export default MemoryGame;