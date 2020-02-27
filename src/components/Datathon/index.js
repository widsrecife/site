import React from 'react';
import './datathon.css';

import Header from '../Header';

import '../../assets/lib/bulma.css';
import divisor from '../../assets/img/site-divisor-svg.svg';
import poster from '../../assets/img/img-datathon.png';

const Datathon = () => (
  <div className="dathaton" id="dathaton">
    <Header poster={poster} />
    <h1 className="dathaton__title">Datathon</h1>
    <img className="divisor" src={divisor} alt="Formas geométricas" />

    <p className="dathaton__text">Anualmente o evento global Women in Data Science promove um Datathon com o objetivo de incentivar mulheres a aprenderem mais sobre Ciência de Dados e criar oportunidades de mulheres com interesses em comum se conectarem para solucionar um pro- blema real. A competição está pensada para diversos níveis de conhecimento, desde pessoas iniciantes até experientes na área. Os times são compostos por no máximo 4 pessoas, sendo no mínimo 2 mulheres.</p>
    <div className="space"></div>

    <p className="dathaton__text">No Datathon 2020 serão usados dados de saúde, com foco na importância da ética e privacidade dos dados. </p>
    <div className="space"></div>

    <div className="dathaton__center">
      <p className="dathaton__text">Ficou curiosa e quer saber mais informações sobre a competição?</p>
      <div className="space"></div>

      <a className="dathaton__btn" href="https://www.widsconference.org/datathon.html">Dathaton WiDS</a>      
    </div>

  </div>
)

export default Datathon;
