import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』*', `𝑯𝒂𝒊,𝑨𝒌𝒖 𝑨𝒅𝒂𝒍𝒂𝒉 𝑩𝒐𝒕 𝒀𝒂𝒏𝒈 𝑫𝒊𝒃𝒆𝒓𝒊 𝑵𝒂𝒎𝒂 𝑪𝑯𝑰𝑲𝑨-𝑩𝑶𝑻,𝑨𝒌𝒖 𝑫𝒊𝒌𝒆𝒎𝒃𝒂𝒏𝒈𝒌𝒂𝒏 𝑶𝒍𝒆𝒉 𝑺𝒆𝒔𝒆𝒐𝒓𝒂𝒏𝒈 𝒀𝒂𝒏𝒈 𝑩𝒆𝒓𝒏𝒂𝒎𝒂 𝑨𝒍𝒆𝒙 𝒕𝒛 𝒔𝒓𝒐𝒓𝒆,𝑩𝒆𝒍𝒊𝒂𝒖 𝑺𝒂𝒏𝒈𝒂𝒕 𝑮𝒂𝒏𝒕𝒆𝒏𝒈 & 𝑷𝒊𝒏𝒕𝒂𝒓...,𝑪𝒂𝒏𝒅𝒂 𝒚𝒂 𝒂𝒏𝒋 𝒈𝒌 𝒖𝒔𝒂𝒉 𝒃𝒂𝒑𝒆𝒓𝒂𝒏,\n𝑺𝒊𝒍𝒂𝒉𝒌𝒂𝒏 𝑲𝒆𝒕𝒊𝒌 𝑻𝒐𝒎𝒃𝒐𝒍 𝑴𝒆𝒏𝒖 𝑼𝒏𝒕𝒖𝒌 𝑴𝒆𝒏𝒂𝒎𝒑𝒊𝒍𝒌𝒂𝒏 𝑴𝒆𝒏𝒖 𝑩𝒐𝒕,𝑲𝒆𝒕𝒊𝒌 .𝑶𝒘𝒏𝒆𝒓 𝑲𝒂𝒍𝒂𝒖 𝑰𝒏𝒈𝒊𝒏 𝑺𝒆𝒘𝒂 𝑩𝒐𝒕\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'bit.ly/Papah-Chan', 'ʏᴏᴜᴛᴜʙᴇ ᴏᴡɴᴇʀ', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\n𝑨𝑲𝑼 𝑮𝑱𝑳𝑨𝑲 𝑫𝑨𝑵 𝑺𝑨𝒀𝑨 𝑩𝑨𝑵𝑮𝑮𝑨`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler