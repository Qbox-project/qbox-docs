import React, {type ReactNode} from 'react';
import CodeTabs from '@theme-original/ApiExplorer/CodeTabs';
import type CodeTabsType from '@theme-original/ApiExplorer/CodeTabs';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof CodeTabsType>;

export default function CodeTabsWrapper(props: Props): ReactNode {
  const handleTabChange = (tabValue: string) => {
    plausible('api_language_tab', {props: {language: tabValue, page: window.location.pathname}});
  };

  return (
    <>
      <CodeTabs {...props} onTabChange={handleTabChange} />
    </>
  );
}
