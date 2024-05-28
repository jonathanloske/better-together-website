// Image.tsx

interface ImageProps {
  name: string;
  alt: string;
  className: string;
}

const Image = ({ name, alt, className}: ImageProps) => {
  const smolSrc = `/img/smol/${name}.webp`;
  const midSrc = `/img/mid/${name}.webp`;
  const bigSrc = `/img/big/${name}.webp`;

  const srcset = [
    { width: 1, src: smolSrc },
    { width: 2, src: midSrc },
    { width: 4, src: bigSrc },
  ];

  return (
    <img
      src={smolSrc}
      alt={alt}
      className={className}
      srcSet={srcset.map(({ width, src }) => `${src} ${width}x`).join(', ')}
    />
  );
};

export default Image;
