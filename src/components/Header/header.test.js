import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../../utils/index'

const setUp = (props={}) =>{
    const component = shallow(<Header {...props}/>)
    return component
}

describe('Header component', ()=>{


    let component;
    beforeEach(()=>{
        component = setUp()
    })

    it('Should render without errors', ()=>{
        const wrapper = findByTestAttr(component, "headerWrapper");
        expect(wrapper.length).toBe(1)
    })

    it('Should render a logo', ()=>{
        const wrapper = findByTestAttr(component, "logoImg")
        expect(wrapper.length).toBe(1)
    })
})