import type { ImageSource } from './image';

declare module '*.png' {
  const value: ImageSource | string;
  export default value;
}

declare module '*.jpg' {
  const value: ImageSource | string;
  export default value;
}

declare module '*.jpeg' {
  const value: ImageSource | string;
  export default value;
}

declare module '*.svg' {
  const value: ImageSource | string;
  export default value;
}

declare module '*.webp' {
  const value: ImageSource | string;
  export default value;
}
