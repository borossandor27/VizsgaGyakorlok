// src/components/TipusBadge.jsx

const TIPUS_OSZTALY = {
  'vár':      'tipus-var',
  'templom':  'tipus-templom',
  'kolostor': 'tipus-kolostor',
  'torony':   'tipus-torony',
  'kapu':     'tipus-kapu',
  'kápolna':  'tipus-kapolna',
  'romkert':  'tipus-romkert',
  'emlékmű':  'tipus-emlekmű',
  'egyéb':    'tipus-egyeb',
};

export default function TipusBadge({ tipus }) {
  const cls = TIPUS_OSZTALY[tipus] || 'tipus-egyeb';
  return <span className={`tipus-badge ${cls}`}>{tipus}</span>;
}
