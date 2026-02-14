/**
 * Public Domain.
 * See https://github.com/w3l/Wet-Ass-Proxy
 * Note: Only some files in this project are public domain, most files are copyrighted.
 */
function getLocalsrcPictogram(uri) {

    const localsrcPictograms = {

        // ========================================================================
        // === WAP STANDARD (CORE) ================================================
        // ========================================================================
        // SUPPLIER: Open Mobile Alliance (OMA) / WAP Forum
        // SPECIFICATION: WAP-213-WAPInterPic (Wireless Application Protocol Pictogram Specification)
        // DOCUMENTATION: https://www.openmobilealliance.org/tech/affiliates/wap/wap-213-wapinterpic-20010406-a.pdf

        // --- Navigation & Arrows ---
        "pict:///core/arrow/up": { emoji: "⬆️" },
        "pict:///core/arrow/down": { emoji: "⬇️" },
        "pict:///core/arrow/left": { emoji: "⬅️" },
        "pict:///core/arrow/right": { emoji: "➡️" },
        "pict:///core/arrow/up_down": { emoji: "↕️" },
        "pict:///core/arrow/left_right": { emoji: "↔️" },

        // --- Interface & Feedback ---
        "pict:///core/check": { emoji: "✔️" },
        "pict:///core/cross": { emoji: "❌" },
        "pict:///core/stop": { emoji: "🛑" },
        "pict:///core/info": { emoji: "ℹ️" },
        "pict:///core/warning": { emoji: "⚠️" },
        "pict:///core/question": { emoji: "❓" },
        "pict:///core/help": { emoji: "🆘" },
        "pict:///core/wait": { emoji: "⏳" },
        "pict:///core/home": { emoji: "🏠" },
        "pict:///core/search": { emoji: "🔍" },
        "pict:///core/settings": { emoji: "⚙️" },
        "pict:///core/trash": { emoji: "🗑️" },

        // --- Communication ---
        "pict:///core/phone": { emoji: "📞" },
        "pict:///core/mobile": { emoji: "📱" },
        "pict:///core/fax": { emoji: "📠" },
        "pict:///core/pager": { emoji: "📟" },
        "pict:///core/mail": { emoji: "✉️" },
        "pict:///core/mail/new": { emoji: "📩" },
        "pict:///core/mail/read": { emoji: "📨" },

        // --- Security ---
        "pict:///core/security/key": { emoji: "🔑" },
        "pict:///core/security/lock": { emoji: "🔒" },
        "pict:///core/security/unlock": { emoji: "🔓" },

        // --- Emotions (Smileys) ---
        "pict:///core/happy": { emoji: "🙂" },
        "pict:///core/sad": { emoji: "🙁" },
        "pict:///core/wink": { emoji: "😉" },
        "pict:///core/angry": { emoji: "😠" },
        "pict:///core/confused": { emoji: "😕" },
        "pict:///core/cool": { emoji: "😎" },
        "pict:///core/grin": { emoji: "😁" },
        "pict:///core/tongue": { emoji: "😛" },
        "pict:///core/cry": { emoji: "😢" },
        "pict:///core/surprised": { emoji: "😮" },
        "pict:///core/devil": { emoji: "😈" },
        "pict:///core/angel": { emoji: "😇" },


        // ========================================================================
        // === WAP STANDARD (EXTENSIONS) ==========================================
        // ========================================================================
        // Additional classes defined in WAP-213 and widely supported.

        // --- Weather ---
        "pict:///weather/sun": { emoji: "☀️" },
        "pict:///weather/cloud": { emoji: "☁️" },
        "pict:///weather/rain": { emoji: "🌧️" },
        "pict:///weather/snow": { emoji: "❄️" },
        "pict:///weather/lightning": { emoji: "⚡" },
        "pict:///weather/fog": { emoji: "🌫️" },
        "pict:///weather/umbrella": { emoji: "☂️" },
        "pict:///weather/moon": { emoji: "🌙" },

        // --- Human & Action ---
        "pict:///human/run": { emoji: "🏃" },
        "pict:///human/walk": { emoji: "🚶" },
        "pict:///human/skull": { emoji: "💀" },
        "pict:///human/eye": { emoji: "👁️" },
        "pict:///human/ear": { emoji: "👂" },

        // --- Animals ---
        "pict:///animal/cat": { emoji: "🐈" },
        "pict:///animal/dog": { emoji: "🐕" },
        "pict:///animal/bird": { emoji: "🐦" },
        "pict:///animal/fish": { emoji: "🐟" },
        "pict:///animal/horse": { emoji: "🐎" },
        "pict:///animal/bunny": { emoji: "🐇" },

        // --- Transport ---
        "pict:///transport/car": { emoji: "🚗" },
        "pict:///transport/bus": { emoji: "🚌" },
        "pict:///transport/train": { emoji: "🚆" },
        "pict:///transport/plane": { emoji: "✈️" },
        "pict:///transport/ship": { emoji: "🚢" },
        "pict:///transport/bike": { emoji: "🚲" },
        "pict:///transport/gas": { emoji: "⛽" },
        "pict:///transport/parking": { emoji: "🅿️" },

        // --- Objects, Tech & Misc ---
        "pict:///building/home": { emoji: "🏠" },
        "pict:///building/office": { emoji: "🏢" },
        "pict:///building/shop": { emoji: "🏪" },
        "pict:///food/restaurant": { emoji: "🍽️" },
        "pict:///food/coffee": { emoji: "☕" },
        "pict:///food/beer": { emoji: "🍺" },
        "pict:///device/pc": { emoji: "💻" },
        "pict:///device/calculator": { emoji: "🧮" },
        "pict:///device/camera": { emoji: "📷" },
        "pict:///stationery/pencil": { emoji: "✏️" },
        "pict:///stationery/book": { emoji: "📖" },
        "pict:///misc/heart": { emoji: "❤️" },
        "pict:///misc/broken_heart": { emoji: "💔" },
        "pict:///misc/star": { emoji: "⭐" },
        "pict:///misc/music": { emoji: "🎵" },


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