const p = (s) => parseFloat(s);

export const dms2d = (d, m = 0, s = 0) => {
  return p(d) + p(m) / 60 + p(s) / (60 * 60);
};
export const sdms2d = (s) => {
  const minus = s.endsWith("S") || s.endsWith("W");
  s = s.replace(/[°′]/g, " ");
  const n = s.substring(0, s.length - 1).split(" ").map(s => parseInt(s, 10)).map(i => isNaN(i) ? 0 : i);
  return dms2d(n[0], n[1], n[2]) * (minus ? -1 : 1);
};
