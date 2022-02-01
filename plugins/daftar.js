const { createHash } = require('crypto')
let PhoneNumber = require('awesome-phonenumber')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let totalreg = Object.keys(global.DATABASE._data.users).length
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE.data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar nama|umur*`
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Name cannot be empty (Alphanumeric)'
  if (!age) throw 'Age cannot be empty (number)'
  age = parseInt(age)
  if (age > 120) throw 'Age too old 😂'
  if (age < 5) throw 'Age too low ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ ✅ *「 VERIFICATION SUCCESS 」* ✅
│ *Thank you for having*
│ *Register*
│ *In Database*
╰┬────────────┈ ⳹
┌┤◦➛ *Name* : ${name}
││◦➛ *Number* : ${who.split`@`[0]}
││◦➛ *Age* : ${age} Years old
││◦➛ *SN* : ${sn}
││◦➛ *FreeGift* : km3IpW93frlM
││◦➛ *Total Reg* : ${totalreg} Orang
││◦➛ *Status :* ☑️ Terverifikasi
│╰────────────┈ ⳹
│ *Now you all are setup*
│
│ *Please Type #menu*
│ *To continue*
╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙

*「 Quantum Bot 」*
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler