// ── State ──────────────────────────────────────────────────────────────────────
let currentSort = 'feasibility';
let currentCategory = 'all';
let currentSearch = '';

// ── Formatting ────────────────────────────────────────────────────────────────
function formatCurrency(value) {
  if (value == null || isNaN(value)) return '—';
  if (value >= 1_000_000) return `$${+(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${+(value / 1_000).toFixed(1)}K`;
  return `$${value}`;
}

function formatRange(min, max) {
  if (min == null && max == null) return '—';
  if (min === max || max == null) return formatCurrency(min);
  if (min == null) return formatCurrency(max);
  return `${formatCurrency(min)}-${formatCurrency(max)}`;
}

function renderStars(feasibility) {
  const n = Math.max(0, Math.min(5, feasibility || 0));
  return '⭐'.repeat(n) + '☆'.repeat(5 - n);
}

// ── Sorting & Filtering ──────────────────────────────────────────────────────
function applySort(ideas, criteria) {
  const copy = [...ideas];
  switch (criteria) {
    case 'feasibility':
      return copy.sort((a, b) => (b.feasibility || 0) - (a.feasibility || 0));
    case 'capex-asc':
      return copy.sort((a, b) => (a.capexMid || 0) - (b.capexMid || 0));
    case 'capex-desc':
      return copy.sort((a, b) => (b.capexMid || 0) - (a.capexMid || 0));
    case 'revenue':
      return copy.sort((a, b) => (b.revenueAnnual || 0) - (a.revenueAnnual || 0));
    default:
      return copy;
  }
}

function applyFilter(ideas, category) {
  if (!category || category === 'all') return ideas;
  return ideas.filter(i => i.category === category);
}

function applySearch(ideas, term) {
  if (!term) return ideas;
  const lower = term.toLowerCase();
  return ideas.filter(i =>
    (i.name || '').toLowerCase().includes(lower) ||
    (i.summary || '').toLowerCase().includes(lower) ||
    (i.category || '').toLowerCase().includes(lower)
  );
}

function getVisibleIdeas() {
  let ideas = window.businessIdeas || [];
  ideas = applyFilter(ideas, currentCategory);
  ideas = applySearch(ideas, currentSearch);
  ideas = applySort(ideas, currentSort);
  return ideas;
}

// ── Render Detail ─────────────────────────────────────────────────────────────
function renderBreakdownTable(rows, labelCol, minCol, maxCol) {
  if (!rows || rows.length === 0) return '';
  return `
    <table class="breakdown-table">
      <thead><tr><th>${labelCol}</th><th>${minCol}</th><th>${maxCol}</th></tr></thead>
      <tbody>
        ${rows.map(r => `
          <tr>
            <td>${r.item || '—'}</td>
            <td>${formatCurrency(r.min)}</td>
            <td>${formatCurrency(r.max)}</td>
          </tr>`).join('')}
      </tbody>
    </table>`;
}

