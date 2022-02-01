let fetch = require("node-fetch")

let handler = async (m, { conn, text }) => {
  let res = await fetch('https://meme-api.herokuapp.com/gimme/dankmemes')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  await conn.sendFile(m.chat, json.url, text, json.title, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['dankmeme']
handler.tags = ['']
handler.command = /^(dankmeme)$/i
handler.group = true
handler.private = false
handler.limit = true

module.exports = handler

