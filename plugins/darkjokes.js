let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://hardianto.xyz/api/darkmeme?apikey=hardianto`
  conn.sendFile(m.chat, res, 'darkjokes.jpg', `Senter Mana Senter`, m, false)
}
handler.help = ['darkjokes'].map(v => v + ' ')
handler.tags = ['internet']

handler.command = /^(darkjokes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

