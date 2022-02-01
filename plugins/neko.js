let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendButtonImg(m.chat, json.url, "*Niko Niko Nii~*", 'Quantum Bot', 'MORE ⏩', '#neko', m)
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^(neko)$/i
module.exports = handler