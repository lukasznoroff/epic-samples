import clsx from 'clsx';

interface HeadingProps {
  readonly variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body';
  readonly className?: string;
  readonly children: string;
}

const Heading = ({ variant = 'body', className, children }: HeadingProps) => {
  const variantClasses = {
    h1: 'text-[40px] font-bold',
    h2: 'text-3xl  py-20 font-semibold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    h5: 'text-lg font-bold',
    h6: 'text-base font-bold',
    body: 'text-base',
  };

  const typographyClasses = clsx(
    'text-gray-800  max-w-sm font-normal leading-[40px]',
    variantClasses[variant],
    className
  );

  return <div className={typographyClasses}>{children}</div>;
};

export default Heading;
