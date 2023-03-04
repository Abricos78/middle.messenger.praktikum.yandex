enum ValidationType {
    NAME = 'name',
    LOGIN = 'login',
    EMAIL = 'email',
    PASSWORD = 'password',
    PHONE = 'phone',
    MESSAGE = 'message'
}

function validation(value: string, validationType?: keyof typeof ValidationType): null | string {
    if (!value) return 'Заполните поле'
    switch (validationType) {
        case 'LOGIN':
            if (!/([-_]?[a-z0-9]+){3,20}$/i.test(value)) return 'Некорректное поле login'
            break
        case 'PASSWORD':
            if (!/^(?=.*\d)(?=.*[A-ZА-Я]).{8,40}$/i.test(value)) return 'Некорректный пароль'
            break
        case 'EMAIL':
            if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i.test(value)) return 'Некорректное поле email'
            break
        case 'NAME':
            if (!/^[A-ZА-Я]+([A-ZА-Яa-zа-я0-9-]+)/.test(value)) return 'Некорректное поле name'
            break
        case 'PHONE':
            if (!/(?:\+|\d)[\d\-() ]{10,15}\d/g.test(value)) return 'Некорректное поле phone'
            break
    }
    return null
}

export default validation
