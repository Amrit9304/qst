let { MessageType } = require('@adiwajshing/baileys')
//BY RIZKY ADI∅
//DONT DELETE THIS CREDIT
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	let type = (args[0] || '').toLowerCase()
    let msk= (args[0] || '').toLowerCase()
let cok = `
Please choose what to cook🍳
🍖 ⟩ ${usedPrefix}gchicken *[ to cook grilled chicken ]*
🍗 ⟩ ${usedPrefix}fchicken *[ to cook fried chicken]*
🍣${usedPrefix}ffish *[ Fried Fish ]*
🍣${usedPrefix}gfish *[ Grilled Fish ]*
🍖${usedPrefix}sapir
🍖${usedPrefix}ssapi [ to cook beef steak ]
typing command↓
${usedPrefix + command } sapir
To eat\nUse ${usedPrefix}eat fchicken
`

try {
       if (/masak|cook/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'gchicken':
            if (global.DATABASE._data.users[m.sender].ayam >= count * 1) {
                           global.DATABASE._data.users[m.sender].ayam >= count * 1
                            global.DATABASE._data.users[m.sender].ayam -= count * 1
                            global.DATABASE._data.users[m.sender].ayamb += count * 1
                            conn.reply(m.chat, `You cooked ${count } grilled chicken🍖`, m)
                       } else conn.reply(m.chat, `Your game stock is not enough to cook`, m)
break

                  case 'sapir':
            if (global.DATABASE._data.users[m.sender].ayam >= count * 1) {
                            global.DATABASE._data.users[m.sender].sapi >= count * 1
                            global.DATABASE._data.users[m.sender].sapi -= count * 1
                            global.DATABASE._data.users[m.sender].sapir += count * 1
                            conn.reply(m.chat, `Successful cooking ${ count } Rendang 🍜`, m)
                       } else conn.reply(m.chat, `The animal you get is not enough to cook`, m)
break
                   case 'fchicken':
            if (global.DATABASE._data.users[m.sender].ayam >= count * 1) {
                           global.DATABASE._data.users[m.sender].ayam >= count * 1
                            global.DATABASE._data.users[m.sender].ayam -= count * 1
                            global.DATABASE._data.users[m.sender].ayamg += count * 1
                            conn.reply(m.chat, `You cooked ${ count } fried chicken🍗`, m)
                       } else conn.reply(m.chat, `Your game stock is not enough to cook`, m)
break
                        case 'ffish':
            if (global.DATABASE._data.users[m.sender].lele >= count * 1) {
                          global.DATABASE._data.users[m.sender].lele >= count * 1
                            global.DATABASE._data.users[m.sender].lele -= count * 1
                            global.DATABASE._data.users[m.sender].leleg += count * 1
                            conn.reply(m.chat, `You cooked ${ count } fried fish🍤`, m)
                       } else conn.reply(m.chat, `Your game stock is not enough to cook`, m)
break
                        case 'gfish':
            if (global.DATABASE._data.users[m.sender].lele >= count * 1) {
                            global.DATABASE._data.users[m.sender].lele >= count * 1///DONT DELETE THIS
                            global.DATABASE._data.users[m.sender].lele -= count * 1
                            global.DATABASE._data.users[m.sender].leleb += count * 1
                            conn.reply(m.chat, `You cooked ${ count } grilled fish🐟`, m)
                       } else conn.reply(m.chat, `Your game stock is not enough to cook`, m)
break
             case 'ssapi':
            if (global.DATABASE._data.users[m.sender].sapi >= count * 1) {
                            global.DATABASE._data.users[m.sender].sapi >= count * 1///DONT DELETE THIS
                            global.DATABASE._data.users[m.sender].sapi -= count * 1
                            global.DATABASE._data.users[m.sender].ssapi += count * 1
                            conn.reply(m.chat, `Succes memmasak ${ count } steak sapi`, m)
                       } else conn.reply(m.chat, `Your game stock is not enough to cook`, m)
break
                default:
                    return conn.sendButton( m.chat, cok, `QuantumBot`, `Eat`, `.eat gchicken 1`)
            }
        }
    } catch (e) {
        conn.reply(m.chat, `There seems to be an error, try reporting it to the owner`, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['cook <Cook> <args>']
handler.tags = ['rpg']

handler.command = /^(masak|cook)$/i
module.exports = handler