export function getApiBaseUrl() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
  if (apiBaseUrl && apiBaseUrl.trim()) {
    return apiBaseUrl.replace(/\/$/, '');
  }

  const envCodespaceName = import.meta.env.VITE_CODESPACE_NAME || '';
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';

  let codespaceName = envCodespaceName.trim();

  if (!codespaceName) {
    if (hostname.includes('app.github.dev')) {
      const match = hostname.match(/^(.*)-\d+\.app\.github\.dev$/i);
      codespaceName = match ? match[1] : hostname.replace('.app.github.dev', '');
    } else if (hostname.includes('github.dev')) {
      codespaceName = hostname.replace('.github.dev', '');
    } else {
      codespaceName = hostname.split('.')[0] || '';
    }
  }

  if (codespaceName && codespaceName.trim()) {
    if (codespaceName.includes('app.github.dev')) {
      return `https://${codespaceName}`;
    }

    if (codespaceName.includes('github.dev')) {
      return `https://${codespaceName}`;
    }

    return `https://${codespaceName}-8000.app.github.dev`;
  }

  return 'http://localhost:8000';
}
