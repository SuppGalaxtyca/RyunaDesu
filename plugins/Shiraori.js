let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Haiiikk Yusup Onii-chan  >///<
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /Ngerti Ryuna?/i
handler.command = new RegExp

module.exports = handler
