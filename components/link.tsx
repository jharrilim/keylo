import { Link as MatLink, LinkProps as MatLinkProps } from '@material-ui/core';
import { forwardRef } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';


type LinkProps = MatLinkProps & NextLinkProps;

const Link = forwardRef<HTMLSpanElement, LinkProps>(
  (props, ref) => <MatLink {...props} ref={ref} component={NextLink} />
);

export default Link;
