let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Kak Hanzz-kun, Ada Yang Manggil Tuh😊
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@⁨6281212083267⁩/i
handler.command = new RegExp

module.exports = handler