if (typeof document !== 'undefined') {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const copyButton = target.closest('button[class*="copyButton"]');
    if (copyButton) {
      const codeBlock = copyButton.closest('div[class*="codeBlockContainer"], div[class*="codeBlock"]');
      const language = codeBlock?.querySelector('code')?.className?.replace(/.*language-/, '').split(/\s+/)[0] || 'unknown';
      plausible('code_copy', {props: {language, page: window.location.pathname}});
    }
  });
}
