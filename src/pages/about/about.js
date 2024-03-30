import React from 'react';
import "../../App.css";
import "./about.css";
import { ReactComponent as ExerciceIcon } from "../../images/exercice.svg";
import { ReactComponent as DumbellIcon } from "../../images/dumbell.svg";
import { ReactComponent as TechIcon } from "../../images/tech.svg";
import { ReactComponent as AppleIcon } from "../../images/apple.svg";
import { ReactComponent as ComunityIcon } from "../../images/comunity.svg";
import { ReactComponent as PointersIcon } from "../../images/pointers.svg";
import Reason from '../../components/reason/reason';

function About() {
  return (
    <div className="about container">
      <main>
        <h1 className="title">Sobre a nossa academia</h1>
        <h2 className="subtitle">Por que escolher a GaiaGym?</h2>
        <section className="aboutReasonsBox">
          <Reason
            reasonColor="#cb0000"
            reasonTitle="Pessoal"
            reasonIcon={ExerciceIcon}
            reasonSubtitle="Independente do plano, nossos profissionais estarão a sua disposição"
          />
          <Reason
            reasonColor="#2ecb00"
            reasonTitle="Equipamentos"
            reasonIcon={DumbellIcon}
            reasonSubtitle="Acesso aos mais modernos equipamentos de musculação"
          />
          <Reason
            reasonColor="#e5bc00"
            reasonTitle="Tecnologia de ponta"
            reasonIcon={TechIcon}
            reasonSubtitle="Equipamentos e aplicativos avançados para monitoramento de treino"
          />
          <Reason
            reasonColor="#006ce5"
            reasonTitle="Suporte Nutricional"
            reasonIcon={AppleIcon}
            reasonSubtitle="Aproveite as consultas com nossos especialistas em nutrição"
          />
          <Reason
            reasonColor="#ff8f00"
            reasonTitle="Comunidade Ativa"
            reasonIcon={ComunityIcon}
            reasonSubtitle="Participe de eventos, desafios em grupo e atividades sociais para manter-se motivado"
          />
          <Reason
            reasonColor="#ae00ff"
            reasonTitle="Flexibilidade de Planos"
            reasonIcon={PointersIcon}
            reasonSubtitle="Escolha entre uma variedade de planos que se adaptam ao seu estilo de vida e necessidades"
          />
        </section>
      </main>
    </div>
  );
}

export default About;
