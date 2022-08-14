import React, { useState } from 'react';
import { implIngles } from '../i18n/implEn';
import { implEsp } from '../i18n/implEs';
import MenuBar from '../shared/MenuBar';
import Footer from '../shared/Footer';

const LayoutMain = ({ children }) => {
  const [lang, setLang] = useState('EN')
  const [impl, setImpl] = useState(implIngles)
  function toggleLang() {
    setLang(lang === 'EN' ? 'ES' : 'EN')
    setImpl(lang === 'EN' ? implIngles : implEsp)
  }
  return (
    <div>
      <MenuBar toggleLang={toggleLang} lang={lang} {...impl.menu} />
      {children}
      {/*Footer*/}
      <Footer/>
    </div>
  );
};

export default LayoutMain;