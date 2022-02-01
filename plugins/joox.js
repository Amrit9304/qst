const { joox } = require('../lib/scrape')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*This command to search joox songs by search*\n\nExample:\n${usedPrefix + command} contract`
    if (isUrl(text)) throw `*This command is to search for joox songs based on search not links*\n\nExample:\n${usedPrefix + command} contract`

    joox(text).then(res => {
        let joox = JSON.stringify(res)
        let jjson = JSON.parse(joox)
        let random = Math.floor(Math.random() * jjson.data.length)
        let hasil = jjson.data[random]
        let json = hasil
        let pesan = `
*Singer:* ${json.penyanyi}
*Title:* ${json.lagu}
*Album:* ${json.album}
*Published:* ${json.publish}
*Link:* ${json.mp3}
*By QuantumBot*`.trim()
        conn.sendFile(m.chat, json.img, 'error.jpg', pesan, m, false, { thumbnail: Buffer.alloc(0) })
        conn.sendFile(m.chat, json.mp3, 'error.mp3', '', m, false, { mimetype: 'audio/mp4' })
    })
}
handler.help = ['joox'].map(v => v + ' <judul>')
handler.tags = ['downloader']
handler.command = /^joox$/i
handler.limit = true
module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}