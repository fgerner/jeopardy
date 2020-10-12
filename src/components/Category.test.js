import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Category} from "./Category";
import {categories, clues} from "../data/fixtures";
import {fakeServer} from "sinon";

const props = {category: categories[0]};

Enzyme.configure({adapter: new Adapter()});


describe('Category component', () => {
    let server;
    beforeEach(() => {
        server = fakeServer.create();
        server.respondWith(
            'GET',
            `http://jservice.io/api/clues?category=${props.category.id}`,
            [
                200,
                {'Content-Type': 'application/json'},
                JSON.stringify(clues)
            ]);
    })

    describe('when creating a new category', () => {
        let categoryWrapper;
        beforeEach( done  => {
            categoryWrapper = mount(<Category {...props} />);
            server.respond();
            setTimeout(() => {
                categoryWrapper.update();
                done();
            }, 10);
        });
        it('should log the category', () => {
            console.log(categoryWrapper.debug());
        });
        it('should initialize the clues in state', () => {
            expect(categoryWrapper.state().clues).toEqual(clues);
        });
    });
});