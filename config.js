/**
   * Create By Bamireid
   * Base By Dika
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.ownername = 'Bamireid'
// Other
global.owner = ['2348152119668']
global.premium = ['2348152119668']
global.packname = 'Bamireid'
global.author = 'Archangel Bamireid'
global.wlcm = ['Hey🤭❣️, I am Bamireids wife']
global.sessionName = 'session'
global.prefa = ['Heaven']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bamireids wife must be an admin first!',
    owner: 'Owners Special Features',
    group: 'Feature is used only in Groups!',
    private: 'Feature is used only in private chat!',
    bot: 'Special Features For Bot Number Users',
    wait: '𝖑𝖔𝖆𝖉𝖎𝖓𝖌...',
    endLimit: 'Your daily limit has been exhausted, The limit will be reset every 12 hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/jo.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
