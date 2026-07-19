export function getApiBaseUrl() {
  const codespaceName =
    import.meta.env.VITE_CODESPACE_NAME ||
    window?.location?.hostname?.split('.')[0] ||
    '';

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
