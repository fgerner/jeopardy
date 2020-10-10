import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Clue from './Clue';
import {clue} from "../data/fixtures";

const props = {clue};

Enzyme.configure({adapter: new Adapter()});

describe('Clue component', () => {
    let clueWraper = shallow(<Clue {...props} />);

    it('should render the clue value', () => {
        expect(clueWraper.find('h4').text()).toEqual(clue.value.toString());
    });
    it('should render the question', () => {
        expect(clueWraper.find('h5').at(0).text()).toEqual(clue.question.toString());
    });
    it('should render the answer', () => {
        expect(clueWraper.find('h5').at(1).text()).toEqual(clue.answer.toString());
    });
    it('should render the answer as hidden', () => {
        expect(clueWraper.find('h5').at(1).hasClass('text-hidden')).toBe(true);
    });
    it('should initialize the state revealed as false', () => {
        expect(clueWraper.state().reveal).toBe(false);
    });
    describe('render a clue with no value', () => {
        beforeEach(() => {
            props.clue.value = undefined;
            clueWraper = shallow(<Clue {...props}/>);
        });
        it('should render the value as unknown', () => {
            expect(clueWraper.find('h4').text()).toEqual('unknown');
        });
    });
    describe('when clicking on a clue', () => {
        beforeEach(() => {
            clueWraper.simulate('click');
        });
        it('should set the state reveal to true', () => {
            expect(clueWraper.state().reveal).toBe(true);
        });
        it('should render the answer', () => {
            expect(clueWraper.find('h5').at(1).hasClass('text-revealed')).toBe(true);
        });
    })
})