let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let premium = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    let { name, limit, exp, coin, healt, level, money, lastclaim, registered, regTime, age, role } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    const lbars = global.DATABASE.data.users[m.sender].level
  var zerobars = '[▒▒▒▒▒▒▒▒▒]'

         if (lbars >= '0' && lbars <= '5') {
                zerobars = '[▒▒▒▒▒▒▒▒▒▒]'
         } else if (lbars >= '5' && lbars <= '10') {
				zerobars = '[█▒▒▒▒▒▒▒▒▒]'
		 } else if (lbars >= '10' && lbars <= '20') {
				zerobars = '[██▒▒▒▒▒▒▒▒]'
		} else if (lbars >= '20' && lbars <= '30') {
				zerobars = '[███▒▒▒▒▒▒▒]'
		} else if (lbars >= '30' && lbars <= '40') {
				zerobars = '[████▒▒▒▒▒▒]'
		} else if (lbars >= '40' && lbars <= '50') {
				zerobars = '[█████▒▒▒▒▒]'
		} else if (lbars >= '50' && lbars <= '60') {
				zerobars = '[██████▒▒▒▒]' 
		} else if (lbars >= '60' && lbars <= '70') {
				zerobars = '[███████▒▒▒]'
		} else if (lbars >= '70' && lbars <= '80') {
				zerobars = '[████████▒▒]'
		} else if (lbars >= '80' && lbars <= '90') {
				zerobars = '[█████████▒]'
		} else if (lbars >= '90' && lbars <= '100') {
				zerobars = '[██████████]'
		} else { 
				zerobars = '[██████████]'
		} 
    let str = `
	
\n━━━━━━°❀❬ *PROFILE* ❭❀°━━━━━━

🔱 *Name: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})* ${about ? '\n\n🎗️ *About: ' + about : ''}*

🔰 *Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}*

🏮 *Link: https://wa.me/${who.split`@`[0]}* ${registered ? '\n\n⏳ *Age: ' + age : ''}*

⭐ *Exp: ${exp}*

💵 *Money: ${money}*

❤️ *Health: ${healt}*

🎀 *Level: ${zerobars} ${level}*

💫 *Rank: ${role}*

🧧 *Limit: ${limit}*

〽️ *Premium User: ${premium ? 'Yes': 'No'}*

📄 *Registered: ${registered ? 'Yes (' + new Date(regTime) + ')': 'No'}* ${lastclaim > 0 ? '\n\n🛑 *Last Claim: ' + new Date(lastclaim) : ''}*

`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile$/i
module.exports = handler

