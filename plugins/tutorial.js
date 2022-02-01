let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
	await m.reply(' _*Tutorial...*_ ')
  let ext= `
╭─「 *Tutorial By Quantum Bot* 」
│ 
│〘 Tutorial EPIC RPG 〙
│
│• *.claim*
│   Claimable starterpack 
│   every 12 hours
│
│• *.adventure*
│   To find resources like
│   Money, Exp, Wood, String, Diamond, And Crate,
│   it takes a minimum of 80 lives to be able
│   do it and, you don't
│   get spam because there is a delay of 5
│   minute
│
│• *.mining*
│  To Find Gold, Iron, And Strings,
│  you need a pickaxe that you can buy at the shop
│  And you can only do it 24hours/1time
│
│• *.use potion <amount>*
│   To use potions/for
│   fill life/health
│
│• *.shop buy potion <amount>*
│   To buy a potion and type
│   *.use potion <amount>*
│   to use potions
│
│• *.shop <args>*
│   To buy or sell something
│
│• *.shop buy <crate> <amount>*
│   To buy Crate
│
│• *.profile*
│   to find out your whatsapp number, etc
│
│• *.inv*
│• *.inventory*
│   To check life, money, etc.
│
│• *.gamble <amount>*
│   *_Don't gamble, because you won't_*
│   *_return on investment. REALLY GK LIE_*
│  
│
│
╰─「 *Tutorial By Quantum Bot* 」
`.trim()
await conn.sendButtonLoc(m.chat, await (await fetch(`https://i.ibb.co/M893YxQ/quantum.jpg`)).buffer(), ext.trim(), '*©Quantum Bot*', 'RPG GAME', '.rpgmenu',m)
    

}
handler.help = ['tutorial']
handler.tags = ['tutor']
handler.command = /^tutorial/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler