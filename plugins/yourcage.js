let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => { 
  let banteng = global.DATABASE.data.users[m.sender].banteng
  let harimau = global.DATABASE.data.users[m.sender].harimau
 let gajah = global.DATABASE.data.users[m.sender].gajah
let kambing = global.DATABASE.data.users[m.sender].kambing
let panda = global.DATABASE.data.users[m.sender].panda
 let buaya = global.DATABASE.data.users[m.sender].buaya
 let kerbau = global.DATABASE.data.users[m.sender].kerbau
let sapi = global.DATABASE.data.users[m.sender].sapi
 let monyet = global.DATABASE.data.users[m.sender].monyet
 let babihutan = global.DATABASE.data.users[m.sender].babihutan
 let babi = global.DATABASE.data.users[m.sender].babi
 let ayam = global.DATABASE.data.users[m.sender].ayam

let zer = `
*⤷ YOUR CAGE 🐾 ↵♯❜*
    
 *♯⤷   ️ 🐂 = [ ${banteng} ] Bull*
 *♯⤷   ️ 🐅 = [ ${harimau} ] Tiger*
 *♯⤷   ️ 🐘 = [ ${gajah} ] Elephant*
 *♯⤷   ️ 🐐 = [ ${kambing} ] Goat*
 *♯⤷   ️ 🐼 = [ ${panda} ] Panda*
 *♯⤷   ️ 🐊 = [ ${buaya} ] Crocodile*
 *♯⤷   ️ 🐃 = [ ${kerbau} ] Buffalo*
 *♯⤷   ️ 🐮 = [ ${sapi} ] Cow*
 *♯⤷   ️ 🐒 = [ ${monyet} ] Monkey*
 *♯⤷   ️ 🐗 = [ ${babihutan} ] Boar*
 *♯⤷   ️ 🐖 = [ ${babi} ] Pig*
 *♯⤷   ️ 🐓 = [ ${ayam} ] Chicken*
 
©QuantumBot
 `.trim()
     conn.reply(m.chat, zer, m)
} 
handler.help = ['cage']
handler.customPrefix = ['cage']
handler.command = new RegExp
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)