import { SVGProps } from "react";

const PrideFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 16"
    width={20}
    height={14}
    {...props}
  >
    <title>Pride Flag</title>
    <rect width="24" height="2.67" fill="#e40303" />
    <rect width="24" height="2.67" y="2.67" fill="#ff8c00" />
    <rect width="24" height="2.67" y="5.33" fill="#ffed00" />
    <rect width="24" height="2.67" y="8" fill="#008018" />
    <rect width="24" height="2.67" y="10.67" fill="#004cff" />
    <rect width="24" height="2.67" y="13.33" fill="#732982" />
  </svg>
);

export default PrideFlag;