import React, {useEffect, useState} from 'react';
import { Container } from "react-bootstrap";

import {DataContext} from './utils/DataContext'
import getCharaters from './services/Characters'
import ProductList from './components/ProductList';
import Navegacion from './components/ui/Navegacion';
import './global.css'

function App() {

  const [personajes, setPersonajes] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
      try {
          getCharaters().then(character => {
              setPersonajes(character)
          })
      } catch (error) {
          console.error(error)
      }
  }, [getCharaters])

  return (
    <DataContext.Provider value={{personajes, cart}}>
      <div className="App">
        <Navegacion
          setCart={setCart}
        />
        <Container>
          <ProductList
            setCart={setCart}
          />
        </Container>
      </div>
    </DataContext.Provider>
  );
}

export default App;
