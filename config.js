global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/CiypUhAJYSg9PCOVrVKBLQ, https://chat.whatsapp.com/KrIEwXTyhBE5FBweOsPOfZ']
global.channelYT = ['https://youtube.com/channel/UCjfQUhw550WDZv31eJQaehw'] 
global.owner = ['918709022955']// Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com', 
  Hanzzkun: 'https://hanzz-web.herokuapp.com',
  amel: 'https://melcanz.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
  'https://hanzz-web.herokuapp.com': 'HanzzKey',
  'https://melcanz.com': 'amel'
}
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// Sticker WM
global.packname = '×፝֟͜×᭄ Free Sticker Maker'
global.author = 'BY Quantum BOTོ ×፝֟͜×'

global.multiplier = 10 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

//var sticker_name = '×፝֟͜×᭄ Free Sticker Maker'
//  var sticker_author = 'BY Quantum BOTོ ×፝֟͜×'