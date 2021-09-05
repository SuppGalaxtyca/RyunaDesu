let handler = async m => m.reply(`
┌〔 Donasi • Pulsa 〕
├ Telkomsel [081284160630]
└────

┌〔 Donasi • Emoney 〕
├ OVO, Dana [081284160630]
└────
 saweria.co/manilman
 donasi tuh buat 
memperpanjang masa *server* *(rdp)*
sama *api key*
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
