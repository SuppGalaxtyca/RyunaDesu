let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat,`${pickRandom(global.shiraori)}`, m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = //i
handler.command = new RegExp
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.ryuna = [
'halo kak',
'knp kak',
'kak jalan yuk>_<',
'jangan ganggu shiraori lagi sibuk',
'Ryuna lagi makan',
'Ryuna disini',
'Donasi dulu',
'Ryuna pengen punya adik, tapi gk dibolehin sama Yusp:(',
'bagi duit dulu/',
'Silahkan ketik .menu ya kak',
'Ryuna istirahat dulu',
]
