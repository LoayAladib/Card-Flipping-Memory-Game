import React, { Component } from 'react';
import MemoryGame from './memorygame';
import Header from './header';
import PropTypes from 'prop-types';

class Launch extends Component {
    constructor(props) {
        super(props);
        this.state = {
          gameLaunched: false,
          cards: []
        };
        this.startReplayGame = this.startReplayGame.bind(this);
      }

    startReplayGame() {
    const cards = this.props.cards.slice(0).sort(() => 0.5 - Math.random()).slice(0, 6);
    this.setState({
      gameLaunched: true,
      cards
    });
  }

  render() {
    const game = <MemoryGame cards={this.state.cards} />
      const button = <button className="btn" onClick={this.startReplayGame}>Lets Play !</button>
  
    return (
        <div>
           <Header button={button} />
            <div className="wrapper">
            {game}
            </div>
      </div>
      );
    }
  }


Launch.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  };

export default Launch;
