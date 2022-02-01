let handler = function (m) {
  // this.sendContact(m.chat, '6283144570377', 'Raku Gans', m)
  this.sendContact(m.chat, '918709022955', 'Julius Novachrono', m)
  conn.reply(m.chat, `This is my owner, please don't spam, >_ <`, m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
