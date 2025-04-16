export interface Recipe {
  href?: string;
  materials: {
    amount: string;
    name: string;
  }[];
  steps: {
    aside?: string;
    content: string;
  }[];
  time: string;
  title: string;
}
