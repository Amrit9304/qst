let fs = require("fs")
let fetch = require("node-fetch")
let { exec } = require("child_process")

let handler = async (m, { conn, command }) => {
	if (m.quoted && m.quoted.sender) m.mentionedJid.push(m.quoted.sender)
	if (!m.mentionedJid.length) m.mentionedJid.push(m.sender)
	let res = await fetch(API("https://api.waifu.pics", "/sfw/" + command, {}))
	if (!res.ok) throw `${res.status} ${res.statusText}`
	let json = await res.json()
	if (json.url) {
		let buf = await (await fetch(json.url)).buffer()
		let input = `${command}.gif`
		let output = `${command}.mp4`
		fs.writeFileSync(input, buf)
		exec(`ffmpeg -i ${input} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${output}`, (e) => {
			if (e) m.reply(String(e))
			fs.unlinkSync(input)
			conn.sendMessage(m.chat, fs.readFileSync(output), "videoMessage", { mimetype: "video/gif", quoted: m, caption: `@${m.sender.split("@")[0]} *${command}ed* ${m.mentionedJid.map((user) => user === m.sender ? "*Themselves* " : `@${user.split("@")[0]}`).join(", ")}`, contextInfo: { mentionedJid: [...m.mentionedJid, m.sender] }})
			fs.unlinkSync(output)
		})
	} else throw json
}
handler.help = ["hug", "pat", "punch", "lick", "slap", "bully", "kiss", "lick", "highfive", "cry", "dance", "kick", "kill", "cuddle", "smug", "bonk", "yeet", "blush", "wave", "smile", "handhold", "nom", "bite", "glomp", "cringe", "wink", "happy", "poke"]
handler.tags = ["Reactions"]
handler.command = /^(hug|pat|punch|lick|slap|bully|kiss|lick|highfive|cry|dance|kick|kill|cuddle|smug|bonk|yeet|blush|wave|smile|handhold|nom|bite|glomp|cringe|wink|happy|poke)$/i

module.exports = handler