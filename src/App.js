import { useState } from 'react';
import './assets/styles/App.scss';
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import MenuBar from './shared/MenuBar';

const implIngles = {
  menu: {
    inicio: 'Home',
    contactanos: 'Contact us',
    perfil: 'Profile'
  }
}
const implEsp = {
  menu: {
    inicio: 'Inicio',
    contactanos: 'Contactanos',
    perfil: 'Perfil'
  }
}

function App() {
  const [lang, setLang] = useState('EN')
  const [impl, setImpl] = useState(implIngles)
  function toggleLang () {
    setLang(lang === 'EN' ? 'ES' : 'EN')
    setImpl(lang === 'EN' ? implIngles : implEsp)
  }
  // console.log('render')
  // const [amount, setAmount] = useState(0)
  // const [amount2, setAmount2] = useState(10)
  // let monto = 0
  // const incrementar = () => {
  //   // monto += 1
  //   setAmount(amount + 1)
  //   setAmount2(amount2 + 1)
  //   console.log(amount)
  //   console.log(amount2)
  // }
  return (
    <div>
      {/* <MenuBar
      toggleLang={toggleLang}
      lang={lang}
      inicio={impl.menu.inicio}
      contactanos={impl.menu.contactanos}
      perfil={impl.menu.perfil}
      /> */}
      <MenuBar toggleLang={toggleLang} lang={lang} {...impl.menu} />
      <Header></Header>
      <section class="movies-type">
        <h2 class="movies-type__title">Documentales recientes</h2>
      </section>
      <section class="movies-collection">      
      <MoviesList />
      </section>
        <section class="movies-type">
        <h2 class="movies-type__title">Ciencia y ficción</h2>
      </section>
      <section class="movies-collection">      
        <MoviesList />
      </section>
      {/* <button onClick={incrementar}>Increase</button>
      <p style={{ color: 'white' }}>{amount}</p>
      <p style={{ color: 'white' }}>{amount + amount2}</p> */}
    </div>
  );
}

export default App;

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     this.state({
//       value: 'new'
//     })
//   }

//   componentWillMount() {

//   }
//   componentDidMount(){

//   }

//   componentWillReceiveProps(nextProps) {

//   }

//   shouldComponentUpdate(){
    
//   }
//   componentWillUpdate(){

//   }
//   componentDidUpdate () {

//   }
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }
