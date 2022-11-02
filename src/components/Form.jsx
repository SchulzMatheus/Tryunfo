import { Component } from 'react';
import prop from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Form.css';

export default class Form extends Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, onInputChange, onSaveButtonClick,
      hasTrunfo } = this.props;
    const mp = 210;
    const lfPoints = mp - (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));
    return (
      <form className="form form-group" action="get">
        <div className="form-group nameText">
          <label htmlFor="cardName">
            <strong>Nome</strong>
            <input
              className="form-control"
              type="text"
              data-testid="name-input"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardDescription">
            <strong>Descrição</strong>
            <textarea
              className="form-control textarea"
              data-testid="description-input"
              name="cardDescription"
              rows={ 3 }
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <hr />
        <div className="atribute">
          <div className="form-group row">
            <label htmlFor="cardAttr1">
              <strong>Attr01</strong>
              <input
                max={ 90 }
                min={ 0 }
                className="form-control"
                type="number"
                data-testid="attr1-input"
                name="cardAttr1"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="cardAttr2">
              <strong>Attr02</strong>
              <input
                max={ 90 }
                min={ 0 }
                className="form-control"
                type="number"
                data-testid="attr2-input"
                name="cardAttr2"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="cardAttr3">
              <strong>Attr03</strong>
              <input
                max={ 90 }
                min={ 0 }
                className="form-control"
                type="number"
                data-testid="attr3-input"
                name="cardAttr3"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>
        </div>
        <p>{`Total de pontos = ${lfPoints}`}</p>
        <hr />
        <label htmlFor="cardImage">
          <strong>Selecione uma Imagem</strong>
          <div className="form-group">
            <input
              className="form-control-file"
              type="text"
              name="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </div>
        </label>
        <hr />
        <div className="form-group col-md-4">
          <label htmlFor="cardRare">
            <strong>Raridade</strong>
            <select
              className="form-control"
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          {
            hasTrunfo ? <p><strong>Você já tem um Super Trunfo em seu baralho</strong></p>
              : (
                <div className="form-check">
                  <label className="form-check-label" htmlFor="cardTrunfo">
                    <strong>Super Trunfo</strong>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="cardTrunfo"
                      data-testid="trunfo-input"
                      checked={ cardTrunfo }
                      onChange={ onInputChange }
                    />
                  </label>
                </div>
              )
          }
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: prop.string,
  cardDescription: prop.string,
  cardAttr1: prop.string,
  cardAttr2: prop.string,
  cardAttr3: prop.string,
  cardImage: prop.string,
  cardRare: prop.string,
  cardTrunfo: prop.bool,
  hasTrunfo: prop.bool,
  isSaveButtonDisabled: prop.bool,
  onInputChange: prop.func,
  onSaveButtonClick: prop.func,
}.isRequired;
