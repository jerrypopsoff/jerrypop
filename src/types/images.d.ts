import type { SourceSet } from './image';

declare module '*.png' {
  const value: SourceSet | string;
  export default value;
}

declare module '*.jpg' {
  const value: SourceSet | string;
  export default value;
}

declare module '*.jpeg' {
  const value: SourceSet | string;
  export default value;
}

declare module '*.svg' {
  const value: SourceSet | string;
  export default value;
}

declare module '*.webp' {
  const value: SourceSet | string;
  export default value;
}
