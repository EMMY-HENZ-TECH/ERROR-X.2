const _0x51bb97=_0x1220;(function(_0x33def9,_0xce66c){const _0x2c68f2=_0x1220,_0x40db89=_0x33def9();while(!![]){try{const _0x3ca80c=parseInt(_0x2c68f2(0x12b))/0x1+parseInt(_0x2c68f2(0x133))/0x2+-parseInt(_0x2c68f2(0x13d))/0x3*(parseInt(_0x2c68f2(0x10b))/0x4)+-parseInt(_0x2c68f2(0x135))/0x5+-parseInt(_0x2c68f2(0x11c))/0x6*(parseInt(_0x2c68f2(0x16c))/0x7)+-parseInt(_0x2c68f2(0x11b))/0x8+-parseInt(_0x2c68f2(0x104))/0x9*(-parseInt(_0x2c68f2(0xfa))/0xa);if(_0x3ca80c===_0xce66c)break;else _0x40db89['push'](_0x40db89['shift']());}catch(_0x2e3ef1){_0x40db89['push'](_0x40db89['shift']());}}}(_0x126a,0xad21d));const {default:makeWASocket,DisconnectReason,makeInMemoryStore,jidDecode,proto,getContentType,useMultiFileAuthState,downloadContentFromMessage}=require(_0x51bb97(0x102)),pino=require(_0x51bb97(0x144)),{Boom}=require(_0x51bb97(0x134)),fs=require('fs'),readline=require('readline'),_=require(_0x51bb97(0x137)),yargs=require(_0x51bb97(0x101)),PhoneNumber=require(_0x51bb97(0x163));function _0x126a(){const _0x403c33=['Ubuntu','argv','copy','Code\x20:','from','lowdb','Update\x20','WebMessageInfo','BAE5','reply','contextInfo','verifiedName','[Connected]\x20','11108336dBkkjR','6raLeGG','selectedRowId','ephemeralMessage','opts','./session','matchAll','\x0aEnter\x20Your\x20Number\x0aNumber🔥\x20:','file','messages','endsWith','./lib/lowdb','isBaileys','caption','20.0.04','stdin','711896nrJLfq','concat','selectedDisplayText','download','msg','creds.update','delete','participant','342016qqUJxb','@hapi/boom','1911175UsrrTU','international','lodash','copyNForward','connectionClosed','withoutContact','watchFile','Chrome','4029WNvPxd','Unknown\x20DisconnectReason:\x20','fromMe','mimetype','quoted','data','chat','pino','server','0@s.whatsapp.net','requestPairingCode','viewOnceMessage','mtype','READ','fromObject','bind','sendTextWithMentions','loadDatabase','keys','unwatchFile','url','writeFileSync','loggedOut','includes','getQuotedObj','open','./sticker/','sender','downloadMediaMessage','getQuotedMessage','singleSelectReply','isBuffer','status@broadcast','serializeM','error','join','@g.us','match','awesome-phonenumber','decodeJid','test','cache','connectionLost','creds','listResponseMessage','replace','key','7387030Eflmwr','badSession','string','statusCode','getName','length','resolve','mentionedJid','child','chain','text','silent','sendText','store','remoteJid','contacts','output','public','groupMetadata','contentText','registered','slice','message','split','log','getNumber','connectionReplaced','220pGkNpe','exitProcess','isGroup','startsWith','type','subject','toObject','yargs/yargs','@adiwajshing/baileys','user','1294911aoBjyW','name','@s.whatsapp.net','stdout','WhatsApp','selectedButtonId','conversation','1528BiDLrR','buttonsResponseMessage','fromBuffer'];_0x126a=function(){return _0x403c33;};return _0x126a();}var low;try{low=require(_0x51bb97(0x113));}catch(_0x4f2abd){low=require(_0x51bb97(0x126));}const {Low,JSONFile}=low,mongoDB=require('./lib/mongoDB'),store=makeInMemoryStore({'logger':pino()[_0x51bb97(0x174)]({'level':_0x51bb97(0xea),'stream':_0x51bb97(0xec)})});function _0x1220(_0x1baa98,_0x217f30){const _0x126a97=_0x126a();return _0x1220=function(_0x1220fc,_0x336b96){_0x1220fc=_0x1220fc-0xea;let _0xae8cba=_0x126a97[_0x1220fc];return _0xae8cba;},_0x1220(_0x1baa98,_0x217f30);}global[_0x51bb97(0x11f)]=new Object(yargs(process[_0x51bb97(0x10f)][_0x51bb97(0xf4)](0x2))[_0x51bb97(0xfb)](![])['parse']()),global['db']=new Low(/https?:\/\//[_0x51bb97(0x165)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/[_0x51bb97(0x165)](opts['db'])?new mongoDB(opts['db']):new JSONFile('./src/database.json')),global['DATABASE']=global['db'],global[_0x51bb97(0x14e)]=async function loadDatabase(){const _0x3743bb=_0x51bb97;if(global['db'][_0x3743bb(0x14a)])return new Promise(_0x4b2228=>setInterval(function(){const _0x213653=_0x3743bb;!global['db'][_0x213653(0x14a)]?(clearInterval(this),_0x4b2228(global['db'][_0x213653(0x142)]==null?global[_0x213653(0x14e)]():global['db'][_0x213653(0x142)])):null;},0x1*0x3e8));if(global['db'][_0x3743bb(0x142)]!==null)return;global['db']['READ']=!![],await global['db']['read'](),global['db']['READ']=![],global['db'][_0x3743bb(0x142)]={'users':{},'chats':{},'game':{},'database':{},'settings':{},'setting':{},'others':{},'sticker':{},...global['db'][_0x3743bb(0x142)]||{}},global['db'][_0x3743bb(0x175)]=_['chain'](global['db'][_0x3743bb(0x142)]);},loadDatabase();const question=_0x5e78c1=>{const _0x3b47d1=_0x51bb97,_0x3d4f19=readline['createInterface']({'input':process[_0x3b47d1(0x12a)],'output':process[_0x3b47d1(0x107)]});return new Promise(_0x37682c=>{_0x3d4f19['question'](_0x5e78c1,_0x37682c);});};async function zynxzoStart(){const _0x571655=_0x51bb97,{state:_0x3f8648,saveCreds:_0x1538dc}=await useMultiFileAuthState(_0x571655(0x120)),_0x178efc=makeWASocket({'logger':pino({'level':_0x571655(0xea)}),'printQRInTerminal':![],'auth':_0x3f8648,'connectTimeoutMs':0xea60,'defaultQueryTimeoutMs':0x0,'keepAliveIntervalMs':0x2710,'emitOwnEvents':!![],'fireInitQueries':!![],'generateHighQualityLinkPreview':!![],'syncFullHistory':!![],'markOnlineOnConnect':!![],'browser':[_0x571655(0x10e),_0x571655(0x13c),_0x571655(0x129)]});if(!_0x178efc['authState'][_0x571655(0x168)][_0x571655(0xf3)]){const _0x5ec8e6=await question(_0x571655(0x122));let _0x3e0064=await _0x178efc[_0x571655(0x147)](_0x5ec8e6);_0x3e0064=_0x3e0064?.[_0x571655(0x162)](/.{1,4}/g)?.[_0x571655(0x160)]('-')||_0x3e0064,console[_0x571655(0xf7)](_0x571655(0x111),_0x3e0064);}return store[_0x571655(0x14c)](_0x178efc['ev']),_0x178efc['ev']['on']('messages.upsert',async _0x4144a1=>{const _0x3d73d6=_0x571655;try{mek=_0x4144a1[_0x3d73d6(0x124)][0x0];if(!mek['message'])return;mek[_0x3d73d6(0xf5)]=Object[_0x3d73d6(0x14f)](mek[_0x3d73d6(0xf5)])[0x0]===_0x3d73d6(0x11e)?mek[_0x3d73d6(0xf5)][_0x3d73d6(0x11e)][_0x3d73d6(0xf5)]:mek['message'];if(mek[_0x3d73d6(0x16b)]&&mek[_0x3d73d6(0x16b)][_0x3d73d6(0xed)]===_0x3d73d6(0x15d))return;if(!_0x178efc[_0x3d73d6(0xf0)]&&!mek[_0x3d73d6(0x16b)][_0x3d73d6(0x13f)]&&_0x4144a1[_0x3d73d6(0xfe)]==='notify')return;if(mek[_0x3d73d6(0x16b)]['id'][_0x3d73d6(0xfd)](_0x3d73d6(0x116))&&mek[_0x3d73d6(0x16b)]['id']['length']===0x10)return;m=smsg(_0x178efc,mek,store),require('./error.js')(_0x178efc,m,_0x4144a1,store);}catch(_0x39f45e){console[_0x3d73d6(0xf7)](_0x39f45e);}}),_0x178efc[_0x571655(0x164)]=_0x7466b6=>{const _0xee6d8e=_0x571655;if(!_0x7466b6)return _0x7466b6;if(/:\d+@/gi[_0xee6d8e(0x165)](_0x7466b6)){let _0x2e89d5=jidDecode(_0x7466b6)||{};return _0x2e89d5[_0xee6d8e(0x103)]&&_0x2e89d5[_0xee6d8e(0x145)]&&_0x2e89d5[_0xee6d8e(0x103)]+'@'+_0x2e89d5[_0xee6d8e(0x145)]||_0x7466b6;}else return _0x7466b6;},_0x178efc[_0x571655(0x170)]=(_0x403298,_0x1c15ec=![])=>{const _0x37d567=_0x571655;id=_0x178efc[_0x37d567(0x164)](_0x403298),_0x1c15ec=_0x178efc[_0x37d567(0x13a)]||_0x1c15ec;let _0x405a2c;if(id[_0x37d567(0x125)](_0x37d567(0x161)))return new Promise(async _0x1284ba=>{const _0x15e3c8=_0x37d567;_0x405a2c=store[_0x15e3c8(0xee)][id]||{};if(!(_0x405a2c[_0x15e3c8(0x105)]||_0x405a2c[_0x15e3c8(0xff)]))_0x405a2c=_0x178efc[_0x15e3c8(0xf1)](id)||{};_0x1284ba(_0x405a2c[_0x15e3c8(0x105)]||_0x405a2c[_0x15e3c8(0xff)]||PhoneNumber('+'+id[_0x15e3c8(0x16a)](_0x15e3c8(0x106),''))[_0x15e3c8(0xf8)](_0x15e3c8(0x136)));});else _0x405a2c=id===_0x37d567(0x146)?{'id':id,'name':_0x37d567(0x108)}:id===_0x178efc['decodeJid'](_0x178efc['user']['id'])?_0x178efc['user']:store[_0x37d567(0xee)][id]||{};return(_0x1c15ec?'':_0x405a2c[_0x37d567(0x105)])||_0x405a2c[_0x37d567(0xff)]||_0x405a2c[_0x37d567(0x119)]||PhoneNumber('+'+_0x403298[_0x37d567(0x16a)](_0x37d567(0x106),''))[_0x37d567(0xf8)](_0x37d567(0x136));},_0x178efc['public']=!![],_0x178efc[_0x571655(0x15e)]=_0x2657d8=>smsg(_0x178efc,_0x2657d8,store),_0x178efc['ev']['on']('connection.update',_0x3e55fa=>{const _0x1f4c49=_0x571655,{connection:_0x110dce,lastDisconnect:_0x9a7e1b}=_0x3e55fa;if(_0x110dce==='close'){let _0x4e17f8=new Boom(_0x9a7e1b?.[_0x1f4c49(0x15f)])?.[_0x1f4c49(0xef)][_0x1f4c49(0x16f)];if(_0x4e17f8===DisconnectReason[_0x1f4c49(0x16d)]||_0x4e17f8===DisconnectReason[_0x1f4c49(0x139)]||_0x4e17f8===DisconnectReason[_0x1f4c49(0x167)]||_0x4e17f8===DisconnectReason[_0x1f4c49(0xf9)]||_0x4e17f8===DisconnectReason['restartRequired']||_0x4e17f8===DisconnectReason['timedOut'])zynxzoStart();else{if(_0x4e17f8===DisconnectReason[_0x1f4c49(0x153)]){}else _0x178efc['end'](_0x1f4c49(0x13e)+_0x4e17f8+'|'+_0x110dce);}}else _0x110dce===_0x1f4c49(0x156)&&console[_0x1f4c49(0xf7)](_0x1f4c49(0x11a)+JSON['stringify'](_0x178efc[_0x1f4c49(0x103)]['id'],null,0x2));}),_0x178efc['ev']['on'](_0x571655(0x130),_0x1538dc),_0x178efc[_0x571655(0xeb)]=(_0x4ddc0f,_0x256ef4,_0x3c643d='',_0x2ed584)=>_0x178efc['sendMessage'](_0x4ddc0f,{'text':_0x256ef4,..._0x2ed584},{'quoted':_0x3c643d}),_0x178efc['downloadAndSaveMediaMessage']=async(_0x4e9b7e,_0x512056,_0x28506c=!![])=>{const _0x264dcf=_0x571655;let _0x127742=_0x4e9b7e[_0x264dcf(0x12f)]?_0x4e9b7e['msg']:_0x4e9b7e,_0x1e2621=(_0x4e9b7e[_0x264dcf(0x12f)]||_0x4e9b7e)[_0x264dcf(0x140)]||'',_0x4c3d6b=_0x4e9b7e[_0x264dcf(0x149)]?_0x4e9b7e['mtype'][_0x264dcf(0x16a)](/Message/gi,''):_0x1e2621['split']('/')[0x0];const _0x3585b8=await downloadContentFromMessage(_0x127742,_0x4c3d6b);let _0x2d377c=Buffer[_0x264dcf(0x112)]([]);for await(const _0x522dd9 of _0x3585b8){_0x2d377c=Buffer[_0x264dcf(0x12c)]([_0x2d377c,_0x522dd9]);}let _0x4d10e7=await FileType[_0x264dcf(0x10d)](_0x2d377c),_0xa6ca77=_0x28506c?'./sticker/'+_0x512056+'.'+_0x4d10e7['ext']:_0x264dcf(0x157)+_0x512056;return await fs[_0x264dcf(0x152)](_0xa6ca77,_0x2d377c),_0xa6ca77;},_0x178efc[_0x571655(0x14d)]=async(_0x1f8176,_0x54fcb2,_0x1eacee,_0xc55814={})=>_0x178efc['sendMessage'](_0x1f8176,{'text':_0x54fcb2,'mentions':[..._0x54fcb2[_0x571655(0x121)](/@(\d{0,16})/g)]['map'](_0x75d67e=>_0x75d67e[0x1]+_0x571655(0x106)),..._0xc55814},{'quoted':_0x1eacee}),_0x178efc[_0x571655(0x159)]=async _0x5c3dd4=>{const _0x9238a5=_0x571655;let _0x151c12=(_0x5c3dd4[_0x9238a5(0x12f)]||_0x5c3dd4)[_0x9238a5(0x140)]||'',_0x3e3645=_0x5c3dd4[_0x9238a5(0x149)]?_0x5c3dd4[_0x9238a5(0x149)][_0x9238a5(0x16a)](/Message/gi,''):_0x151c12[_0x9238a5(0xf6)]('/')[0x0];const _0x325df8=await downloadContentFromMessage(_0x5c3dd4,_0x3e3645);let _0x4206f2=Buffer[_0x9238a5(0x112)]([]);for await(const _0x223d93 of _0x325df8){_0x4206f2=Buffer[_0x9238a5(0x12c)]([_0x4206f2,_0x223d93]);}return _0x4206f2;},_0x178efc;}zynxzoStart();function smsg(_0x20df81,_0x4f6634,_0x5e18b4){const _0x5194dd=_0x51bb97;if(!_0x4f6634)return _0x4f6634;let _0xfdfd6=proto[_0x5194dd(0x115)];if(_0x4f6634[_0x5194dd(0x16b)]){_0x4f6634['id']=_0x4f6634[_0x5194dd(0x16b)]['id'],_0x4f6634[_0x5194dd(0x127)]=_0x4f6634['id']['startsWith']('BAE5')&&_0x4f6634['id'][_0x5194dd(0x171)]===0x10,_0x4f6634[_0x5194dd(0x143)]=_0x4f6634[_0x5194dd(0x16b)][_0x5194dd(0xed)],_0x4f6634[_0x5194dd(0x13f)]=_0x4f6634['key'][_0x5194dd(0x13f)],_0x4f6634[_0x5194dd(0xfc)]=_0x4f6634[_0x5194dd(0x143)][_0x5194dd(0x125)]('@g.us'),_0x4f6634['sender']=_0x20df81['decodeJid'](_0x4f6634[_0x5194dd(0x13f)]&&_0x20df81[_0x5194dd(0x103)]['id']||_0x4f6634[_0x5194dd(0x132)]||_0x4f6634[_0x5194dd(0x16b)][_0x5194dd(0x132)]||_0x4f6634[_0x5194dd(0x143)]||'');if(_0x4f6634['isGroup'])_0x4f6634[_0x5194dd(0x132)]=_0x20df81[_0x5194dd(0x164)](_0x4f6634[_0x5194dd(0x16b)]['participant'])||'';}if(_0x4f6634['message']){_0x4f6634[_0x5194dd(0x149)]=getContentType(_0x4f6634[_0x5194dd(0xf5)]),_0x4f6634['msg']=_0x4f6634[_0x5194dd(0x149)]==_0x5194dd(0x148)?_0x4f6634[_0x5194dd(0xf5)][_0x4f6634['mtype']][_0x5194dd(0xf5)][getContentType(_0x4f6634[_0x5194dd(0xf5)][_0x4f6634['mtype']][_0x5194dd(0xf5)])]:_0x4f6634[_0x5194dd(0xf5)][_0x4f6634['mtype']],_0x4f6634['body']=_0x4f6634[_0x5194dd(0xf5)][_0x5194dd(0x10a)]||_0x4f6634[_0x5194dd(0x12f)][_0x5194dd(0x128)]||_0x4f6634[_0x5194dd(0x12f)][_0x5194dd(0x176)]||_0x4f6634['mtype']==_0x5194dd(0x169)&&_0x4f6634[_0x5194dd(0x12f)][_0x5194dd(0x15b)][_0x5194dd(0x11d)]||_0x4f6634[_0x5194dd(0x149)]==_0x5194dd(0x10c)&&_0x4f6634[_0x5194dd(0x12f)][_0x5194dd(0x109)]||_0x4f6634[_0x5194dd(0x149)]==_0x5194dd(0x148)&&_0x4f6634[_0x5194dd(0x12f)]['caption']||_0x4f6634['text'];let _0x3532f8=_0x4f6634['quoted']=_0x4f6634[_0x5194dd(0x12f)]['contextInfo']?_0x4f6634[_0x5194dd(0x12f)]['contextInfo']['quotedMessage']:null;_0x4f6634[_0x5194dd(0x173)]=_0x4f6634[_0x5194dd(0x12f)][_0x5194dd(0x118)]?_0x4f6634[_0x5194dd(0x12f)]['contextInfo'][_0x5194dd(0x173)]:[];if(_0x4f6634[_0x5194dd(0x141)]){let _0x251966=getContentType(_0x3532f8);_0x4f6634['quoted']=_0x4f6634[_0x5194dd(0x141)][_0x251966];['productMessage'][_0x5194dd(0x154)](_0x251966)&&(_0x251966=getContentType(_0x4f6634[_0x5194dd(0x141)]),_0x4f6634[_0x5194dd(0x141)]=_0x4f6634[_0x5194dd(0x141)][_0x251966]);if(typeof _0x4f6634['quoted']===_0x5194dd(0x16e))_0x4f6634['quoted']={'text':_0x4f6634[_0x5194dd(0x141)]};_0x4f6634[_0x5194dd(0x141)][_0x5194dd(0x149)]=_0x251966,_0x4f6634[_0x5194dd(0x141)]['id']=_0x4f6634[_0x5194dd(0x12f)][_0x5194dd(0x118)]['stanzaId'],_0x4f6634['quoted'][_0x5194dd(0x143)]=_0x4f6634['msg'][_0x5194dd(0x118)]['remoteJid']||_0x4f6634[_0x5194dd(0x143)],_0x4f6634[_0x5194dd(0x141)][_0x5194dd(0x127)]=_0x4f6634['quoted']['id']?_0x4f6634[_0x5194dd(0x141)]['id'][_0x5194dd(0xfd)](_0x5194dd(0x116))&&_0x4f6634[_0x5194dd(0x141)]['id']['length']===0x10:![],_0x4f6634['quoted']['sender']=_0x20df81[_0x5194dd(0x164)](_0x4f6634[_0x5194dd(0x12f)][_0x5194dd(0x118)][_0x5194dd(0x132)]),_0x4f6634[_0x5194dd(0x141)]['fromMe']=_0x4f6634['quoted']['sender']===_0x20df81[_0x5194dd(0x164)](_0x20df81[_0x5194dd(0x103)]['id']),_0x4f6634['quoted'][_0x5194dd(0x176)]=_0x4f6634[_0x5194dd(0x141)][_0x5194dd(0x176)]||_0x4f6634[_0x5194dd(0x141)][_0x5194dd(0x128)]||_0x4f6634['quoted'][_0x5194dd(0x10a)]||_0x4f6634['quoted'][_0x5194dd(0xf2)]||_0x4f6634[_0x5194dd(0x141)][_0x5194dd(0x12d)]||_0x4f6634['quoted']['title']||'',_0x4f6634[_0x5194dd(0x141)][_0x5194dd(0x173)]=_0x4f6634[_0x5194dd(0x12f)]['contextInfo']?_0x4f6634[_0x5194dd(0x12f)][_0x5194dd(0x118)][_0x5194dd(0x173)]:[],_0x4f6634[_0x5194dd(0x155)]=_0x4f6634[_0x5194dd(0x15a)]=async()=>{const _0x31b206=_0x5194dd;if(!_0x4f6634[_0x31b206(0x141)]['id'])return![];let _0x30a5aa=await _0x5e18b4['loadMessage'](_0x4f6634[_0x31b206(0x143)],_0x4f6634[_0x31b206(0x141)]['id'],conn);return exports['smsg'](conn,_0x30a5aa,_0x5e18b4);};let _0x2ade23=_0x4f6634[_0x5194dd(0x141)]['fakeObj']=_0xfdfd6[_0x5194dd(0x14b)]({'key':{'remoteJid':_0x4f6634[_0x5194dd(0x141)]['chat'],'fromMe':_0x4f6634['quoted'][_0x5194dd(0x13f)],'id':_0x4f6634[_0x5194dd(0x141)]['id']},'message':_0x3532f8,..._0x4f6634[_0x5194dd(0xfc)]?{'participant':_0x4f6634[_0x5194dd(0x141)][_0x5194dd(0x158)]}:{}});_0x4f6634[_0x5194dd(0x141)][_0x5194dd(0x131)]=()=>_0x20df81['sendMessage'](_0x4f6634[_0x5194dd(0x141)]['chat'],{'delete':_0x2ade23[_0x5194dd(0x16b)]}),_0x4f6634[_0x5194dd(0x141)][_0x5194dd(0x138)]=(_0x2e97c3,_0x572afc=![],_0x4c15cd={})=>_0x20df81[_0x5194dd(0x138)](_0x2e97c3,_0x2ade23,_0x572afc,_0x4c15cd),_0x4f6634[_0x5194dd(0x141)][_0x5194dd(0x12e)]=()=>_0x20df81[_0x5194dd(0x159)](_0x4f6634[_0x5194dd(0x141)]);}}if(_0x4f6634[_0x5194dd(0x12f)][_0x5194dd(0x151)])_0x4f6634['download']=()=>_0x20df81['downloadMediaMessage'](_0x4f6634[_0x5194dd(0x12f)]);return _0x4f6634[_0x5194dd(0x176)]=_0x4f6634[_0x5194dd(0x12f)][_0x5194dd(0x176)]||_0x4f6634[_0x5194dd(0x12f)][_0x5194dd(0x128)]||_0x4f6634[_0x5194dd(0xf5)][_0x5194dd(0x10a)]||_0x4f6634[_0x5194dd(0x12f)][_0x5194dd(0xf2)]||_0x4f6634[_0x5194dd(0x12f)][_0x5194dd(0x12d)]||_0x4f6634[_0x5194dd(0x12f)]['title']||'',_0x4f6634[_0x5194dd(0x117)]=(_0xf8f5b1,_0x2b317e=_0x4f6634['chat'],_0x348b94={})=>Buffer[_0x5194dd(0x15c)](_0xf8f5b1)?_0x20df81['sendMedia'](_0x2b317e,_0xf8f5b1,_0x5194dd(0x123),'',_0x4f6634,{..._0x348b94}):_0x20df81['sendText'](_0x2b317e,_0xf8f5b1,_0x4f6634,{..._0x348b94}),_0x4f6634[_0x5194dd(0x110)]=()=>exports['smsg'](conn,_0xfdfd6['fromObject'](_0xfdfd6[_0x5194dd(0x100)](_0x4f6634))),_0x4f6634[_0x5194dd(0x138)]=(_0x269eae=_0x4f6634[_0x5194dd(0x143)],_0x72f46e=![],_0x309c53={})=>_0x20df81[_0x5194dd(0x138)](_0x269eae,_0x4f6634,_0x72f46e,_0x309c53),_0x4f6634;}let file=require[_0x51bb97(0x172)](__filename);fs[_0x51bb97(0x13b)](file,()=>{const _0x298d6e=_0x51bb97;fs[_0x298d6e(0x150)](file),console[_0x298d6e(0xf7)](_0x298d6e(0x114)+__filename),delete require[_0x298d6e(0x166)][file],require(file);});