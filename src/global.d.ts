declare module 'react' {
  export const useRef: any;
  const React: any;
  export default React;
}

declare module 'react/jsx-runtime' {
  export const Fragment: any;
  export const jsx: any;
  export const jsxs: any;
}

declare module 'framer-motion' {
  export const motion: any;
  export const useInView: any;
}

declare module 'lucide-react' {
  export const ExternalLink: any;
  export const Github: any;
}

declare namespace JSX {
  interface Element {}
  interface ElementClass {}
  interface IntrinsicAttributes {
    key?: any;
  }
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}