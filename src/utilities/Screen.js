function vh(v, innerHeight) {
  var h = Math.max(document.documentElement.clientHeight, innerHeight || 0);
  return (v * h) / 100;
}

function vw(v, innerWidth) {
  var w = Math.max(document.documentElement.clientWidth, innerWidth || 0);
  return (v * w) / 100;
}

export function vmin(v, innerHeight, innerWidth) {
  return Math.min(vh(v, innerHeight), vw(v, innerWidth));
}
