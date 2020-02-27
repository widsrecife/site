import React from 'react';
import './conductCode.css';

import Header from '../Header';

import '../../assets/lib/bulma.css';
import divisor from '../../assets/img/site-divisor-svg.svg';
import poster from '../../assets/img/img-cond-conduta.png';

const ConductCode = () => (
  <div className="conduct" id="conduta">
    <Header poster={poster} />
    <h1 className="conduct__title">Código de Conduta</h1>
    <img className="divisor" src={divisor} alt="Formas geométricas" />

    <p className="conduct__text">Participantes, palestrantes, representantes de empresas e pessoas voluntárias da conferência precisam concordar com este código de conduta. A equipe organizadora vai reforçar que este código seja seguido durante todo o evento. Esperamos a cooperação de todas as partes para ajudar a garantir um ambiente seguro para qualquer pessoa.</p>
    <div className="space"></div>

    <h2 className="conduct__subtitle">Versão rápida</h2>
    <p className="conduct__text">Nossa conferência é dedicada a fornecer uma experiência livre de assédio para todas as pessoas, independentemente do sexo, identidade de gênero e expressão, idade, orientação sexual, deficiência, aparência física, tamanho corporal, cor de pele, etnia, religião (ou falta dela) ou escolhas de tecnologias. Não toleramos o assédio a participantes da conferência, sob qualquer forma. </p>
    <div className="space"></div>

    <p className="conduct__text">Linguagem e imagens sexuais não são apropriadas em nenhum local, incluindo palestras, workshops, festas, Twitter e outras mídias on-line. Violações destas regras poderão causar expulsão da conferência, sem restituição, a critério da equipe organizadora.</p>
    <div className="space"></div>

    <h2 className="conduct__subtitle">Versão extendida</h2>
    <p className="conduct__text">Constituem assédio comentários verbais ofensivos relacionados a gênero, identidade de gênero e expressão, idade, orientação sexual, deficiência, aparência física, tamanho corporal, cor de pele, etnia, religião, escolhas de tecnologias, imagens sexuais em espaços públicos, intimidação deliberada, perseguição, stalking, fotografias ou filmagens constrangedoras, interrupção contínua das apresentações ou outros eventos, contato físico inadequado e atenção sexual indesejada. </p>
    <div className="space"></div>

    <p className="conduct__text">Participantes que receberem uma solicitação para interromper qualquer comportamento de assédio devem fazer isso imediatamente. </p>
    <div className="space"></div>

    <p className="conduct__text">As políticas antiassédio também se aplicam a representantes de empresas patrocinadoras. Em particular, não devem usar imagens, atividades ou outro material de cunho sexual. As equipes de estandes e tendas (incluindo pessoas voluntárias) não devem utilizar roupas, uniformes ou trajes sexualizados ou criar um ambiente sexualizado de quaisquer formas. </p>
    <div className="space"></div>

    <p className="conduct__text">e alguém se envolver em comportamento de assédio, a equipe organizadora poderá tomar todas as medidas que considerar adequadas, incluindo avisar a pessoa ofensora ou expulsá-la da conferência sem nenhum reembolso. </p>
    <div className="space"></div>
    
    <p className="conduct__text">Caso sofra assédio, perceba que alguém esteja sofrendo assédio ou tenha alguma dúvida, entre em contato com alguém da organização imediatamente. As pessoas da equipe da conferência podem ser identificadas, pois estarão vestindo camisetas marcadas. </p>
    <div className="space"></div>

    <p className="conduct__text">A organização estará disposta a auxiliar participantes a entrar em contato com a segurança do hotel ou local, bem como aplicar a legislação pertinente, fornecer escoltas ou ajudar pessoas que sofrerem assédio para que se sintam seguras durante a conferência. Valorizamos sua participação. </p>
    <div className="space"></div>

    <p className="conduct__text">Esperamos que todas as pessoas participantes sigam estas regras em salas de apresentação e workshops da conferência, além de eventos sociais relacionados.</p>
    <div className="space"></div>
  
    <div className="conduct__card">
      Caso você não se sinta insegura e necessite reportar uma violação ao Código de Conduta, entre em contato com Ana Cecília ou Deborah pessoalmente ou por e-mail (widsrecife@gmail.com).
    </div>
    <div className="space"></div>

  </div>
)

export default ConductCode;
