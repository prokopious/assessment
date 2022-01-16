import names from '../data.json'

export function random(): string {
    let random: number = Math.floor(Math.random() * 1000)
    return names[random]
}