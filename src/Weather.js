import React from 'react';
import InfoCell from './components/InfoCell';
import './main.css';

export class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      show: false,
    };
  }

  handleInput = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  handleSelect = (event) => {
    this.setState({
      selectValue: event.target.value,
    });
  };

  handleButton = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  today = new Date();

  render() {
    return (
      <>
        <h1>
          COVIDados <i className="fas fa-virus-slash"></i>
        </h1>

        <input
          className="input-state"
          type="text"
          value={this.state.city}
          onChange={this.handleInput}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              this.handleButton();
            }
          }}
        />
        <label>
          Escreva o nome da Unidade Federativa ou, escreva a sua sigla
        </label>
        <br />
        <button className="btn-search" onClick={this.handleButton}>
          {this.state.show ? (
            <>
              <i className="fas fa-times-circle"></i> <span>CANCELAR</span>
            </>
          ) : (
            <>
              <i className="fas fa-search"></i> <span>PROCURAR</span>
            </>
          )}
        </button>
        {this.state.show && <InfoCell city={this.state.city} />}
        <div className="example">
          {!this.state.show && <small>Exemplo: Paraná ou PR</small>}
          {
            <p>
              Última atualização dos dados:{' '}
              {this.today.toLocaleDateString('en-US').toString()}
            </p>
          }
        </div>
      </>
    );
  }
}

export default Weather;
