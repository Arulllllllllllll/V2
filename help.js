exports.done = () => {
return `✅ Done`
}

exports.wait = () => {
return `⏳ Mohon tunggu sebentar`
}

exports.error = () => {
return `Result Tidak Ditemukan !!`
}

exports.noLink = (command) => {
return `Harap Sertakan Link
Format: .${command} _link_`
}

exports.noQuery = () => {
return `Masukkan Query !!`
}

exports.noTeks = (prefix,command) => {
return `Harap Sertakan Teks !!
Contoh : ${prefix+command} hallo`
}

exports.noTeks2 = (prefix,command) => {
return `Harap Sertakan Teks !!
Contoh : ${prefix+command} teks1,teks2`
}

exports.smeme = (prefix,command) => {
return `kirim gambar dengan caption ${prefix+command} atau balas gambar yang sudah dikirim`
}

exports.smeme2 = (prefix,command) => {
return `kirim gambar dengan caption ${prefix+command} teks1+teks2 atau balas gambar yang sudah dikirim`
}

exports.owner = () => {
return `Perintah Ini Hanya Bisa Digunakan Oleh Owner !!`
}

exports.admin = () => {
return `Perintah Ini Hanya Bisa Digunakan Oleh Admin Grup`
}

exports.noAdmin = () =>{
return `Kamu bukan admin !!`
}

exports.botAdmin = () => {
return `Bot Bukan Admin !!`
}

exports.group = () => {
return `Perintah Ini Hanya Bisa Digunakan Di Group !!`
}

exports.mix2 = (prefix,command) =>{
return `Example : ${prefix + command} 😅`
}

exports.mix = (command) =>{
return `Format : ${command} emoji1+emoji2\nContoh : .${command} 😜+😅`
}

exports.noMoji = () =>{
return `Itu Bukan Emoji`
}

exports.audioc = (prefix,command) =>{
return `Reply Audio Yang Ingin Diubah Dengan Caption *${prefix+command}*`
}

exports.nomen = () =>{
return `Kamu Sedang Didalam Roomchat!! Ketik *.stopchat* Untuk Menghapus Sesi Chat.`
}

exports.menpes = (prefix,command) =>{
return `Format :
${prefix+command} nmr tujuan|nama samaran|pesan lu

Contoh
${prefix+command} 62895340684706|bot|hai

Note :
Berawal Dari 628xxx Tanpa Spasi
62895340684706 - benar (✅)
0895340684706 - salah (❌)
`
}

exports.hisi = (prefix,command,pushname) =>{
return `Harus Di Isi Semua !!\nex : ${prefix+command} 62895340684706|${pushname}|hallo`
}

exports.mese = () =>{
return `Menfes Ke Nomor Sendiri:V\nCapek Ya? Semangat🗿`
}

exports.umen = () =>{
return `Menfess Kamu Sudah Terkirim, Moga Aja Dibales🗿`
}

exports.stc = () =>{
return `Kamu Tidak Didalam Roomchat, Silahkan Buat Room Terlebih Dahulu.

*Format :*
.menfess nomor|nama|pesan

*Contoh :*
.menfess 62895340684706|bot|hai

*Note:*
62895340684706 - benar (✅)
+62 895 3406 84706 - salah (❌)
`
}

exports.room1 = () =>{
return `[✓] Berhasil Memberhentikan Chat`
}

exports.room2 = () =>{
return `[✓] Room Chat Telah Dihentikan\nOleh Teman Chat Kamu👤`
}

exports.lstMenu = (a,b,c,d,e,f,g,h,i,j,k) =>{
return `${a}

╭─⬡ _INFO BOT_
│ Owner : ${b}
│ Bot Name : ${c}
│ Speed : ${d}
│ Runtime : ${e}
│ Autoread : ${f}
╰───⬡

╭─⬡ _INFO USER_
│ Name : ${g}
│ Number : ${h}
│ Bio : ${i}
╰───⬡

╭─⬡ _DATE_
│ Hari : ${j}
╰───⬡

╭─⬡ _ULANG TAHUN OWNER_
│ ${k}
╰───⬡
`
}

let A = "╭─❒「 *"
let B = "* 」"
let C = "│⬡ !"
let D = "╰❒ \n"

