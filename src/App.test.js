import React from 'react';
import App from './App';
import {configure, shallow,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ScrollButton from './Scrollbutton/ScrollButton';
import axios from 'axios';
import data from './test-data.json';
import { getByText } from '@testing-library/dom';

configure({adapter: new Adapter()});


describe("State counting", () => {
  let wrapper;

  beforeEach(() => {
    wrapper =shallow(<App></App>);
  });
  it('renders', () => {
   console.log(wrapper.debug());
  expect(wrapper).not.toBeNull();
  })

  it('shows only 3 images on first load', () => {
  expect(wrapper.find('p').at(0).text()).toEqual('Limit: 3');
  })
  
  it('loads with default rating of g', () => {
 
    expect(wrapper.find('p').at(2).text()).toEqual('Rating: g');
    })

  it('changes the rating if the dropdown value of pg is selected', () => {
    wrapper.find('a').at(1).simulate('Click');
    expect(wrapper.find('p').at(2).text()).toEqual('Rating: pg');
    })

  it('changes the rating if the dropdown value of pg 13 is selected', () => {
    wrapper.find('a').at(2).simulate('Click');
    expect(wrapper.find('p').at(2).text()).toEqual('Rating: pg-13');
    })
  
  it('changes the rating if the dropdown value of r is selected', () => {
    wrapper.find('a').at(3).simulate('Click');
    expect(wrapper.find('p').at(2).text()).toEqual('Rating: r');
    }) 

  it('correnctly increases the amount of images shown on page by 3', () => {
    wrapper.find('button').at(1).simulate('Click');
    
    expect(wrapper.find('p').at(0).text()).toEqual('Limit: 6');
    
    })
  
  it('Shows the scroll up button on load', () => {
    expect(wrapper.find(ScrollButton).length).toEqual(1);
    
    
    })
  

  it('hides the Show more button after 50 gifs are loaded on the  screen', () => {
    for(var i = 1; i<= 16; i++){
      wrapper.find('button').at(1).simulate('Click');
    }
   
 
   
    expect(wrapper.find('p').at(0).text()).toEqual('Limit: 51');
    
 
    })
})


describe("App api request", () => {
 


});



