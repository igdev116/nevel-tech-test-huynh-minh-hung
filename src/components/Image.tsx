import NextImage, { ImageProps } from 'next/image';

interface Props extends Omit<ImageProps, 'alt'> {
  alt?: string;
}

const Image = ({ className, ...rest }: Props) => {
  return (
    <NextImage {...rest} width={0} height={0} alt='Graphic' unoptimized className={className} />
  );
};

export default Image;
