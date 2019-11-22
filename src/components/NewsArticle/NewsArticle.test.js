import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', ()=> { 
  it('It should match snapshot', () => {
    const wrapper = <NewsArticle 
      img="fruits"
      headline="Bananas" 
      description="Fruit Sucks"
      url="www.sucks.com"
      />;

      expect(wrapper).toMatchSnapshot();
  });
});