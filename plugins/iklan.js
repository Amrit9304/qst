let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
	await m.reply(' _*Sewa Dong Banh...*_ ')
  let ext= `
「 *Sewa Hanzz Botz* 」

────────────

○ *SEWA HANZZ BOTZ :*

○ *10K Ampe Pensi Asalkan Memenuhi Syarat Dibawah:

□Tidak Boleh Spam Bot

□Dan Gunakan Bot Dengan Bijak

□Owner Selalu Memperhatikan

◯ *PEMBAYARAN BISA MELALUI :*

◯ *DANA*

◯ *PULSA*

○ *GOPAY*

🗣 : Boleh Liat Fiturnya Gak Bang?
👤 : Boleh Dicoba 
🗣 : Banyak Yang Error Bang!
👤 : Kan Saya Masih Noob Ngab Jangan Dibully
──────────────
◯ *JIKA MINAT IKLAN DIATAS*

◯ *HARAP CHAT NOMER wa.me/6281212083267*

──────────────

「 *Powered By Hanzz-kun* 」
`.trim()
await conn.sendButtonLoc(m.chat, await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Sewa Bot`)).buffer(), ext.trim(), 'HanzzBotz By Hanzz-kun', 'Pembayaran', 'Pembayaran',m)
    

}
handler.help = ['sewabot']
handler.tags = ['info']
handler.command = /^sewabot/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler