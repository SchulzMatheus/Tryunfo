import React, { Component } from 'react';
import prop from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';

export default class Card extends Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.props;
    return (
      <div className="cardContent">
        <div className="nameImgContent">
          <p className="cardName" data-testid="name-card">{ cardName }</p>
          <img
            className="img"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
        </div>
        <div className="descriptionContent">
          <p data-testid="description-card">{ cardDescription }</p>
        </div>
        <div className="AttrContent">
          <div className="att1Content">
            <p data-testid="attr1-card">
              Attr01....................................
              <span className="att1">
                { cardAttr1 }
              </span>
            </p>
          </div>
          <div className="att1Content">
            <p data-testid="attr2-card">
              Attr02....................................
              <span className="att1">
                { cardAttr2 }
              </span>
            </p>
          </div>
          <div className="att1Content">
            <p data-testid="attr3-card">
              Attr03....................................
              <span className="att1">
                { cardAttr3 }
              </span>
            </p>
          </div>
        </div>
        <p className="raridade" data-testid="rare-card">{ cardRare }</p>
        <div className="supertrunfo">
          { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : undefined}
        </div>
      </div>

    );
  }
}

Card.propTypes = {
  cardName: prop.string,
  cardDescription: prop.string,
  cardAttr1: prop.string,
  cardAttr2: prop.string,
  cardAttr3: prop.string,
  cardImage: prop.string,
  cardRare: prop.string,
  cardTrunfo: prop.bool,
}.isRequired;
