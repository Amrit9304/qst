let axios = require('axios');
let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
if (!DATABASE.data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
     json = (await axios.get('https://meme-api.herokuapp.com/gimme/nudes')).data
   conn.sendFile(m.chat, json.url, 'nudes.jpg', json.title, m, false)
}
handler.help = ['nudes']
handler.tags = ['']
handler.command = /^(nudes)$/i
handler.group = true
handler.private = false
handler.limit = true

module.exports = handler




