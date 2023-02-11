import { BeholdWidgets } from './behold';

declare global {
  interface Window {
    beholdWidgets?: BeholdWidgets;
  }
}
