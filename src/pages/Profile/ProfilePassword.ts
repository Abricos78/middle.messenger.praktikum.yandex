import Avatar from '../../entities/ui/Avatar'
import PrevLink from '../../entities/ui/PrevLink'
import ProfilePasswordForm from '../../features/ui/ProfilePasswordForm'
import Block from '../../shared/common/Block'
import template from './ProfilePassword.hbs'

class ProfilePassword extends Block {
    constructor() {
        super({
            PrevLink: new PrevLink(),
            Avatar: new Avatar(),
            ProfilePasswordForm: new ProfilePasswordForm()
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default ProfilePassword
