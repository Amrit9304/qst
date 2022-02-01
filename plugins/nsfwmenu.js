let fetch = require('node-fetch')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
const petik = '```'

let handler = async (m, { conn, text }) => {
    let ext = `
┏━━°❀❬  *NSFW ANIME MENU*  ❭❀°━━┓
┃
${petik}┣➥ #bokep
┣➥ #ahegao
┣➥ #ass
┣➥ #bdsm
┣➥ #blowjob
┣➥ #cersex
┣➥ #cuckold
┣➥ #ero
┣➥ #gifhentai
┣➥ #glasses
┣➥ #hentai
┣➥ #jahy
┣➥ #kodenuklir
┣➥ #manga
┣➥ #mstrb
┣➥ #nhentai
┣➥ #nsfwneko
┣➥ #orgy
┣➥ #pantis
┣➥ #porno
┣➥ #tentacles
┣➥ #thighs
┣➥ #uniform
┣➥ #filebokep${petik}
┃ 
┣━━°❀❬  *NSFW NON-ANIME MENU*  ❭❀°━┓
┃ 
${petik}┣➥ #nudes${petik}
${petik}┣➥ #pussy${petik}
${petik}┣➥ #cum${petik}
${petik}┣➥ #boobs${petik}
┃
┣━━°❀❬ *TQTO* ❭❀°━━┓
┃ 
┣➥ *Nurutomo (author)*
┣➥ *Quantum (Developer)*
┗━━━━━━━━━━━━━━━━
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch(`https://i.ibb.co/M893YxQ/quantum.jpg`)).buffer(), ext.trim(), 'Quantum Bot By Julius Novachrono', 'Rules', '.rules', 'Back', '.menu',m)
    
  }
handler.help = ['nsfwmenu']
handler.tags = ['hsah']
handler.command = /^(nsfwmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler