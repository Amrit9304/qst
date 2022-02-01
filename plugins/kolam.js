let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let paus =global.DATABASE.data.users[m.sender].paus 
let kepiting = global.DATABASE.data.users[m.sender].kepiting 
let gurita = global.DATABASE.data.users[m.sender].gurita 
let cumi = global.DATABASE.data.users[m.sender].cumi 
let buntal = global.DATABASE.data.users[m.sender].buntal 
let dory = global.DATABASE.data.users[m.sender].dory 
let lumba = global.DATABASE.data.users[m.sender].lumba 
let lobster = global.DATABASE.data.users[m.sender].lobster 
let hiu = global.DATABASE.data.users[m.sender].hiu 
let udang = global.DATABASE.data.users[m.sender].udang 
let ikan = global.DATABASE.data.users[m.sender].ikan 
let orca = global.DATABASE.data.users[m.sender].orca

let zer =`
*◈ YOUR AQUARIUM 🏝️↵♯❜*

*♯⤷   ️ 🦀 = [ ${kepiting} ] Crab*
*♯⤷   ️ 🦞 = [ ${lobster} ] Lobster*
*♯⤷   ️ 🦐 = [ ${udang} ] Shrimp*
*♯⤷   ️ 🦑 = [ ${cumi} ] Squid*
*♯⤷   ️ 🐙 = [ ${gurita} ] Octopus*
*♯⤷   ️ 🐡 = [ ${buntal} ] Bloated*
*♯⤷   ️ 🐠 = [ ${dory} ] Pufferfish*
*♯⤷   ️ 🐟 = [ ${orca} ] Orca*
*♯⤷   ️ 🐬 = [ ${lumba} ] Dolphin* 
*♯⤷   ️ 🐳 = [ ${paus} ] Whale*
*♯⤷   ️ 🦈 = [ ${hiu} ] Shark*

*©Quantum Bot*
 `.trim()
     conn.reply(m.chat, zer, m)
} 
handler.help = ['aquarium']
handler.customPrefix = ['aquarium']
handler.command = new RegExp
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)