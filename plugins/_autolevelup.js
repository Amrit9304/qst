let handler = m => m
let levelling = require('../lib/levelling')
handler.before = m => {
    let user = global.DATABASE._data.users[m.sender]
    if (!user.autolevelup) return
    if (m.sender === global.conn.user.jid) return
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let str = `
Congratulations  @${m.sender.split`@`[0]} You have been been leveled up 🧬 
*${before}* --> *${user.level}*
Type *.profile* to check
`.trim()
        conn.reply(m.chat, str, false, {
            contextInfo: {
                mentionedJid: [m.sender]
            }
        })
    }
    return true
}
 
module.exports = handler
