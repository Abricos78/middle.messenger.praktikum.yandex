import Button from '.'
import { expect } from 'chai'

describe('Button component', () => {
    const content = 'test'
    const button = new Button({ content })
    it('shoud textContent equal props.content', () => {
        expect(button.element.textContent?.trim()).to.eq(content)
    })
})
