import React, { Component } from 'react';
import '../cell.css';

export class InfoCell extends Component {
  componentDidMount() {
    const url =
      'https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true';

    var cityInput = this.props.city;

    switch (cityInput.toLowerCase()) {
      case 'sao paulo':
      case 'são paulo':
        cityInput = 'SP';
        break;
      case 'bahia':
        cityInput = 'BA';
        break;
      case 'rio de janeiro':
        cityInput = 'RJ';
        break;
      case 'minas gerais':
        cityInput = 'MG';
        break;
      case 'ceara':
        cityInput = 'CE';
        break;
      case 'para':
        cityInput = 'PA';
        break;
      case 'santa catarina':
        cityInput = 'SC';
        break;
      case 'distrito federal':
        cityInput = 'DF';
        break;
      case 'maranhao':
      case 'maranhão':
        cityInput = 'MA';
        break;
      case 'goias':
      case 'goiás':
        cityInput = 'GO';
        break;
      case 'parana':
      case 'paraná':
        cityInput = 'PR';
        break;
      case 'rio grande do sul':
        cityInput = 'RS';
        break;
      case 'pernambuco':
        cityInput = 'PE';
        break;
      case 'amazonas':
        cityInput = 'AM';
        break;
      case 'espirito santo':
      case 'espírito santo':
        cityInput = 'ES';
        break;
      case 'paraiba':
      case 'paraíba':
        cityInput = 'PB';
        break;
      case 'mato grosso':
        cityInput = 'MT';
        break;
      case 'alagoas':
        cityInput = 'AL';
        break;
      case 'piaui':
      case 'piauí':
        cityInput = 'PI';
        break;
      case 'sergipe':
        cityInput = 'SE';
        break;
      case 'rio grande do norte':
        cityInput = 'RN';
        break;
      case 'rondonia':
      case 'rondônia':
        cityInput = 'RO';
        break;
      case 'tocantins':
        cityInput = 'TO';
        break;
      case 'mato grosso do sul':
        cityInput = 'MS';
        break;
      case 'roraima':
        cityInput = 'RR';
        break;
      case 'amapa':
      case 'amapá':
        cityInput = 'AP';
        break;
      case 'acre':
        cityInput = 'AC';
        break;
      default:
        break;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data['deceasedByRegion'].map((city) => {
          if (city.state === cityInput.toUpperCase()) {
            let numInThousands = city.count
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
              .bold();

            document.getElementById(
              'deceased'
            ).innerHTML = `${city.state} possui ${numInThousands} mortos.`;
          }
        });
        data['infectedByRegion'].map((city) => {
          if (city.state === cityInput.toUpperCase()) {
            let posInRank = data['infectedByRegion'].indexOf(city) + 1;
            let numInThousands = city.count
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
              .bold();
            let MaracanaNum = Math.round(city.count / 78838);
            let maracanaMessage =
              MaracanaNum > 0
                ? `Isto seria, aproximadamente, ${MaracanaNum} Maracanãs cheios de contagiados.`
                : '';

            document.getElementById(
              'infected'
            ).innerHTML = `Além disso, apresenta ${numInThousands} infectados, ocupando a ${posInRank}° posição  do país. ${maracanaMessage}`;
          }
        });
      });
  }
  render() {
    return (
      <div id="main">
        <i className="fas fa-cross"></i>
        <div id="deceased">Procurando... verifique se digitou corretamente</div>
        <i className="fas fa-procedures"></i>
        <div id="infected"></div>
      </div>
    );
  }
}

export default InfoCell;
