let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "HELLO 👋👋\nI'm Quantum Bot\n\nBot Made To Help You Like Making Stickers And Others\n\nPlease Select The Menu Below Yes\n\nAnd Before Using The Bot Type .rules\n\nJoin WhatsApp Group\n",
                        "description": "*Note : If you want to see all menus, type .allmenu*",
                        "buttonText": "Quantum BOT Menu List",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Downloader Menu`,
                                        "description": "",
                                        "rowId": ".downloadmenu"
                                    },{
                                        "title": "Owner Bot",
                                        "description": "",
                                        "rowId": ".owner"
                                    },{
                                        "title": "NSFW Menu",
                                        "description": "",
                                        "rowId": ".nsfwmenu"    
                                    },{
                                        "title": "Status Bot",
                                        "description": "",
                                        "rowId": ".mystat"                                        
                                    },{
                                        "title": "Sewa Bot",
                                        "description": "",
                                        "rowId": ".sewabot"
                                    },{
                                        "title": "Rules",
                                        "description": "",
                                        "rowId": ".rules"  
                                    },{
                                        "title": "Tutorial Rpg",
                                        "description": "",
                                        "rowId": ".tutorial"                                                       
                                    },{
                                        "title": "Group Bot",
                                        "description": "",
                                        "rowId": ".gchanzz"
                                    },{
                                        "title": "Game Menu",
                                        "description": "",
                                        "rowId": ".gamemenu"
                                    },{
                                        "title": "Primbon Menu",
                                        "description": "",
                                        "rowId": ".primbonmenu"                                        
                                    },{
                                        "title": "Rpg Menu",
                                        "description": "",
                                        "rowId": ".rpgmenu"                                           
                                    },{
                                        "title": "Grup Menu",
                                        "description": "",
                                        "rowId": ".Grupmenu"             
                                    },{
                                        "title": "Database Menu",
                                        "description": "",
                                        "rowId": ".dbmenu"                 
                                    },{
                                        "title": "Sticker Menu",
                                        "description": "",
                                        "rowId": ".stickermenu"
                                    },{
                                        "title": "Islam Menu",
                                        "description": "",
                                        "rowId": ".islammenu"                 
                                    },{
                                    	"title": "All Menu",
                                        "description": "",
                                        "rowId": ".allmenu"                 
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "Anime Menu",
                                        "description": "",
                                        "rowId": ".animemenu" 
                                    },{
                                        "title": "Anonymous Chat",
                                        "description": "",
                                        "rowId": ".anonymouschat"                                                                                         
                                    },{
                                        "title": "Info Owner",
                                        "description": "",
                                        "rowId": ".infoowner"                                
                                    },{
                                        "title": "Hentai Menu",
                                        "description": "",
                                        "rowId": ".hentaimenu" 
                                    },{
                                        "title": "Creator Menu",
                                        "description": "",
                                        "rowId": ".creatormenu"
                                    },{
                                        "title": "Editor Menu",
                                        "description": "",
                                        "rowId": ".editormenu" 
                                    },{
                                        "title": "Education Menu",
                                        "description": "",
                                        "rowId": ".educationmenu"  
                                    },{
                                        "title": "Image Menu",
                                        "description": "",
                                        "rowId": ".imagemenu"
                                    },{
                                        "title": "Sound Menu",
                                        "description": "",
                                        "rowId": ".soundmenu"
                                    },{
                                        "title": "Music Menu",
                                        "description": "",
                                        "rowId": ".musicmenu"
                                    },{
                                        "title": "News Menu",
                                        "description": "",
                                        "rowId": ".newsmenu"
                                    },{
                                        "title": "Info Menu",
                                        "description": "",
                                        "rowId": ".infomenu"
                                    },{
                                        "title": "Tools Menu",
                                        "description": "",
                                        "rowId": ".toolsmenu"
                                    },{
                                        "title": "info Bot",
                                        "description": "",
                                        "rowId": ".info"                          
                                    },{
                                        "title": "Premium Menu",
                                        "description": "",
                                        "rowId": ".premiummenu"
                                    },{
                                        "title": "Xp Menu",
                                        "description": "",
                                        "rowId": ".xpmenu" 
                                    },{
                                        "title": "Kerang Menu",
                                        "description": "",
                                        "rowId": ".kerangmenu"
                                    },{
                                        "title": "Converter Menu",
                                        "description": "",
                                        "rowId": ".convertermenu"
                                    },{
                                        "title": "Search Menu",
                                        "description": "",
                                        "rowId": ".searchmenu"
                                    },{
                                        "title": "Random Menu",
                                        "description": "",
                                        "rowId": ".randommenu"                  
                                    },{
                                        "title": "Absen Menu",
                                        "description": "",
                                        "rowId": ".absenmenu"                 
                                    }, {
                                        "title": "Group Setting",
                                        "description": "",
                                        "rowId": ".groupset"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu', 'help']
handler.register = true
module.exports = handler