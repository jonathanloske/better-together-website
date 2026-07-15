// TypeScript declarations for @justinribeiro/lite-youtube web component
import type { DetailedHTMLProps, HTMLAttributes, CSSProperties } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "lite-youtube": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          videoid: string;
          playlabel?: string;
          class?: string;
          style?: CSSProperties;
        },
        HTMLElement
      >;
    }
  }
}
