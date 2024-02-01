import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
  const [_fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(fallback);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={_fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;