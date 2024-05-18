import {type PropsWithChildren} from 'react';
import {
  type UseIntersectionObserverOptions,
  useIntersectionObserver
} from '../vm/use-intersection-observer';

type IntersectionObserverWrapper = UseIntersectionObserverOptions &
  PropsWithChildren;

export const IntersectionObserverWrapper = ({
  children,
  ...props
}: IntersectionObserverWrapper) => {
  const {ref} = useIntersectionObserver({threshold: 0.5, ...props});

  return <div ref={ref}>{children}</div>;
};
