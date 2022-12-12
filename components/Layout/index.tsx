import { FC } from 'react';
import Header from './Header';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Layout: FC<Props> = ({ title, children }) => {
  return (
    <> 
      <Header title={title}/>   
      {children}
      
    </>
  );
};

export default Layout;
