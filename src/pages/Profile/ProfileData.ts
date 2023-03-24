import Avatar from '../../entities/ui/Avatar'
import PrevLink from '../../entities/ui/PrevLink'
import ProfileDataForm from '../../features/ui/ProfileDataForm/ui'
import Block from '../../shared/common/Block'
import { withStore } from '../../shared/Store'
import { type User } from '../../shared/types'
import template from './ProfileData.hbs'

class ProfileData extends Block {
    constructor(userDate: User) {
        super({
            PrevLink: new PrevLink(),
            Avatar: new Avatar(),
            ProfileDataForm: new ProfileDataForm(userDate),
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export default withStore((state) => state.user ?? {})(ProfileData)
