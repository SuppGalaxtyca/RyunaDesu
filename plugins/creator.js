function handler(m) {
  this.sendContact(m.chat, '6281284160630', this.getName('6281284160630@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
