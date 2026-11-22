/* 408 操作系统可视化课堂 · 通用动画播放器（SVG 分幕 + 浏览器中文语音旁白） */
(function () {
  "use strict";
  var root = document.getElementById("lesson-box");
  if (!root || !window.OS_LESSON) return;
  var DATA = window.OS_LESSON;
  var scenes = DATA.scenes || [];
  if (!scenes.length) return;

  var idx = 0, playing = false, muted = false, speed = 1;
  var sceneStart = 0, elapsed = 0, raf = 0, started = false;

  root.innerHTML =
    '<div class="player">' +
      '<div class="stage">' +
        '<div class="play-hint"><div class="big-play">▶</div><div>点击播放 · 共 ' + scenes.length + ' 幕</div></div>' +
        '<div class="svg-host"></div>' +
        '<div class="caption"><span class="voice-tag">旁白</span><span class="cap-text"></span></div>' +
      '</div>' +
      '<div class="ctrl">' +
        '<button class="prev" title="上一幕">⏮</button>' +
        '<button class="play" title="播放 / 暂停">▶</button>' +
        '<button class="next" title="下一幕">⏭</button>' +
        '<div class="pbar"><div class="pfill"></div><div class="pknob"></div></div>' +
        '<span class="scene-label">1 / ' + scenes.length + '</span>' +
        '<button class="replay" title="重播">↺</button>' +
        '<button class="mute" title="语音开关">🔊</button>' +
        '<select class="speed-sel" title="播放倍速">' +
          '<option value="0.75">0.75×</option>' +
          '<option value="1" selected>1×</option>' +
          '<option value="1.25">1.25×</option>' +
          '<option value="1.5">1.5×</option>' +
        '</select>' +
      '</div>' +
      '<div class="hint">空格暂停 / ← → 切幕 / 点进度条圆点跳幕 / R 重播。语音由浏览器中文 TTS 朗读，无音频文件也能用。</div>' +
    '</div>';

  var stage = root.querySelector(".stage");
  var hint = root.querySelector(".play-hint");
  var host = root.querySelector(".svg-host");
  var cap = root.querySelector(".cap-text");
  var pfill = root.querySelector(".pfill");
  var pknob = root.querySelector(".pknob");
  var bar = root.querySelector(".pbar");
  var label = root.querySelector(".scene-label");
  var playBtn = root.querySelector(".play");
  var muteBtn = root.querySelector(".mute");

  /* 进度条圆点：每一幕一个 */
  scenes.forEach(function (s, i) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = ((i + 0.5) / scenes.length * 100) + "%";
    dot.title = "第 " + (i + 1) + " 幕";
    dot.addEventListener("click", function (ev) {
      ev.stopPropagation();
      goto(i, playing);
    });
    bar.appendChild(dot);
  });

  function voiceList() {
    try { return window.speechSynthesis ? window.speechSynthesis.getVoices() : []; }
    catch (e) { return []; }
  }
  function pickVoice() {
    var vs = voiceList();
    for (var i = 0; i < vs.length; i++) {
      var v = vs[i];
      if (/zh[-_]CN|Chinese|中文|普通话/i.test(v.lang + " " + v.name)) return v;
    }
    return null;
  }
  function speak(text) {
    if (muted || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "zh-CN";
      u.rate = Math.min(1.6, speed);
      u.pitch = 1;
      var v = pickVoice();
      if (v) u.voice = v;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }
  function stopSpeak() {
    try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {}
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = function () {};
  }

  function render(i) {
    var s = scenes[i];
    host.innerHTML = s.svg;
    cap.textContent = s.caption;
    label.textContent = (i + 1) + " / " + scenes.length;
    pfill.style.width = "0%";
    pknob.style.left = "0%";
    root.querySelectorAll(".dot").forEach(function (d, k) { d.classList.toggle("on", k === i); });
  }

  function goto(i, resume) {
    idx = Math.max(0, Math.min(scenes.length - 1, i));
    elapsed = 0;
    sceneStart = 0;
    render(idx);
    stopSpeak();
    if (resume) {
      playing = true;
      updatePlayBtn();
      started = true;
      hint.classList.add("hide");
      speak(scenes[idx].caption);
      last = performance.now();
    } else {
      playing = false;
      updatePlayBtn();
    }
    drawProgress(0);
  }

  function updatePlayBtn() {
    playBtn.textContent = playing ? "⏸" : "▶";
  }

  function drawProgress(ratio) {
    var pct = Math.max(0, Math.min(100, ratio * 100));
    pfill.style.width = pct + "%";
    pknob.style.left = pct + "%";
  }

  var last = 0;
  function loop(now) {
    if (!playing) return;
    var dt = now - last;
    last = now;
    elapsed += dt * speed;
    var dur = scenes[idx].dur || 7000;
    drawProgress(elapsed / dur);
    if (elapsed >= dur) {
      if (idx < scenes.length - 1) goto(idx + 1, true);
      else { playing = false; updatePlayBtn(); drawProgress(1); stopSpeak(); }
      if (!playing) return;
    }
    raf = requestAnimationFrame(loop);
  }

  function play() {
    if (!scenes.length) return;
    if (elapsed >= (scenes[idx].dur || 7000) && idx === scenes.length - 1) {
      goto(0, true);
    } else {
      playing = true;
      started = true;
      hint.classList.add("hide");
      updatePlayBtn();
      speak(scenes[idx].caption);
      last = performance.now();
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(loop);
    }
  }
  function pause() {
    playing = false;
    updatePlayBtn();
    stopSpeak();
    cancelAnimationFrame(raf);
  }
  function toggle() { if (playing) pause(); else play(); }

  playBtn.addEventListener("click", toggle);
  hint.addEventListener("click", play);
  root.querySelector(".prev").addEventListener("click", function () { goto(idx - 1, playing); });
  root.querySelector(".next").addEventListener("click", function () { goto(idx + 1, playing); });
  root.querySelector(".replay").addEventListener("click", function () { goto(0, false); play(); });
  muteBtn.addEventListener("click", function () {
    muted = !muted;
    muteBtn.textContent = muted ? "🔇" : "🔊";
    if (muted) stopSpeak();
    else if (playing) speak(scenes[idx].caption);
  });
  root.querySelector(".speed-sel").addEventListener("change", function (ev) {
    speed = parseFloat(ev.target.value) || 1;
    if (playing) { stopSpeak(); speak(scenes[idx].caption); }
  });

  bar.addEventListener("click", function (ev) {
    if (ev.target.classList.contains("dot")) return;
    var r = bar.getBoundingClientRect();
    var ratio = Math.max(0, Math.min(1, (ev.clientX - r.left) / r.width));
    var dur = scenes[idx].dur || 7000;
    elapsed = ratio * dur;
    drawProgress(ratio);
    stopSpeak();
    if (playing) speak(scenes[idx].caption);
  });

  document.addEventListener("keydown", function (ev) {
    var tag = (ev.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") return;
    if (ev.code === "Space") { ev.preventDefault(); toggle(); }
    else if (ev.key === "ArrowLeft") { ev.preventDefault(); goto(idx - 1, playing); }
    else if (ev.key === "ArrowRight") { ev.preventDefault(); goto(idx + 1, playing); }
    else if (ev.key === "r" || ev.key === "R") { goto(0, false); play(); }
  });

  render(0);
  updatePlayBtn();
  if (location.hash === "#autoplay") { setTimeout(play, 400); }
})();