function renderDetail(idea) {
  if (!idea) return '';

  const sections = [];

  // CAPEX breakdown
  if (idea.capexBreakdown && idea.capexBreakdown.length) {
    sections.push(`
      <div class="detail-section">
        <h4>💰 CAPEX — Desglose</h4>
        ${renderBreakdownTable(idea.capexBreakdown, 'Ítem', 'Mín', 'Máx')}
      </div>`);
  }

  // OPEX breakdown
  if (idea.opexBreakdown && idea.opexBreakdown.length) {
    sections.push(`
      <div class="detail-section">
        <h4>📊 OPEX — Desglose mensual</h4>
        ${renderBreakdownTable(idea.opexBreakdown, 'Ítem', 'Mín', 'Máx')}
      </div>`);
  }

  // Revenue model
  if (idea.revenueModel) {
    sections.push(`
      <div class="detail-section">
        <h4>📈 Modelo de ingresos</h4>
        <p>${idea.revenueModel}</p>
      </div>`);
  }

  // Breakeven / payback
  if (idea.breakeven || idea.payback) {
    sections.push(`
      <div class="detail-section">
        <h4>⏱️ Punto de equilibrio</h4>
        <p>${idea.breakeven ? `<strong>Break-even:</strong> ${idea.breakeven}` : ''}
           ${idea.payback ? `<br><strong>Payback:</strong> ${idea.payback}` : ''}</p>
      </div>`);
  }

  // Pros
  if (idea.pros && idea.pros.length) {
    sections.push(`
      <div class="detail-section">
        <h4>✅ Ventajas</h4>
        <ul>${idea.pros.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>`);
  }

  // Cons
  if (idea.cons && idea.cons.length) {
    sections.push(`
      <div class="detail-section">
        <h4>⚠️ Riesgos</h4>
        <ul>${idea.cons.map(c => `<li>${c}</li>`).join('')}</ul>
      </div>`);
  }

  // Competition
  if (idea.competition) {
    sections.push(`
      <div class="detail-section">
        <h4>🏪 Competencia</h4>
        <p>${idea.competition}</p>
      </div>`);
  }

  // Local angle
  if (idea.localAngle) {
    sections.push(`
      <div class="detail-section">
        <h4>📍 Ángulo local</h4>
        <p>${idea.localAngle}</p>
      </div>`);
  }

  // References
  if (idea.references && idea.references.length) {
    sections.push(`
      <div class="detail-section">
        <h4>🔗 Referencias</h4>
        <ul class="references-list">
          ${idea.references.map(ref => `
            <li>
              <a href="${ref.url || '#'}" target="_blank" rel="noopener noreferrer">
                ${ref.name || ref.url} ↗
              </a>
              ${ref.note ? `<span class="ref-note"> — ${ref.note}</span>` : ''}
            </li>`).join('')}
        </ul>
      </div>`);
  }

  return sections.join('');
}

// ── Render Cards ──────────────────────────────────────────────────────────────
function renderCards(ideas) {
  const grid = document.getElementById('cards-grid');
  if (!grid) return;

  if (!ideas || ideas.length === 0) {
    grid.innerHTML = '<p class="empty-state">No se encontraron ideas de negocio.</p>';
    return;
  }

  grid.innerHTML = ideas.map(idea => {
    const expanded = idea.expanded ? ' card--expanded' : '';
    return `
    <div class="card${expanded}" data-id="${idea.id}" onclick="toggleCard('${idea.id}')">
      <div class="card-summary">
        <div class="card-header">
          <span class="card-emoji">${idea.emoji || '💡'}</span>
          <h3>${idea.name || 'Sin nombre'}</h3>
          <div class="card-stars">${renderStars(idea.feasibility)}</div>
        </div>
        <div class="card-metrics">
          <div class="metric">
            <span class="metric-label">CAPEX</span>
            <span class="metric-value">${formatRange(idea.capexMin, idea.capexMax)}</span>
          </div>
          <div class="metric">
            <span class="metric-label">OPEX/mes</span>
            <span class="metric-value">${formatRange(idea.opexMin, idea.opexMax)}</span>
          </div>
          <div class="metric">
            <span class="metric-label">Ingreso anual</span>
            <span class="metric-value">~${formatCurrency(idea.revenueAnnual)}</span>
          </div>
        </div>
        <p class="card-summary-text">${idea.summary || ''}</p>
        <button class="btn-expand">${idea.expanded ? 'Ver menos ▲' : 'Ver más ▼'}</button>
      </div>
      <div class="card-detail">
        ${idea.expanded ? renderDetail(idea) : ''}
      </div>
    </div>`;
  }).join('');
}

