import React, {type ReactNode} from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import type LinkType from '@theme/DocSidebarItem/Link';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof LinkType>;

export default function LinkWrapper(props: Props): ReactNode {
  const {item} = props;

  const handleClick = () => {
    plausible('sidebar_click', {props: {label: item.label, path: item.href, page: window.location.pathname}});
  };

  return (
    <>
      <Link {...props} onClick={handleClick} />
    </>
  );
}
