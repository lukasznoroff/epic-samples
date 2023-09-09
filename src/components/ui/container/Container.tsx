import React from 'react';
import clsx from 'clsx';

interface ContainerProps {
  readonly variant?: 'default' | 'wide' | 'medium' | 'flex' | 'hero' | 'image';
  readonly className?: string;
  readonly style?: React.CSSProperties;
  readonly children: React.ReactNode;
  readonly imageUrl?: string;
}

const Container: React.FC<ContainerProps> = ({
  variant = 'default',
  className,
  style,
  children,
}) => {
  const variantClasses = {
    default: 'container mx-auto px-4 sm:px-6 lg:px-8 ',
    wide: 'w-[95vw] mx-auto px-4 md:flex md:px-8 h-auto flex-col ',
    // medium: 'w-[90vw] h-[100vh] mx-auto grid justify-center  md:grid-cols-4 grid-cols-2 gap-4',
    medium: 'h-[100vh]  grid justify-center    md:grid-cols-4 lg:grid-cols-2  gap-4  mx-16 ',
    flex: 'flex justify-between my-20',
    // hero: 'container mx-auto px-4 sm:px-6 lg:px-8 bg-cover bg-center',
    hero: 'h-[100%] content-center  md:px-32 justify-center	flex items-start flex-col',

    image: 'justify-center h-[80vh] w-[100vw] bg-cover bg-center xs:px-8',
  };

  const containerClasses = clsx(variantClasses[variant], className);

  return (
    <div className={containerClasses} style={style}>
      {children}
    </div>
  );
};

export default Container;
