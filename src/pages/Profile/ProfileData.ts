import Avatar from '../../entities/ui/Avatar'
import PrevLink from '../../entities/ui/PrevLink'
import ProfileDataForm from '../../features/ui/ProfileDataForm'
import Block from '../../shared/common/Block'
import template from './ProfileData.hbs'

class ProfileData extends Block {
    constructor() {
        super({
            PrevLink: new PrevLink(),
            Avatar: new Avatar(),
            ProfileDataForm: new ProfileDataForm(),
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default ProfileData
