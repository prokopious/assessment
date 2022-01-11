import names from '../data.json'

export function random() {
    let random = Math.floor(Math.random() * 1000)
    return names[random]
}