exports.listmenu = (a,b,c,d,e,no) => {
return `${a}

*Owner :* ${b}
*Library :* ${c}
*Date Server :* ${d}
*Runtime :* ${e}

${A}Group Menu${B}
${C}kick
${C}antilink on
${C}antilink off
${C}promote
${C}demote
${C}tagall
${C}hidetag
${C}infogc
${C}linkgc
${C}setnamegc
${C}setdesc
${C}revoke
${C}group open
${C}group close
${C}welcome on
${C}welcome off
${D}
${A}Download Menu${B}
${C}gitclone
${C}facebook
${C}igvideo
${C}igphoto
${C}pinterest
${C}tiktoknowm
${C}tiktokaudio
${C}ytmp3
${C}ytmp4
${C}play
${D}
${A}Anonymous Menu${B}
${C}menfess
${C}confes
${C}stopchat
${C}room
${D}
${A}Fun Menu${B}
${C}truth
${C}dare
${C}slot
${C}cekwaras 
${C}cantikcek 
${C}cekcantik 
${C}gantengcek 
${C}cekganteng 
${C}sangecek 
${C}ceksange 
${C}gaycek 
${C}cekgay 
${C}lesbicek 
${C}ceklesbi 
${C}cektolol 
${C}cekpintar 
${C}cekbodoh 
${C}cekgoblok 
${C}cekstres 
${C}cekstress 
${D}
${A}Search Menu${B}
${C}brainly
${C}translate1
${C}trnaslate2
${C}ytsearch
${C}gimage
${C}ssweb1
${C}ssweb2
${D}
${A}Ephoto Menu${B}
${C}youtube-silver-button 
${C}youtube-gold-button 
${C}instagram-silver-button 
${C}instagram-gold-button 
${C}facebook-silver-button 
${C}facebook-gold-button 
${C}twitter-silver-button 
${C}twitter-gold-button
${C}ashe-banner 
${C}brigitte-banner 
${C}doomfist-banner 
${C}junker-banner 
${C}kiriko-banner 
${C}reaper-banner 
${C}sojourn-banner 
${C}symmetra-banner 
${C}zarya-banner 
${C}tracer-banner 
${C}style-1917
${C}pixel-glitch
${C}futuristic-technology
${C}futuristic-technology2
${C}futuristic-technology3
${C}purple 
${C}captainamerica
${C}graffiti
${C}pornhub
${C}mountain 
${C}team-logo-cobra
${C}team-logo-singa
${C}team-logo-macan
${C}team-logo-elang
${C}team-logo-banteng
${C}team-logo-ninja-1 
${C}team-logo-ninja-2
${C}team-logo-ninja-3
${C}team-logo-ninja-4
${C}team-logo-ninja-5
${C}team-logo-ninja-6
${C}team-logo-ninja-7
${C}team-logo-ninja-8
${C}team-logo-ninja-9
${D}
${A}Other Menu${B}
${C}delete
${C}grupbot
${C}request
${C}report
${C}runtime
${C}donasi
${C}rules
${C}kirimpesan
${C}server
${C}readmore
${D}
${A}Store Menu${B}
${C}shop
${C}addlist
${C}dellist
${C}update
${C}tambah
${C}kurang 
${C}kali
${C}bagi
${C}done
${C}proses
${D}
${A}PhotoOxy Menu${B}
${C}shadow 
${C}romantic 
${C}smoke 
${C}burn-paper 
${C}love-message 
${C}message-under-grass 
${C}double-heart 
${C}coffe-cup 
${C}love-text 
${C}butterfly 
${D}
${A}Random Image${B}
${C}anjing 
${C}blackpink 
${C}boneka 
${C}boruto 
${C}cecan 
${C}cogan 
${C}estetik 
${C}hekel 
${C}jeni 
${C}kpop 
${C}kucing
${C}bkpimg
${D}
${A}Asupan Menu${B}
${C}hijaber 
${C}china 
${C}indonesia 
${C}korea 
${C}japan 
${C}malaysia 
${C}thailand 
${C}vietnam 
${C}bocil 
${C}geayubi 
${C}santuy 
${C}tiktok 
${C}ukhty 
${D}
${A}Random Anime${B}
${C}loli
${C}waifu
${C}couple
${C}akira 
${C}akiyama 
${C}asuna 
${C}boruto 
${C}chitoge 
${C}cosplay 
${C}deidara 
${C}elaina 
${C}emilia 
${C}hinata 
${C}itachi 
${C}itori 
${C}kagura 
${C}kakasih 
${C}keneki 
${C}naruto
${D}
${A}Kerang Menu${B}
${C}apakah
${C}bagaimanakah
${C}bisakah
${C}kapankah
${D}
${A}Nsfw Menu${B}
${C}ahegao 
${C}ass 
${C}bdsm 
${C}blowjob 
${C}cum 
${C}foot 
${C}gangbang 
${C}gifs 
${C}glasses 
${C}hentai 
${C}orgy 
${C}panties 
${C}pussy 
${C}yuri 
${C}zettai 
${D}
${A}Random Menu${B}
${C}darkjoke
${C}bacot
${C}fakta
${C}katabijak
${C}quotesanime
${C}jokes
${C}fakta
${C}quotes
${D}
${A}Convert Menu${B}
${C}removebg
${C}toimg
${C}tomp4
${C}emojimix
${C}emojimix2
${C}tourl
${C}tinyulr
${C}shortlink
${C}tts
${C}ebinary
${C}debinary
${D}
${A}Sticker Menu${B}
${C}sticker
${C}smeme
${C}smeme2
${C}take
${C}wm
${C}lick
${C}kiss
${C}awoo
${C}hug
${C}cry
${C}cuddle
${C}bully
${C}megumin
${C}shinobu
${C}neko
${C}slap
${C}wink
${C}dance
${C}poke
${C}glomp
${C}bite
${C}nom
${C}handhold
${C}highfive
${C}wave
${C}smile
${C}yeet
${C}bonk
${C}smug
${C}pat 
${C}kill 
${C}blush 
${C}happy 
${C}cringe
${D}
${A}Audio Changer${B}
${C}bass
${C}blown
${C}deep
${C}earrape
${C}fast
${C}fat
${C}nightcore
${C}reverse
${C}robot
${C}slow
${C}smooth
${C}tupai
${D}
${A}Owner Menu${B}
${C}public
${C}self
${C}setexif
${C}autoread
${C}automusik
${C}autobio
${C}broadcast
${C}setthumb
${C}getcase
${C}setppbot
${C}chat
${C}creategc
${C}join
${C}listpc
${C}listgc
${C}block
${C}unblock
${D}
${A}Sound Menu${B}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${D}
`
}

