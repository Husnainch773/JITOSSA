

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "./src/ALIVE.mp3"
    let url = "https://github.com/omarcharaf1"
    let murl = "www.instagram.com/husnainch773"
    let img = "https://telegra.ph/file/b2e5b270663e1dc0e2f57.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "main",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "البوت يعمل الأن",
          body: "ᴹᴿ°᭄HUSNAIN❖࿐",
          thumbnailUrl: img,
          sourceUrl: 'https://tinyurl.com/ymfagplc',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['owner']
    handler.command = /^(alive)$/i 

    export default handler;
