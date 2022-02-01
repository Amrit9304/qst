let { MessageType } = require('@adiwajshing/baileys')
const Skepiting = 3000
const Slobster = 3000
const Sudang = 3000
const Scumi = 3000
const Sgurita = 3000
const Sbuntal = 3000
const Sdory = 3000
const Sorca = 3000
const Slumba = 3000
const Spaus = 3000
const Shiu = 3000
const Sbanteng = 4000 
const Sharimau = 4000 
const Sgajah = 4000 
const Skambing = 4000 
const Spanda = 4000 
const Sbuaya = 4000 
const Skerbau = 4000 
const Ssapi= 4000 
const Smonyet = 4000 
const Sbabihutan = 4000 
const Sbabi = 4000 
const Sayam = 4000 
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    const _armor = global.DATABASE.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `━━━━━━━━━━━━━━━━━
*Barang   | Harga Jual*\n━━━━━━━━━━━━━━━━━\n
Crab:     ${Skepiting}
Lobster:     ${Slobster}
Shrimp:     ${Sudang}
Squid:     ${Scumi}
Octopus:     ${Sgurita}
Bloated:     ${Sbuntal}
Pufferfish:     ${Sdory}
Orca:     ${Sorca}
Dolphin:     ${Slumba}
Whale:     ${Spaus}
Shark:     ${hiu}
Bull:     ${Sbanteng}
Tiger:     ${Sharimau}
Elephant:     ${Sgajah}
Goat:     ${Skambing}
Panda:      ${Spanda}
Buffalo:     ${Skerbau}
Crocodile:     ${Sbuaya}
Cow:     ${Ssapi}
Ape:     ${Smonyet}
Wild boar:     ${Sbabihutan}
Pig:     ${Sbabi}
Chicken:     ${Sayam}\n━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━
`.trim()
    try {
        if (/pasar|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.DATABASE.data.users[m.sender].sampah
            switch (jualbeli) {
           /* case 'buy':
                switch (_type) {
                    case 'potion':
                            if (global.DATABASE.data.users[m.sender].money >= potion * count) {
                                global.DATABASE.data.users[m.sender].money -= potion * count
                                global.DATABASE.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Sukses Membeli ${count} Potion For ${potion * count} money\n\nGunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Potion For ${potion * count} Money `,)
                        break
                    case 'diamond':
                            if (global.DATABASE.data.users[m.sender].money >= Bdiamond * count) {
                                global.DATABASE.data.users[m.sender].diamond += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bdiamond * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Diamond For ${Bdiamond * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        
                        break
                    case 'common':
                            if (global.DATABASE.data.users[m.sender].money >= Bcommon * count) {
                                global.DATABASE.data.users[m.sender].common += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bcommon * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Common Crate For ${Bcommon * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate For ${Bcommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'uncommon':
                            if (global.DATABASE.data.users[m.sender].money >= Buncommon * count) {
                                global.DATABASE.data.users[m.sender].uncommon += count * 1
                                global.DATABASE.data.users[m.sender].money -= Buncommon * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Uncommon Crate For ${Buncommon * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate For ${Buncommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.DATABASE.data.users[m.sender].money >= Bmythic * count) {
                                    global.DATABASE.data.users[m.sender].mythic += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bmythic * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Mythic Crate For ${Bmythic * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate For ${Bmythic* count} Money\n\nBuka Crate Dengan Ketik:*${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.DATABASE.data.users[m.sender].money >= Blegendary * count) {
                                global.DATABASE.data.users[m.sender].legendary += count * 1
                                global.DATABASE.data.users[m.sender].money -= Blegendary * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Legendary Crate For ${Blegendary * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate For ${Blegendary * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (global.DATABASE.data.users[m.sender].money >= Bsampah * count) {
                                global.DATABASE.data.users[m.sender].sampah += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bsampah * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Sampah For ${Bsampah * count} Money `, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah For ${Bsampah * count} Money`.trim(), m)
                        
                        break
                    case 'armor':
                            if (global.DATABASE.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.DATABASE.data.users[m.sender].money > armor) {
                                global.DATABASE.data.users[m.sender].armor += 1
                                global.DATABASE.data.users[m.sender].money -= armor * 1
                                conn.reply(m.chat, `Sukses Membeli Armor Seharga ${armor} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Armor Seharga ${armor} Money`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break*/
            case 'sell': 
                switch (_type) {                  
                     case 'crab':
                        if (global.DATABASE.data.users[m.sender].kepiting >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Skepiting * count
                            global.DATABASE.data.users[m.sender].kepiting -= count * 1
                            conn.reply(m.chat, `Successfully Sold ${count} Crab For ${Spaus *count} Money `.trim(), m)
                        } else conn.reply(m.chat, `You don't have enough Crab to sell`.trim(), m)
                        break
                        case 'whale':
                        if (global.DATABASE.data.users[m.sender].paus >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Spaus * count
                            global.DATABASE.data.users[m.sender].paus -= count * 1
                            conn.reply(m.chat, `Successfully Sold ${count} Whale For ${Spaus * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `You don't have enough Whale to sell`.trim(), m)
                        break
                        case 'bull':
                        if (global.DATABASE.data.users[m.sender].banteng >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Spaus * count
                            global.DATABASE.data.users[m.sender].banteng -= count * 1
                            conn.reply(m.chat, `Successfully Sold ${count} Bull For ${Spaus * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `You don't have enough Lobster to sell`.trim(), m)
                        break
                  case 'lobster':
                        if (global.DATABASE.data.users[m.sender].lobster >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Slobster * count
                            global.DATABASE.data.users[m.sender].lobster -= count * 1
                            conn.reply(m.chat, `Successfully Sold ${count} Lobster For ${Slobster * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `You don't have enough Lobster to sell`.trim(), m)
                        break
                     case 'shrimp':
                        if (global.DATABASE.data.users[m.sender].udang >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Sudang * count
                            global.DATABASE.data.users[m.sender].udang -= count * 1
                            conn.reply(m.chat, `Successfully Sold ${count} Shrimp For ${Sudang * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `You don't have enough Shrimp to sell`.trim(), m)
                        break
                      case 'squid':
                        if (global.DATABASE.data.users[m.sender].cumi >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Scumi * count
                            global.DATABASE.data.users[m.sender].cumi -= count * 1
                            conn.reply(m.chat, `Successfully Sold ${count} Squid For ${Scumi * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `You don't have enough Squid to sell`.trim(), m)
                        break
                    case 'diamond':
                        if (global.DATABASE.data.users[m.sender].diamond >= count * 1) {
                            global.DATABASE.data.users[m.sender].diamond -= count * 1
                            global.DATABASE.data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Successfully Sold ${count} Diamond, And You Get ${Sdiamond * count} Money `, m)
                        } else conn.reply(m.chat, `You don't have enough Diamond to sell`, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
      /*  } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.DATABASE.data.users[m.sender].money >= potion * count) {
                            global.DATABASE.data.users[m.sender].money -= potion * count
                            global.DATABASE.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Sukses membeli ${count} Potion For ${potion * count} Money \n\nGunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Potion For ${potion * count} Money`,m)
                    
                    break
                case 'diamond':
                        if (global.DATABASE.data.users[m.sender].money >= Bdiamond * count) {
                            global.DATABASE.data.users[m.sender].diamond += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bdiamond * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Diamond For ${Bdiamond * count} Money `, m)
                        } else conn.reply(m.chat, `Money Anda Tidak Cukup `, m)
                    
                    break
                case 'common':
                        if (global.DATABASE.data.users[m.sender].money >= Bcommon * count) {
                            global.DATABASE.data.users[m.sender].common += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bcommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Common Crate For ${Bcommon * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate For ${Bcommon * count} Money \n\nBuka Crate Dengan Ketik : *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.DATABASE.data.users[m.sender].money >= Buncommon * count) {
                            global.DATABASE.data.users[m.sender].uncommon += count * 1
                            global.DATABASE.data.users[m.sender].money -= Buncommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Uncommon Crate For ${Buncommon * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate For ${Buncommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.DATABASE.data.users[m.sender].money >= Bmythic * count) {
                            global.DATABASE.data.users[m.sender].mythic += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bmythic * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Mythic Crate For ${Bmythic * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate For ${Bmythic* count} money\n\nBuka Crate Dengan Ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.DATABASE.data.users[m.sender].money >= Blegendary * count) {
                            global.DATABASE.data.users[m.sender].legendary += count * 1
                            global.DATABASE.data.users[m.sender].money -= Blegendary * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Legendary Crate For ${Blegendary * count} Money`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate For ${Blegendary * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.DATABASE.data.users[m.sender].money >= Bsampah * count) {
                            global.DATABASE.data.users[m.sender].sampah += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bsampah * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Sampah For ${Bsampah * count} money`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah For ${Bsampah * count} Money `.trim(), m)
                    
                    break
                case 'armor':
                        if (global.DATABASE.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu Telah *Level Max*', m)
                        if (global.DATABASE.data.users[m.sender].money > armor * 1) {
                            global.DATABASE.data.users[m.sender].armor += 1
                            global.DATABASE.data.users[m.sender].money -= armor * 1
                            conn.reply(m.chat, `Sukses Membeli Armor Seharga ${armor} Money` ,m)
                          
                        } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Armor Seharga ${armor} Money`, m)
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }*/
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) { 
                       case 'bull':
                        if (global.DATABASE.data.users[m.sender].banteng >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Spaus * count
                            global.DATABASE.data.users[m.sender].banteng -= count * 1
                            conn.reply(m.chat, `Successfully Sold ${count} Bull For ${Spaus * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `You don't have enough Bull to sell`.trim(), m)
                        break
                        case 'crab':
                        if (global.DATABASE.data.users[m.sender].kepiting >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Skepiting * count
                            global.DATABASE.data.users[m.sender].kepiting -= count * 1
                            conn.reply(m.chat, `Successfully Sold ${count} Crab For ${Spaus * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `You don't have enough Crab to sell`.trim(), m)
                        break
                        case 'whale':
                        if (global.DATABASE.data.users[m.sender].paus >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Spaus * count
                            global.DATABASE.data.users[m.sender].paus -= count * 1
                            conn.reply(m.chat, `Successfully Sold ${count} Whale For ${Spaus * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `You don't have enough Whale to sell`.trim(), m)
                        break
                  case 'lobster':
                        if (global.DATABASE.data.users[m.sender].lobster >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Slobster * count
                            global.DATABASE.data.users[m.sender].lobster -= count * 1
                            conn.reply(m.chat, `Successfully Sold ${count} Lobster For ${Slobster * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `You don't have enough Lobster to sell`.trim(), m)
                        break
                     case 'Shrimp':
                        if (global.DATABASE.data.users[m.sender].udang >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Sudang * count
                            global.DATABASE.data.users[m.sender].udang -= count * 1
                            conn.reply(m.chat, `Successfully Sold ${count} Shrimp For ${Sudang * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `You don't have enough Shrimp to sell`.trim(), m)
                        break
                     case 'octopus':
                        if (global.DATABASE.data.users[m.sender].gurita >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Sgurita * count
                            global.DATABASE.data.users[m.sender].gurita -= count * 1
                            conn.reply(m.chat, `Successfully Sold ${count} Octopus For ${Sgurita * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `You don't have enough Octopus to sell`.trim(), m)
                        break
                      case 'squid':
                        if (global.DATABASE.data.users[m.sender].cumi >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Scumi * count
                            global.DATABASE.data.users[m.sender].cumi -= count * 1
                            conn.reply(m.chat, `Successfully Sold ${count} Squid For ${Scumi * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `You don't have enough Squid to sell`.trim(), m)
                        break   
                        case 'chicken':
                        if (global.DATABASE.data.users[m.sender].ayam >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Sayam * count
                            global.DATABASE.data.users[m.sender].ayam -= count * 1
                            conn.reply(m.chat, `Successfully Sold ${count} Chicken For ${Sayam * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `You don't have enough Chicken to sell`.trim(), m)
                        break
                      case 'squid':
                        if (global.DATABASE.data.users[m.sender].cumi >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Scumi * count
                            global.DATABASE.data.users[m.sender].cumi -= count * 1
                            conn.reply(m.chat, `Successfully Sold ${count} Squid For ${Scumi * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `You don't have enough Squid to sell`.trim(), m)
                        break   
                case 'diamond':
                    if (global.DATABASE.data.users[m.sender].diamond >= count * 1) {
                        global.DATABASE.data.users[m.sender].diamond -= count * 1
                        global.DATABASE.data.users[m.sender].money += Sdiamond * count
                        conn.reply(m.chat, `Successfully Sold ${count} Diamond, Dan Anda Mendapatkan ${Sdiamond * count} Money`, m)
                    } else conn.reply(m.chat, `You don't have enough Diamond to sell `, m)
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['shop <sell|buy> <args>', 'toko <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(pasar|toko|buy|beli|sell|jual)$/i
module.exports = handler