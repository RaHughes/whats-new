import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import { jsxEmptyExpression } from '@babel/types';

describe('Menu', ()=> { 
  it('renders without crashing', () => {
    const wrapper =
    <Menu 
    pickNews={jest.fn()}
    />

    expect(wrapper).toMatchSnapshot();
  });
});