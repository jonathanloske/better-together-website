// Image.tsx

interface ImageProps {
  name: string;
  alt: string;
  leftRight?: 'l' | 'r';
}

const Image = ({ name, alt, leftRight = 'l' }: ImageProps) => {
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
      className={`w-100 rounded-md lg:rounded-${leftRight}-none`}
      srcSet={srcset.map(({ width, src }) => `${src} ${width}x`).join(', ')}
    />
  );
};

export default Image;