import { RoutePath } from '../types/route-path';

export function clickNavigationLink(path: RoutePath) {
  cy.get(`nav a[href="${path}"]`).click();
}
