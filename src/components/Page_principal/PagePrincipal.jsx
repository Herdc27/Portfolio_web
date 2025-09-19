import React from 'react';
import './PagePrincipal.css';
import Header from './Header';
import Logoframe from './LogoFram/Logoframe';
import MyPerfil from '../../assets/MyPerfil.jpg';
import Title from './Title/Title';
import Navfrist from './NavFrist/Navfrist';

const PagePrincipal = () => {
  return (
    <div className='page-principal'>
      <Header />
      <div className='main-content'>
        <div className='header-section'>
          <Logoframe src={MyPerfil} alt="Logo" />
          <Title />
        </div>
        <div className="body">
          <Navfrist />
        </div>
      </div>
    </div>
  )
}

export default PagePrincipal
