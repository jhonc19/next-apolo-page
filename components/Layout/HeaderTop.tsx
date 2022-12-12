import { FC } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const HeaderTop: FC = () => {
  return (
    <div className="container mx-auto flex flex-row-reverse items-center h-10">
      <a className="text-xl pl-1 text-blue-700" href="">
        <FaWhatsapp />
      </a>
      <a className="text-xl pl-1 text-blue-700" href="">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default HeaderTop;
