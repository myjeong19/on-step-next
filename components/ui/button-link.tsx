import Link from 'next/link';
import { Button } from '../shadcn';

type ButtonLinkProps = React.ComponentProps<typeof Button> & React.ComponentProps<typeof Link>;

export const ButtonLink = ({ href, children, ...props }: ButtonLinkProps) => {
  return (
    <Button {...props} asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
};
