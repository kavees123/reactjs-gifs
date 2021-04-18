import React from 'react';
import Cards from './Cards';
import ReactCardFlip from "react-card-flip";
import {configure, shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



configure({adapter: new Adapter()});
describe("Card loads", () => {
    let wrapper;
    
    beforeEach(() => {
      wrapper = shallow(<Cards></Cards>);
    });
    it('renders the card component',() => {
      console.log(wrapper.debug());
      expect(wrapper).not.toBeNull();
    })
    it('should render one ReactFlip card on load', () => {
        expect(wrapper.find(ReactCardFlip)).toHaveLength(1);
    });

    it('should render one ReactFlip card on load is flipped is set to false', () => {
        expect(wrapper.find(ReactCardFlip).props().isFlipped).toEqual(false);
    });
    it('should change the value on ReachFlip if the card is clicked', () => {
      wrapper.find(ReactCardFlip).prop('isFlipped')
      wrapper.find('button').at(0).props().onClick();
      expect(wrapper.find(ReactCardFlip).props().isFlipped).toEqual(true);
  });
  
  });
  