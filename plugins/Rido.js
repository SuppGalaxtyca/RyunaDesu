let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Pasti Didikan Dika Sama Miko
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /dika/i
handler.command = new RegExp

module.exports = handler
