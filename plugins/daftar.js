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
  if (age > 120) throw 'Age too old π'
  if (age < 5) throw 'Age too low ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
β­βββββββββββββ βΫͺΫͺΰ½΄ΰ½»βΈ
β β *γ VERIFICATION SUCCESS γ* β
β *Thank you for having*
β *Register*
β *In Database*
β°β¬βββββββββββββ β³Ή
ββ€β¦β *Name* : ${name}
βββ¦β *Number* : ${who.split`@`[0]}
βββ¦β *Age* : ${age} Years old
βββ¦β *SN* : ${sn}
βββ¦β *FreeGift* : km3IpW93frlM
βββ¦β *Total Reg* : ${totalreg} Orang
βββ¦β *Status :* βοΈ Terverifikasi
ββ°βββββββββββββ β³Ή
β *Now you all are setup*
β
β *Please Type #menu*
β *To continue*
β°βββββββββββββ βΫͺΫͺΰ½΄ΰ½»βΈ

*γ Quantum Bot γ*
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler