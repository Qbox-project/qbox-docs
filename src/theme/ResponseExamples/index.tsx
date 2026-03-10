/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

import React from "react";

import { translate } from "@docusaurus/Translate";
import CodeSamples from "docusaurus-theme-openapi-docs/lib/theme/CodeSamples";
import Markdown from "docusaurus-theme-openapi-docs/lib/theme/Markdown";
import TabItem from "@theme/TabItem";
import { OPENAPI_RESPONSE_EXAMPLES } from "docusaurus-theme-openapi-docs/lib/theme/translationIds";

interface ResponseExamplesProps {
  responseExamples: any;
  mimeType: string;
}
export const ResponseExamples: React.FC<ResponseExamplesProps> = ({
  responseExamples,
  mimeType,
}): any => {
  let language = "shell";
  if (mimeType.endsWith("json")) language = "json";
  if (mimeType.endsWith("xml")) language = "xml";

  // Map response examples to an array of TabItem elements
  const examplesArray = Object.entries(responseExamples).map(
    ([exampleName, exampleValue]: any) => {
      const isObject = typeof exampleValue.value === "object";
      const responseExample = isObject
        ? JSON.stringify(exampleValue.value, null, 2)
        : exampleValue.value;

      return (
        // @ts-ignore
        <TabItem label={exampleName} value={exampleName} key={exampleName}>
          {exampleValue.summary && (
            <Markdown className="openapi-example__summary">
              {exampleValue.summary}
            </Markdown>
          )}
          <CodeSamples example={responseExample} language={language} />
        </TabItem>
      );
    }
  );

  return examplesArray;
};

interface ResponseExampleProps {
  responseExample: any;
  mimeType: string;
}

export const ResponseExample: React.FC<ResponseExampleProps> = ({
  responseExample,
  mimeType,
}) => {
  let language = "shell";
  if (mimeType.endsWith("json")) {
    language = "json";
  }
  if (mimeType.endsWith("xml")) {
    language = "xml";
  }

  const isObject = typeof responseExample === "object";
  const exampleContent = isObject
    ? JSON.stringify(responseExample, null, 2)
    : responseExample;

  return (
    // @ts-ignore
    <TabItem
      label={translate({
        id: OPENAPI_RESPONSE_EXAMPLES.EXAMPLE,
        message: "Example",
      })}
      value="Example"
    >
      {responseExample.summary && (
        <Markdown className="openapi-example__summary">
          {responseExample.summary}
        </Markdown>
      )}
      <CodeSamples example={exampleContent} language={language} />
    </TabItem>
  );
};

interface ExampleFromSchemaProps {
  schema: any;
  mimeType: string;
}

export const ExampleFromSchema: React.FC<ExampleFromSchemaProps> = () => {
  // Just return null so we don't have the "Example (auto)" tab
  return null;
};
