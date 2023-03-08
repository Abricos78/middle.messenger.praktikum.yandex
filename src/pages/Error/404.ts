import Block from '../../shared/common/Block'
import Link from '../../shared/ui/Link'
import template from './Error.hbs'

class Error404 extends Block {
    constructor() {
        super({
            code: 404,
            message: 'Не туда попали',
            Link: new Link({
                content: 'Назад к чатам',
                events: {
                    click: (e: Event) => {
                        e.preventDefault()
                        console.log('Hello 404')
                    }
                }
            })
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default Error404
