
let handler = async (m, { conn }) => {
    let user = global.DATABASE._data.users[m.sender]
    let __timers = (new Date - user.lastmining)
    let _timers = (86400000 - __timers)
    let timers = clockString(_timers) 
    let botol = global.botwm
    let minim = `${Math.floor(Math.random() * 248)}`.trim() 
    let minam = `${Math.floor(Math.random() * 374)}`.trim() 
    let minkm = `${Math.floor(Math.random() * 383)}`.trim() 
    let minom = `${Math.floor(Math.random() * 200)}`.trim() 

   if ( user.pickaxe > 0 ) {
    if (new Date - user.lastmining > 3000000) {

      user.emas += minim * 1
      user.iron += minam * 1
      user.diamond += minom * 1
      user.string += minkm * 1
      user.lastmining = new Date * 1
            
    m.reply(`You Mine In ${pickRandom(['⛰️Valley', '⛰️Amazon Jungle', '🏞️NewZealand river', '⛰️Texas cave', '...'])}\n*⚒️Mining Products:* 💎Diamond: *${minom}*\n🪙Gold: *${minim}*\n⛓️Iron: *${minam}*\n🕸️String: *${minkm}*`)
      } else conn.sendButton( m.chat, `Wait ${timers} again, to mine`, `${botol}`, `Check inv`, `.inv`, m)
    } else conn.sendButton( m.chat, `You Don't Have *⛏️Pickaxe* to mine\nBuy Pickaxe by pressing the button below`, `${botol}`, `Buy Pickaxe`, `.shop buy pickaxe 1`,m )
  }

handler.help = ['mining']
handler.tags = ['rpg']
handler.command = /^mining/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
