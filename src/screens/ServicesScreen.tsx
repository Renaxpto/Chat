import React from "react";
import type { ScreenProps } from "../types";
import HeaderTitle from "../layout/HeaderTitle";

export const ServicesScreen: React.FC<ScreenProps> = ({ goBack }) => (
  <div className="screen">
    <HeaderTitle title="Serviços Municipais" onBack={goBack} />

    <section className="card">
      <h3 className="card-title">Sobre os serviços</h3>
      <p className="card-text">
        A Câmara Municipal disponibiliza diversos serviços de apoio aos municípios,
        empresas e instituições, nas áreas de urbanismo, ambiente, ação social,
        educação, cultura e muito mais.
      </p>
      <p className="card-text">
        Alguns serviços podem ser iniciados online através das secções{" "}
        <strong>Pedidos / Requerimentos</strong> e <strong>Pagamentos</strong> da
        aplicação.
      </p>
    </section>

    <section className="card">
      <h3 className="card-title">Infraestruturas e ambiente</h3>
      <ul className="list">
        <li>
          <strong>Água e Saneamento</strong> – gestão de contratos, faturas e
          intervenções na rede.
        </li>
        <li>
          <strong>Ambiente e Espaços Verdes</strong> – manutenção de jardins,
          limpeza urbana e recolha de resíduos.
        </li>
        <li>
          <strong>Iluminação pública</strong> – reporte de avarias e pedidos de
          intervenção.
        </li>
      </ul>
    </section>

    <section className="card">
      <h3 className="card-title">Urbanismo e desenvolvimento</h3>
      <ul className="list">
        <li>
          <strong>Urbanismo e Obras Particulares</strong> – licenciamento de obras,
          projetos e informações urbanísticas.
        </li>
        <li>
          <strong>Ordenamento do Território</strong> – planos municipais e
          cartografia.
        </li>
        <li>
          <strong>Atividade económica</strong> – apoio a comércio local e mercados
          municipais.
        </li>
      </ul>
    </section>

    <section className="card">
      <h3 className="card-title">Pessoas e comunidade</h3>
      <ul className="list">
        <li>
          <strong>Educação e Juventude</strong> – rede escolar, transportes
          escolares e programas juvenis.
        </li>
        <li>
          <strong>Ação Social</strong> – apoio a famílias, população sénior e
          pessoas em situação de vulnerabilidade.
        </li>
        <li>
          <strong>Saúde e bem-estar</strong> – programas de promoção da saúde em
          articulação com entidades locais.
        </li>
      </ul>
    </section>

    <section className="card">
      <h3 className="card-title">Cultura, desporto e turismo</h3>
      <ul className="list">
        <li>
          <strong>Cultura</strong> – bibliotecas, museus, programação cultural e
          apoio ao associativismo.
        </li>
        <li>
          <strong>Desporto</strong> – equipamentos desportivos municipais e
          iniciativas de desporto para todos.
        </li>
        <li>
          <strong>Turismo</strong> – promoção do património, visitas guiadas e
          postos de turismo.
        </li>
      </ul>
    </section>

    <section className="card">
      <h3 className="card-title">Atendimento e contactos</h3>
     <p className="card-text">
  Para informações mais detalhadas sobre cada serviço, utilize a área de{" "}
  <strong>Contactos</strong> ou dirija-se ao <strong>Balcão Único</strong>.
</p>
      <p className="card-text">
        Alguns pedidos específicos podem também ser feitos através de{" "}
        <strong>Reportar Problema</strong>, por exemplo em situações relacionadas
        com via pública ou limpeza urbana.
      </p>
    </section>
  </div> 
);

export default ServicesScreen;
