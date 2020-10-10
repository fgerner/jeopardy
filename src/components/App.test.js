import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './App';
import {categories} from "../data/fixtures";

const props = {categories};

Enzyme.configure({adapter: new Adapter()});

describe('App', () => {
    const app = shallow(<App {...props} />);

    it('should render title', () => {
        expect(app.find('h2').text()).toEqual('Jeopardy!');
    });
    it('should create the correct number of links', () => {
        expect(app.find('Link').length).toEqual(categories.length);
    });
    it('should render the correct titles for links', () => {
        app.find('Link h4').forEach((linkTitle, index) => {
          expect(linkTitle.text()).toEqual(categories[index].title);
        })
    })
});