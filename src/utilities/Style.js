export function getFluidFontSizeStyle(min, max) {
  return `
    font-size: calc(${min}px + (${max} - ${min}) * ((100vw - 300px) / (1600 - 300)));
  `;
}
