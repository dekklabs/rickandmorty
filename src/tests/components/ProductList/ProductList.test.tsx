import React from 'react';
import { shallow } from 'enzyme'
import ProductList from '../../../components/ProductList'

describe('Pruebas en ProductList component', () => {

    let wrapper = shallow(<ProductList />);

    test('Debe mostrar <ProductList />', () => {
        expect(wrapper).toMatchSnapshot();
    })
})