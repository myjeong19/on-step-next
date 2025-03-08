import { cn } from '@/lib';

type ShadowContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const ShadowContainer = ({ children, className }: ShadowContainerProps) => {
  return <div className={cn('shadow-md rounded-lg p-4', className)}>{children}</div>;
};
