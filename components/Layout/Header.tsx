import { FC } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import HeaderTop from './HeaderTop';
import Baner from '../baner';
import EquiposT from '../EquiposT';
import Preserva from '../Preserva';

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta
          name="keywords"
          content="instalación, refrigeración, aire acondicionado, ventilación, conservación en caliente, cocina"
        />
        <meta
          name="rights"
          content="CORPORACIÓN DE SERVICIOS ESPECIALIZADOS FLORES SAC"
        />
        <meta
          name="description"
          content="Somos una empresa especializada en el servicio de instalación, mantenimiento y análisis de equipos para refrigeración, aire acondicionado, ventilación, conservación en caliente y cocina, respondemos rápidamente a las necesidades de nuestros clientes ofreciéndole una solución integral a sus necesidades, estamos conformados por un grupo de profesionales que suman más de 50 años de experiencia y especialización."
        />
        <title>{title}</title>
      </Head>
      <HeaderTop />
      <header>
        <Navbar />
      </header>
      <body>
        <Baner />
        <EquiposT />
        <Preserva />
      </body>
      
    </>
  );
};

export default Header;
