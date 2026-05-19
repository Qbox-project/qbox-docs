import React, {type ReactNode, useEffect} from 'react';
import NotFound from '@theme-original/NotFound';
import type NotFoundType from '@theme/NotFound';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof NotFoundType>;

export default function NotFoundWrapper(props: Props): ReactNode {
  useEffect(() => {
    plausible('404_page', {props: {brokenUrl: window.location.pathname, referrer: document.referrer}});
  }, []);

  return (
    <>
      <NotFound {...props} />
    </>
  );
}
