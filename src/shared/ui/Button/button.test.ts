import { equal } from 'assert'
import Button from './index'

describe('Button component', () => {
    const content = 'test'
    const button = new Button({ content })
    it('shoud textContent equal props.content', () => {
        equal(button.element.textContent, content)
    })
})
