let buatall = 1
let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    conn.judi = conn.judi ? conn.judi : {}
    if (m.chat in conn.judi) return m.reply ('There is Still Gambling Here, Wait Until It is Finished!!')
    else conn.judi[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() // Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.DATABASE._data.users[m.sender].money / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, usedPrefix + 'gamble <amount>\n ' + usedPrefix + 'gamble 1000', m)
        if (global.DATABASE._data.users[m.sender].money >= count * 1) {
            global.DATABASE._data.users[m.sender].money -= count * 1
            await m.reply('*Do not gamble, you will not win!!, If you do not believe it, it is also okay*') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                conn.reply(m.chat, `Bot's Roll :${Aku}\nYours Roll : ${Kamu}\n\nYou *Lost*, You Lost${count} Money`.trim(), m)
            } else if (Aku < Kamu) {
                global.DATABASE._data.users[m.sender].money += count * 2
                conn.reply(m.chat, `Bot's Roll :${Aku}\nYours Roll : ${Kamu}\n\nYou *Win*, You Won ${count * 2} Money`.trim(), m)
            } else {
                global.DATABASE._data.users[m.sender].money += count * 1
                conn.reply(m.chat, `Bot's Roll :${Aku}\nYours Roll : ${Kamu}\n\nYou *Draw*, You Get ${count * 1} Money`.trim(), m)
            }
        } else conn.reply(m.chat, `Your Money Is Not Enough To Make A Big Gambling ${count} Money`.trim(), m)
    } catch (e) {
        console.log(e)
        m.reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'Gamble.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    } finally {
        delete conn.judi[m.chat]
    }
}
    
handler.help = ['gamble <amount>']
handler.tags = ['rpg']
handler.command = /^(gamble)$/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
