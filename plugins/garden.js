let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let apel = global.DATABASE.data.users[m.sender].apel
let jeruk = global.DATABASE.data.users[m.sender].jeruk
let mangga = global.DATABASE.data.users[m.sender].mangga
let stroberi = global.DATABASE.data.users[m.sender].stroberi
let semangka = global.DATABASE.data.users[m.sender].semangka
let pisang = global.DATABASE.data.users[m.sender].pisang

let zer =`
*◈ YOUR GARDEN↵♯❜*

*♯⤷   ️🍎 = [ ${apel} ] Apple*
*♯⤷   🍊 = [ ${jeruk} ] Orange*
*♯⤷   🍐 = [ ${mangga} ] Mango*
*♯⤷  ️ 🍓 = [ ${stroberi} ] Strawberry*
*♯⤷  ️ 🍉 = [ ${semangka} ] Watermelon*
*♯⤷   ️🍌 = [ ${pisang} ] Banana*
 
©Quantum Bot
 `.trim()
     conn.reply(m.chat, zer, m)
} 
handler.help = ['garden']
handler.customPrefix = ['.garden']
handler.command = new RegExp
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)