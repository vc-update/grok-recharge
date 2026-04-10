import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Grok代充',
  description: '专业Grok代充平台，SuperGrok会员代充值服务。无需密码仅凭ID，微信支付宝即可付款，5分钟到账。Grok4模型解锁，安全零封号，已服务5000+用户。',

  lastUpdated: true,
  cleanUrls: true,

  sitemap: {
    hostname: 'https://grok-recharge.com'
  },

  head: [
    ['meta', { name: 'keywords', content: 'Grok代充,Grok代充值,SuperGrok代充,SuperGrok代充值,Grok充值,SuperGrok订阅,Grok会员代充,SuperGrok会员,Grok4,Grok代充平台,国内Grok代充,Grok会员开通,SuperGrok代开通,Grok余额代充,xAI代充' }],
    ['meta', { name: 'robots', content: 'index,follow,max-snippet:-1,max-image-preview:large' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'canonical', href: 'https://grok-recharge.com' }],

    // Open Graph
    ['meta', { property: 'og:title', content: 'Grok代充 - 国内SuperGrok代充值平台 | 微信支付宝直付' }],
    ['meta', { property: 'og:description', content: '专业Grok代充平台，SuperGrok会员代充值，微信支付宝直付，无需密码仅凭ID，5分钟到账。安全零封号，已服务5000+用户。' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://grok-recharge.com' }],
    ['meta', { property: 'og:site_name', content: 'Grok代充平台' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],

    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Grok代充 - SuperGrok代充值 | 微信支付宝直付' }],
    ['meta', { name: 'twitter:description', content: '专业Grok代充平台。SuperGrok会员代充值，Grok4模型解锁，5分钟到账，安全零封号。' }],

    // Bing Webmaster 验证（替换为实际验证码）
    ['meta', { name: 'msvalidate.01', content: 'BING_VERIFICATION_CODE_HERE' }],

    // Google Search Console 验证（替换为实际验证码）
    ['meta', { name: 'google-site-verification', content: 'GOOGLE_VERIFICATION_CODE_HERE' }],

    // JSON-LD 结构化数据
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Grok代充平台",
      "url": "https://grok-recharge.com",
      "description": "专业Grok代充平台，提供SuperGrok会员代充值服务",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "Chinese"
      }
    })],
    // 百度统计
    ['script', {}, `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2e3f5c9f50c34190ae43b4c3dd61195e";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ],
  ],

  themeConfig: {
    nav: [
      { text: '🏠 首页', link: '/' },
      {
        text: '💳 Grok代充服务',
        items: [
          { text: 'SuperGrok代充', link: '/service/supergrok' },
          { text: 'Grok余额代充', link: '/service/recharge' },
          { text: 'Grok代充价格', link: '/pricing' }
        ]
      },
      {
        text: '📖 代充教程',
        items: [
          { text: 'Grok注册与使用入门', link: '/guide/getting-started' },
          { text: 'Grok代充流程详解', link: '/guide/recharge-process' },
          { text: 'Grok使用技巧', link: '/guide/tips' },
          { text: 'Grok代充FAQ', link: '/guide/faq' }
        ]
      },
      {
        text: '📰 深度评测',
        items: [
          { text: '全部文章', link: '/blog/' },
          { text: '🆕 2026最新Grok Super代充教程', link: '/blog/grok-super-recharge-guide-2026' },
          { text: '🆕 SuperGrok年付vs月付对比', link: '/blog/supergrok-annual-vs-monthly' },
          { text: '🆕 Grok4功能中文指南', link: '/blog/grok4-features-chinese-guide' },
          { text: '🆕 SuperGrok Heavy开通教程', link: '/blog/supergrok-heavy-recharge-guide' },
          { text: '🆕 Grok4 vs ChatGPT 5.4横评', link: '/blog/grok4-vs-chatgpt5-2026' },
          { text: '🆕 SuperGrok月会员充值攻略', link: '/blog/supergrok-monthly-recharge-guide' },
          { text: '🔥 Grok 4.2多智能体实测', link: '/blog/grok-42-multi-agent-review' },
          { text: '💰 SuperGrok年会员指南', link: '/blog/supergrok-annual-subscription-guide' },
          { text: '🏢 SuperGrok Heavy解析', link: '/blog/supergrok-heavy-review' },
          { text: '🛡️ Grok代充安全吗？', link: '/blog/grok-recharge-safety-guide' },
          { text: '🏆 Grok代充哪家靠谱？', link: '/blog/grok-recharge-platform-guide' },
          { text: '🔥 Grok 4.20升级开通攻略', link: '/blog/grok-420-upgrade-guide' },
          { text: '📝 Grok国内注册+充值教程', link: '/blog/grok-register-tutorial-2026' },
          { text: '🔥 2026最新Grok代充教程', link: '/blog/grok-recharge-tutorial-2026' },
          { text: '🆕 2026最新Grok代充指南', link: '/blog/grok-recharge-guide-2026' },
          { text: 'Grok免费版限制解析', link: '/blog/grok-free-limits-2026' },
          { text: 'SuperGrok vs 免费版', link: '/blog/supergrok-vs-free' },
          { text: 'Grok4深度评测', link: '/blog/grok4-review' },
          { text: 'Grok vs ChatGPT vs Claude', link: '/blog/grok-vs-chatgpt-vs-claude' }
        ]
      },
      {
        text: '📰 Grok资讯',
        items: [
          { text: '全部资讯', link: '/news/' },
          { text: '🆕 Grok 4.2多智能体实战教程', link: '/news/grok-42-multi-agent-practical-guide-2026' },
          { text: '🆕 SuperGrok订阅三档对比攻略', link: '/news/supergrok-subscription-plan-comparison-guide-2026' },
          { text: '🆕 Grok国内充值保姆级教程', link: '/news/grok-china-recharge-guide-2026' },
          { text: '🆕 Grok Super代充教程（2026最新）', link: '/news/grok-super-daichong-tutorial' },
          { text: '🔍 Grok4 DeepSearch深度搜索实测', link: '/news/grok4-deepsearch-guide' },
          { text: '⚔️ Grok4 vs Gemini 3.1 vs Claude 4', link: '/news/grok4-vs-gemini-vs-claude-2026' },
          { text: '🚀 xAI发展全回顾2026', link: '/news/xai-grok-timeline-2026' }
        ]
      },
      { text: '📞 联系代充', link: '/contact' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Grok代充教程',
          items: [
            { text: 'Grok注册与使用入门', link: '/guide/getting-started' },
            { text: 'Grok代充流程详解', link: '/guide/recharge-process' },
            { text: 'Grok使用技巧', link: '/guide/tips' },
            { text: 'Grok代充FAQ', link: '/guide/faq' }
          ]
        }
      ],
      '/blog/': [
        {
          text: '深度评测',
          items: [
            { text: '全部文章', link: '/blog/' },
            { text: '🆕 Grok代充：国内最稳定的SuperGrok代充教程', link: '/blog/grok-daichong-supergrok-zuiwendig-jiaocheng-2026' },
            { text: '🆕 2026最新Grok Super代充教程', link: '/blog/grok-super-recharge-guide-2026' },
            { text: '🆕 SuperGrok年付vs月付对比', link: '/blog/supergrok-annual-vs-monthly' },
            { text: '🆕 Grok4功能中文指南', link: '/blog/grok4-features-chinese-guide' },
            { text: '🆕 SuperGrok Heavy开通教程', link: '/blog/supergrok-heavy-recharge-guide' },
            { text: '🆕 Grok4 vs ChatGPT 5.4横评', link: '/blog/grok4-vs-chatgpt5-2026' },
            { text: '🆕 SuperGrok月会员充值攻略', link: '/blog/supergrok-monthly-recharge-guide' },
            { text: '🔥 Grok 4.2多智能体实测', link: '/blog/grok-42-multi-agent-review' },
            { text: '💰 SuperGrok年会员指南', link: '/blog/supergrok-annual-subscription-guide' },
            { text: '🏢 SuperGrok Heavy解析', link: '/blog/supergrok-heavy-review' },
            { text: '🛡️ Grok代充安全吗？', link: '/blog/grok-recharge-safety-guide' },
            { text: '🏆 Grok代充哪家靠谱？', link: '/blog/grok-recharge-platform-guide' },
            { text: '🔥 Grok 4.20升级开通攻略', link: '/blog/grok-420-upgrade-guide' },
            { text: '📝 Grok国内注册+充值教程', link: '/blog/grok-register-tutorial-2026' },
            { text: '🔥 2026最新Grok代充教程', link: '/blog/grok-recharge-tutorial-2026' },
            { text: '🆕 2026最新Grok代充指南', link: '/blog/grok-recharge-guide-2026' },
            { text: 'Grok免费版限制解析', link: '/blog/grok-free-limits-2026' },
            { text: 'SuperGrok vs 免费版', link: '/blog/supergrok-vs-free' },
            { text: 'Grok4深度评测', link: '/blog/grok4-review' },
            { text: 'Grok vs ChatGPT vs Claude', link: '/blog/grok-vs-chatgpt-vs-claude' }
          ]
        }
      ],
      '/news/': [
        {
          text: 'Grok资讯',
          items: [
            { text: '全部资讯', link: '/news/' },
            { text: '🆕 Grok 4.2多智能体实战教程', link: '/news/grok-42-multi-agent-practical-guide-2026' },
            { text: '🆕 SuperGrok订阅三档对比攻略', link: '/news/supergrok-subscription-plan-comparison-guide-2026' },
            { text: '🆕 Grok国内充值保姆级教程', link: '/news/grok-china-recharge-guide-2026' },
            { text: '🆕 Grok Super代充教程（2026最新）', link: '/news/grok-super-daichong-tutorial' },
            { text: '🔍 Grok4 DeepSearch深度搜索实测', link: '/news/grok4-deepsearch-guide' },
            { text: '⚔️ Grok4 vs Gemini 3.1 vs Claude 4', link: '/news/grok4-vs-gemini-vs-claude-2026' },
            { text: '🚀 xAI发展全回顾2026', link: '/news/xai-grok-timeline-2026' }
          ]
        }
      ],
      '/service/': [
        {
          text: 'Grok代充服务',
          items: [
            { text: 'SuperGrok代充', link: '/service/supergrok' },
            { text: 'Grok余额代充', link: '/service/recharge' },
            { text: 'Grok代充价格', link: '/pricing' }
          ]
        }
      ]
    },

    footer: {
      message: '微信客服：Luv12203 ｜ 每天 9:00-23:00 在线',
      copyright: '© 2025-2026 Grok代充平台 grok-recharge.com'
    },

    socialLinks: [],

    outline: {
      label: '本文目录',
      level: [2, 3]
    },

    lastUpdated: {
      text: '更新于'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换' }
          }
        }
      }
    }
  }
})
