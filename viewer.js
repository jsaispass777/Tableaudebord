export async function fetchSDF(query) {
  const isSmiles = /[A-Za-z0-9@+\-\[\]\(\)=#\\\/%]{4,}/.test(query) && !/^[a-zA-Z\s\-]+$/.test(query);
  const base = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound';
  const tryUrls = isSmiles
    ? [`${base}/smiles/${encodeURIComponent(query)}/SDF?record_type=3d`, `${base}/smiles/${encodeURIComponent(query)}/SDF?record_type=2d`]
    : [`${base}/name/${encodeURIComponent(query)}/SDF?record_type=3d`, `${base}/name/${encodeURIComponent(query)}/SDF?record_type=2d`];
  for (const url of tryUrls) {
    try { const r = await fetch(url); if (r.ok) return await r.text(); } catch (e) {}
  }
  throw new Error('Introuvable sur PubChem');
}

export function renderSDFInto(elId, sdf) {
  const el = document.getElementById(elId);
  el.innerHTML = '';
  const v = $3Dmol.createViewer(el, { backgroundColor: '#070A0D' });
  v.addModel(sdf, 'sdf');
  v.setStyle({}, { stick: { radius: 0.15, colorscheme: 'Jmol' }, sphere: { scale: 0.28, colorscheme: 'Jmol' } });
  v.zoomTo();
  v.render();
  return v;
}
