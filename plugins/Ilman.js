let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Ada Yang Bisa Ryuna Bantu?
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /Ryuna/i
handler.command = new RegExp

module.exports = handler