exports.ownMenu = () =>{
return`${A}Owner Menu${B}
${C}public
${C}self
${C}setexif
${C}autoread
${C}automusik
${C}autobio
${C}broadcast
${C}setthumb
${C}getcase
${C}setppbot
${C}chat
${C}creategc
${C}join
${C}listpc
${C}listgc
${C}block
${C}unblock
${D}`
}

exports.audioMenu = () =>{
return`${A}Audio Changer${B}
${C}bass
${C}blown
${C}deep
${C}earrape
${C}fast
${C}fat
${C}nightcore
${C}reverse
${C}robot
${C}slow
${C}smooth
${C}tupai
${D}`
}

exports.soundMenu = (no) =>{
return`${A}Sound Menu${B}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${C}sound${no++}
${D}`
}

exports.cvrtMenu = () =>{
return`${A}Convert Menu${B}
${C}removebg
${C}toimg
${C}tomp4
${C}emojimix
${C}emojimix2
${C}tourl
${C}tinyulr
${C}shortlink
${C}tts
${C}ebinary
${C}debinary
${D}`
}

exports.rndmMenu = () =>{
return`${A}Random Menu${B}
${C}darkjoke
${C}bacot
${C}katabijak
${C}fakta
${C}quotesanime
${C}jokes
${C}fakta
${C}quotes
${D}`
}

exports.nsfwMenu = () =>{
return`${A}Nsfw Menu${B}
${C}ahegao 
${C}ass 
${C}bdsm 
${C}blowjob 
${C}cum 
${C}foot 
${C}gangbang 
${C}gifs 
${C}glasses 
${C}hentai 
${C}orgy 
${C}panties 
${C}pussy 
${C}yuri 
${C}zettai 
${D}`
}

exports.stckMenu = () =>{
return`${A}Sticker Menu${B}
${C}sticker
${C}smeme
${C}smeme2
${C}take
${C}wm
${C}lick
${C}kiss
${C}awoo
${C}hug
${C}cry
${C}cuddle
${C}bully
${C}megumin
${C}shinobu
${C}neko
${C}slap
${C}wink
${C}dance
${C}poke
${C}glomp
${C}bite
${C}nom
${C}handhold
${C}highfive
${C}wave
${C}smile
${C}yeet
${C}bonk
${C}smug
${C}pat 
${C}kill 
${C}blush 
${C}happy 
${C}cringe
${D}`
}

exports.krngMenu = () =>{
return`${A}Kerang Menu${B}
${C}apakah
${C}bagaimanakah
${C}bisakah
${C}kapankah
${D}`
}

exports.animeMenu = () =>{
return`${A}Random Anime${B}
${C}loli
${C}waifu
${C}couple
${C}akira 
${C}akiyama 
${C}asuna 
${C}boruto 
${C}chitoge 
${C}cosplay 
${C}deidara 
${C}elaina 
${C}emilia 
${C}hinata 
${C}itachi 
${C}itori 
${C}kagura 
${C}kakasih 
${C}keneki 
${C}naruto
${D}`
}

exports.asupanMenu = () =>{
return`${A}Asupan Menu${B}
${C}hijaber 
${C}china 
${C}indonesia 
${C}korea 
${C}japan 
${C}malaysia 
${C}thailand 
${C}vietnam 
${C}bocil 
${C}geayubi 
${C}santuy 
${C}tiktok 
${C}ukhty 
${D}`
}