// ── Toggle Card (accordion) ──────────────────────────────────────────────────
function toggleCard(id) {
  const ideas = window.businessIdeas || [];
  const target = ideas.find(i => i.id === id);
  if (!target) return;

  const wasExpanded = target.expanded;

  // Collapse all cards (accordion)
  ideas.forEach(i => { i.expanded = false; });

  // Toggle the clicked card
  if (!wasExpanded) {
    target.expanded = true;
    window.location.hash = id;
  } else {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }

  renderCards(getVisibleIdeas());

  // Smooth-scroll to expanded card
  if (target.expanded) {
    requestAnimationFrame(() => {
      const el = document.querySelector(`.card[data-id="${id}"]`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

// ── Sort ───────────────────────────────────────────────────────────────────────
function sortCards(criteria) {
  currentSort = criteria;

  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sort === criteria);
  });

  renderCards(getVisibleIdeas());
}

// ── Filter ────────────────────────────────────────────────────────────────────
function filterCards(category) {
  currentCategory = category;

  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.category === category);
  });

  renderCards(getVisibleIdeas());
}

// ── Search ────────────────────────────────────────────────────────────────────
function searchCards(term) {
  currentSearch = term;
  renderCards(getVisibleIdeas());
}

// ── Combo Rendering ──────────────────────────────────────────────────────────
function renderCombos() {
  const grid = document.getElementById('combos-grid');
  const combos = window.comboOpportunities || [];
  if (!grid || combos.length === 0) return;

  grid.innerHTML = combos.map(combo => {
    const phasesHtml = combo.phases
      ? combo.phases.map(p => `
          <div class="combo-phase">
            <span class="combo-phase-year">Año ${p.year}</span>
            <span class="combo-phase-invest">${formatCurrency(p.investment)}</span>
            <span class="combo-phase-items">${p.items}</span>
          </div>`).join('')
      : '';

    const businessNames = (combo.businesses || []).map(bId => {
      const idea = (window.businessIdeas || []).find(i => i.id === bId);
      return idea ? `${idea.emoji} ${idea.name}` : bId;
    }).join(' + ');

    return `
      <div class="combo-card">
        <div class="combo-header">
          <span class="combo-emoji">${combo.emoji}</span>
          <h3>${combo.name}</h3>
        </div>
        <div class="combo-capex">
          <span class="metric-label">Inversión total</span>
          <span class="metric-value">${formatCurrency(combo.totalCapex)}</span>
        </div>
        <p class="combo-businesses">${businessNames}</p>
        <p class="combo-description">${combo.description}</p>
        ${phasesHtml ? `<div class="combo-phases">${phasesHtml}</div>` : ''}
      </div>`;
  }).join('');
}

// ── Scroll-to-top ─────────────────────────────────────────────────────────────
function setupScrollToTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Hash Navigation ───────────────────────────────────────────────────────────
function expandFromHash() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return;
  const ideas = window.businessIdeas || [];
  const target = ideas.find(i => i.id === hash);
  if (target) {
    ideas.forEach(i => { i.expanded = false; });
    target.expanded = true;
    renderCards(getVisibleIdeas());
    requestAnimationFrame(() => {
      const el = document.querySelector(`.card[data-id="${hash}"]`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

// ── Init ──────────────────────────────────────────────────────────────────────
function init() {
  // Sort buttons — event delegation
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      sortCards(btn.dataset.sort);
    });
  });

  // Filter pills — event delegation
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', e => {
      e.stopPropagation();
      filterCards(pill.dataset.category);
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchCards(e.target.value.trim());
    });
  }

  // Scroll-to-top
  setupScrollToTop();

  // Render combo opportunities
  renderCombos();

  // Prevent card toggle when clicking links inside detail
  document.getElementById('cards-grid')?.addEventListener('click', e => {
    if (e.target.tagName === 'A') e.stopPropagation();
  });

  // Initial render sorted by feasibility
  currentSort = 'feasibility';
  renderCards(getVisibleIdeas());

  // Expand card from URL hash
  expandFromHash();

  // Handle hash changes (back/forward)
  window.addEventListener('hashchange', expandFromHash);
}

document.addEventListener('DOMContentLoaded', init);
