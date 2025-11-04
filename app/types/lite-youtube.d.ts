// TypeScript declarations for @justinribeiro/lite-youtube web component
declare namespace JSX {
  interface IntrinsicElements {
    "lite-youtube": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        videoid: string;
        playlabel?: string;
        style?: React.CSSProperties;
      },
      HTMLElement
    >;
  }
}
