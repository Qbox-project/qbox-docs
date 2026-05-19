import React, {type ReactNode} from 'react';
import Tree from '@theme-original/TOCItems/Tree';
import type TreeType from '@theme/TOCItems/Tree';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof TreeType>;

export default function TreeWrapper(props: Props): ReactNode {
  const {toc} = props;

  const wrapTocItems = (items: typeof toc) =>
    items.map((item) => ({
      ...item,
      children: wrapTocItems(item.children),
      onClick: () => {
        plausible('toc_click', {props: {heading: item.value, page: window.location.pathname}});
      },
    }));

  return (
    <>
      <Tree {...props} toc={wrapTocItems(toc)} />
    </>
  );
}
