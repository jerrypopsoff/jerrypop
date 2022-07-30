interface Material {
  amount: string;
  name: string;
}

interface Step {
  aside?: string;
  content: string;
}

export interface Recipe {
  href?: string;
  materials: Material[];
  steps: Step[];
  time: string;
  title: string;
}
