/**
 * Public Domain.
 * See https://github.com/w3l/Wet-Ass-Proxy
 * Note: Only some files in this project are public domain, most files are copyrighted.
 */
function getLocalsrcPictogram(uri) {

    const localsrcPictograms = {

        // ========================================================================
        // === WAP STANDARD — CORE PICTOGRAM SET (Section 7.1) ====================
        // ========================================================================
        // SUPPLIER: Open Mobile Alliance (OMA) / WAP Forum
        // SPECIFICATION: WAP-213-WAPInterPic (Wireless Application Protocol Pictogram Specification)
        // DOCUMENTATION: https://www.openmobilealliance.org/tech/affiliates/wap/wap-213-wapinterpic-20010406-a.pdf
        // STATUS: Mandatory (M) — All core subclasses MUST be supported by conformant user agents.
        // NOTE: Keys are stored lowercase because the lookup uses uri.toLowerCase().
        //       Spec names use camelCase (e.g. upperRight) but we match case-insensitively.

        // --- core/arrow ---
        "pict:///core/arrow/up": { emoji: "⬆️" },
        "pict:///core/arrow/down": { emoji: "⬇️" },
        "pict:///core/arrow/right": { emoji: "➡️" },
        "pict:///core/arrow/left": { emoji: "⬅️" },
        "pict:///core/arrow/upperright": { emoji: "↗️" },       // spec: upperRight
        "pict:///core/arrow/upperleft": { emoji: "↖️" },        // spec: upperLeft
        "pict:///core/arrow/lowerright": { emoji: "↘️" },       // spec: lowerRight
        "pict:///core/arrow/lowerleft": { emoji: "↙️" },        // spec: lowerLeft
        "pict:///core/arrow/fingerup": { emoji: "👆" },         // spec: fingerUp
        "pict:///core/arrow/fingerdown": { emoji: "👇" },       // spec: fingerDown
        "pict:///core/arrow/fingerright": { emoji: "👉" },      // spec: fingerRight
        "pict:///core/arrow/fingerleft": { emoji: "👈" },       // spec: fingerLeft

        // --- core/button ---
        "pict:///core/button/1": { emoji: "1️⃣" },
        "pict:///core/button/2": { emoji: "2️⃣" },
        "pict:///core/button/3": { emoji: "3️⃣" },
        "pict:///core/button/4": { emoji: "4️⃣" },
        "pict:///core/button/5": { emoji: "5️⃣" },
        "pict:///core/button/6": { emoji: "6️⃣" },
        "pict:///core/button/7": { emoji: "7️⃣" },
        "pict:///core/button/8": { emoji: "8️⃣" },
        "pict:///core/button/9": { emoji: "9️⃣" },
        "pict:///core/button/0": { emoji: "0️⃣" },

        // --- core/action ---
        "pict:///core/action/makephonecall": { emoji: "📞" },   // spec: makePhoneCall
        "pict:///core/action/find": { emoji: "🔍" },
        "pict:///core/action/userauthentication": { emoji: "🔐" }, // spec: userAuthentication
        "pict:///core/action/password": { emoji: "🔑" },
        "pict:///core/action/nextitem": { emoji: "⏭️" },       // spec: nextItem
        "pict:///core/action/clear": { emoji: "🧹" },
        "pict:///core/action/stop": { emoji: "🛑" },
        "pict:///core/action/top": { emoji: "🏠" },
        "pict:///core/action/next": { emoji: "⏩" },
        "pict:///core/action/back": { emoji: "⏪" },
        "pict:///core/action/receive": { emoji: "📥" },
        "pict:///core/action/send": { emoji: "📤" },

        // --- core/message ---
        "pict:///core/message/message": { emoji: "✉️" },
        "pict:///core/message/document": { emoji: "📄" },
        "pict:///core/message/attachment": { emoji: "📎" },
        "pict:///core/message/folder": { emoji: "📁" },
        "pict:///core/message/inbox": { emoji: "📥" },
        "pict:///core/message/outbox": { emoji: "📤" },

        // --- core/state ---
        "pict:///core/state/secure": { emoji: "🔒" },
        "pict:///core/state/insecure": { emoji: "🔓" },
        "pict:///core/state/copyright": { emoji: "©️" },
        "pict:///core/state/trademark": { emoji: "™️" },
        "pict:///core/state/underconstruction": { emoji: "🚧" }, // spec: underConstruction
        "pict:///core/state/beginner": { emoji: "🔰" },

        // --- core/media ---
        "pict:///core/media/book": { emoji: "📖" },
        "pict:///core/media/video": { emoji: "📹" },
        "pict:///core/media/cd": { emoji: "💿" },
        "pict:///core/media/dvd": { emoji: "📀" },
        "pict:///core/media/game": { emoji: "🎮" },
        "pict:///core/media/radio": { emoji: "📻" },
        "pict:///core/media/tv": { emoji: "📺" },

        // --- core/info ---
        "pict:///core/info/notice": { emoji: "ℹ️" },
        "pict:///core/info/charged": { emoji: "💲" },
        "pict:///core/info/freeofcharge": { emoji: "🆓" },      // spec: freeofcharge (already lowercase)
        "pict:///core/info/new": { emoji: "🆕" },
        "pict:///core/info/position": { emoji: "📍" },
        "pict:///core/info/tollfree": { emoji: "🆓" },
        "pict:///core/info/sharpdial": { emoji: "#️⃣" },
        "pict:///core/info/reserved": { emoji: "🎟️" },
        "pict:///core/info/speechinfo": { emoji: "🗣️" },


        // ========================================================================
        // === WAP STANDARD — PICTOGRAM DICTIONARY (Section 7.2) ==================
        // ========================================================================
        // STATUS: Optional (O) — Manufacturers MAY install these sets.

        // --- animal ---
        "pict:///animal/octopus": { emoji: "🐙" },
        "pict:///animal/monkey": { emoji: "🐒" },
        "pict:///animal/pig": { emoji: "🐖" },
        "pict:///animal/cat": { emoji: "🐈" },
        "pict:///animal/dog": { emoji: "🐕" },
        "pict:///animal/bear": { emoji: "🐻" },
        "pict:///animal/whale": { emoji: "🐋" },
        "pict:///animal/penguin": { emoji: "🐧" },
        "pict:///animal/tiger": { emoji: "🐅" },
        "pict:///animal/rabbit": { emoji: "🐇" },
        "pict:///animal/rat": { emoji: "🐀" },
        "pict:///animal/ladybird": { emoji: "🐞" },
        "pict:///animal/beetle": { emoji: "🪲" },
        "pict:///animal/fish": { emoji: "🐟" },

        // --- appliance ---
        "pict:///appliance/pager": { emoji: "📟" },
        "pict:///appliance/antenna": { emoji: "📡" },
        "pict:///appliance/camera": { emoji: "📷" },
        "pict:///appliance/phone": { emoji: "📞" },
        "pict:///appliance/mobilephone": { emoji: "📱" },       // spec: mobilePhone
        "pict:///appliance/fax": { emoji: "📠" },
        "pict:///appliance/pc": { emoji: "💻" },

        // --- astronomy ---
        "pict:///astronomy/sun": { emoji: "☀️" },
        "pict:///astronomy/moon": { emoji: "🌙" },
        "pict:///astronomy/earth": { emoji: "🌍" },
        "pict:///astronomy/star": { emoji: "⭐" },

        // --- chinesezodiac ---                                 // spec: chineseZodiac
        "pict:///chinesezodiac/rat": { emoji: "🐀" },
        "pict:///chinesezodiac/ox": { emoji: "🐂" },
        "pict:///chinesezodiac/tiger": { emoji: "🐅" },
        "pict:///chinesezodiac/rabbit": { emoji: "🐇" },
        "pict:///chinesezodiac/dragon": { emoji: "🐉" },
        "pict:///chinesezodiac/snake": { emoji: "🐍" },
        "pict:///chinesezodiac/horse": { emoji: "🐎" },
        "pict:///chinesezodiac/sheep": { emoji: "🐑" },
        "pict:///chinesezodiac/monkey": { emoji: "🐒" },
        "pict:///chinesezodiac/cock": { emoji: "🐓" },
        "pict:///chinesezodiac/dog": { emoji: "🐕" },
        "pict:///chinesezodiac/boar": { emoji: "🐗" },

        // --- dress ---
        "pict:///dress/highheels": { emoji: "👠" },             // spec: highHeels
        "pict:///dress/dress": { emoji: "👗" },

        // --- emotion ---
        "pict:///emotion/smile": { emoji: "🙂" },
        "pict:///emotion/cry": { emoji: "😢" },
        "pict:///emotion/sad": { emoji: "🙁" },
        "pict:///emotion/angry": { emoji: "😠" },
        "pict:///emotion/pullface": { emoji: "😜" },            // spec: pullFace
        "pict:///emotion/inlove": { emoji: "😍" },              // spec: inLove
        "pict:///emotion/shock": { emoji: "😱" },
        "pict:///emotion/coldsweat": { emoji: "😰" },           // spec: coldSweat
        "pict:///emotion/shakenheart": { emoji: "💗" },          // spec: shakenHeart
        "pict:///emotion/brokenheart": { emoji: "💔" },          // spec: brokenHeart
        "pict:///emotion/discourage": { emoji: "😞" },
        "pict:///emotion/flash": { emoji: "💡" },
        "pict:///emotion/sleepy": { emoji: "😴" },
        "pict:///emotion/anxious": { emoji: "😟" },
        "pict:///emotion/surprised": { emoji: "😮" },
        "pict:///emotion/tutting": { emoji: "😤" },
        "pict:///emotion/happy": { emoji: "😊" },
        "pict:///emotion/punch": { emoji: "👊" },
        "pict:///emotion/wink": { emoji: "😉" },
        "pict:///emotion/thumbsup": { emoji: "👍" },            // spec: thumbsUp
        "pict:///emotion/thumbsdown": { emoji: "👎" },           // spec: thumbsDown
        "pict:///emotion/kiss": { emoji: "😘" },
        "pict:///emotion/smell": { emoji: "🤔" },
        "pict:///emotion/cool": { emoji: "😎" },
        "pict:///emotion/hug": { emoji: "🤗" },
        "pict:///emotion/trapped": { emoji: "😖" },
        "pict:///emotion/shine": { emoji: "✨" },

        // --- entertainment ---
        "pict:///entertainment/prize": { emoji: "🏆" },
        "pict:///entertainment/slotmachine": { emoji: "🎰" },   // spec: slotMachine
        "pict:///entertainment/horserace": { emoji: "🏇" },
        "pict:///entertainment/motorboatrace": { emoji: "🚤" }, // spec: motorboatRace
        "pict:///entertainment/bicyclerace": { emoji: "🚴" },   // spec: bicycleRace
        "pict:///entertainment/heart": { emoji: "♥️" },
        "pict:///entertainment/diamond": { emoji: "♦️" },
        "pict:///entertainment/spade": { emoji: "♠️" },
        "pict:///entertainment/clover": { emoji: "♣️" },
        "pict:///entertainment/hitdart": { emoji: "🎯" },       // spec: hitDart
        "pict:///entertainment/crown": { emoji: "👑" },

        // --- food ---
        "pict:///food/beer": { emoji: "🍺" },
        "pict:///food/forkknife": { emoji: "🍽️" },             // spec: forkKnife
        "pict:///food/cocktail": { emoji: "🍸" },
        "pict:///food/cake": { emoji: "🎂" },
        "pict:///food/coffeecup": { emoji: "☕" },              // spec: coffeeCup

        // --- horoscope ---
        "pict:///horoscope/aries": { emoji: "♈" },
        "pict:///horoscope/taurus": { emoji: "♉" },
        "pict:///horoscope/gemini": { emoji: "♊" },
        "pict:///horoscope/cancer": { emoji: "♋" },
        "pict:///horoscope/leo": { emoji: "♌" },
        "pict:///horoscope/virgo": { emoji: "♍" },
        "pict:///horoscope/libra": { emoji: "♎" },
        "pict:///horoscope/scorpio": { emoji: "♏" },
        "pict:///horoscope/sagittarius": { emoji: "♐" },
        "pict:///horoscope/capricorn": { emoji: "♑" },
        "pict:///horoscope/aquarius": { emoji: "♒" },
        "pict:///horoscope/pisces": { emoji: "♓" },
        "pict:///horoscope/ophiuchus": { emoji: "⛎" },

        // --- human/age ---
        "pict:///human/age/baby": { emoji: "👶" },

        // --- human/body ---
        "pict:///human/body/eye": { emoji: "👁️" },
        "pict:///human/body/ear": { emoji: "👂" },
        "pict:///human/body/rock": { emoji: "✊" },
        "pict:///human/body/scissors": { emoji: "✌️" },
        "pict:///human/body/paper": { emoji: "✋" },
        "pict:///human/body/foot": { emoji: "🦶" },
        "pict:///human/body/shoes": { emoji: "👟" },
        "pict:///human/body/spectacles": { emoji: "👓" },
        "pict:///human/body/wheelchair": { emoji: "♿" },

        // --- human/gender ---
        "pict:///human/gender/man": { emoji: "👨" },
        "pict:///human/gender/woman": { emoji: "👩" },

        // --- humanoid ---
        "pict:///humanoid/devil": { emoji: "😈" },
        "pict:///humanoid/skull": { emoji: "💀" },
        "pict:///humanoid/alien": { emoji: "👽" },
        "pict:///humanoid/ghost": { emoji: "👻" },
        "pict:///humanoid/angel": { emoji: "😇" },

        // --- map ---
        "pict:///map/signal": { emoji: "🚦" },
        "pict:///map/parking": { emoji: "🅿️" },
        "pict:///map/busstop": { emoji: "🚏" },                // spec: busStop
        "pict:///map/restroom": { emoji: "🚻" },
        "pict:///map/policestation": { emoji: "👮" },           // spec: policeStation
        "pict:///map/postoffice": { emoji: "🏤" },              // spec: postOffice
        "pict:///map/bank": { emoji: "🏦" },
        "pict:///map/atm": { emoji: "🏧" },
        "pict:///map/hospital": { emoji: "🏥" },
        "pict:///map/conveniencestore": { emoji: "🏪" },        // spec: convenienceStore
        "pict:///map/school": { emoji: "🏫" },
        "pict:///map/park": { emoji: "🏞️" },
        "pict:///map/hotel": { emoji: "🏨" },
        "pict:///map/gasstation": { emoji: "⛽" },              // spec: gasStation
        "pict:///map/house": { emoji: "🏠" },
        "pict:///map/cross": { emoji: "⛪" },
        "pict:///map/restaurant": { emoji: "🍽️" },
        "pict:///map/store": { emoji: "🏬" },
        "pict:///map/cafe": { emoji: "☕" },
        "pict:///map/fastfood": { emoji: "🍔" },
        "pict:///map/pub": { emoji: "🍺" },
        "pict:///map/movie": { emoji: "🎬" },
        "pict:///map/karaoke": { emoji: "🎤" },
        "pict:///map/spa": { emoji: "♨️" },
        "pict:///map/amusementpark": { emoji: "🎡" },           // spec: amusementPark
        "pict:///map/zoo": { emoji: "🦁" },
        "pict:///map/building": { emoji: "🏢" },
        "pict:///map/ticket": { emoji: "🎫" },
        "pict:///map/nosmoking": { emoji: "🚭" },              // spec: noSmoking
        "pict:///map/smoking": { emoji: "🚬" },

        // --- misc ---
        "pict:///misc/giftbox": { emoji: "🎁" },               // spec: giftBox
        "pict:///misc/fire": { emoji: "🔥" },
        "pict:///misc/snowman": { emoji: "⛄" },
        "pict:///misc/work": { emoji: "🚧" },
        "pict:///misc/money": { emoji: "💰" },

        // --- music ---
        "pict:///music/quarternote": { emoji: "🎵" },           // spec: quarterNote
        "pict:///music/g-clef": { emoji: "🎼" },               // spec: G-clef
        "pict:///music/rest": { emoji: "🎶" },
        "pict:///music/guitar": { emoji: "🎸" },

        // --- plant ---
        "pict:///plant/fourleafclover": { emoji: "🍀" },        // spec: fourLeafClover
        "pict:///plant/flower": { emoji: "🌸" },

        // --- ranking ---
        "pict:///ranking/trophy": { emoji: "🏆" },
        "pict:///ranking/gold": { emoji: "🥇" },
        "pict:///ranking/silver": { emoji: "🥈" },
        "pict:///ranking/bronze": { emoji: "🥉" },

        // --- sport ---
        "pict:///sport/sport": { emoji: "🏅" },
        "pict:///sport/baseball": { emoji: "⚾" },
        "pict:///sport/soccer": { emoji: "⚽" },
        "pict:///sport/basketball": { emoji: "🏀" },
        "pict:///sport/ski": { emoji: "⛷️" },
        "pict:///sport/camp": { emoji: "⛺" },
        "pict:///sport/motorsport": { emoji: "🏎️" },           // spec: motorSport
        "pict:///sport/checkerflag": { emoji: "🏁" },           // spec: checkerFlag
        "pict:///sport/golf": { emoji: "⛳" },
        "pict:///sport/surfing": { emoji: "🏄" },
        "pict:///sport/fishing": { emoji: "🎣" },
        "pict:///sport/horseriding": { emoji: "🏇" },
        "pict:///sport/americanfootball": { emoji: "🏈" },      // spec: americanFootball
        "pict:///sport/swimming": { emoji: "🏊" },
        "pict:///sport/scuba": { emoji: "🤿" },

        // --- time/event ---
        "pict:///time/event/anniversary": { emoji: "💒" },
        "pict:///time/event/holiday": { emoji: "🏖️" },
        "pict:///time/event/xmas": { emoji: "🎄" },
        "pict:///time/event/birthday": { emoji: "🎂" },
        "pict:///time/event/party": { emoji: "🎉" },
        "pict:///time/event/newyearseve": { emoji: "🎆" },     // spec: newYearsEve
        "pict:///time/event/newyearsday": { emoji: "🎊" },     // spec: newYearsDay

        // --- time/schedule ---
        "pict:///time/schedule/3oclock": { emoji: "🕒" },
        "pict:///time/schedule/calendar": { emoji: "📅" },

        // --- time/season ---
        "pict:///time/season/spring": { emoji: "🌸" },
        "pict:///time/season/summer": { emoji: "☀️" },
        "pict:///time/season/autumn": { emoji: "🍂" },
        "pict:///time/season/winter": { emoji: "❄️" },

        // --- tool ---
        "pict:///tool/hammer": { emoji: "🔨" },

        // --- vehicle ---
        "pict:///vehicle/bus": { emoji: "🚌" },
        "pict:///vehicle/train": { emoji: "🚆" },
        "pict:///vehicle/expresstrain": { emoji: "🚄" },       // spec: expressTrain
        "pict:///vehicle/car": { emoji: "🚗" },
        "pict:///vehicle/taxi": { emoji: "🚕" },
        "pict:///vehicle/plane": { emoji: "✈️" },
        "pict:///vehicle/ship": { emoji: "🚢" },
        "pict:///vehicle/onfoot": { emoji: "🚶" },             // spec: onFoot
        "pict:///vehicle/subway": { emoji: "🚇" },
        "pict:///vehicle/rocket": { emoji: "🚀" },

        // --- weapon ---
        "pict:///weapon/gun": { emoji: "🔫" },
        "pict:///weapon/bomb": { emoji: "💣" },

        // --- weather ---
        "pict:///weather/sunny": { emoji: "☀️" },
        "pict:///weather/rainy": { emoji: "🌧️" },
        "pict:///weather/cloudy": { emoji: "☁️" },
        "pict:///weather/snow": { emoji: "❄️" },
        "pict:///weather/thunder": { emoji: "⚡" },
        "pict:///weather/foggy": { emoji: "🌫️" },
        "pict:///weather/wave": { emoji: "🌊" },


        // ========================================================================
        // === OPENWAVE (CORE LEGACY & NUMERIC) ===================================
        // ========================================================================
        // SUPPLIER: Openwave (formerly Unwired Planet / Phone.com)
        // SPECIFICATION: Openwave Mobile Browser 4.x/5.x Style Guide (Appendix B)
        // DOCUMENTATION: http://www1.lasalle.edu/~beatty/430/wireless/toolkit/client_tech_and_sdk/pdf/style_guide.pdf

        // --- Common Legacy Aliases (v4.x - v5.x) ---
        "email": { emoji: "✉️" },
        "phone": { emoji: "📞" },
        "check": { emoji: "✔️" },
        "info": { emoji: "ℹ️" },
        "alert": { emoji: "⚠️" },
        "locked": { emoji: "🔒" },
        "unlocked": { emoji: "🔓" },
        "calendar": { emoji: "📅" },
        "arrow_right": { emoji: "➡️" },
        "arrow_left": { emoji: "⬅️" },
        "stock_up": { emoji: "📈" },
        "stock_down": { emoji: "📉" },
        "star": { emoji: "⭐" },
        "star2": { emoji: "🌟" },

        // --- Numeric IDs (The "Safe" List) ---
        "icon_19": { emoji: "➡️" }, // arrow_right
        "icon_20": { emoji: "⬅️" }, // arrow_left
        "icon_268": { emoji: "⚠️" }, // alert
        "icon_274": { emoji: "ℹ️" }, // info
        "icon_279": { emoji: "📞" }, // phone
        "icon_285": { emoji: "✔️" }, // check
        "icon_293": { emoji: "🔒" }, // locked
        "icon_294": { emoji: "🔓" }, // unlocked
        "icon_296": { emoji: "📈" }, // stock_up
        "icon_297": { emoji: "📉" }, // stock_down
        "icon_323": { emoji: "✉️" }, // email / new mail
        "icon_324": { emoji: "📅" }, // calendar
        "icon_193": { emoji: "❓" }, // question
        "icon_194": { emoji: "🏠" }, // house


        // ========================================================================
        // === MANUFACTURER SPECIFIC (OPENWAVE EXTENSIONS) ========================
        // ========================================================================
        // These specific keys were added by manufacturers on top of the UP.Browser.

        // --- Motorola (MIB - Motorola Internet Browser) ---
        "motorola/bat": { emoji: "🔋" }, // Battery level
        "motorola/sig": { emoji: "📶" }, // Signal strength

        // --- Siemens (Sie-WAP) ---
        "siemens/addressbook": { emoji: "📖" },
        "siemens/voice": { emoji: "🎙️" }, // Voice memo

        // --- Alcatel (One Touch) ---
        "alcatel/kisser": { emoji: "😘" },


        // ========================================================================
        // === OPENWAVE (EXTENDED / AREPPIM LIST) =================================
        // ========================================================================
        // SUPPLIER: Openwave (Later Versions / v6.2+)
        // SPECIFICATION: Openwave Universal Mobile Interface (UMI)
        // SOURCE: https://technotes.areppim.com/ctr-agtupimwa12/agtupimwa12.html

        // --- Navigation & Media ---
        "up": { emoji: "⬆️" },
        "down": { emoji: "⬇️" },
        "back": { emoji: "🔙" },
        "forward": { emoji: "🔜" },
        "rewind": { emoji: "⏪" },
        "fastforward": { emoji: "⏩" },
        "play": { emoji: "▶️" },
        "pause": { emoji: "⏸️" },
        "stop": { emoji: "⏹️" },
        "record": { emoji: "⏺️" },
        "eject": { emoji: "⏏️" },

        // --- System & Hardware ---
        "battery": { emoji: "🔋" },
        "signal": { emoji: "📶" },
        "disk": { emoji: "💾" },
        "printer": { emoji: "🖨️" },
        "network": { emoji: "🌐" },
        "audiovol": { emoji: "🔊" },
        "audiomute": { emoji: "🔇" },

        // --- Misc Text Names ---
        "smilie": { emoji: "🙂" },
        "sad": { emoji: "🙁" },
        "options": { emoji: "⚙️" },
        "money": { emoji: "💰" },
        "weather": { emoji: "🌤️" },

        // --- Duplicates (Commented Out) ---
        // "arrow_left": { emoji: "⬅️" }, // Defined in Core Legacy
        // "arrow_right": { emoji: "➡️" }, // Defined in Core Legacy


        // ========================================================================
        // === ERICSSON / SONY ERICSSON ===========================================
        // ========================================================================
        // SUPPLIER: Sony Ericsson
        // SPECIFICATION: WAP 1.2.1 / 2.0 Developers Guideline
        // DOCUMENTATION: https://web.archive.org/web/20040723062828/http://www.ericsson.com/mobilityworld/developerszone/downloads/docs/wap/ericsson_wap_121_dev_guideline.pdf

        // --- The "Special Characters" Set ---
        "square": { emoji: "◻️" }, // Checkbox placeholder
        "disc": { emoji: "●" },   // Bullet point
        "bull": { emoji: "•" },   // Alternate bullet
        "folder": { emoji: "📁" },
        "key": { emoji: "🔑" },

        // --- The "Input" Icons (Used in <do> elements) ---
        "ok": { emoji: "✔️" },
        "reset": { emoji: "🔄" },
        "cancel": { emoji: "❌" },
        "help": { emoji: "❓" },

        // --- Duplicates (Commented Out) ---
        // "check": { emoji: "✔️" }, // Matches Openwave Legacy
        // "lock": { emoji: "🔒" },  // Matches Openwave Legacy
        // "mail": { emoji: "✉️" },  // Matches Openwave Legacy
        // "phone": { emoji: "📞" }, // Matches Openwave Legacy


        // ========================================================================
        // === NOKIA (PROPRIETARY) ================================================
        // ========================================================================
        // SUPPLIER: Nokia (Series 30, Series 40)
        // SPECIFICATION: Nokia WML Browser Developers Guide (Series 30 / Series 40)
        // DOCUMENTATION: https://documentation.help/Nokia-7.2/Nokia_WAP_Browser_2_0_Developers_Guide_v1_0_en.pdf

        // --- The "7110 Era" Shortcodes ---
        "smile": { emoji: "🙂" },
        "smiley": { emoji: "🙂" },
        "frown": { emoji: "🙁" },

        // --- Interface Elements ---
        "arrow": { emoji: "➡️" }, // Defaults to Right on 7110

        // --- Rare Series 60 (Symbian) Aliases ---
        "note": { emoji: "📝" },
        "doc": { emoji: "📄" },
        "clock": { emoji: "🕒" },

        // --- Duplicates (Commented Out) ---
        // "bull": { emoji: "•" },    // Already defined in Ericsson (and duplicates itself)
        // "sad": { emoji: "🙁" },    // Defined in Openwave Extended
        // "arrow_left": { emoji: "⬅️" }, // Defined in Openwave Legacy
        // "arrow_right": { emoji: "➡️" }, // Defined in Openwave Legacy
        // "email": { emoji: "✉️" },  
        // "calendar": { emoji: "📅" }, 
    };

    const emoji = localsrcPictograms[uri.toLowerCase()];
    if (emoji) {
        return emoji.emoji;
    }

    return null;
}
