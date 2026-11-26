(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const KEY = "brandpath.v1";

  /* ---------- storage (safe in private windows) ---------- */
  let state = { done: {}, habits: {}, theme: null };
  function load() {
    try { Object.assign(state, JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) {}
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const safeUrl = (u) => (/^(https?:\/\/|#)/.test(u) ? u : "#");

  /* ---------- all trackable steps ---------- */
  function allStepIds() {
    const ids = [];
    DATA.plan.forEach((p, i) => p.items.forEach((_, j) => ids.push(`plan-${i}-${j}`)));
    DATA.tracks.forEach((t) => t.tasks.forEach((_, j) => ids.push(`task-${t.id}-${j}`)));
    return ids;
  }

  function updateProgress() {
    const ids = allStepIds();
    const done = ids.filter((id) => state.done[id]).length;
    const pct = ids.length ? Math.round((done / ids.length) * 100) : 0;
    $("#overallPct").textContent = pct + "%";
    $("#overallBar").style.width = pct + "%";
    $("#overallText").textContent = `${done} of ${ids.length} steps done`;
    DATA.tracks.forEach((t) => {
      const n = t.tasks.length;
      const d = t.tasks.filter((_, j) => state.done[`task-${t.id}-${j}`]).length;
      const bar = $(`#mini-${t.id} .bar-fill`);
      const txt = $(`#mini-${t.id} span`);
      if (bar) bar.style.width = (n ? (d / n) * 100 : 0) + "%";
      if (txt) txt.textContent = `${d}/${n} tasks`;
    });
  }

  function checkbox(id, label) {
    const done = !!state.done[id];
    return `<label class="check ${done ? "done" : ""}"><input type="checkbox" data-id="${id}" ${done ? "checked" : ""}><span>${esc(label)}</span></label>`;
  }

  /* ---------- renderers ---------- */
  function renderWhy() {
    $("#whyGrid").innerHTML = DATA.why.map((w) =>
      `<div class="card"><div style="font-size:1.6rem">${w.icon}</div><h3>${esc(w.title)}</h3><p>${esc(w.text)}</p></div>`).join("");
  }

  function renderPlan() {
    $("#planWrap").innerHTML = DATA.plan.map((p, i) =>
      `<div class="phase"><h3>${esc(p.phase)}</h3>${p.items.map((it, j) => checkbox(`plan-${i}-${j}`, it)).join("")}</div>`).join("");
  }

  let activeTrack = "all";
  function renderFilters() {
    const chips = [{ id: "all", title: "All tracks" }, ...DATA.tracks];
    $("#filters").innerHTML = chips.map((t) =>
      `<button class="chip ${t.id === activeTrack ? "active" : ""}" data-track="${t.id}">${t.emoji ? t.emoji + " " : ""}${esc(t.short || t.title)}</button>`).join("");
  }

  function trackMatches(t, q, level) {
    if (activeTrack !== "all" && t.id !== activeTrack) return false;
    if (level !== "all" && t.level !== level) return false;
    if (!q) return true;
    const hay = [t.title, t.goal, t.skills.join(" "), t.tasks.join(" "), t.money, t.resources.map((r) => r.name + " " + r.note).join(" ")].join(" ").toLowerCase();
    return hay.includes(q);
  }

  const openTracks = new Set([DATA.tracks[0].id]); // first track open by default

  function renderTracks() {
    const q = $("#search").value.trim().toLowerCase();
    const level = $("#levelFilter").value;
    const list = DATA.tracks.filter((t) => trackMatches(t, q, level));
    $("#noResults").hidden = list.length > 0;
    $("#trackList").innerHTML = list.map((t) => {
      const isOpen = q || activeTrack !== "all" || openTracks.has(t.id);
      return `
      <details class="track" data-tid="${t.id}" ${isOpen ? "open" : ""}>
        <summary>
          <span class="emoji">${t.emoji}</span>
          <span class="t-head"><h3>${esc(t.title)}</h3><p>${esc(t.goal)}</p></span>
          <span class="tag">${esc(t.level)}</span>
          <span class="mini" id="mini-${t.id}"><span></span><div class="bar"><div class="bar-fill"></div></div></span>
          <span class="chev" aria-hidden="true"></span>
        </summary>
        <div class="track-body">
          <div class="col wide">
            <h4>Free resources <small>(click a resource to open it)</small></h4>
            ${t.resources.map((r) => `
              <details class="res-item" ${q && (r.name + " " + r.note).toLowerCase().includes(q) ? "open" : ""}>
                <summary><span class="r-name">${esc(r.name)}</span><span class="chev" aria-hidden="true"></span></summary>
                <div class="r-body">
                  <p>${esc(r.note)}</p>
                  <a class="btn primary small" href="${safeUrl(r.url)}" target="_blank" rel="noopener noreferrer">Open resource ↗</a>
                </div>
              </details>`).join("")}
          </div>
          <div class="col">
            <h4>Skills to build</h4>
            <ul>${t.skills.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          </div>
          <div class="col">
            <h4>Practice tasks</h4>
            ${t.tasks.map((x, j) => checkbox(`task-${t.id}-${j}`, x)).join("")}
          </div>
          <div class="money"><strong>Earning angle:</strong> ${esc(t.money)}</div>
        </div>
      </details>`;
    }).join("");
    updateProgress();
  }

  function renderTimeline() {
    $("#timeline").innerHTML = DATA.roadmap.map((r) =>
      `<div class="t-item"><span class="yrs">${esc(r.years)}</span><h3>${esc(r.title)}</h3><ul>${r.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div>`).join("");
  }

  let activeOpp = Object.keys(DATA.opportunities)[0];
  function renderOpps() {
    $("#oppTabs").innerHTML = Object.keys(DATA.opportunities).map((k) =>
      `<button class="tab ${k === activeOpp ? "active" : ""}" role="tab" aria-selected="${k === activeOpp}" data-opp="${esc(k)}">${esc(k)}</button>`).join("");
    $("#oppPanel").innerHTML = DATA.opportunities[activeOpp].map((o) =>
      `<div class="card"><h3><a href="${safeUrl(o.url)}" ${o.url.startsWith("#") ? "" : 'target="_blank" rel="noopener noreferrer"'}>${esc(o.name)}</a></h3><p>${esc(o.text)}</p></div>`).join("");
  }

  function renderProjects() {
    $("#projectGrid").innerHTML = DATA.projects.map((p) =>
      `<div class="card"><span class="tag">${esc(p.level)}</span><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div>`).join("");
  }

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  function renderHabits() {
    const head = `<tr><th>Habit</th>${days.map((d) => `<th>${d}</th>`).join("")}</tr>`;
    const rows = DATA.habits.map((h, i) =>
      `<tr><td>${esc(h)}</td>${days.map((_, d) => {
        const id = `habit-${i}-${d}`;
        return `<td><input type="checkbox" data-habit="${id}" ${state.habits[id] ? "checked" : ""} aria-label="${esc(h)} ${days[d]}"></td>`;
      }).join("")}</tr>`).join("");
    $("#habits").innerHTML = `<table>${head}${rows}</table>`;
  }

  /* ---------- events ---------- */
  function bind() {
    document.addEventListener("change", (e) => {
      const t = e.target;
      if (t.dataset.id) {
        state.done[t.dataset.id] = t.checked;
        t.closest(".check").classList.toggle("done", t.checked);
        save();
        updateProgress();
        // keep duplicates in sync is unnecessary: each id is rendered once
      }
      if (t.dataset.habit) { state.habits[t.dataset.habit] = t.checked; save(); }
      if (t.id === "levelFilter") renderTracks();
    });

    $("#search").addEventListener("input", renderTracks);

    // remember which tracks the learner opened (toggle does not bubble, so capture)
    document.addEventListener("toggle", (e) => {
      const d = e.target;
      if (d.classList && d.classList.contains("track")) {
        d.open ? openTracks.add(d.dataset.tid) : openTracks.delete(d.dataset.tid);
      }
    }, true);

    $("#expandAll").addEventListener("click", () => {
      DATA.tracks.forEach((t) => openTracks.add(t.id));
      $$(".track").forEach((d) => (d.open = true));
      $$(".res-item").forEach((d) => (d.open = true));
    });
    $("#collapseAll").addEventListener("click", () => {
      openTracks.clear();
      $$(".track").forEach((d) => (d.open = false));
      $$(".res-item").forEach((d) => (d.open = false));
    });

    $("#filters").addEventListener("click", (e) => {
      const b = e.target.closest("[data-track]");
      if (!b) return;
      activeTrack = b.dataset.track;
      renderFilters();
      renderTracks();
    });

    $("#oppTabs").addEventListener("click", (e) => {
      const b = e.target.closest("[data-opp]");
      if (!b) return;
      activeOpp = b.dataset.opp;
      renderOpps();
    });

    $("#resetBtn").addEventListener("click", () => {
      if (confirm("Reset all progress and habit ticks on this device?")) {
        state.done = {}; state.habits = {};
        save(); renderPlan(); renderTracks(); renderHabits();
      }
    });

    const toggle = $(".nav-toggle");
    toggle.addEventListener("click", () => {
      const open = $(".nav-links").classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    $$(".nav-links a").forEach((a) => a.addEventListener("click", () => $(".nav-links").classList.remove("open")));

    $("#themeToggle").addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      state.theme = next; save();
    });
  }

  /* ---------- init ---------- */
  load();
  const preferred = state.theme || "dark";
  document.documentElement.dataset.theme = preferred;

  renderWhy(); renderPlan(); renderFilters(); renderTracks();
  renderTimeline(); renderOpps(); renderProjects(); renderHabits();
  bind();
})();
