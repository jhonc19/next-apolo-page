import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center border-b border-b-black">
      <a href="http://localhost:3000/"><img
        src="https://corporacionfloresac.com.pe/images/logofinal2.png"
        alt=""
      /></a>
      <ul className='flex space-x-8'>
        <li><a className='hover:text-blue-700 hover:duration-250 hover:font-semibold' href="">Inicio</a></li>
        <li><a className='hover:text-blue-700 hover:duration-250 hover:font-semibold' href="">Empresa</a></li>
        <li><a className='hover:text-blue-700 hover:duration-250 hover:font-semibold' href="">Servicios</a></li>
        <li><a className='hover:text-blue-700 hover:duration-250 hover:font-semibold' href="">Contactenos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
