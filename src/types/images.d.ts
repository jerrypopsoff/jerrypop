import type { SourceSet } from './image';

declare module '*.png' {
  const value: SourceSet;
  export default value;
}

declare module '*.jpg' {
  const value: SourceSet;
  export default value;
}

declare module '*.jpeg' {
  const value: SourceSet;
  export default value;
}

declare module '*.svg' {
  const value: SourceSet;
  export default value;
}

declare module '*.webp' {
  const value: SourceSet;
  export default value;
}
