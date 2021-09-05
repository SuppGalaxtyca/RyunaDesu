let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Ysup-sama Kakkoi
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6281284160630/i
handler.command = new RegExp

module.exports = handler
