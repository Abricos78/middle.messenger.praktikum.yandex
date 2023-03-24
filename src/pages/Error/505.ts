import Block from '../../shared/common/Block'
import Router from '../../shared/Router'
import Link from '../../shared/ui/Link'
import template from './Error.hbs'

class Error505 extends Block {
    constructor() {
        super({
            code: 505,
            message: 'Мы уже фиксим',
            Link: new Link({
                content: 'Назад к чатам',
                events: {
                    click: (e: Event) => {
                        e.preventDefault()
                        Router.go('/')
                    }
                }
            })
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default Error505
