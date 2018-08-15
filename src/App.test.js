import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

describe('<App/>', () => {
  it("renders 1 <App/> component", () => {
    const component = shallow(<App/>);
    expect(component).toHaveLength(1);
  })
})
