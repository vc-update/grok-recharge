/**
 * IndexNow 推送脚本
 * 部署后运行此脚本，主动通知 Bing 等搜索引擎网站有更新
 *
 * 用法：
 *   node scripts/indexnow.mjs           # 推送所有页面
 *   node scripts/indexnow.mjs /news/xxx # 只推送指定路径
 */

import { readFileSync } from 'fs'
import { resolve } from 'path'

const SITE_HOST = 'grok-recharge.com'
const INDEX_NOW_KEY = 'a1b2c3d4e5f6g7h8i9j0'
const INDEX_NOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

// 从 sitemap.xml 中提取所有 URL
function getUrlsFromSitemap() {
  const sitemapPath = resolve(process.cwd(), '.vitepress/dist/sitemap.xml')
  try {
    const xml = readFileSync(sitemapPath, 'utf-8')
    const urls = []
    const regex = /<loc>(.*?)<\/loc>/g
    let match
    while ((match = regex.exec(xml)) !== null) {
      urls.push(match[1])
    }
    return urls
  } catch (err) {
    console.error('无法读取 sitemap.xml:', err.message)
    console.log('尝试使用预定义 URL 列表...')
    return getDefaultUrls()
  }
}

// 预定义的核心 URL 列表（备用）
function getDefaultUrls() {
  return [
    `https://${SITE_HOST}/`,
    `https://${SITE_HOST}/pricing`,
    `https://${SITE_HOST}/contact`,
    `https://${SITE_HOST}/about`,
    `https://${SITE_HOST}/blog/`,
    `https://${SITE_HOST}/news/`,
    `https://${SITE_HOST}/guide/getting-started`,
    `https://${SITE_HOST}/guide/recharge-process`,
    `https://${SITE_HOST}/service/supergrok`,
    `https://${SITE_HOST}/service/recharge`,
  ]
}

async function submitToIndexNow(urlList) {
  const payload = {
    host: SITE_HOST,
    key: INDEX_NOW_KEY,
    keyLocation: `https://${SITE_HOST}/${INDEX_NOW_KEY}.txt`,
    urlList: urlList
  }

  console.log(`\n====================================`)
  console.log(`  IndexNow 推送 - ${new Date().toLocaleString('zh-CN')}`)
  console.log(`====================================`)
  console.log(`待推送 URL 数量: ${urlList.length}`)
  console.log(`目标: Bing / Yandex / IndexNow 联盟`)
  console.log(`------------------------------------`)

  try {
    const response = await fetch(INDEX_NOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload)
    })

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`\n  推送成功! 状态码: ${response.status}`)
      console.log(`  Bing 将在数分钟内开始重新抓取`)
    } else {
      const text = await response.text()
      console.log(`\n  推送响应 状态码: ${response.status}`)
      console.log(`  响应内容: ${text}`)
    }
  } catch (err) {
    console.error(`\n  推送失败:`, err.message)
    console.log(`\n  备选方案: 手动访问以下 URL 逐个提交:`)
    urlList.slice(0, 5).forEach(url => {
      console.log(`  https://api.indexnow.org/indexnow?url=${encodeURIComponent(url)}&key=${INDEX_NOW_KEY}`)
    })
  }

  // 同时提交到 Bing 的 IndexNow 端点
  console.log(`\n正在同时推送到 Bing 专用端点...`)
  try {
    const bingResponse = await fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload)
    })
    console.log(`  Bing 端点响应: ${bingResponse.status}`)
  } catch (err) {
    console.log(`  Bing 端点推送失败: ${err.message}`)
  }

  console.log(`\n====================================`)
  console.log(`  推送完成！`)
  console.log(`====================================\n`)
}

// 主流程
const args = process.argv.slice(2)

let urls
if (args.length > 0) {
  // 手动指定路径
  urls = args.map(path => {
    if (path.startsWith('http')) return path
    return `https://${SITE_HOST}${path.startsWith('/') ? path : '/' + path}`
  })
  console.log('模式: 手动指定 URL')
} else {
  // 从 sitemap 自动读取
  urls = getUrlsFromSitemap()
  console.log('模式: 自动读取 sitemap.xml')
}

if (urls.length === 0) {
  console.error('没有找到需要推送的 URL')
  process.exit(1)
}

// IndexNow 单次最多推送 10000 个 URL
const batchSize = 10000
for (let i = 0; i < urls.length; i += batchSize) {
  const batch = urls.slice(i, i + batchSize)
  await submitToIndexNow(batch)
}
