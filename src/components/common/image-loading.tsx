'use client';

import Image from 'next/image';
import { CSSProperties, useState } from 'react';

type Props = {
  src: string;
  alt: string;
  style: CSSProperties;
  className?: string;
};

const ImageLoading = (props: Props) => {
  const { src, alt, style, className } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Image
      alt={alt}
      src={src}
      style={style}
      width={'0'}
      height={'0'}
      quality={100}
      sizes="(min-width: 808px) 50vw, 100vw"
      onLoad={() => setIsLoading(false)}
      className={`${isLoading ? 'blur' : 'remove-blur'}`}
    />
  );
};

export default ImageLoading;
