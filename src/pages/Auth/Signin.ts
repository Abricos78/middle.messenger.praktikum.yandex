import Block from '../../shared/common/Block'
import template from './Signin.hbs'
import SigninForm from '../../features/ui/SigninForm'

class Signin extends Block {
    constructor() {
        super({
            SigninForm: new SigninForm()
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default Signin
