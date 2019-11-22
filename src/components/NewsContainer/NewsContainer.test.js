import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', ()=> { 
  it('renders without crashing', () => {
    const testArticles = [{
      key: 1,
      img: 'this1',
      headling: 'healdine1',
      description: 'description1',
      url:'www.news1.com'
    }, 
    {
      key: 2,
      img: 'this2',
      headling: 'healdine2',
      description: 'description2',
      url: 'www.news2.com'
    }, 
    {
      key: 3,
      img: 'this3',
      headling: 'healdine3',
      description: 'description3',
      url: 'www.news3.com'
    }]
    const wrapper = shallow(<NewsContainer
     />);
    
    expect(wrapper).toMatchSnapshot();
  });
});