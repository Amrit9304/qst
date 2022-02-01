let handler = m => m.reply('وَعَلَيْكُمُ السَّلاَمُ')

handler.customPrefix = /assalamualaikum|Assalamualaikum|Salam|salam/i
handler.command = new RegExp

module.exports = handler