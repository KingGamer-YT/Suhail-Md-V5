const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_12_09_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI3LFxuICAgICAgICA5NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUzLFxuICAgICAgICA1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQzLFxuICAgICAgICA5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDY0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MCxcbiAgICAgICAgNixcbiAgICAgICAgNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1LFxuICAgICAgICA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQkhFZ3NSaFc0N3N2THpsVEE4UG1IVmdGMVZ3b09lZTBkeUJZcjFmOWJYMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDY3NzI1OTg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDODYwQjkzMTU2RUJERjlCMTY4MzQ0MzRCQzM0RTVBRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjY5NTMxNTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDY3NzI1OTg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NzU2M0E4MDgwQUFDQzJCNzdCMUI1OUMyREE3OUIzQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjY5NTMxNTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTkhfSjFYaXZUeXkxZ2tEVEZPd2F5Z1wiLFxuICBcInBob25lSWRcIjogXCJkYWQwNGVjMi01ZDA0LTRlOGMtODM1MC1hZmRiZWU5MmJmY2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxNCxcbiAgICAgIDE1MSxcbiAgICAgIDI3LFxuICAgICAgMTkxLFxuICAgICAgMTQ3LFxuICAgICAgMTIyLFxuICAgICAgMjAyLFxuICAgICAgMTY4LFxuICAgICAgMjEyLFxuICAgICAgNzQsXG4gICAgICAxMTIsXG4gICAgICAxMjIsXG4gICAgICAxMTIsXG4gICAgICAxNjYsXG4gICAgICA5NCxcbiAgICAgIDE2MCxcbiAgICAgIDIzNCxcbiAgICAgIDgsXG4gICAgICAxMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDU0LFxuICAgICAgNTgsXG4gICAgICAyMzAsXG4gICAgICAyMjIsXG4gICAgICA3OCxcbiAgICAgIDE4NyxcbiAgICAgIDIwMixcbiAgICAgIDEzNyxcbiAgICAgIDIwNCxcbiAgICAgIDIyNCxcbiAgICAgIDEyLFxuICAgICAgMzksXG4gICAgICAxMDcsXG4gICAgICAyNDksXG4gICAgICA5MCxcbiAgICAgIDE0MyxcbiAgICAgIDE1NSxcbiAgICAgIDIxNCxcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ltUTJhRUNFTHp0dkxjR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYllsWFhsOUpWNittZjBoUjdCR2dWT0dwa2xUMjZEK2tVRmhTT3oxMktnTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGNUswNTlrMHBHaFhuMjF0TnBNOHloUHQ0KzhsR0ZsdDhNaFJIUHVWdGQ3VSswZUF6ZDFpMDl5YmpQS212ZldOYU5HV1pGRSswOTFvdVNpaXo2NDFCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJncGlDYWduUFlZdkErejZuZkcrOXY0bjlZWjg5bU9QK0JpT0Z6cVZzeGtIQTNVTkZxVmM0a2dVeWtOZnlkZzZNUUlkWjZaRHNoMktvalAybkJuMUZqUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjc3MjU5ODc6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY3MzM2OTgzODUxMDIwOjIyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkRALUpPS+KCrFJcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjc3MjU5ODc6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjk1MzE1MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1mWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWZXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMU1oMDEwVzZiR2JscENqaGpUZks2MmhmcUpHa3JFUG9aYzV1aGtmM3hRST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MDc1MzcxNjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1mWC5qc29uIjogIntcImtleURhdGFcIjpcIjlLdVdaVGZwWEV6Ym13dkREK25CY3V3U0huRFlIQVlreFY5NVhneTUzZ1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjA3NTM3MTYxLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjk1MzA0Njg2NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1mWS5qc29uIjogIntcImtleURhdGFcIjpcIiswdFROdjRjRWVxeEFTWFZWUjlIbzQ3K0tURS9VTmNPZEtPc2dEL1NnRnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjA3NTM3MTYxLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjk1MzA4MzAzNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
