let { MessageType } = require('@adiwajshing/baileys')
const Bpotion = 500
const Spotion = 150 
const Bdiamond = 1500
const Sdiamond = 1000
const Bcommon = 200
const Scommon = 20
const Suncommon = 100
const Buncommon = 600
const Bmythic = 2000 
const Smythic = 500
const Blegendary = 7500 
const Slegendary = 3000
const Bsampah = 10
const Ssampah = 2
const Bkayu = 300
const Skayu = 100
const Biron = 500
const Siron = 300
const Bgold = 900
const Sgold = 500
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    const _armor = global.DATABASE.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const _sword = global.DATABASE.data.users[m.sender].sword
    const sword = (_sword == 0 ? 20000 : '' || _sword == 1 ? 49999 : '' || _sword == 2 ? 99999 : '' || _sword == 3 ? 149999 : '' || _sword == 4 ? 299999 : '')
    const _pickaxe = global.DATABASE.data.users[m.sender].pickaxe
    const pickaxe = (_pickaxe == 0 ? 20000 : '' || _pickaxe == 1 ? 49999 : '' || _pickaxe == 2 ? 99999 : '' || _pickaxe == 3 ? 149999 : '' || _pickaxe == 4 ? 299999 : '')
    const Kchat = `
${usedPrefix}shop <Buy|sell> <item> <amount>\n
Usage examples: *${usedPrefix}shop buy potion 1*\n\n
We Sell The Following Items:\n
╭─「 Item 」
│ - Potion : ${Bpotion}
│ - Diamond : ${Bdiamond}
│ - Gold : ${Bgold}
│ - Wood :  ${Bkayu}
│ - Iron : ${Biron}
╰────
╭─「 Crate 」
│ - Common : ${Bcommon}
│ - Uncommon : ${Buncommon}
│ - Legendary : ${Blegendary}
│ - Mythic :  ${Bmythic}
╰────
╭─「 Tools 」
│ - Pickaxe : ${Bpotion}
│ - Sword : ${Bdiamond}
│ - Armor : ${Bgold}
╰────
We Can Also Purchase The Following Items:\n
╭─「 Item 」
│ - Diamond : ${Sdiamond}
│ - Gold : ${Sgold}
│ - Wood :  ${Skayu}
│ - Iron : ${Siron}
╰────
`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.DATABASE.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'potion':
                            if (global.DATABASE.data.users[m.sender].money >= potion * count) {
                                global.DATABASE.data.users[m.sender].money -= potion * count
                                global.DATABASE.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Succcessfully Bought ${count} Potion With Price ${potion * count} money\n\nUse Potion By Type: *${usedPrefix}use potion <amount>*`, m)
                            } else conn.reply(m.chat, `Your Money Is Not Enough To Buy ${count} Potion With Price ${potion * count} Money `,)
                        break
                    case 'diamond':
                            if (global.DATABASE.data.users[m.sender].money >= Bdiamond * count) {
                                global.DATABASE.data.users[m.sender].diamond += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bdiamond * count
                                conn.reply(m.chat, `Succcessfully Bought ${count} Diamonds With Prices ${Bdiamond * count} Money`, m)
                            } else conn.reply(m.chat, `Your Money Is Not Enough`, m)
                        
                        break
                    case 'common':
                            if (global.DATABASE.data.users[m.sender].money >= Bcommon * count) {
                                global.DATABASE.data.users[m.sender].common += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bcommon * count
                                conn.reply(m.chat, `Succcessfully Bought ${count} Common Crate With Price ${Bcommon * count} Money`, m)
                            } else conn.reply(m.chat, `Your Money Is Not Enough To Buy ${count} Common Crate With Price ${Bcommon * count} Money \n\nOpen Crate By Type: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'uncommon':
                            if (global.DATABASE.data.users[m.sender].money >= Buncommon * count) {
                                global.DATABASE.data.users[m.sender].uncommon += count * 1
                                global.DATABASE.data.users[m.sender].money -= Buncommon * count
                                conn.reply(m.chat, `Succcessfully Bought ${count} Uncommon Crate With Price ${Buncommon * count} Money`, m)
                            } else conn.reply(m.chat, `Your Money Is Not Enough To Buy ${count} Uncommon Crate With Price ${Buncommon * count} Money \n\nOpen Crate By Typing: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.DATABASE.data.users[m.sender].money >= Bmythic * count) {
                                    global.DATABASE.data.users[m.sender].mythic += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bmythic * count
                                conn.reply(m.chat, `Succcessfully Bought ${count} Mythic Crate With price ${Bmythic * count} Money`, m)
                            } else conn.reply(m.chat, `Your Money Is Not Enough To Buy ${count} Mythic Crate With price ${Bmythic* count} Money\n\nOpen Crate By Typing: *${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.DATABASE.data.users[m.sender].money >= Blegendary * count) {
                                global.DATABASE.data.users[m.sender].legendary += count * 1
                                global.DATABASE.data.users[m.sender].money -= Blegendary * count
                                conn.reply(m.chat, `Succcessfully Bought ${count} Legendary Crate With price ${Blegendary * count} Money`, m)
                            } else conn.reply(m.chat, `Your Money Is Not Enough To Buy ${count} Legendary Crate With price ${Blegendary * count} Money \n\nOpen Crate By Typing: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (global.DATABASE.data.users[m.sender].money >= Bsampah * count) {
                                global.DATABASE.data.users[m.sender].sampah += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bsampah * count
                                conn.reply(m.chat, `Succcessfully Bought ${count} Sampah With price ${Bsampah * count} Money `, m)
                            } else conn.reply(m.chat, `Your Money Is Not Enough To Buy ${count} Rubbish With price ${Bsampah * count} Money`.trim(), m)
                        
                        break
                        case 'pickaxe':
                            if (global.DATABASE.data.users[m.sender].pickaxe == 5) return conn.reply(m.chat, 'Your pickaxe already *Level Max*', m)
                            if (global.DATABASE.data.users[m.sender].money > pickaxe) {
                                global.DATABASE.data.users[m.sender].pickaxe += 1
                                global.DATABASE.data.users[m.sender].money -= pickaxe * 1
                                conn.reply(m.chat, `Succcessfully Bought Pickaxe Worth For ${pickaxe} Money` ,m)
                            } else conn.reply(m.chat, `Your Money Is Not Enough To Buy A Pickaxe Worth For ${pickaxe} Money`, m)
                        
                        break
                        case 'sword':
                            if (global.DATABASE.data.users[m.sender].sword == 5) return conn.reply(m.chat, 'Swordmu sudah *Level Max*', m)
                            if (global.DATABASE.data.users[m.sender].money > sword) {
                                global.DATABASE.data.users[m.sender].sword += 1
                                global.DATABASE.data.users[m.sender].money -= sword * 1
                                conn.reply(m.chat, `Succcessfully Bought Sword Worth For ${sword} Money` ,m)
                            } else conn.reply(m.chat, `Your Money Is Not Enough To Buy A Sword For ${sword} Money`, m)
                        
                        break
                    case 'armor':
                            if (global.DATABASE.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.DATABASE.data.users[m.sender].money > armor) {
                                global.DATABASE.data.users[m.sender].armor += 1
                                global.DATABASE.data.users[m.sender].money -= armor * 1
                                conn.reply(m.chat, `Success in Purchasing Valuable Armor ${Barmor} Money` ,m)
                            } else conn.reply(m.chat, `Your Money Isn't Enough To Buy Worthy Armor ${armor} Money`, m)
                        break
                    case 'kayu':
                            if (global.DATABASE.data.users[m.sender].money >= Bkayu * count) {
                                global.DATABASE.data.users[m.sender].diamond += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bkayu * count
                                conn.reply(m.chat, `Succcessfully Bought ${count} Wood With price ${Bkayu * count} Money`, m)
                            } else conn.reply(m.chat, `Your Money Is Not Enough`, m)
                         break
                    case 'gold':
                            if (global.DATABASE.data.users[m.sender].money >= Bgold * count) {
                                global.DATABASE.data.users[m.sender].emas += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bgold * count
                                conn.reply(m.chat, `Succcessfully Bought ${count} Gold With price ${Bgold * count} Money`, m)
                            } else conn.reply(m.chat, `Your Money Is Not Enough`, m)
                         break
                    case 'iron':
                            if (global.DATABASE.data.users[m.sender].money >= Biron * count) {
                                global.DATABASE.data.users[m.sender].iron += count * 1
                                global.DATABASE.data.users[m.sender].money -= Biron * count
                                conn.reply(m.chat, `Succcessfully Bought ${count} Iron With price ${Biron * count} Money`, m)
                            } else conn.reply(m.chat, `Your Money Is Not Enough`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.DATABASE.data.users[m.sender].potion >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Spotion * count
                            global.DATABASE.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Succcessfully Sold ${count} Potion With price ${Spotion * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Potion Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.DATABASE.data.users[m.sender].common >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Scommon * count
                            global.DATABASE.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Succcessfully Sold ${count} Common Crate With price ${Scommon * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.DATABASE.data.users[m.sender].uncommon >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Suncommon * count
                            global.DATABASE.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Succcessfully Sold ${count} Uncommon Crate With price ${Suncommon * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.DATABASE.data.users[m.sender].mythic >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Smythic * count
                            global.DATABASE.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Succcessfully Sold ${count} Mythic Crate With price ${Smythic * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Mythic Crate Kamu Tidak Cukup `.trim(), m)
                        break
                    case 'legendary':
                        if (global.DATABASE.data.users[m.sender].legendary >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Slegendary * count
                            global.DATABASE.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Succcessfully Sold ${count} Legendary Crate With price ${Slegendary * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate Kamu Tidak Cukup `.trim(), m)
                        break
                    case 'sampah':
                        if (global.DATABASE.data.users[m.sender].sampah >= count * 1) {
                            global.DATABASE.data.users[m.sender].sampah -= count * 1
                            global.DATABASE.data.users[m.sender].money += Ssampah * count
                            conn.reply(m.chat, `Succcessfully Sold ${count} Sampah , And You Get ${Ssampah * count} Money `, m)
                        } else conn.reply(m.chat, `Your Trash Is Not Enough `, m)
                        break
                    case 'diamond':
                        if (global.DATABASE.data.users[m.sender].diamond >= count * 1) {
                            global.DATABASE.data.users[m.sender].diamond -= count * 1
                            global.DATABASE.data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Succcessfully Sold ${count} Diamond, And You Get ${Sdiamond * count} Money `, m)
                        } else conn.reply(m.chat, `Your Diamonds Are Not Enough `, m)
                        break
                   case 'kayu':
                        if (global.DATABASE.data.users[m.sender].kayu >= count * 1) {
                            global.DATABASE.data.users[m.sender].kayu -= count * 1
                            global.DATABASE.data.users[m.sender].money += Skayu * count
                            conn.reply(m.chat, `Succcessfully Sold ${count} Kayu, And You Get ${Skayu * count} Money `, m)
                        } else conn.reply(m.chat, `Your Wood Is Not Enough `, m)
                        break
                    case 'gold':
                        if (global.DATABASE.data.users[m.sender].emas >= count * 1) {
                            global.DATABASE.data.users[m.sender].emas -= count * 1
                            global.DATABASE.data.users[m.sender].money += Sgold * count
                            conn.reply(m.chat, `Succcessfully Sold ${count} Gold, And You Get ${Sgold * count} Money `, m)
                        } else conn.reply(m.chat, `Your Gold Is Not Enough`, m)
                        break
                    case 'diamond':
                        if (global.DATABASE.data.users[m.sender].iron >= count * 1) {
                            global.DATABASE.data.users[m.sender].iron -= count * 1
                            global.DATABASE.data.users[m.sender].money += Siron * count
                            conn.reply(m.chat, `Succcessfully Sold ${count} Iron, And You Get ${Siron * count} Money `, m)
                        } else conn.reply(m.chat, `Your Iron Is Not Enough `, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.DATABASE.data.users[m.sender].money >= potion * count) {
                            global.DATABASE.data.users[m.sender].money -= potion * count
                            global.DATABASE.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Succcessfully Bought ${count} Potion With price ${potion * count} Money \n\nUse Potion By Type: *${usedPrefix}use potion <amount>*`, m)
                        } else conn.reply(m.chat, `Your Money Is Not Enough To Buy ${count} Potion With price ${potion * count} Money`,m)
                    
                    break
                case 'diamond':
                        if (global.DATABASE.data.users[m.sender].money >= Bdiamond * count) {
                            global.DATABASE.data.users[m.sender].diamond += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bdiamond * count
                            conn.reply(m.chat, `Succcessfully Bought ${count} Diamond With price ${Bdiamond * count} Money `, m)
                        } else conn.reply(m.chat, `Your Money Is Not Enough `, m)
                    
                    break
                case 'common':
                        if (global.DATABASE.data.users[m.sender].money >= Bcommon * count) {
                            global.DATABASE.data.users[m.sender].common += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bcommon * count
                            conn.reply(m.chat, `Succcessfully Bought ${count} Common Crate With price ${Bcommon * count} Money `, m)
                        } else conn.reply(m.chat, `Your Money Is Not Enough To Buy ${count} Common Crate With price ${Bcommon * count} Money \n\nOpen Crate By Typing: *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.DATABASE.data.users[m.sender].money >= Buncommon * count) {
                            global.DATABASE.data.users[m.sender].uncommon += count * 1
                            global.DATABASE.data.users[m.sender].money -= Buncommon * count
                            conn.reply(m.chat, `Succcessfully Bought ${count} Uncommon Crate With price ${Buncommon * count} Money `, m)
                        } else conn.reply(m.chat, `Your Money Is Not Enough To Buy ${count} Uncommon Crate With price ${Buncommon * count} Money \n\nOpen Crate By Typing: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.DATABASE.data.users[m.sender].money >= Bmythic * count) {
                            global.DATABASE.data.users[m.sender].mythic += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bmythic * count
                            conn.reply(m.chat, `Succcessfully Bought ${count} Mythic Crate With price ${Bmythic * count} Money `, m)
                        } else conn.reply(m.chat, `Your Money Is Not Enough To Buy ${count} Mythic Crate With price ${Bmythic* count} money\n\nOpen Crate By Typing: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.DATABASE.data.users[m.sender].money >= Blegendary * count) {
                            global.DATABASE.data.users[m.sender].legendary += count * 1
                            global.DATABASE.data.users[m.sender].money -= Blegendary * count
                            conn.reply(m.chat, `Succcessfully Bought ${count} Legendary Crate With price ${Blegendary * count} Money`, m)
                        } else conn.reply(m.chat, `Your Money Is Not Enough To Buy ${count} Legendary Crate With price ${Blegendary * count} Money \n\nOpen Crate By Typing: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.DATABASE.data.users[m.sender].money >= Bsampah * count) {
                            global.DATABASE.data.users[m.sender].sampah += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bsampah * count
                            conn.reply(m.chat, `Succcessfully Bought ${count} Sampah With price ${Bsampah * count} money`, m)
                        } else conn.reply(m.chat, `Your Money Is Not Enough To Buy ${count} Sampah With price ${Bsampah * count} Money `.trim(), m)
                    
                    break
                case 'armor':
                        if (global.DATABASE.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Your Armor Has *Level Max*', m)
                        if (global.DATABASE.data.users[m.sender].money > armor * 1) {
                            global.DATABASE.data.users[m.sender].armor += 1
                            global.DATABASE.data.users[m.sender].money -= armor * 1
                            conn.reply(m.chat, `Succcessfully Bought Armor worth ${armor} Money` ,m)
                          
                        } else conn.reply(m.chat, `Your Money Isn't Enough To Buy Worthy Armor ${armor} Money`, m)
                        break
                   case 'kayu':
                            if (global.DATABASE.data.users[m.sender].money > kayu) {
                                global.DATABASE.data.users[m.sender].kayu += 1
                                global.DATABASE.data.users[m.sender].money -= Bkayu * 1
                                conn.reply(m.chat, `Succcessfully Bought Wood Worth For ${Bkayu} Money` ,m)
                            } else conn.reply(m.chat, `Your Money Is Not Enough To Buy Worthy Wood For ${BKayu} Money`, m)
                         break
                    case 'gold':
                            if (global.DATABASE.data.users[m.sender].money > gold) {
                                global.DATABASE.data.users[m.sender].gold += 1
                                global.DATABASE.data.users[m.sender].money -= Bgold * 1
                                conn.reply(m.chat, `Succcessfully Bought Gold Worth For ${Bgold} Money` ,m)
                            } else conn.reply(m.chat, `Your Money Is Not Enough To Buy Gold For ${Bgold} Money`, m)
                         break
                    case 'iron':
                            if (global.DATABASE.data.users[m.sender].money > iron) {
                                global.DATABASE.data.users[m.sender].iron += 1
                                global.DATABASE.data.users[m.sender].money -= Biron * 1
                                conn.reply(m.chat, `Succcessfully Bought Iron Worth For ${Biron} Money` ,m)
                            } else conn.reply(m.chat, `Your Money Is Not Enough To Buy Iron For ${Bgold} Money`, m)                        
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.DATABASE.data.users[m.sender].potion >= count * 1) {
                        global.DATABASE.data.users[m.sender].money += Spotion * count
                        global.DATABASE.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Succcessfully Sold ${count} Potion With price ${Spotion * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Your Potion Is Not Enough `.trim(), m)
                    break
                case 'common':
                    if (global.DATABASE.data.users[m.sender].common >= count * 1) {
                        global.DATABASE.data.users[m.sender].money += Scommon * count
                        global.DATABASE.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Succcessfully Sold ${count} Common Crate With price ${Scommon * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Your Common Crate Is Not Enough `.trim(), m)
                    break
                case 'uncommon':
                    if (global.DATABASE.data.users[m.sender].uncommon >= count * 1) {
                        global.DATABASE.data.users[m.sender].money += Suncommon * count
                        global.DATABASE.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Succcessfully Sold ${count} Uncommon Crate With price ${Suncommon * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Your Uncommon Crate Is Not Enough`.trim(), m)
                    break
                case 'mythic':
                    if (global.DATABASE.data.users[m.sender].mythic >= count * 1) {
                        global.DATABASE.data.users[m.sender].money += Smythic * count
                        global.DATABASE.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Succcessfully Sold ${count} Mythic Crate With price ${Smythic * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Your Mythic Crate Is Not Enough `.trim(), m)
                    break
                case 'legendary':
                    if (global.DATABASE.data.users[m.sender].legendary >= count * 1) {
                        global.DATABASE.data.users[m.sender].money += Slegendary * count
                        global.DATABASE.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Succcessfully Sold ${count} Legendary Crate With price ${Slegendary * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Your Legendary Crate Is Not Enough`.trim(), m)
                    break
                case 'sampah':
                    if (global.DATABASE.data.users[m.sender].sampah >= count * 1) {
                        global.DATABASE.data.users[m.sender].sampah -= count * 1
                        global.DATABASE.data.users[m.sender].money += Ssampah * count
                        conn.reply(m.chat, `Succcessfully Sold ${count} Sampah, And You Get ${Ssampah * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Your Trash Is Not Enough`.trim(), m)
                    break
                case 'diamond':
                    if (global.DATABASE.data.users[m.sender].diamond >= count * 1) {
                        global.DATABASE.data.users[m.sender].diamond -= count * 1
                        global.DATABASE.data.users[m.sender].money += Sdiamond * count
                        conn.reply(m.chat, `Succcessfully Sold ${count} Diamond, And You Get ${Sdiamond * count} Money`, m)
                    } else conn.reply(m.chat, `Your Diamond Is Not Enough `, m)
                    case 'kayu':
                        if (global.DATABASE.data.users[m.sender].kayu >= count * 1) {
                            global.DATABASE.data.users[m.sender].kayu -= count * 1
                            global.DATABASE.data.users[m.sender].money += Skayu* count
                            conn.reply(m.chat, `Succcessfully Sold ${count} Kayu, And You Get ${Skayu * count} Money `, m)
                        } else conn.reply(m.chat, `Your Wood Is Not Enough `, m)
                        
                        break
                    case 'gold':
                        if (global.DATABASE.data.users[m.sender].gold >= count * 1) {
                            global.DATABASE.data.users[m.sender].gold -= count * 1
                            global.DATABASE.data.users[m.sender].money += Sgold * count
                            conn.reply(m.chat, `Succcessfully Sold ${count} Gold, And You Get ${SGold * count} Money `, m)
                        } else conn.reply(m.chat, `Your Gold Is Not Enough `, m)
                        
                        break
                    case 'iron':
                        if (global.DATABASE.data.users[m.sender].iron >= count * 1) {
                            global.DATABASE.data.users[m.sender].iron -= count * 1
                            global.DATABASE.data.users[m.sender].money += Siron * count
                            conn.reply(m.chat, `Succcessfully Sold ${count} Iron, And You Get ${Siron * count} Money `, m)
                        } else conn.reply(m.chat, `Your Iron Is Not Enough `, m)     
               
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
    
handler.command = /^(shop|toko|buy|beli|sell|jual)$/i
module.exports = handler