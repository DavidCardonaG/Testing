import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import CounterApp from '../CounterApp'

describe('Test <CounterApp/>', () => {

    test('Value', () => {
        const valueI = 100

        const cInitial = shallow(<CounterApp value={valueI} />)

        const values = cInitial.find('value').text().trim()


        expect(values).toBe(valueI)

        expect(cInitial).toMatchSnapshot();
    })

})