exports.imgMenu = () =>{
return`${A}Random Image${B}
${C}anjing 
${C}blackpink 
${C}boneka 
${C}boruto 
${C}cecan 
${C}cogan 
${C}estetik 
${C}hekel 
${C}jeni 
${C}kpop 
${C}kucing
${C}bkpimg
${D}`
}

exports.oxyMenu = () =>{
return`${A}PhotoOxy Menu${B}
${C}shadow 
${C}romantic 
${C}smoke 
${C}burn-paper 
${C}love-message 
${C}message-under-grass 
${C}double-heart 
${C}coffe-cup 
${C}love-text 
${C}butterfly 
${D}`
}

exports.storeMenu = () =>{
return`${A}Store Menu${B}
${C}shop
${C}addlist
${C}dellist
${C}update
${C}tambah
${C}kurang 
${C}kali
${C}bagi
${C}done
${C}proses
${D}`
}

exports.otherMenu = () =>{
return`${A}Other Menu${B}
${C}delete
${C}grupbot
${C}request
${C}report
${C}runtime
${C}donasi
${C}rules
${C}kirimpesan
${C}server
${C}readmore
${D}`
}

exports.ephotoMenu = () =>{
return`${A}Ephoto Menu${B}
${C}youtube-silver-button 
${C}youtube-gold-button 
${C}instagram-silver-button 
${C}instagram-gold-button 
${C}facebook-silver-button 
${C}facebook-gold-button 
${C}twitter-silver-button 
${C}twitter-gold-button
${C}ashe-banner 
${C}brigitte-banner 
${C}doomfist-banner 
${C}junker-banner 
${C}kiriko-banner 
${C}reaper-banner 
${C}sojourn-banner 
${C}symmetra-banner 
${C}zarya-banner 
${C}tracer-banner 
${C}style-1917
${C}pixel-glitch
${C}futuristic-technology
${C}futuristic-technology2
${C}futuristic-technology3
${C}purple 
${C}captainamerica
${C}graffiti
${C}pornhub
${C}mountain 
${C}team-logo-cobra
${C}team-logo-singa
${C}team-logo-macan
${C}team-logo-elang
${C}team-logo-banteng
${C}team-logo-ninja-1 
${C}team-logo-ninja-2
${C}team-logo-ninja-3
${C}team-logo-ninja-4
${C}team-logo-ninja-5
${C}team-logo-ninja-6
${C}team-logo-ninja-7
${C}team-logo-ninja-8
${C}team-logo-ninja-9
${D}`
}

exports.funMenu = () =>{
return`${A}Fun Menu${B}
${C}truth
${C}dare
${C}slot
${C}cekwaras 
${C}cantikcek 
${C}cekcantik 
${C}gantengcek 
${C}cekganteng 
${C}sangecek 
${C}ceksange 
${C}gaycek 
${C}cekgay 
${C}lesbicek 
${C}ceklesbi 
${C}cektolol 
${C}cekpintar 
${C}cekbodoh 
${C}cekgoblok 
${C}cekstres 
${C}cekstress 
${D}`
}

exports.searchMenu = () =>{
return`${A}Search Menu${B}
${C}brainly
${C}translate1
${C}trnaslate2
${C}ytsearch
${C}gimage
${C}ssweb1
${C}ssweb2
${D}`
}

exports.anonyMenu = () =>{
return`${A}Anonymous Menu${B}
${C}menfess
${C}confes
${C}stopchat
${C}room
${D}`
}

exports.dnldMenu = () =>{
return`${A}Download Menu${B}
${C}gitclone
${C}facebook
${C}igvideo
${C}igphoto
${C}pinterest
${C}tiktoknowm
${C}tiktokaudio
${C}ytmp3
${C}ytmp4
${C}play
${D}`
}

exports.groupMenu = () =>{
return`${A}Group Menu${B}
${C}kick
${C}antilink on
${C}antilink off
${C}promote
${C}demote
${C}tagall
${C}hidetag
${C}infogc
${C}linkgc
${C}setnamegc
${C}setdesc
${C}revoke
${C}group open
${C}group close
${C}welcome on
${C}welcome off
${D}`
}

exports.rulesBot = (prefix) =>{
return`*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
2. Jangan telepon bot. ☎️
3. Jangan membandingkan bot 👍

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan.

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini bisa kalian beli ke owner Arulbot

🗯️ Boleh saya menambah ke grup?
➡️ Untuk itu tergantung dari owner bot sendiri

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan prefix *.*

Jika sudah dipahami rules-nya, silakan ketik *.menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan bot dapat berubah kapan saja 

Terimakasih! `
}

exports.donasiBot = () =>{
return`*-------「 DONATE 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍
Buat kalian yang sudah donasi bisa kasih tau
ke owner agar bisa di masukkan ke list donasi 😊

Thanks!
`
}