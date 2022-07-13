import Link from 'next/link';
import {
  Icon,
  Link as ChackraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { ElementType } from 'react';

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  icon: ElementType;
  href: string;
}
export function NavLink({ children, icon, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChackraLink display='flex' alignItems='center' py='1' {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium'>
          {children}
        </Text>
      </ChackraLink>
    </Link>
  );
}
