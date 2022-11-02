import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      deck: [],
      hasTrunfo: '',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, deck, hasTrunfo,
    } = this.state;

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      hasTrunfo: cardTrunfo,
      cardTrunfo: '',
    });

    deck.push({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    });
  };

  handleDelete = (event, cardTrunfo) => {
    const { deck } = this.state;
    const newList = deck;
    newList.splice(event, 1);
    this.setState({
      deck: newList,
      hasTrunfo: cardTrunfo,
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, deck } = this.state;
    const maxBuild = 210;
    const maxStats = 90;
    const auxAtt = [cardAttr1, cardAttr2, cardAttr3];
    const aux = [cardName, cardImage, cardDescription];
    const build = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    return (
      <div>
        <div>
          <div className="addNewCard">
            <h1 className="formTitle">ADICIONE NOVA CARTA</h1>
            <h1 className="preView">PRÉ-VISUALIZAÇÃO</h1>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardRare={ cardRare }
              cardImage={ cardImage }
              state={ this.state }
              onInputChange={ this.handleChange }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ aux.some((e) => e.length <= 0) || build > maxBuild
    || auxAtt.some((attr) => attr < 0) || auxAtt.some((attr) => attr > maxStats) }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              onInputChange={ this.handleChange }
            />
          </div>
          <div>
            {deck.map((e, value) => (
              <div key={ value }>
                <Card
                  cardName={ e.cardName }
                  cardDescription={ e.cardDescription }
                  cardAttr1={ e.cardAttr1 }
                  cardAttr2={ e.cardAttr2 }
                  cardAttr3={ e.cardAttr3 }
                  cardImage={ e.cardImage }
                  cardRare={ e.cardRare }
                  cardTrunfo={ e.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  value={ e.name }
                  onClick={ this.handleDelete }
                >
                  Excluir
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
