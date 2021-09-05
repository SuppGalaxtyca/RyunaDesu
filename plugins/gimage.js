let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let fetch = require('node-fetch')

let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} Elaina`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '404 Not Found'
  conn.sendFile(m.chat, url, 'gimage', '', m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['gimage <pencarian>', 'image <pencarian>']
handler.tags = ['internet']
handler.command = /^(g?image)$/i

handler.limit = true
handler.register = true
handler.exp = 100

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}