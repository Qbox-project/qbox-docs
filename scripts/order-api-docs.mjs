import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const apiDir = path.join(process.cwd(), 'docs', 'dashboard', 'cdn', 'api');

const orderedFiles = [
  'upload-file.api.mdx',
  'create-presigned-url.api.mdx',
  'upload-file-presigned-url.api.mdx',
  'delete-file.api.mdx',
];

function upsertSidebarPosition(frontmatter, position) {
  const lines = frontmatter.split(/\r?\n/);
  const idx = lines.findIndex((line) => line.trim().startsWith('sidebar_position:'));
  const next = `sidebar_position: ${position}`;

  if (idx >= 0) {
    lines[idx] = next;
  } else {
    const insertAt = Math.min(5, lines.length);
    lines.splice(insertAt, 0, next);
  }

  return lines.join('\n');
}

for (let i = 0; i < orderedFiles.length; i += 1) {
  const file = orderedFiles[i];
  const filePath = path.join(apiDir, file);
  const content = readFileSync(filePath, 'utf8');

  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) {
    continue;
  }

  const frontmatter = match[1];
  const body = content.slice(match[0].length);
  const nextFrontmatter = upsertSidebarPosition(frontmatter, i + 1);
  const nextContent = `---\n${nextFrontmatter}\n---\n${body}`;

  writeFileSync(filePath, nextContent, 'utf8');
}
