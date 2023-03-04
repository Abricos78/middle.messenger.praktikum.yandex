import Block from '../../shared/common/Block'
import template from './Login.hbs'
import LoginForm from '../../features/ui/LoginForm'

class Login extends Block {
    constructor() {
        super({
            LoginForm: new LoginForm()
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default Login
