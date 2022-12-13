import { FaBeer } from 'react-icons/fa';

const Preserva = () => {
  return (
    <div className='flex mt-9  mx-96'>
      <img  src="https://corporacionfloresac.com.pe/images/sampledata/asimages/portadaintro.jpg"/>
      <div className=' ml-10'>
        <h1 className='font-bold mb-6'>BIENVENIDO A CORPORACIÓN DE SERVICIOS ESPECIALIZADOS FLORES SAC</h1>
        <p>
          Somos una empresa especializada en el servicio de instalación,
          mantenimiento y análisis de equipos para  refrigeración, aire
          acondicionado, ventilación, conservación en caliente  y cocina,
          respondemos rápidamente a las necesidades de nuestros clientes
          ofreciéndole una solución integral a sus necesidades, estamos
          conformados por un grupo  de profesionales que suman más de 50 años de
          experiencia y especialización.
        </p>
        <br />
        <ul>
          <li>. Nuestros procesos de mantenimiento están orientados a estándares internacionales.</li>
          <li>. Tenemos un sistema en la Web para informar sobre el estado del servicio e historial de los equipos.</li>
          <li>. Buscamos innovar y utilizar las últimas tecnologías en cada parte del proceso de entrega del servicio.</li>
          <li>. Atendemos según el horario de nuestros clientes (24 x 365).</li>
          <li>. Utilizamos insumos de la mejor calidad.</li>
        </ul>
       
      </div>
     
    </div>
  );
};

export default Preserva;
