const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Please enter a request\n\nExample: !Request New Features', m)
    if (text > 300) return conn.reply(m.chat, 'Sorry the link is too long, it looks like this is not a group link: v', m)
    var nomor = m.sender
    const teks1 = `*[ REQUEST ]*\nNumber : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
    conn.sendMessage('wa.me/918709022955', teks1, MessageType.text)
    conn.reply(m.chat, '✔️Your Request Link has been sent to Owner\nPlease Chat to Owner and Confirm Payment\n\nOwner Number :wa.me/918709022955', m)
}
handler.help = ['join <link gc>']
handler.tags = ['daftar']
handler.command = /^(join)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
