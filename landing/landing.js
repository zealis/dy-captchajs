
      /* ================= i18n ================= */
      var I18N = {
        en: {
          nav_how: "How it works", nav_net: "Reputation network", nav_int: "Integration",
          nav_comp: "Compliance", nav_price: "Pricing", nav_cta: "Get started",
          hero_eyebrow: "Action-level human verification",
          hero_h1: "Verify the human at the <em>moment of action.</em>",
          hero_sub: "Dunyi quietly scores every visitor as your page loads, then makes the call only when it matters — at sign-up, login, SMS or download. No site-wide walls. No puzzles for everyone else.",
          hero_cta1: "Try the interactive demo", hero_cta2: "See integration",
          hero_p1: "Decision enforced by your backend", hero_p2: "GDPR-first, EU standard", hero_p3: "Live in an afternoon",
          demo_title: "Interactive demo", demo_env: "simulated",
          demo_s1: "Stage 1 · Silent pre-assessment", demo_s1st: "runs on page load",
          demo_score: "Risk score", demo_scen: "Visitor profile",
          scen_human: "Returning human", scen_unknown: "Unknown visitor", scen_bot: "Known abusive IP",
          demo_s2: "Stage 2 · At the protected action", demo_action: "Create account — protected action",
          ch_title: "One quick check", ch_sub: "Drag the block into the outlined gap to continue.",
          ch_hint: "Slider · point-select · rotate — challenge type is chosen server-side",
          sig_fp: "Browser fingerprint consistency", sig_ip: "IP reputation (cross-site)", sig_be: "Passive interaction signals", sig_pow: "Proof-of-work (WASM worker)",
          sig_fp_ok: "consistent", sig_fp_warn: "minor mismatch", sig_fp_bad: "contradictory",
          sig_ip_ok: "clean history", sig_ip_warn: "no history", sig_ip_bad: "abused 3 sites",
          sig_be_ok: "natural browsing", sig_be_warn: "little signal yet", sig_be_bad: "no interaction",
          sig_pow_ok: "solved 41ms", sig_pow_warn: "solved 380ms", sig_pow_bad: "not solved",
          pill_pass: "Pass", pill_challenge: "Challenge", pill_block: "Block",
          out_pass_t: "Passed — no friction needed",
          out_pass_p: "Score is below the challenge line, so a one-time token was issued immediately.",
          out_block_t: "Blocked at the action",
          out_block_p: "This IP's cross-site history puts it above the block line. The action is denied — the rest of the site stays fully readable.",
          out_ch_ok_t: "Challenge passed",
          out_ch_ok_p: "Token issued. Your backend redeems it once, server-side, and the action proceeds.",
          tok_k: "token", tok_note: "single-use · bound to action “register” · enforced by your backend",
          how_no: "01 · How it works", how_h2: "Two stages. Friction only where the risk is.",
          how_p: "Edge firewalls judge every request at the door. Dunyi judges the person, quietly and early — then spends friction only on the actions worth protecting.",
          s1_tag: "Stage 1", s1_when: "On page load · invisible", s1_h: "Silent pre-assessment",
          s1_p: "The moment a page loads, Dunyi starts building a risk picture — before the visitor touches anything protected.",
          s1_l1: "<b>Browser fingerprint &amp; consistency</b> — reported signals cross-checked for contradictions",
          s1_l2: "<b>IP reputation</b> — including what the cross-site network already knows",
          s1_l3: "<b>Passive interaction</b> — real browsing behaviour, no interaction demanded",
          s1_l4: "<b>Proof-of-work readiness</b> — Rust/WASM puzzle solved in a Web Worker",
          s2_tag: "Stage 2", s2_when: "On the protected click", s2_h: "Decision at the action",
          s2_p: "When a protected action fires, the backend score decides. Dunyi never blocks your traffic itself — your server enforces the verdict when it redeems the token.",
          s2_l1: "<b>Pass</b> — low risk gets a token, zero friction",
          s2_l2: "<b>Challenge</b> — slider, point-select or rotate, chosen server-side",
          s2_l3: "<b>Block</b> — the action is denied; crawlers and readers are never walled off",
          s2_l4: "<b>Shadow mode</b> — score and log first, enforce when you trust it",
          ruler_h: "Drag the score. See the decision.",
          ruler_pass: "Pass — token issued, no friction", ruler_ch: "Challenge — one quick check first", ruler_bl: "Block — action denied",
          band_pass: "0–39 · Pass", band_pass_d: "Token issued directly",
          band_ch: "40–69 · Challenge", band_ch_d: "One quick check",
          band_bl: "70–100 · Block", band_bl_d: "Action denied",
          ruler_note: "Bands are the shipped defaults. Per site, thresholds adapt automatically inside a hard policy clamp — and the console always shows the effective value and where it came from: adaptive, clamped, or manually locked.",
          net_no: "02 · Reputation network", net_h2: "Abusive on one site. Known on every site.",
          net_p: "Bots rotate domains faster than any single site can learn. Dunyi aggregates abuse signals across every site on the network, so a bad actor's history arrives before their first request does.",
          net_l1t: "First visit, full history", net_l1p: "An IP that abused Site A is scored as high-risk on its very first visit to Site B — no warm-up period for attackers to exploit.",
          net_l2t: "Honeypot-fed", net_l2p: "Trap endpoints catch scanners and credential-stuffers that never touch a real form, and feed the network directly.",
          net_l3t: "Opt-out honoured network-wide", net_l3p: "Any site can remove an IP from aggregation. The opt-out is enforced in the data model, not by convention — opted-out IPs are never re-aggregated.",
          dg_a: "Site A · Shop", dg_a2: "abuse detected", dg_b: "Site B · Forum", dg_b2: "signals shared",
          dg_c: "Site C · SaaS", dg_c2: "signals shared", dg_core: "Dunyi network", dg_core2: "aggregated reputation",
          dg_new: "New site", dg_new2: "first visit · already scored",
          int_no: "03 · Integration", int_h2: "Three steps. No SDK weight.",
          int_p: "One script tag, served from the API origin — no framework SDK to install. Your backend keeps the final word: it verifies the one-time token with your site secret.",
          st1_h: "Load the SDK", st1_p: "Served from the API origin, so your CSP stays tight — and the silent pre-assessment starts on load.",
          st2_h: "Trigger at the action", st2_p: "Call execute() where the protected action happens — sign-up, login, SMS, download. Everything else stays untouched.",
          st3_h: "Verify the token server-side", st3_p: "A front-end “pass” is only a client-side conclusion. Your server verifies the token with the site secret before the action counts.",
          comp_no: "04 · Compliance & privacy", comp_h2: "Built to the EU standard first.",
          comp_p: "Dunyi launches GDPR-first — not as a later patch. The privacy architecture is enforced in the data model, and the paperwork your legal team needs already exists.",
          c1_h: "DPIA ready", c1_tag: "Draft available",
          c1_p: "A data protection impact assessment is drafted against the shipped implementation — data flows, retention and cross-site sharing as they actually are, ready for your counsel's review.",
          c2_h: "Data minimisation by design", c2_tag: "In the schema",
          c2_p: "Fingerprints and user agents are never written to the database — they live only in session memory, for minutes. The archive keeps scores, bands and reasons, nothing more.",
          c3_h: "Retention with a hard edge",
          c3_p: "Event data is retained for 180 days, then archived in anonymised form. IP profiles are deleted once inactive and decayed to zero — and in all cases within one year — automatically, by lifecycle job.",
          c4_h: "Rights channels built in", c4_tag: "Token-guarded",
          c4_p: "Data-subject deletion and aggregation opt-out are shipped features, executed through one-time-token flows with a full audit trail — not a support-ticket promise.",
          pr_no: "05 · Pricing", pr_h2: "Priced per verified action.",
          pr_p: "You only protect the actions that matter, so you only pay for those. Page views, readers and crawlers are never billed.",
          per: "/ month", rec: "Free trial", talk: "Contact us",
          t1_name: "Free", t1_amt: "Free", cta_free: "Start for free",
          t1_l1: "Up to 100,000 requests per day — completely free", t1_l2: "1 site, all protected actions", t1_l3: "Two-stage scoring & challenges", t1_l4: "Cross-site reputation network", t1_l5: "Console: sites, IP profiles, events",
          t2_name: "Professional", cta_trial: "Start free trial",
          t2_l1: "1,000,000 requests per day included free", t2_l2: "Overage: $0.99 per 1,000 requests", t2_l3: "Up to 10 sites", t2_l4: "Team roles & permissions", t2_l5: "Adaptive thresholds with manual lock", t2_l6: "Shadow mode & full audit log",
          t3_name: "Enterprise", t3_amt: "Custom",
          t3_l1: "Private deployment (self-hosted)", t3_l2: "High-volume action quotas", t3_l3: "Custom policy clamps", t3_l4: "Dedicated support channel",
          draft_b: "Billing", draft_t: "Overage is billed at $0.99 per 1,000 requests beyond the included daily quota. Only verified protected actions count as requests — page views, readers and crawlers are never billed.",
          fin_h2: "Stop walling off your whole site. Verify the action.",
          fin_p: "Embed the component, pick the actions worth protecting, and let the score do the rest.",
          fin_cta: "Try the interactive demo",
          foot_note: "Landing page design draft v0.2 · Dunyi — action-level human verification",
          score_word: "score"
        },
        zh: {
          nav_how: "工作原理", nav_net: "信誉网络", nav_int: "接入", nav_comp: "合规", nav_price: "定价", nav_cta: "开始使用",
          hero_eyebrow: "动作级人机验证",
          hero_h1: "在<em>动作发生的那一刻</em>，验证真人。",
          hero_sub: "敦易在页面加载时静默评估每一位访客，只在真正重要的时刻做判定——注册、登录、发短信、下载。不拦全站，不给所有人出题。",
          hero_cta1: "试试交互演示", hero_cta2: "查看接入方式",
          hero_p1: "判定由你的后端执行", hero_p2: "GDPR 优先，欧盟标准", hero_p3: "一个下午接入上线",
          demo_title: "交互演示", demo_env: "模拟",
          demo_s1: "阶段一 · 静默预评", demo_s1st: "页面加载时运行",
          demo_score: "风险分", demo_scen: "访客画像",
          scen_human: "回访真人", scen_unknown: "陌生访客", scen_bot: "已知作恶 IP",
          demo_s2: "阶段二 · 受保护动作触发时", demo_action: "创建账号 —— 受保护动作",
          ch_title: "一个小验证", ch_sub: "把滑块拖进虚线缺口即可继续。",
          ch_hint: "滑块 · 点选 · 旋转 —— 题型由服务端决定",
          sig_fp: "浏览器指纹一致性", sig_ip: "IP 信誉（跨站）", sig_be: "被动交互信号", sig_pow: "工作量证明（WASM Worker）",
          sig_fp_ok: "一致", sig_fp_warn: "轻微不一致", sig_fp_bad: "自相矛盾",
          sig_ip_ok: "记录干净", sig_ip_warn: "无历史", sig_ip_bad: "已作恶 3 站",
          sig_be_ok: "自然浏览", sig_be_warn: "信号尚少", sig_be_bad: "无任何交互",
          sig_pow_ok: "41ms 解出", sig_pow_warn: "380ms 解出", sig_pow_bad: "未解出",
          pill_pass: "放行", pill_challenge: "挑战", pill_block: "拦截",
          out_pass_t: "直接放行——零摩擦",
          out_pass_p: "分数低于挑战线，一次性令牌已即时签发。",
          out_block_t: "在动作处拦截",
          out_block_p: "该 IP 的跨站作恶记录使它高于拦截线。动作被拒绝——站点其余内容照常可读。",
          out_ch_ok_t: "挑战通过",
          out_ch_ok_p: "令牌已签发。你的后端在服务端一次性核销，动作继续执行。",
          tok_k: "token", tok_note: "一次性 · 绑定动作「register」· 由你的后端执行判定",
          how_no: "01 · 工作原理", how_h2: "两个阶段。只在有风险的地方花摩擦。",
          how_p: "边缘防火墙在门口审每一个请求。敦易审的是人——安静、提前——然后只把摩擦花在值得保护的动作上。",
          s1_tag: "阶段一", s1_when: "页面加载时 · 无感", s1_h: "静默预评",
          s1_p: "页面一加载，敦易就开始拼凑风险画像——在访客碰到任何受保护功能之前。",
          s1_l1: "<b>浏览器指纹与一致性</b>——直报信号交叉核对，专抓自相矛盾",
          s1_l2: "<b>IP 信誉</b>——包含跨站信誉网络已经知道的一切",
          s1_l3: "<b>被动交互</b>——真实浏览行为，不要求访客做任何事",
          s1_l4: "<b>工作量证明</b>——Rust/WASM 题目在 Web Worker 中解算",
          s2_tag: "阶段二", s2_when: "点击受保护动作时", s2_h: "在动作处判定",
          s2_p: "受保护动作触发时，后端分数说了算。敦易从不亲自拦你的流量——结论由你的服务器在核销令牌时执行。",
          s2_l1: "<b>放行</b>——低风险直接拿令牌，零摩擦",
          s2_l2: "<b>挑战</b>——滑块、点选或旋转，题型由服务端选定",
          s2_l3: "<b>拦截</b>——动作被拒绝；爬虫与读者永不被全站墙挡住",
          s2_l4: "<b>影子模式</b>——先只评分记日志，信任之后再开启执行",
          ruler_h: "拖动分数，看判定。",
          ruler_pass: "放行——令牌签发，零摩擦", ruler_ch: "挑战——先过一个小验证", ruler_bl: "拦截——动作被拒绝",
          band_pass: "0–39 · 放行", band_pass_d: "直接签发令牌",
          band_ch: "40–69 · 挑战", band_ch_d: "过一个小验证",
          band_bl: "70–100 · 拦截", band_bl_d: "动作被拒绝",
          ruler_note: "以上为出厂默认分带。每个站点可在硬性策略区间内自适应调整阈值——控制台始终明示生效值及其来源：自适应算出、被区间钳制，还是人工锁定。",
          net_no: "02 · 信誉网络", net_h2: "在一家作恶，在所有站点都有案底。",
          net_p: "机器人换域名的速度比任何单个站点学习的速度都快。敦易跨全网聚合滥用信号，作恶者的历史比他的第一个请求先到。",
          net_l1t: "首访即带全量历史", net_l1p: "在 A 站作恶的 IP，第一次访问 B 站就按高风险评分——不给攻击者留预热期。",
          net_l2t: "蜜罐喂养", net_l2p: "陷阱端点专抓从不碰真实表单的扫描器与撞库者，信号直供网络。",
          net_l3t: "退出聚合，全网生效", net_l3p: "任何站点都能把一个 IP 移出聚合。退出标记落在数据模型上而非约定——已退出的 IP 永不被重新聚合。",
          dg_a: "A 站 · 商城", dg_a2: "检出作恶", dg_b: "B 站 · 论坛", dg_b2: "信号共享",
          dg_c: "C 站 · SaaS", dg_c2: "信号共享", dg_core: "敦易网络", dg_core2: "聚合信誉",
          dg_new: "新接入站点", dg_new2: "首访 · 已有评分",
          int_no: "03 · 接入", int_h2: "三步接入。不背 SDK 包袱。",
          int_p: "从 API 源加载一行脚本——不用装任何框架 SDK。后端握有最终决定权：用站点 secret 核验一次性令牌。",
          st1_h: "加载 SDK", st1_p: "脚本由 API 源同源下发，CSP 不用放宽——加载时即启动静默预评。",
          st2_h: "在动作处触发", st2_p: "在受保护动作发生处调用 execute()——注册、登录、发短信、下载。其余一切不受影响。",
          st3_h: "服务端核验令牌", st3_p: "前端的 pass 只是客户端结论。动作生效前，你的服务器须用站点 secret 核验令牌。",
          comp_no: "04 · 合规与隐私", comp_h2: "首发即按欧盟标准做。",
          comp_p: "敦易以 GDPR 为首要框架上线——不是日后补丁。隐私架构落在数据模型上，法务需要的底稿已经备好。",
          c1_h: "DPIA 已备", c1_tag: "草案可索取",
          c1_p: "数据保护影响评估已按已落地的实现起草——数据流向、留存与跨站共享皆为实情，可直接交贵司法务评审。",
          c2_h: "数据最小化落在结构上", c2_tag: "落在表结构",
          c2_p: "指纹与 UA 从不落库——只存在于会话级内存，分钟级过期。归档只留分数、分带与判定理由，别无其他。",
          c3_h: "留存有硬边界",
          c3_p: "事件数据留存 180 天，之后以匿名化形式归档。IP 档案在失活且衰减归零后由生命周期作业自动删除——且无论如何不超过一年。",
          c4_h: "权利通道是已交付功能", c4_tag: "令牌护航",
          c4_p: "数据主体删除与退出聚合都是已上线的功能，走一次性令牌流程并留全量审计轨迹——不是工单里的承诺。",
          pr_no: "05 · 定价", pr_h2: "按验证过的动作计价。",
          pr_p: "你只保护真正重要的动作，所以只为它们付费。页面浏览、读者与爬虫永不计费。",
          per: "/ 月", rec: "免费试用", talk: "联系我们",
          t1_name: "免费版", t1_amt: "免费", cta_free: "免费开始",
          t1_l1: "每天 100,000 个请求以内完全免费", t1_l2: "1 个站点，全部受保护动作", t1_l3: "两阶段评分与挑战", t1_l4: "跨站信誉网络", t1_l5: "控制台：站点、IP 档案、事件",
          t2_name: "专业版", cta_trial: "开始免费试用",
          t2_l1: "每天 1,000,000 个请求以内免费", t2_l2: "超出部分每千次 $0.99", t2_l3: "支持 10 个网站", t2_l4: "团队角色与权限", t2_l5: "自适应阈值 + 人工锁定", t2_l6: "影子模式与全量审计日志",
          t3_name: "企业版", t3_amt: "定制",
          t3_l1: "支持私有化部署", t3_l2: "大流量动作额度", t3_l3: "自定义策略区间", t3_l4: "专属支持通道",
          draft_b: "计费说明", draft_t: "超出包含额度的部分按每千次 $0.99 计费。只有被验证的受保护动作计为请求——页面浏览、读者与爬虫永不计费。",
          fin_h2: "别再把整站墙起来。验证动作。",
          fin_p: "嵌入组件，选定值得保护的动作，剩下的交给分数。",
          fin_cta: "试试交互演示",
          foot_note: "落地页设计稿 v0.2 · 敦易 Dunyi —— 动作级人机验证",
          score_word: "分数"
        }
      };
      var lang = "en";
      function t(k) { return (I18N[lang] && I18N[lang][k]) || I18N.en[k] || k; }
      function applyLang(l) {
        lang = l;
        document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
        document.getElementById("lang-en").setAttribute("aria-pressed", l === "en" ? "true" : "false");
        document.getElementById("lang-zh").setAttribute("aria-pressed", l === "zh" ? "true" : "false");
        var els = document.querySelectorAll("[data-i18n]");
        for (var i = 0; i < els.length; i++) { var k = els[i].getAttribute("data-i18n"); if (I18N[l][k]) els[i].textContent = I18N[l][k]; }
        var hels = document.querySelectorAll("[data-i18n-html]");
        for (var j = 0; j < hels.length; j++) { var hk = hels[j].getAttribute("data-i18n-html"); if (I18N[l][hk]) hels[j].innerHTML = I18N[l][hk]; }
        renderScenario(currentScen, false);
        updateRuler();
      }
      document.getElementById("lang-en").addEventListener("click", function () { applyLang("en"); });
      document.getElementById("lang-zh").addEventListener("click", function () { applyLang("zh"); });

      /* ================= demo ================= */
      var SCEN = {
        human:   { score: 12, sig: ["ok", "ok", "ok", "ok"] },
        unknown: { score: 58, sig: ["warn", "warn", "warn", "ok"] },
        bot:     { score: 87, sig: ["bad", "bad", "bad", "warn"] }
      };
      var SIGKEYS = [
        { name: "sig_fp", vals: { ok: "sig_fp_ok", warn: "sig_fp_warn", bad: "sig_fp_bad" } },
        { name: "sig_ip", vals: { ok: "sig_ip_ok", warn: "sig_ip_warn", bad: "sig_ip_bad" } },
        { name: "sig_be", vals: { ok: "sig_be_ok", warn: "sig_be_warn", bad: "sig_be_bad" } },
        { name: "sig_pow", vals: { ok: "sig_pow_ok", warn: "sig_pow_warn", bad: "sig_pow_bad" } }
      ];
      var currentScen = "human";
      var animFrame = null;

      function bandOf(score) { return score < 40 ? "pass" : score < 70 ? "challenge" : "block"; }

      function renderSignals(scen) {
        var ul = document.getElementById("signals");
        ul.innerHTML = "";
        var states = SCEN[scen].sig;
        for (var i = 0; i < SIGKEYS.length; i++) {
          var st = states[i];
          var li = document.createElement("li");
          li.className = st;
          var ic = document.createElement("span");
          ic.className = "ic";
          ic.textContent = st === "ok" ? "✓" : st === "warn" ? "!" : "✕";
          var nm = document.createElement("span");
          nm.textContent = t(SIGKEYS[i].name);
          var val = document.createElement("span");
          val.className = "val";
          val.textContent = t(SIGKEYS[i].vals[st]);
          li.appendChild(ic); li.appendChild(nm); li.appendChild(val);
          ul.appendChild(li);
        }
      }

      function animateScore(to) {
        var el = document.getElementById("scoreNum");
        var from = parseInt(el.textContent, 10) || 0;
        if (animFrame) cancelAnimationFrame(animFrame);
        var start = null;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min(1, (ts - start) / 650);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(from + (to - from) * eased);
          if (p < 1) animFrame = requestAnimationFrame(step);
        }
        animFrame = requestAnimationFrame(step);
        document.getElementById("needle").style.left = "calc(" + to + "% - 1px)";
        var pill = document.getElementById("bandPill");
        var b = bandOf(to);
        pill.className = "band-pill " + b;
        pill.textContent = t("pill_" + b);
      }

      function hidePanels() {
        document.getElementById("challenge").classList.remove("show");
        var oc = document.getElementById("outcome");
        oc.classList.remove("show");
        oc.innerHTML = "";
      }

      function renderScenario(scen, animate) {
        currentScen = scen;
        var btns = document.querySelectorAll(".scenario button");
        for (var i = 0; i < btns.length; i++) {
          btns[i].setAttribute("aria-pressed", btns[i].getAttribute("data-scen") === scen ? "true" : "false");
        }
        renderSignals(scen);
        if (animate === false) {
          document.getElementById("scoreNum").textContent = SCEN[scen].score;
          document.getElementById("needle").style.left = "calc(" + SCEN[scen].score + "% - 1px)";
          var pill = document.getElementById("bandPill");
          var b = bandOf(SCEN[scen].score);
          pill.className = "band-pill " + b;
          pill.textContent = t("pill_" + b);
        } else {
          animateScore(SCEN[scen].score);
        }
        hidePanels();
      }

      var scenBtns = document.querySelectorAll(".scenario button");
      for (var s = 0; s < scenBtns.length; s++) {
        scenBtns[s].addEventListener("click", function () { renderScenario(this.getAttribute("data-scen"), true); });
      }

      function fakeToken() {
        var chars = "0123456789abcdef";
        var s = "";
        for (var i = 0; i < 24; i++) s += chars[Math.floor(Math.random() * 16)];
        return "dy_" + s;
      }

      function showOutcome(kind) {
        var oc = document.getElementById("outcome");
        var titleKey = kind === "pass" ? "out_pass_t" : kind === "block" ? "out_block_t" : "out_ch_ok_t";
        var bodyKey = kind === "pass" ? "out_pass_p" : kind === "block" ? "out_block_p" : "out_ch_ok_p";
        var html = '<div class="box ' + (kind === "block" ? "block" : "pass") + '"><b class="t">' + t(titleKey) + "</b>" + t(bodyKey) + "</div>";
        if (kind !== "block") {
          html += '<div class="token"><span class="k">' + t("tok_k") + ':</span> ' + fakeToken() + '<br><span class="k">' + t("tok_note") + "</span></div>";
        }
        oc.innerHTML = html;
        oc.classList.add("show");
      }

      /* ---- slider challenge ---- */
      var gapPct = 62, handlePct = 0, dragging = false;
      var zone = document.getElementById("trackZone");
      var handle = document.getElementById("dragHandle");
      var fill = document.getElementById("trackFill");
      var gapEl = document.getElementById("trackGap");

      function layoutChallenge() {
        gapPct = 52 + Math.round(Math.random() * 30); /* 52–82 */
        handlePct = 0;
        paintHandle();
        gapEl.style.left = "calc(" + gapPct + "% - 17px)";
      }
      function paintHandle() {
        handle.style.left = handlePct + "%";
        fill.style.width = handlePct + "%";
        handle.setAttribute("aria-valuenow", Math.round(handlePct));
      }
      function pctFromEvent(e) {
        var r = zone.getBoundingClientRect();
        var x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
        return Math.max(0, Math.min(100, (x / r.width) * 100));
      }
      function finishDrag() {
        if (!dragging) return;
        dragging = false;
        if (Math.abs(handlePct - gapPct) <= 5) {
          document.getElementById("challenge").classList.remove("show");
          showOutcome("challenge");
        } else {
          handlePct = 0;
          paintHandle();
        }
      }
      handle.addEventListener("pointerdown", function (e) { dragging = true; handle.setPointerCapture(e.pointerId); e.preventDefault(); });
      handle.addEventListener("pointermove", function (e) { if (dragging) { handlePct = pctFromEvent(e); paintHandle(); } });
      handle.addEventListener("pointerup", finishDrag);
      handle.addEventListener("pointercancel", finishDrag);
      handle.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") { handlePct = Math.min(100, handlePct + 3); paintHandle(); }
        if (e.key === "ArrowLeft") { handlePct = Math.max(0, handlePct - 3); paintHandle(); }
        if (e.key === "Enter") { dragging = true; finishDrag(); }
      });

      document.getElementById("actionBtn").addEventListener("click", function () {
        hidePanels();
        var b = bandOf(SCEN[currentScen].score);
        if (b === "pass") showOutcome("pass");
        else if (b === "block") showOutcome("block");
        else { layoutChallenge(); document.getElementById("challenge").classList.add("show"); }
      });

      /* ================= ruler ================= */
      var ruler = document.getElementById("ruler");
      function updateRuler() {
        var v = parseInt(ruler.value, 10);
        document.getElementById("rulerScore").textContent = t("score_word") + " " + v;
        var b = bandOf(v);
        var el = document.getElementById("rulerVerdict");
        el.textContent = t(b === "pass" ? "ruler_pass" : b === "challenge" ? "ruler_ch" : "ruler_bl");
        el.style.color = b === "pass" ? "var(--jade)" : b === "challenge" ? "var(--amber)" : "var(--risk-ink)";
      }
      ruler.addEventListener("input", updateRuler);

      /* init */
      renderScenario("human", true);
      updateRuler();
    