//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b617ec3d3fa527e1e0015.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2349064788250";
global.owner = process.env.OWNER_NUMBER || "2349064788250";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/338a11043e23aeb80b77d.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0RYVHg0cWpHRUtHM0I4SGhrb1YvM1RlSE9kMENhQVZqTGUwdkxqaFoyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSE51Tzk0TXc4Um9FNER6WjVrcWtPVUt5NkNNZlEyaURjWTJQbkh2cVBuYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvT3M1RnAyTnQxNE1oRVI0cGF2VVl6dXk4TVU4NmF3QkFEOFJDNm13LzNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRZHFjUG9mUGRpNWN3bzdGQ0pPUHB1ZHRRamQ2djhYR2psbXA0azJtVG13PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllKTVVkbHdBZVY5SzROLzF2NlFMeUg0bGZGdE05QUlLS0tpNStSYTMvbG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd0ckNqMnZodWF5Z1BmSVlUa0xVLzNDR1dCS2tsK1ZYaHlrNXEvVVlEQkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk5EMGZTNVNIK1o1dGFUS0dXSnNmMFBKTUVxV3RDd0JhcXVIOHpJOWpuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNW94QUdMaE1YV0pkU2FDU1RCMXZwL0JKM0hUVGVwTGFSZVF1MzFqVFZpWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkwMGJ4TTMvaXEzcklkMm5MbGx2MllSOHVSN2pDQUk3REdneFE2WVZlQjgraE1iaEhmRStXQTFhUjRoUDBiWVZMbVlWWWgyWnA1YkE0WUNnTk1qZ0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJpL2NhZkxJZlVxcXVPM3pXeU8vQVJicHNkcnlPZGlUTUJZb2pDa05xTjJjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYTERqWjF5eFJfS2JCZUtvSUsycU5BIiwicGhvbmVJZCI6IjVjOGVkZGMzLWRjN2ItNDYwNS1iNjFhLWYzOTYyM2JiODNjMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWVlBpRTdMaGxQWjNtMmFiNCtPNlZoUTA0aWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclh1OVNaWm5nWlQralI1S1RMSVV0WlBlazhJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVKRjRKTUhZIiwibWUiOnsiaWQiOiIyMzQ5MDY0Nzg4MjUwOjQxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQNzZvOFlIRU1pRGdiVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJSQ2RjTnlPRTM0cmdrTGU3eDhmRXVmbFFmVHkvZGJHc1dRMnBnQW92VVdFPSIsImFjY291bnRTaWduYXR1cmUiOiJjRmxFZTRJQmlsVlF0NkU1M3YyYi9naFpGTktyUmhWa2JoQTRaQnlmdkh2ZW0vTEpvTlprOHlzUHA1Ui9NTEtrMTB5OURQUVM1SFNGa2hIV3JJcjFEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR2xoVDVPYTlKR1Vrek1mN2hHdUo2N0J5MUEzeHBoZUdObnYySXR3eDV2Vi9jbnNlaWxlZlM2dkc4WjFyYUh5V0JmL2J2cmhNMTV5WjY1bWlLcUd1Qnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDY0Nzg4MjUwOjQxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVRblhEY2poTitLNEpDM3U4Zkh4TG41VUgwOHYzV3hyRmtOcVlBS0wxRmgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE3Nzg2NDV9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "GOJO-V2",
  ownername: process.env.OWNER_NAME || "SATURO",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
