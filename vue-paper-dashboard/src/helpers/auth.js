export const auth = {
    checkAuth
}

function checkAuth() {
    return JSON.parse(localStorage.getItem('auth'))
}