import {forwardRef, type PropsWithChildren} from 'react';
import {Rnd, type Props as RndProps} from 'react-rnd';
import {cva, type VariantProps} from 'class-variance-authority';

import {cn} from './utils';

const rndVariatns = cva(
  'outline-none text-sm font-semibold border border-solid rounded-md',
  {
    variants: {
      variant: {
        blue: 'bg-blue-50 border-blue-300 hover:border-blue-500 hover:bg-blue-100',
        lime: 'bg-lime-50 border-lime-300 hover:border-lime-500 hover:bg-lime-100',
        pink: 'bg-pink-50 border-pink-300 hover:border-pink-500 hover:bg-pink-100'
      },
      required: {
        false: 'bg-transparent hover:bg-transparent'
      },
      active: {false: ''},
      disabled: {
        true: 'opacity-50'
      }
    },
    compoundVariants: [
      {
        variant: 'blue',
        active: true,
        class: 'bg-blue-100 border-blue-500'
      },
      {
        variant: 'lime',
        active: true,
        class: 'bg-lime-100 border-lime-500'
      },
      {
        variant: 'pink',
        active: true,
        class: 'bg-pink-100 border-pink-500'
      },
      {active: true, required: false, class: 'bg-transparent'}
    ],
    defaultVariants: {
      variant: 'lime',
      required: true,
      active: false
    }
  }
);

type RndFieldProps = RndProps &
  PropsWithChildren &
  VariantProps<typeof rndVariatns> & {className?: string};

export const RndField = forwardRef<Rnd, RndFieldProps>(
  (
    {
      children,
      required,
      active,
      disabled,
      variant,
      className,
      minHeight = 24,
      minWidth = 24,
      ...props
    },
    ref
  ) => {
    return (
      <Rnd
        ref={ref}
        tabIndex={0}
        className={cn(
          rndVariatns({className, active, disabled, variant, required})
        )}
        minHeight={minHeight}
        minWidth={minWidth}
        {...props}
      >
        {children}
      </Rnd>
    );
  }
);

RndField.displayName = 'RndField';
