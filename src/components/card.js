import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CARDS_IMAGES from '../cards-images';

class Card extends Component {
  constructor(props) {
    super(props);
    this.cardClick = this.cardClick.bind(this);
  }

  cardClick() {
    if (!this.props.selected) {
      this.props.clickedCard(this.props.index);
    }
  }

  render() {
    const selected = classNames({
      matched: this.props.matched,
      selected: this.props.selected
    });
    return (
      <div className={`flip effect__hover ${selected}`} onClick={this.cardClick} role="button" tabIndex={-1}>
        <div className="flip__back">
          <div className={`card ${selected}`}>
            <img className="image" src={CARDS_IMAGES[this.props.card.replace(/ /g, '-').toLowerCase()]} alt="" />
            <p className="card-name">{this.props.card}</p>
          </div>
        </div>
        <div className="flip__front">
          <div className="card" />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.string.isRequired,
  matched: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  clickedCard: PropTypes.func.isRequired
};

export default Card;
