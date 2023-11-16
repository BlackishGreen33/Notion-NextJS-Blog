const BLOG = {
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID || '3261d9a39ae74df28dbc0b42673d19b5',
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || true, // 偽靜態路徑，開啟後所有文章URL都以 .html 結尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // 更新內容緩存間隔 單位(秒)；即每個頁面有5秒的純靜態期、此期間無論多少次訪問都不會抓取notion數據；調大該值有助於節省Vercel資源、同時提升訪問速率，但也會使文章更新有延遲。
  THEME: process.env.NEXT_PUBLIC_THEME || 'matery', // 主题， 支持 ['next','hexo',"fukasawa','medium','example','matery','gitbook','simple']
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 切換主題按鈕
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-TW',
  SINCE: 2016,
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'auto', // light 日間模式 ， dark夜間模式， auto根據時間和主題自動夜間模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 夜間模式起至時間，false時關閉根據時間自動切換夜間模式

  // 歡迎語
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    '您好，我是一個工程師, 您好，我是一個學生, 您好，我是一個一個一個, 歡迎來到我的屍魂界🎉',

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // 支持Menu 類型，各主題將逐步支持靈活的二級菜單配置，替代了原來的Page類型，此配置是試驗功能、默認關閉。

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '墨綠B.G.',
  BIO:
    process.env.NEXT_PUBLIC_BIO ||
    '所謂人類，不過是身披錦衣的猿猴；所謂神明，不過是善於偽裝的人類。', // 作者簡介
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://www.blackishgreen.link/', // 網站地址
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, 博客, 墨綠B.G.', // 網站關鍵詞

  // 社交連結
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 's5460703@gmail.com', // 電子郵件
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // 微博
  CONTACT_TWITTER:
    process.env.NEXT_PUBLIC_CONTACT_TWITTER || 'https://twitter.com/BG64990782', // twitter
  CONTACT_GITHUB:
    process.env.NEXT_PUBLIC_CONTACT_GITHUB ||
    'https://github.com/BlackishGreen33', // github
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // telegram
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // linkedIn
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // instagram
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || '', // B站
  CONTACT_YOUTUBE:
    process.env.NEXT_PUBLIC_CONTACT_YOUTUBE ||
    'https://www.youtube.com/channel/UC5oJQszET21NGInQ1rJiF3g', // Youtube

  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // Notion域名，您可以選擇用自己的域名進行反向代理，如果不懂得什麼是反向代理，請勿修改此項

  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon 配置, 默認使用 /public/favicon.ico，支持在線圖片

  // START ************網站字體*****************

  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans', // ['font-serif','font-sans'] 襯線和無襯線
  // 字體CSS 例如 https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
  FONT_URL: [
    // 'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css'
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
  ],
  // 無襯線字體 例如'"LXGW WenKai"'
  FONT_SANS: [
    // '"LXGW WenKai"',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // 襯線字體 例如'"LXGW WenKai"'
  FONT_SERIF: [
    // '"LXGW WenKai"',
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME:
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH ||
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // font-awesome 字體圖標地址; 可選 /css/all.min.css ， https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  // END ************網站字體*****************

  CUSTOM_RIGHT_CLICK_CONTEXT_MENU:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || true, // 自定義右鍵菜單，覆蓋系統菜單

  // 自定義外部腳本，外部樣式
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 側欄佈局 是否反轉(左變右,右變左) 已支持主題: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE: false,

  // 一個小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXXX

  // PrismJs 代碼相關
  PRISM_JS_AUTO_LOADER:
    'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_THEME_PATH:
    'https://npm.elemecdn.com/prism-themes/themes/prism-a11y-dark.min.css', // 代碼樣式主題 更多參考 https://github.com/PrismJS/prism-themes
  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, // 代碼左上角顯示mac的紅黃綠圖標
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || 'false', // 是否顯示行號
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || 'false', // 是否折疊代碼框

  // Mermaid 圖表CDN
  MERMAID_CDN:
    process.env.NEXT_PUBLIC_MERMAID_CDN ||
    'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js', // CDN

  BACKGROUND_LIGHT: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#000000', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // 文章分享功能 ，將在底部顯示一個分享條
  POSTS_SHARE_SERVICES:
    process.env.NEXT_PUBLIC_POST_SHARE_SERVICES ||
    'link,wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin', // 分享的服務，按順序顯示,逗號隔開
  // 所有支持的分享服务：link(复制链接),wechat(微信),qq,weibo(微博),email(邮件),facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare,okshare,tumblr,livejournal,mailru,viber,workplace,pocket,instapaper,hatena

  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX || 'article',
  // POST類型文章的默認路徑前綴，例如默認POST類型的路徑是  /article/[slug]
  // 如果此項配置為 '' 空， 則文章將沒有前綴路徑，使用場景： 希望文章前綴路徑為 /post 的情況 支持多級
  // 支援類似 WP 可自訂文章連結格式的功能：https://wordpress.org/documentation/article/customize-permalinks/，目前只先實作 %year%/%month%/%day%
  // 例：如想連結改成前綴 article + 時間戳記，可變更為： 'article/%year%/%month%/%day%'

  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // ['page','scroll] 文章列表樣式:頁碼分頁、單頁滾動加載
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', //  是否在列表加載文章預覽
  POST_PREVIEW_LINES: 12, // 預覽博客行數
  POST_RECOMMEND_COUNT: 6, // 推薦文章數量
  POSTS_PER_PAGE: 12, // post counts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // 排序方式 'date'按時間,'notion'由notion控制

  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || null, // 在這裡查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || null, // 管理後台的KEY，不要暴露在代碼中，在這裡查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY:
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || null, // 客戶端搜索用的KEY
  ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // 在Algolia中創建一個index用作數據庫
  ALGOLIA_RECREATE_DATA:
    process.env.ALGOLIA_RECREATE_DATA ||
    process.env.npm_lifecycle_event === 'build', // 為true時重新構建索引數據; 默認在build時會構建

  PREVIEW_CATEGORY_COUNT: 16, // 首頁最多展示的分類數量，0為不限制
  PREVIEW_TAG_COUNT: 16, // 首頁最多展示的標籤數量，0為不限制

  POST_DISABLE_GALLERY_CLICK:
    process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // 畫冊視圖禁止點擊，方便在友鏈頁面的畫冊插入鏈接

  //   ********動態特效相關********
  // 鼠標點擊煙花特效
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || true,
  // 煙花色彩
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // 櫻花飄落特效
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || false,
  // 漂浮線段特效
  NEST: process.env.NEXT_PUBLIC_NEST || false,
  // 動態彩帶特效
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false,
  // 靜態彩帶特效
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false,
  // 星空雨特效 黑夜模式才會生效
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || true,

  //   ********掛件組件相關********
  // Chatbase
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || 'f1fTTAG4xOZcIKgZIGPxd', // 是否顯示chatbase機器人 https://www.chatbase.co/
  // 懸浮掛件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || false, // 是否顯示寵物掛件
  WIDGET_PET_LINK:
    process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
    'https://raw.githubusercontent.com/imuncle/live2d/master/model/touma/touma.model.json', // 掛件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME:
    process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || false, // 點擊寵物掛件切換博客主題

  // 音樂播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || false, // 是否使用音樂播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角顯示播放和切換，如果使用播放器，打開自動播放再隱藏，就會以類似背景音樂的方式播放，無法取消和暫停
  MUSIC_PLAYER_AUTO_PLAY:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自動播放，不過自動播放時常不生效（移動設備不支持自動播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌詞顯示類型，可選值： 3 | 1 | 0（0：禁用 lrc 歌詞，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌詞路徑，對 meting 無效）
  MUSIC_PLAYER_CDN_URL:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
    'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默認播放方式，順序 list，隨機 random
  MUSIC_PLAYER_AUDIO_LIST: [
    // 示例音樂列表。除了以下配置外，還可配置歌詞，具體配置項看此文檔 https://aplayer.js.org/#/zh-Hans/
    {
      name: '风を共に舞う気持ち',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
      cover:
        'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '王都グランセル',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
      cover:
        'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要開啟 MetingJS，從平台獲取歌單。會覆蓋自定義的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音樂平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 對應歌單的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 可選值： 3 | 1 | 0（0：禁用 lrc 歌詞，1：lrc 格式的字符串，3：lrc 文件 url）

  //   ********掛件組件相關********
  // ----> 評論互動 可同時開啟多個支持 WALINE VALINE GISCUS CUSDIS UTTERRANCES GITALK

  // twikoo
  COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || '', // TWIKOO後端地址 騰訊雲環境填envId；Vercel環境填域名，教程：https://tangly1024.com/article/notionnext-twikoo
  COMMENT_TWIKOO_COUNT_ENABLE:
    process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || false, // 博客列表是否顯示評論數
  COMMENT_TWIKOO_CDN_URL:
    process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL ||
    'https://cdn.staticfile.org/twikoo/1.6.16/twikoo.all.min.js', // twikoo客戶端cdn

  // utterance
  COMMENT_UTTERRANCES_REPO:
    process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', // 代碼倉庫名

  // giscus
  COMMENT_GISCUS_REPO:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO ||
    'BlackishGreen33/Notion-NextJs-Blog', // 你的Github倉庫名
  COMMENT_GISCUS_REPO_ID:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || 'R_kgDOJ_e_BA', // 你的Github Repo ID
  COMMENT_GISCUS_CATEGORY_ID:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID ||
    'DIC_kwDOJ_e_BM4CYKGS', // 你的Github Discussions 內的 Category ID ( 設定完 giscus 即可看到 )
  COMMENT_GISCUS_MAPPING:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // 使用哪種方式來標定文章
  COMMENT_GISCUS_REACTIONS_ENABLED:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // 是否開啟文章表情符號 '1' 開啟 "0" 關閉
  COMMENT_GISCUS_EMIT_METADATA:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', // 是否提取 Metadata '1' 開啟 '0' 關閉
  COMMENT_GISCUS_INPUT_POSITION:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // 發表留言位置 'bottom' 尾部 'top' 頂部
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-TW', // 語言
  COMMENT_GISCUS_LOADING:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // 是否漸進式載入
  COMMENT_GISCUS_CROSSORIGIN:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // 跨網域

  COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || '', // data-app-id 36位 see https://cusdis.com/
  COMMENT_CUSDIS_HOST:
    process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // data-host, change this if you're using self-hosted version
  COMMENT_CUSDIS_SCRIPT_SRC:
    process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC ||
    'https://cusdis.com/js/cusdis.es.js', // change this if you're using self-hosted version

  // gitalk
  COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', // 你的Github倉庫名
  COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '', // 用戶名
  COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '', // 管理員用戶名
  COMMENT_GITALK_CLIENT_ID:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '', // e.g 20位ID ， 在gitalk後台獲取
  COMMENT_GITALK_CLIENT_SECRET:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '', // e.g 40位ID， 在gitalk後台獲取
  COMMENT_GITALK_DISTRACTION_FREE_MODE: false, // 類似facebook的無干擾模式
  COMMENT_GITALK_JS_CDN_URL:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL ||
    'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', // gitalk客戶端 js cdn
  COMMENT_GITALK_CSS_CDN_URL:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL ||
    'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css', // gitalk客戶端 css cdn

  COMMENT_GITTER_ROOM: process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '', // gitter聊天室 see https://gitter.im/ 不需要則留空
  COMMENT_DAO_VOICE_ID: process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '', // DaoVoice http://dashboard.daovoice.io/get-started
  COMMENT_TIDIO_ID: process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '', // [tidio_id] -> //code.tidio.co/[tidio_id].js

  COMMENT_VALINE_CDN:
    process.env.NEXT_PUBLIC_VALINE_CDN ||
    'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
  COMMENT_VALINE_APP_ID: process.env.NEXT_PUBLIC_VALINE_ID || '', // Valine @see https://valine.js.org/quickstart.html 或 https://github.com/stonehank/react-valine#%E8%8E%B7%E5%8F%96app-id-%E5%92%8C-app-key
  COMMENT_VALINE_APP_KEY: process.env.NEXT_PUBLIC_VALINE_KEY || '',
  COMMENT_VALINE_SERVER_URLS: process.env.NEXT_PUBLIC_VALINE_SERVER_URLS || '', // 該配置適用於國內自定義域名用戶, 海外版本會自動檢測(無需手動填寫) @see https://valine.js.org/configuration.html#serverURLs
  COMMENT_VALINE_PLACEHOLDER:
    process.env.NEXT_PUBLIC_VALINE_PLACEHOLDER || '抢个沙发吧~', // 可以搭配後台管理評論 https://github.com/DesertsP/Valine-Admin  便於查看評論，以及郵件通知，垃圾評論過濾等功能

  COMMENT_WALINE_SERVER_URL: process.env.NEXT_PUBLIC_WALINE_SERVER_URL || '', // 請配置完整的Waline評論地址 例如 hhttps://preview-waline.tangly1024.com @see https://waline.js.org/guide/get-started.html
  COMMENT_WALINE_RECENT: process.env.NEXT_PUBLIC_WALINE_RECENT || false, // 最新評論

  // 此評論系統基於WebMention，細節可參考https://webmention.io
  // 它是一個基於IndieWeb理念的開放式評論系統，下方COMMENT_WEBMENTION包含的屬性皆需配置：
  // ENABLE: 是否開啟
  // AUTH: Webmention使用的IndieLogin，可使用Twitter或Github個人頁面連結
  // HOSTNAME: Webmention綁定之網域，通常即為本站網址
  // TWITTER_USERNAME: 評論顯示區域需要的資訊
  // TOKEN: Webmention的API token
  COMMENT_WEBMENTION: {
    ENABLE: process.env.NEXT_PUBLIC_WEBMENTION_ENABLE || false,
    AUTH: process.env.NEXT_PUBLIC_WEBMENTION_AUTH || '',
    HOSTNAME: process.env.NEXT_PUBLIC_WEBMENTION_HOSTNAME || '',
    TWITTER_USERNAME: process.env.NEXT_PUBLIC_TWITTER_USERNAME || '',
    TOKEN: process.env.NEXT_PUBLIC_WEBMENTION_TOKEN || ''
  },

  // <---- 評論插件

  // ----> 站點統計
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, // vercel自帶的統計 https://vercel.com/docs/concepts/analytics/quickstart
  ANALYTICS_BUSUANZI_ENABLE: true, // 展示網站閱讀量、訪問數 see http://busuanzi.ibruce.info/
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // e.g 只需要填寫百度統計的id，[baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // 只需要填寫站長統計的id, [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', // Google Analytics的id e.g: G-XXXXXXXXXX

  ANALYTICS_ACKEE_TRACKER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // e.g 'https://ackee.tangly1024.net/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // e.g https://ackee.tangly1024.net , don't end with a slash
  ANALYTICS_ACKEE_DOMAIN_ID:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'

  SEO_GOOGLE_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  SEO_BAIDU_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  // <---- 站點統計

  // 谷歌廣告
  ADSENSE_GOOGLE_ID:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || 'ca-pub-2858848283461078', // Google廣告ID e.g ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // Google廣告ID測試模式，這種模式獲取假的測試廣告，用於開發
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '2688896723', // Google AdScene>廣告>按單元廣告>新建文章內嵌廣告 粘貼html代碼中的data-ad-slot值
  ADSENSE_GOOGLE_SLOT_FLOW:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '', // Google AdScene>廣告>按單元廣告>新建信息流廣告
  ADSENSE_GOOGLE_SLOT_NATIVE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '', // Google AdScene>廣告>按單元廣告>新建原生廣告
  ADSENSE_GOOGLE_SLOT_AUTO:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '', // Google AdScene>廣告>按單元廣告>新建展示廣告 （自動廣告）

  // 自定義配置notion數據庫字段名
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // 文章類型
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // 當type文章類型與此值相同時，為博文。
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // 當type文章類型與此值相同時，為單頁。
    type_notice:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // 當type文章類型與此值相同時，為公告。
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // 當type文章類型與此值相同時，為菜單。
    type_sub_menu:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // 當type文章類型與此值相同時，為子菜單。
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // 文章標題
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
    status_publish:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // 當status狀態值與此相同時為發布，可以為中文
    status_invisible:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // 當status狀態值與此相同時為隱藏發布，可以為中文 ， 除此之外其他頁面狀態不會顯示在博客上
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon'
  },

  // RSS訂閱
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否開啟RSS訂閱功能
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // 開啟mailichimp郵件訂閱 客戶列表ID ，具體使用方法參閱文檔
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null, // 開啟mailichimp郵件訂閱 APIkey

  // 作廢配置
  AVATAR: process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // 作者頭像，被notion中的ICON覆蓋。若無ICON則取public目錄下的avatar.png
  TITLE: process.env.NEXT_PUBLIC_TITLE || '墨綠B.G.的部落格', // 站點標題 ，被notion中的頁面標題覆蓋；此處請勿留空白，否則服務器無法編譯
  HOME_BANNER_IMAGE:
    process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // 首頁背景大圖, 會被notion中的封面圖覆蓋，若無封面圖則會使用代碼中的 /public/bg_image.jpg 文件
  DESCRIPTION:
    process.env.NEXT_PUBLIC_DESCRIPTION || '歡迎來到我的屍魂界', // 站點描述，被notion中的頁面描述覆蓋

  // 網站圖片
  IMG_LAZY_LOAD_PLACEHOLDER:
    process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER ||
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', // 懶加載佔位圖片地址，支持base64或url
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // 此配置已失效，請勿使用；AMAZON方案不再支持，僅支持Notion方案。 ['Notion','AMAZON'] 站點圖片前綴 默認 Notion:(https://notion.so/images/xx) ， AMAZON(https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || true, // 文章圖片是否自動添加陰影

  // 開發相關
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // 是否顯示調試按鈕
  ENABLE_CACHE: process.env.ENABLE_CACHE || false, // 開啟緩存會將Notion數據緩存在內存中，通常在開發調試中使用，正式部署開啟此功能意義不大。
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  VERSION: process.env.NEXT_PUBLIC_VERSION // 版本號
}

module.exports = BLOG
