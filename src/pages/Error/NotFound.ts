import Block from '../../shared/common/Block'
import Link from '../../shared/ui/Link'
import template from './Error.hbs'

class NotFoundPage extends Block {
    constructor() {
        super({
            code: 404,
            message: 'Страница не найдена',
            Link: new Link({
                content: 'Вернуться на главную',
                events: {
                    click: (e: Event) => {
                        e.preventDefault()
                        console.log('Страница не найдена')
                    }
                }
            })
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default NotFoundPage
