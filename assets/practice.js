/* 408 操作系统可视化课堂 · 练习场：跨章抓取题库、组卷、错题本、收藏 */
(function () {
  "use strict";
  var CHAPTERS = [
    { file: "ch01.html", name: "第 1 章 系统概述" },
    { file: "ch02.html", name: "第 2 章 进程与线程" },
    { file: "ch03.html", name: "第 3 章 内存管理" },
    { file: "ch04.html", name: "第 4 章 文件管理" },
    { file: "ch05.html", name: "第 5 章 I/O 管理" }
  ];
  var QS_KEY = "os408_qstats_v2";
  var FAV_KEY = "os408_fav";
  var bank = [];
  var current = [];
  var currentName = "";
  var currentSet = "basic";

  var listEl = document.getElementById("bank-list");
  var emptyEl = document.getElementById("bank-empty");
  var statsEl = document.getElementById("bank-stats");
  var titleEl = document.getElementById("bank-title");
  var msgEl = document.getElementById("bank-msg");
  if (!listEl) return;

  function loadJSON(k, d) {
    try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; }
  }
  function saveJSON(k, o) {
    try { localStorage.setItem(k, JSON.stringify(o)); return true; } catch (e) { return false; }
  }
  var stats = loadJSON(QS_KEY, {});
  var favs = loadJSON(FAV_KEY, {});

  function hashStr(s) {
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) & 0x7fffffff;
    return h.toString(36);
  }
  function stemText(headClone) {
    var drop = headClone.querySelectorAll(".q-tag, .q-fav");
    for (var i = 0; i < drop.length; i++) drop[i].parentNode.removeChild(drop[i]);
    return headClone.textContent.replace(/\s+/g, " ").trim().slice(0, 220);
  }
  function parsePage(html, chapter) {
    var doc = new DOMParser().parseFromString(html, "text/html");
    var items = [];
    doc.querySelectorAll(".quiz").forEach(function (q, idx) {
      var head = q.querySelector(".q-head");
      if (!head) return;
      var headClone = head.cloneNode(true);
      var hash = hashStr(stemText(headClone));
      var tagEl = head.querySelector(".q-tag");
      var opts = [];
      q.querySelectorAll(".opt").forEach(function (o) {
        opts.push({ key: o.getAttribute("data-opt"), text: o.innerHTML.trim() });
      });
      var exp = q.querySelector(".q-exp");
      items.push({
        id: chapter.file + "#" + idx,
        chapter: chapter.name,
        diff: q.getAttribute("data-diff") || "basic",
        year: q.getAttribute("data-year") || "",
        tag: tagEl ? tagEl.textContent.replace(/\s+/g, " ").trim() : "",
        stem: headClone.innerHTML.trim(),
        opts: opts,
        answer: q.getAttribute("data-answer"),
        exp: exp ? exp.innerHTML.trim() : "",
        hash: hash
      });
    });
    return items;
  }
  function loadBank() {
    var jobs = CHAPTERS.map(function (c) {
      return fetch(c.file, { cache: "no-store" }).then(function (r) {
        if (!r.ok) throw new Error(c.file + " HTTP " + r.status);
        return r.text();
      }).then(function (html) { return parsePage(html, c); });
    });
    return Promise.all(jobs).then(function (groups) {
      bank = [];
      groups.forEach(function (g) { bank = bank.concat(g); });
      if (!bank.length) throw new Error("没有解析到题目");
    });
  }

  function uniq(arr) {
    var seen = {}, out = [];
    arr.forEach(function (x) { if (!seen[x.id]) { seen[x.id] = 1; out.push(x); } });
    return out;
  }
  function buildSet(name) {
    currentSet = name;
    if (name === "basic") { currentName = "基础卷"; current = bank.filter(function (q) { return q.diff === "basic"; }); }
    else if (name === "mid") { currentName = "提高卷"; current = bank.filter(function (q) { return q.diff === "mid"; }); }
    else if (name === "real") { currentName = "真题改编卷"; current = bank.filter(function (q) { return q.diff === "real"; }); }
    else if (name === "mock") {
      currentName = "全真模拟卷";
      current = [];
      CHAPTERS.forEach(function (c) {
        var own = bank.filter(function (q) { return q.chapter === c.name; });
        ["basic", "basic", "mid", "real"].forEach(function (d) {
          var pool = own.filter(function (q) { return q.diff === d && current.indexOf(q) < 0; });
          if (pool.length) current.push(pool[0]);
        });
      });
      current = uniq(current).slice(0, 20);
    }
    else if (name === "wrong") { currentName = "错题本"; current = bank.filter(function (q) { var r = stats[q.id]; return r && r.r === 0; }); }
    else if (name === "fav") { currentName = "收藏题"; current = bank.filter(function (q) { return favs[q.id]; }); }
    else { currentName = "全部题目"; current = bank.slice(); }
    renderList();
  }

  function statLine() {
    var answered = 0, correct = 0, wrong = 0, fav = 0;
    bank.forEach(function (q) {
      var r = stats[q.id];
      if (r && (r.r === 0 || r.r === 1)) { answered++; if (r.r === 1) correct++; else wrong++; }
      if (favs[q.id]) fav++;
    });
    if (statsEl) {
      statsEl.innerHTML = "<span>已答 <b>" + answered + "</b> / " + bank.length + "</span>" +
        "<span>正确率 <b>" + (answered ? Math.round(correct / answered * 100) + "%" : "—") + "</b></span>" +
        "<span>错题 <b>" + wrong + "</b></span>" +
        "<span>收藏 <b>" + fav + "</b></span>";
    }
  }

  function renderCard(q) {
    var rec = stats[q.id];
    var done = rec && (rec.r === 0 || rec.r === 1);
    var cls = q.diff === "basic" ? "basic" : (q.diff === "mid" ? "mid" : "real");
    var lvl = q.diff === "basic" ? "基础" : (q.diff === "mid" ? "提高" : "真题改编");
    var html = '<div class="quiz" data-id="' + q.id + '" data-answer="' + q.answer + '">' +
      '<div class="q-head"><div class="q-tag"><span class="q-lvl ' + cls + '">' + lvl + "</span>" +
      (q.year ? '<span class="q-year">' + q.year + " 题型</span>" : "") +
      "<span>" + q.chapter + " · " + q.tag + "</span></div>" + q.stem + "</div>" +
      '<div class="opts">';
    q.opts.forEach(function (o) {
      var extra = "";
      if (rec && rec.d === o.key && rec.r === 0) extra = " wrong";
      if (done && o.key === q.answer) extra = " right";
      html += '<div class="opt' + extra + '" data-opt="' + o.key + '">' + o.text + "</div>";
    });
    html += "</div><div class=\"q-foot\">";
    html += '<button class="btn-ans">' + (done ? "查看解析" : "提交答案") + "</button>";
    if (done) html += '<button class="btn-redo ghost">重做本题</button>';
    html += '<span class="q-res ' + (done ? (rec.r === 1 ? "good" : "bad") : "") + '">' +
      (done ? (rec.r === 1 ? "✅ 上次答对（已保存）" : "❌ 上次答错（正确答案是 " + q.answer + "）") : "") + "</span>";
    html += "</div>";
    html += '<div class="q-exp' + (done ? " show" : "") + '">' + q.exp + "</div>";
    html += "</div>";
    return html;
  }
  function renderList() {
    titleEl.textContent = currentName + " · " + current.length + " 题";
    listEl.innerHTML = current.map(renderCard).join("");
    emptyEl.style.display = current.length ? "none" : "block";
    if (!current.length) {
      emptyEl.textContent = currentSet === "wrong" ? "错题本是空的 —— 继续保持！" : (currentSet === "fav" ? "还没有收藏题，点题卡右上角的 ☆ 收藏。" : "本卷暂无题目。");
    }
    statLine();
    renderFavStars();
    listEl.querySelectorAll(".quiz").forEach(initCard);
  }
  function renderFavStars() {
    listEl.querySelectorAll(".quiz").forEach(function (card) {
      var id = card.getAttribute("data-id");
      var head = card.querySelector(".q-head");
      if (!head || head.querySelector(".q-fav")) return;
      var star = document.createElement("button");
      star.className = "q-fav" + (favs[id] ? " on" : "");
      star.type = "button";
      star.textContent = favs[id] ? "★" : "☆";
      star.title = "收藏这道题";
      star.addEventListener("click", function (ev) {
        ev.stopPropagation();
        if (favs[id]) { delete favs[id]; star.textContent = "☆"; star.classList.remove("on"); }
        else { favs[id] = 1; star.textContent = "★"; star.classList.add("on"); }
        saveJSON(FAV_KEY, favs);
        statLine();
      });
      head.style.position = "relative";
      head.appendChild(star);
    });
  }

  function selectOption(card, key) {
    if (card.getAttribute("data-done") === "1") return;
    card.querySelectorAll(".opt").forEach(function (o) { o.classList.toggle("sel", o.getAttribute("data-opt") === key); });
    card.__picked = key;
  }
  function submit(card) {
    var id = card.getAttribute("data-id");
    var q = bank.filter(function (x) { return x.id === id; })[0];
    if (!q) return;
    var ans = q.answer;
    var res = card.querySelector(".q-res");
    var exp = card.querySelector(".q-exp");
    var btn = card.querySelector(".btn-ans");
    if (card.getAttribute("data-done") === "1") {
      exp.classList.toggle("show");
      btn.textContent = exp.classList.contains("show") ? "收起解析" : "查看解析";
      return;
    }
    if (!card.__picked) { res.textContent = "先选一个答案再提交哦"; res.className = "q-res"; return; }
    var ok = card.__picked === ans;
    card.setAttribute("data-done", "1");
    card.querySelectorAll(".opt").forEach(function (o) {
      var k = o.getAttribute("data-opt");
      if (k === ans) o.classList.add("right");
      else if (k === card.__picked) o.classList.add("wrong");
      o.classList.remove("sel");
    });
    res.textContent = ok ? "✅ 答对了！" : "❌ 答错了，正确答案是 " + ans;
    res.className = "q-res " + (ok ? "good" : "bad");
    exp.classList.add("show");
    btn.textContent = "查看解析";
    if (!card.querySelector(".btn-redo")) {
      var redo = document.createElement("button");
      redo.className = "btn-redo ghost";
      redo.textContent = "重做本题";
      redo.addEventListener("click", function () { redoCard(card); });
      btn.parentNode.insertBefore(redo, res);
    }
    stats[id] = { r: ok ? 1 : 0, h: q.hash, d: card.__picked };
    saveJSON(QS_KEY, stats);
    statLine();
  }
  function redoCard(card) {
    var id = card.getAttribute("data-id");
    delete stats[id];
    saveJSON(QS_KEY, stats);
    var q = bank.filter(function (x) { return x.id === id; })[0];
    if (!q) return;
    var tmp = document.createElement("div");
    tmp.innerHTML = renderCard(q);
    var fresh = tmp.firstChild;
    card.parentNode.replaceChild(fresh, card);
    initCard(fresh);
    statLine();
  }
  function initCard(card) {
    var rec = stats[card.getAttribute("data-id")];
    if (rec && (rec.r === 0 || rec.r === 1)) {
      card.setAttribute("data-done", "1");
      card.__picked = rec.d;
    }
    card.querySelectorAll(".opt").forEach(function (o) {
      o.addEventListener("click", function () { selectOption(card, o.getAttribute("data-opt")); });
    });
    var btn = card.querySelector(".btn-ans");
    if (btn) btn.addEventListener("click", function () { submit(card); });
    var redo = card.querySelector(".btn-redo");
    if (redo) redo.addEventListener("click", function () { redoCard(card); });
  }

  document.querySelectorAll("[data-paper]").forEach(function (card) {
    card.addEventListener("click", function () {
      document.querySelectorAll("[data-paper]").forEach(function (x) { x.classList.toggle("on", x === card); });
      buildSet(card.getAttribute("data-paper"));
      document.getElementById("bank-anchor").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  document.getElementById("bank-random").addEventListener("click", function () {
    var arr = bank.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    current = arr.slice(0, 10);
    currentName = "随机 10 题";
    currentSet = "random";
    titleEl.textContent = currentName;
    listEl.innerHTML = current.map(renderCard).join("");
    emptyEl.style.display = "none";
    statLine(); renderFavStars();
    listEl.querySelectorAll(".quiz").forEach(initCard);
  });
  document.getElementById("bank-wrong").addEventListener("click", function () { buildSet("wrong"); });
  document.getElementById("bank-fav").addEventListener("click", function () { buildSet("fav"); });
  document.getElementById("bank-all").addEventListener("click", function () { buildSet("all"); });
  document.getElementById("bank-reset").addEventListener("click", function () {
    if (!confirm("确定清空练习场的答题进度？章节页的答题记录也会一起清空，收藏不受影响。")) return;
    stats = {};
    saveJSON(QS_KEY, stats);
    renderList();
  });

  var loading = document.getElementById("bank-loading");
  loadBank().then(function () {
    loading.style.display = "none";
    document.getElementById("bank-toolbar").style.display = "";
    buildSet("basic");
    document.querySelector('[data-paper="basic"]').classList.add("on");
  }).catch(function (err) {
    loading.style.display = "none";
    var box = document.getElementById("bank-error");
    box.style.display = "block";
    box.innerHTML = "<b>题库加载失败：</b>" + err.message + "<br><br>如果你是在本地直接双击 HTML 打开，浏览器会禁止读取其他页面（file:// 限制）。请在站点目录运行 <code class=\"inline\">python -m http.server 8000</code>，然后访问 <code class=\"inline\">http://localhost:8000/practice.html</code>；线上 GitHub Pages 不受影响。";
  });
})();
