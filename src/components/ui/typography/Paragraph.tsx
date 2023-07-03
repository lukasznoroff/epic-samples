import React from 'react';
import clsx from 'clsx';

interface ParagraphProps {
  readonly variant?: 'default' | 'main';
  readonly className?: string;
  readonly children: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
  variant = 'default',
  className,
  children,
}) => {
  const variantClasses = {
    default: 'text-base',
    main: 'mt-4',
  };

  const typographyClasses = clsx(variantClasses[variant], className);

  return <p className={typographyClasses}>{children}</p>;
};

export default Paragraph;
