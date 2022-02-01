let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
    let ext = `
┏━━⬣ _*RPG GAME*_
┃
┃⬡ *.inv*
┃⬡ *.shop (buy/sell) <item> <jumlah>*
┃⬡ *.hunt*
┃⬡ *.adventure*
┃⬡ *.fishing*
┃⬡ *.hunt2*
┃⬡ *.trash*
┃⬡ *.nebang*
┃⬡ *.open (nama crate) amount*
┃⬡ *.use potion amount*
┃⬡ *.sell*
┃⬡ *.wages*
┃⬡ *.dompet*
┃⬡ *.gamble <money>*
┃⬡ *.sell <nama hewan>*
┃⬡ *.cook <food name>*
┃⬡ *.eat <food name>*
┃⬡ *.dungeon <room name>*
┃⬡ *.mining (only pickaxe)*
┃⬡ *.craft <nama alat>*
┃ 
┣━━°❀❬ *TQTO* ❭❀°━━┓
┃ 
┃⬡ *Nurotomo (author)*
┃⬡ *Quantum  (developer)*
┗⬣
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Rpg+Game`)).buffer(), ext.trim(), 'Hanzz Botz By Hanzz-kun', 'Tutorial', '.tutorial', 'Back', '.menu',m)
    
  }
handler.help = ['rpgmenu']
handler.tags = ['nande']
handler.command = /^rpgmenu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

