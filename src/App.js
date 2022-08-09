import { Route, Routes } from 'react-router-dom';
import './assets/styles/App.scss';
import ContactUs from './containers/ContactUs';
import Main from './containers/Main';
import MovieDetail from './containers/MovieDetail';
import Profile from './containers/Profile';
import LayoutMain from './layouts/LayoutMain';


function App() {

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
      <LayoutMain>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/movie/:idMovie' element={<MovieDetail/>}/>
        </Routes>
      </LayoutMain>
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
