let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
	await m.reply(' _*Beli Premium Nya Banh...*_ ')
  let ext= `
╭─「 BUY PREMIUM 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│• Dapat Menambahkan Bot Ke Grup!
│
│ > Bonus :
│• Diberi 5 Limit Setiap Hari
│
│ > Harga :
│• 10K / Bulan (1 Bulan)
│• 20K / Tahun (3 Bulan)
│• 50K / VIP (Permanen)
│
│ > Pembayaran :
│• DANA : 6281387127465
│• TELKOMSEL : 6281387127465
│• GOPAY : 6281387127465
│ > Jika Minat Chat wa.me/6281212083267
╰────
`.trim()
await conn.sendButtonLoc(m.chat, await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Premium`)).buffer(), ext.trim(), 'HanzzBotz By Hanzz-kun', 'PEMBAYARAN', 'pembayaran',m)
    

}
handler.help = ['premium']
handler.tags = ['info']
handler.command = /^premium/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler