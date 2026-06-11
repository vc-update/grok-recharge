---
title: Grok Build 完全指南：xAI 终端原生 AI 编程智能体安装、订阅与代充值教程（2026年6月最新）
description: 深度解读 Grok Build：xAI 推出的终端原生 AI 编程智能体（Agentic CLI），涵盖安装步骤、Plan Mode、8 路并行子智能体、Arena Mode、SuperGrok Heavy 订阅流程、代充值通道、与 Claude Code / Codex CLI 的横评对比，以及国内开发者最关心的常见问题。
head:
  - - meta
    - name: keywords
      content: Grok Build, Grok Build 教程, Grok Build 安装, Grok Build 代充, SuperGrok Heavy, xAI CLI, Agentic CLI, Grok 4.3, AI 编程智能体
outline: deep
---

# Grok Build 完全指南：xAI 终端原生 AI 编程智能体安装、订阅与代充值教程（2026年6月最新）

Grok Build 是 xAI 在 2026 年 5 月正式推出的终端原生 AI 编程智能体（Agentic CLI），定位对标 Claude Code 与 OpenAI Codex CLI，但凭借 200 万 token 超长上下文、最多 8 路并行子智能体（subagent）和独家的 Arena Mode 自动方案排序，迅速成为专业软件工程师讨论度最高的 Coding Agent 之一。本文基于 2026 年 6 月最新版本，系统梳理 Grok Build 的能力边界、安装流程、订阅与代充路径、核心功能玩法，并提供与同类产品的对比表格、实战示例与 FAQ，方便国内开发者快速上手。

如果你还在 Claude Code 与 Grok Build 之间犹豫，或者对 SuperGrok Heavy 订阅在国内如何支付有疑问，本文都能给出完整答案。

## 一、Grok Build 是什么：一句话定义与四个硬事实

Grok Build 是 xAI 基于 Grok 4.3 beta（含 grok-code-fast-1 编码专用模型）打造的"终端原生 AI 编程智能体"。它不是一个聊天机器人，而是一个会自己读文件、写代码、跑命令、提交 Git 的 Agent。

四个值得记住的硬事实：

1. **本地优先架构**：源代码、凭证和敏感数据完全在本地执行，不上传 xAI 云端，天然适配金融、政务、军工等受监管场景。
2. **200 万 token 上下文**：可以一次性把中型甚至大型代码库整体载入内存，跨数十个文件进行联动重构，告别"上下文截断"。
3. **最多 8 路并行子智能体**：复杂任务可以被拆解成代码分析、测试生成、CI 检查、文档检索等子任务，由多个 Agent 并发处理。
4. **三入口形态**：终端 CLI、Web 端（build.grok.com）、VS Code 扩展，三种工作流自由切换。

相比 Claude Code 与 Codex CLI 晚了整整一年入场，Grok Build 选择用"并发 + 大上下文 + 本地化"作为差异化突破口。这条路线对中大型项目和企业级开发者特别友好。

### 1.1 Grok Build 与传统 AI 编程助手的本质区别

传统 AI 助手（如 Copilot、早期 Cursor）是"补全工"，你写一行它给你下一行；而 Grok Build 是"工程师 Agent"，你给它一句"重构整个鉴权模块从 JWT 改为 OAuth2"，它会：

- 自己读代码理解现状；
- 生成结构化的 Plan；
- 拉起多个子 Agent 并行处理；
- 执行 Shell、修改文件、跑测试；
- 通过 Git 提交变更并产出 diff。

整个过程对开发者透明，每一步都可审批、可回退。

## 二、Grok Build 订阅与代充值流程详解（国内开发者必读）

Grok Build 本身是免费可下载的 CLI 工具，但要解锁完整模型能力（特别是 Grok 4.3 beta 全量上下文与 SuperGrok Heavy 的并发额度），需要订阅 xAI 的相应套餐，或通过 BYOK 模式自带 xAI API Key。

