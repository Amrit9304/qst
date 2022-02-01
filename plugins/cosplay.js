let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://hanzz-web.herokuapp.com/api/randomimage/cosplay`
  conn.sendFile(m.chat, res, 'cosplay.jpg', `Huu Suka Sama Cosplayer`, m, false)
}
handler.help = ['cosplay'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(cosplay)$/i
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

