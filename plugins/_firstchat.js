let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hai, ${ucapan()}

${user.banned ? 'Anda Terbanned!!' : 'Halo!!\nSilahkan Pilih perintahnya!'}
`.trim(), 'ωιвυѕσƒт©️', user.banned ? 'Changelog Bot!' : 'Menu Bot', user.banned ? ',changelog' : ',?', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Ohayoo"
    if (time >= 4) {
        res = "Ohayoo"
    }
    if (time > 10) {
        res = "Konnichiwaa"
    }
    if (time >= 15) {
        res = "Konbanwaa"
    }
    if (time >= 18) {
        res = "Oyasumii"
    }
    return res
}