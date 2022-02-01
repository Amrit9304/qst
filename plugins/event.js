let handler  = async (m, { conn, usedPrefix: _p }) => {
let event = `
┏━°❀❬ *EVENT BULANAN * ❭❀°━┓
┃
┃>Turnamen Tictactoe 
┃Berhadiah Premium 1Bulan 
┃Hanya Untuk 3 Pemenang
┃Dimulai Tanggal 17 Desember 2021
┃
┗━━━━━━━━━━━━━━━━
`.trim()

  conn.fakeReply(m.chat, event, '6281212083267@s.whatsapp.net', '*Buruan Daftar Dengan Ketik .edaftar <namamu>*')
}
handler.help = ['event']
handler.tags = ['hadiah']
handler.command = /^(event)$/i

handler.fail = null 

module.exports = handler
