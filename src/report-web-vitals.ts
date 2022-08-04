import type { Metric, ReportHandler } from 'web-vitals';

export function sendToAnalytics({ id, name, value }: Metric) {
  if (!window.ga || !(ga instanceof Function)) {
    return;
  }

  ga('send', 'event', {
    eventAction: name,
    eventCategory: 'Web Vitals',
    eventLabel: id,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value),
    nonInteraction: true,
  });
}

/**
 * Report web vitals. More information can be found at
 * {@link https://bit.ly/CRA-vitals}.
 */
export async function reportWebVitals(onPerfEntry?: ReportHandler) {
  if (!onPerfEntry || !(onPerfEntry instanceof Function)) {
    return;
  }

  const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import(
    'web-vitals'
  );

  getCLS(onPerfEntry);
  getFID(onPerfEntry);
  getFCP(onPerfEntry);
  getLCP(onPerfEntry);
  getTTFB(onPerfEntry);
}
