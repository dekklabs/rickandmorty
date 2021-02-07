import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import Carta from '../../../components/Carta'

describe('Pruebas en Card component', () => {

    const setCart = jest.fn();

    const persona = [
        {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
              "name": "Earth (C-137)",
              "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "episode": [
              "https://rickandmortyapi.com/api/episode/1",
            ],
            "url": "https://rickandmortyapi.com/api/character/1",
            "created": "2017-11-04T18:48:46.250Z"
        }
    ]

    let wrapper = shallow(<Carta 
        personaje={persona}
        setCart={setCart}
    />)

    test('Debe sacar mostrar', () => {
        expect(wrapper).toMatchSnapshot()
    })
})