国内用户最大的两个痛点：**境外信用卡**与**手机号验证**。这也是为什么大部分国内开发者会选择代充值通道完成订阅。

### 2.1 三种获取 Grok Build 完整能力的方式

| 方式 | 适用人群 | 优点 | 局限 |
| --- | --- | --- | --- |
| 官网信用卡订阅 | 有 Visa/Master 境外卡 | 一手开通 | 国内卡常被风控、需海外手机号 |
| API Key（BYOK 模式） | 高频开发者、团队 | 按量计费、灵活 | 需先开通付费 API、需充值 Credit |
| 代充值通道 | 国内绝大多数个人/小团队 | 支付宝/微信即可、出号快 | 选择正规站点是关键 |

### 2.2 通过代充通道开通 SuperGrok / SuperGrok Heavy 的完整步骤

下面以本站 grok-recharge.com 推荐的合作通道为例，说明从下单到本地登录的完整流程，整个过程通常 5–15 分钟：

1. **进入自助代充页面**：打开 [Grok自助代充（支持支付宝/微信）](https://chatgpta1.top/)，选择"Grok / SuperGrok / SuperGrok Heavy"对应的套餐档位。
2. **填写充值账号**：输入你已注册或希望开通的 xAI 账号邮箱（建议提前在 x.ai 注册好，未注册也可由客服代注册）。
3. **选择支付方式**：支持支付宝、微信扫码两种主流国内支付通道，无需绑定境外卡。
4. **支付并提交订单**：付款完成后系统自动进入处理队列，多数订单 5–10 分钟内完成订阅开通。
5. **接收开通通知**：邮箱或站内信会收到开通成功提示，账号下的"Subscriptions"页面同步显示套餐状态。
6. **本地启动 Grok Build**：在终端执行 `grok` 进入 TUI 界面，输入 `/login` 走浏览器 OAuth 完成登录，登录后即享订阅权益。
7. **（可选）配置 BYOK API Key**：如果你额外购买了 API Credit，可在终端内 `/api-key add xai` 把 Key 粘贴进去，进入按量计费模式。

整个过程的关键是确保：账号邮箱准确无误、订阅类型选对（Plan Mode 全功能需要 SuperGrok 及以上、8 路并发子 Agent 需要 SuperGrok Heavy）、付款后保留订单号便于售后。

### 2.3 BYOK 模式 vs 订阅模式怎么选

- 如果你每天调用次数集中在 1–3 小时高强度编码，**SuperGrok Heavy 订阅更划算**，并发额度直接拉满；
- 如果你只是偶尔用（一周 2–3 次跑 CI 任务、生成测试），**BYOK + API Credit 更省**，按量计费、不用就不花；
- 如果你是团队使用，建议**主开发者订阅 + 团队成员 BYOK**混合方案，既保证常驻并发，又能扩散给临时成员。

## 三、Grok Build 安装教程：macOS / Linux / Windows 全平台

### 3.1 前置条件

- 操作系统：macOS 12+、主流 Linux 发行版、Windows 10/11（推荐 WSL2 体验）；
- 终端：建议使用支持 256 色 + 鼠标事件的现代终端，如 iTerm2、Windows Terminal、WezTerm、Kitty；
- 网络：首次安装需访问 x.ai 域名下载二进制（境内网络一般可达，慢则建议预先准备代理）；
- 磁盘：预留 ~500MB 用于二进制 + 缓存。

### 3.2 一键安装命令

官方推荐的一键安装方式（macOS / Linux / WSL）：

```bash
curl -fsSL https://x.ai/cli/install.sh | bash
```

Windows 原生 PowerShell 用户：

```powershell
iwr -useb https://x.ai/cli/install.ps1 | iex
```

安装脚本会自动检测系统架构、下载对应的二进制并写入 PATH。完成后执行：

```bash
grok --version
```

看到形如 `grok 1.x.x (2026-06)` 的输出即代表安装成功。

### 3.3 首次启动与登录

直接在终端输入：

```bash
grok
```

进入 TUI 全屏交互界面后：

- 输入 `/login` 触发浏览器登录（OAuth）；
- 登录完成后回到终端会自动同步订阅状态；
- 输入 `/help` 查看全部内置 slash 命令；
- 输入 `/model` 切换底层模型（默认 grok-4.3-beta，可切到 grok-code-fast-1 提速）。

### 3.4 VS Code 扩展安装（可选但强烈推荐）

在 VS Code 扩展商店搜索 **"Grok Build"**，点击安装后：

1. 重启 VS Code；
2. 侧边栏出现 Grok Build 图标；
3. 首次点击需要再次登录（共享 CLI 的 token）；
4. 在编辑器内即可直接调用 Plan Mode、Arena Mode 等能力，无需切到终端。

## 四、Grok Build 核心功能深度解析

### 4.1 Plan Mode：先计划再执行的"白盒"工作流

复杂任务（比如"把整个项目从 Webpack 5 迁移到 Rspack"）启动后，Grok Build 不会立即动手，而是先输出一份结构化执行计划：

- 每一步要修改的文件路径；
- 每一步预计的 diff；
- 风险提示（如可能影响的依赖、需要回归的测试）。

你可以：

- ✅ 直接 Approve 全部
- 📝 Comment 指定步骤（比如"第 3 步先不要动 babel.config.js"）
- ✏️ Edit 具体步骤
- ❌ Reject 整体重新规划

这种"先计划再执行"的范式相比 Claude Code/Codex 直接动手再回滚要稳健得多，特别适合生产代码库。

### 4.2 8 路并行子智能体（Subagents）

Grok Build 最具差异化的能力。一个主任务可以被拆解成多个子任务并发执行：

- 子 Agent A：扫描 src/ 下所有路由文件
- 子 Agent B：生成对应的单元测试
- 子 Agent C：检查 CI 配置是否需要更新
- 子 Agent D：拉取相关 PR 的历史 diff 做参考
- ……（最多 8 个）

主 Agent 负责汇总。对于大型代码库重构、全栈项目骨架搭建这种"天然可并行"的任务，时间能压到 1/3 甚至 1/5。

### 4.3 Arena Mode：让多个方案 PK，自动选优

同一个需求，比如"实现一个支持 LRU 的并发安全缓存"，Grok Build 可以让 N 个 subagent 各写一版：

- 方案 A：基于 sync.Map
- 方案 B：基于分片锁 + container/list
- 方案 C：基于 singleflight + TTL

系统会自动跑评测脚本（性能、内存、可读性）排序，最终把"金奖方案"摆在你面前。这个能力对算法/中间件类工程极其友好。

### 4.4 200 万 token 上下文窗口

一组直观的对比：

- 一个典型的 Next.js 中型项目（约 800 个 .ts/.tsx 文件）整体 token 数在 80–120 万之间；
- Claude 4 Sonnet 上下文 20 万 token，必须分块处理；
- Grok 4.3 beta 200 万 token 一次喂完，跨文件依赖分析直接打通。

这意味着 Grok Build 真正能做"一次性理解整个项目"的重构，而不是"分块猜测 + 回头补"。

### 4.5 本地优先架构与企业级安全

- 代码、`.env`、密钥不上传 xAI 云端；
- 支持完全离线/气隙网络（前提是模型已本地缓存或走企业自托管推理后端）；
- 提供 `AGENTS.md` 团队规范文件，可以预设：禁止执行 `rm -rf`、必须先跑 lint、必须保留版权头等团队红线。

### 4.6 Headless 模式：CI/CD 一行接入

```bash
grok -p "review the diff in this PR and post comments to GitHub" --json
```

非交互式执行，输出结构化 JSON，方便 CI 流水线消费。结合 GitHub Actions、GitLab CI 可以做到："每个 PR 自动 AI Review + 生成单测 + 提交修复 commit"。

## 五、Grok Build 套餐功能对比表（不含价格）

下面表格只对比官方各档位的**能力差异**，价格请以 x.ai 官网或代充页面为准。

| 能力维度 | Free（免费） | SuperGrok | SuperGrok Heavy | API BYOK |
| --- | --- | --- | --- | --- |
| 基础 CLI 安装 | ✅ | ✅ | ✅ | ✅ |
| Grok 4.3 beta 模型 | 限速 | ✅ | ✅ | ✅ |
| grok-code-fast-1 | ❌ | ✅ | ✅ | ✅ |
| 200 万 token 上下文 | 部分 | ✅ | ✅ | ✅ |
| Plan Mode | 受限 | ✅ | ✅ | ✅ |
| Arena Mode | ❌ | 部分 | ✅ 全功能 | ✅ |
| 并行子智能体 | 1 路 | 最多 4 路 | 最多 8 路 | 取决于额度 |
| 优先级队列 | 排队 | 标准 | 高优先 | 按 Key 调度 |
| Headless CI/CD | ✅ | ✅ | ✅ | ✅ |
| VS Code 扩展 | ✅ | ✅ | ✅ | ✅ |
| Web 端 build.grok.com | 受限 | ✅ | ✅ | ✅ |
| 自定义 MCP 服务器 | ❌ | ✅ | ✅ | ✅ |
| 自定义 Hooks | ❌ | ✅ | ✅ | ✅ |
| 适用场景 | 试用、轻度使用 | 个人开发者主力 | 高强度/团队/复杂工程 | 团队按量计费、CI 集成 |

简言之：

- 想认真当生产力工具 → 至少 **SuperGrok**；
- 想吃满 8 路并发与 Arena Mode → **SuperGrok Heavy**；
- 想接 CI/CD、按量付费、跨账号共享 → **API BYOK**。

## 六、Grok Build vs Claude Code vs Codex CLI：2026 年 6 月横评

| 对比维度 | Grok Build (xAI) | Claude Code (Anthropic) | Codex CLI (OpenAI) |
| --- | --- | --- | --- |
| 发布时间 | 2026.5 早期 Beta | 已正式发布 | 已正式发布 |
| 底层模型 | Grok 4.3 beta / grok-code-fast-1 | Claude 4 Sonnet / Opus | GPT-4o / o3 系列 |
| 上下文长度 | 200 万 token | 20 万 token | ~20 万 token |
| 并行 Agent | 最多 8 个并发子 Agent | 主要单 Agent | 主要单 Agent |
| 方案评估 | Arena Mode 自动排序 | 手动迭代 | 手动迭代 |
| 执行计划 | Plan Mode（先审批） | 直接执行 + diff | 直接执行 + diff |
| 数据落点 | 本地优先，代码不上云 | 云端执行 | 云端执行 |
| 离线/气隙 | ✅ 支持 | ❌ | ❌ |
| SWE-Bench Verified | ~70.8% | ~72–75% | ~70% |
| 入口形态 | CLI + Web + VS Code | CLI + IDE | CLI + ChatGPT |
| 自动化 | Headless `-p` + JSON | 有限脚本 | 有限脚本 |
| 国内支付 | 代充通道支持 | 代充通道支持 | 代充通道支持 |
| 强项 | 大上下文 / 并发 / 本地化 | 模型推理稳健、生态成熟 | 与 ChatGPT 生态打通 |
| 弱项 | 入场晚、Beta 阶段 | 上下文偏短、必须联网 | 并发与本地化能力较弱 |

**怎么选**：

- 重视**项目级理解 + 本地安全**：Grok Build；
- 重视**模型稳定性 + 文档生态**：Claude Code；
- 重视**与 ChatGPT 工作流无缝切换**：Codex CLI。

很多专业团队的做法是**两套并存**：日常用 Claude Code，跑大型重构和涉密项目用 Grok Build。

## 七、Grok Build 实战使用场景与示例

### 7.1 大型代码库重构

```
grok> 将整个项目的状态管理从 Redux 迁移到 Zustand，保留所有现有 API
```

Grok Build 进入 Plan Mode → 列出 47 步 → 4 路并发执行 → 自动跑 Vitest → 一次性提交 8 个 atomic commit。

### 7.2 全栈应用从零搭建

```
grok> 帮我搭建一个 Next.js 14 + Drizzle ORM + Postgres 的博客系统，含管理后台、Markdown 渲染、RSS 订阅
```

Plan Mode 输出技术选型与目录结构 → Approve → 自动 `pnpm create` → 写代码 → 跑迁移 → 启动开发服务器 → 浏览器自检。

### 7.3 多维度自动化代码审查

```
grok> --headless review ./pull-request-1234.diff
```

启动 4 个并发子 Agent：
- 安全扫描（SQL 注入 / XSS / 敏感信息泄漏）
- 性能分析（潜在 N+1、循环复杂度）
- 测试覆盖核查
- 文档/注释合规

输出综合 JSON 报告，可直接发回 PR。

### 7.4 离线/气隙环境编程

军工、金融内网中，提前下载 Grok Build 二进制 + 接入企业自托管推理后端，整套 Agent 能力可以在断网环境运行。这是 Claude Code 与 Codex CLI 目前都做不到的。

## 八、Grok Build 高级技巧与避坑指南

### 8.1 必装：AGENTS.md 团队规范

在项目根目录创建 `AGENTS.md`，写入团队红线：

```md
# Grok Build 使用规范
- 禁止执行 rm -rf 与 git push --force
- 修改 schema 必须先生成迁移
- 提交前必须跑 pnpm lint && pnpm test
- 涉及 src/billing/** 的修改必须人工审批
```

Grok Build 会把这份文件作为系统级约束，违反时主动暂停。

### 8.2 用好 Hooks

Hooks 是 Grok Build 在关键事件（pre-edit、post-commit、pre-shell）触发的自定义脚本。常见用法：

- `pre-edit`：自动备份当前文件到 `.grok-backup/`；
- `post-commit`：自动跑 changeset；
- `pre-shell`：拦截高危命令（`drop`、`rm -rf`、`mkfs`）。

### 8.3 避坑：上下文虽大，prompt 也要克制

200 万 token 不是让你把无关代码全塞进去，而是给 Agent **自动检索**的发挥空间。直接用一句话表达需求即可，让 Grok Build 自己决定加载哪些文件。手动喂太多反而拖慢响应。

### 8.4 避坑：Beta 阶段建议关键操作走 Plan Mode

Grok Build 处于早期 Beta，偶有边界 bug。涉及生产代码、数据库 schema、CI 配置的改动，建议**强制开启 Plan Mode**，过一遍 diff 再批准。

### 8.5 性价比提示：合理切换模型

- 起草、批量改动 → `grok-code-fast-1`（更快更省）
- 复杂推理、架构设计 → `grok-4.3-beta`
- 用 `/model` 命令随时切换。

## 九、Grok Build 常见问题 FAQ

### Q1：Grok Build 在中国大陆可以正常使用吗？

CLI 本身可以下载和运行，登录与模型调用需要稳定访问 x.ai 域名。绝大多数开发者通过常规网络优化即可使用。订阅与付款是国内用户最常见的卡点，可通过本文第二节介绍的代充通道用支付宝/微信完成。

### Q2：SuperGrok 与 SuperGrok Heavy 的核心区别是什么？

最关键的区别在**并发额度**与 **Arena Mode 完整功能**。SuperGrok 适合个人主力使用，能开 4 路并发子 Agent；SuperGrok Heavy 才能吃满 8 路并发，并解锁 Arena Mode 全部功能，更适合中大型项目和团队主力开发者。

### Q3：BYOK（自带 API Key）模式划算吗？

视使用强度而定。如果每天高频调用（>3 小时密集 coding），订阅更稳定且可预算；如果是间歇式使用（一周几次跑测试或生成代码），按量 BYOK 通常更便宜。也可以两者结合：日常订阅 + CI 用 API Key。

### Q4：Grok Build 真的不会上传我的代码吗？

官方架构是本地优先：源码、`.env`、Git 凭证不会进入 xAI 服务器。但**模型推理本身仍走 xAI 推理 API**（除非你自托管推理后端），也就是说**你发给 Agent 的 prompt 与必要的代码片段会作为推理输入传输**，但不会被持久化训练。涉密项目建议结合企业自托管或离线模型方案。

### Q5：代充值订阅安全吗？会不会封号？

选择正规通道（如本站推荐的 [Grok自助代充（支持支付宝/微信）](https://chatgpta1.top/)）通常很稳定。代充本质是合规的代付服务，并不修改账号属性。建议：①优先使用自己注册的 xAI 账号；②不要短时间内多平台多次充值切换；③保留订单凭证便于售后。

### Q6：Grok Build 可以替代 Cursor / Copilot 吗？

定位不同。Copilot/Cursor 偏"编辑器内补全 + 局部对话"，Grok Build 是"项目级 Agent + 跨文件执行"。最佳实践是**搭配使用**：Cursor 写代码时贴身陪跑，Grok Build 处理整块的重构、脚手架、PR Review。

### Q7：8 路并行子智能体会不会把账号额度烧光？

会有更高消耗，但 Grok Build 内置了配额监控与自动降级：超出阈值时自动收敛并发数。SuperGrok Heavy 订阅自带较高的并发包，正常项目使用基本无须担心。BYOK 模式下建议在 xAI 后台设置月度上限。

### Q8：Plan Mode 一定要开吗？简单任务也走流程会不会很慢？

不必。简单任务（改一个变量名、生成一个函数）默认直接执行；只有任务复杂度超过阈值（多文件、多步骤、有副作用）时 Grok Build 才会自动进入 Plan Mode。也可以通过 `/plan on|off` 手动切换。

### Q9：Grok Build 支持 Windows 原生开发吗？

支持。提供原生 Windows 安装脚本，但实际体验最佳的仍是 **WSL2 + Windows Terminal**：终端事件、文件路径处理、Shell 工具链都更顺。纯原生 PowerShell 在执行复杂 Shell 命令时偶有兼容问题。

### Q10：订阅过期后，本地已下载的代码和配置会消失吗？

不会。Grok Build 是本地工具，所有本地文件、`.grok` 配置、Hooks、AGENTS.md 都保留。仅模型调用能力被限制为免费档位，重新订阅或续费后立即恢复。

## 十、写在最后：怎么用一杯咖啡的时间跑通 Grok Build

如果你已经看到这里，建议照下面这条最短路径今天就把 Grok Build 跑起来：

1. 通过 [Grok自助代充（支持支付宝/微信）](https://chatgpta1.top/) 完成 SuperGrok 或 SuperGrok Heavy 订阅（5–15 分钟出号）；
2. 一行命令安装 CLI：`curl -fsSL https://x.ai/cli/install.sh | bash`；
3. 终端执行 `grok` → `/login` 完成账号登录；
4. 在你最熟悉的项目目录里说一句："请帮我审查最近一次 commit 并补全单元测试"——感受一下 Plan Mode + 并发子 Agent 的工作流；
5. 装上 VS Code 扩展，把 Grok Build 长期接入日常编辑流。

Grok Build 在 2026 年 6 月仍处于 Beta 阶段，但凭借 200 万 token 上下文、8 路并发、本地优先三大杀手锏，它已经是国内开发者最值得现在就投入学习的 Coding Agent 之一。早一周熟悉，就早一周把 AI 真正变成项目级生产力。

## 相关阅读

- [Claude代充值教程与常见问题](https://claude-recharge.com)：另一款主流终端 AI 编程助手 Claude Code 的代充值与使用指南，可与 Grok Build 对比参考。
- 本站首页 [grok-recharge.com](https://grok-recharge.com)：聚焦 xAI Grok / SuperGrok / Grok Build 的代充与使用教程合集。

FILENAME: grok-build-guide-2026-06.md