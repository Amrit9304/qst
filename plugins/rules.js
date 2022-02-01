let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
	await m.reply(' _*Baca Rulesnya Banh...*_ ')
  let ext= `
 *GUIDE*
1.User Can Use All Commands Free With Ticket Limit
Except for Premium Users With Unlimited/Unlimited Tickets
2.When First Registering User Will Be Given 10 Tickets, Every 24 Hours User Will Be Given 10 Tickets
If Your Tickets Run Out You Can Buy It With
Command .buy <Number of Tickets> Example .buy 5
1 Ticket = 350 Xp
3.Users who send media or personal data will not be stored in this bot
4. If the bot doesn't read your message, it's a sign that the bot is off
If the bot reads the message and doesn't respond, it's a sign that the bot is delaying because I don't use Rdp
5. This Bot Is Equipped With An Antispam Feature If You Spam 20 Messages Without A 5 Second Colldown This Bot Will Automatically Ban You
6. If you violate the rules, the owner will give you a warning
7. If you call the bot you will be given a warning / soft block
8. If you are a premium user then you are banned for violating the rules, the owner will not bear your losses
9. If there is a bug in the bot feature, please report it to the owner with the command .report <your report>
10. If you want to request a new feature, please type .request <Feature you want to request>



 *RULES*
  1. DO NOT DAMAGE BOTT SERVERS OR SEND VIRTEX THAT MAKES BOTS DAMAGE
  2. DO NOT CALL/MENVC BOTS
  3. NO SPAM BOTS
  4. DO NOT COPY/COPY MESSAGES FROM BOTS
`.trim()
await conn.sendButtonLoc(m.chat, await (await fetch(`https://i.ibb.co/M893YxQ/quantum.jpg`)).buffer(), ext.trim(), 'Quantum Bot By Julius Novachrono', 'OWNER', '.owner',m)
    

}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler