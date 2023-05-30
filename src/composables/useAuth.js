export function setToken(token = '', user = '') {
    if (process.server) cookieToken(token)
    else {
        localStorage.setItem('token', token || '')
        localStorage.setItem('user', JSON.stringify(user) || '')
        cookieToken(token)
    }
}

export function removeToken() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
}

export function getUser() {
    if (process.server) return {}
    return JSON.parse(localStorage.getItem('user'))
}

export function getToken() {
    if (process.server) return cookieToken()
    return localStorage.getItem('token') || ''
}

export function cookieToken(token = null) {
    const savedToken = useCookie('token')
    savedToken.value = token || savedToken.value
    return savedToken.value
}