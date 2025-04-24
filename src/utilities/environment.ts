// https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
type NetlifyContext = 'production' | 'deploy-preview' | 'branch-deploy';

function isNetlifyContext(context?: string): context is NetlifyContext {
  return (
    context === 'production' ||
    context === 'deploy-preview' ||
    context === 'branch-deploy'
  );
}

function getContext(): NetlifyContext | 'development' {
  const netlifyContext = process.env.NEXT_PUBLIC_NETLIFY_CONTEXT;

  if (!isNetlifyContext(netlifyContext)) {
    return 'development';
  }

  return netlifyContext;
}

export function isProduction() {
  return getContext() === 'production';
}

export function isDeployPreview() {
  return getContext() === 'deploy-preview';
}

export function isBranchDeploy() {
  return getContext() === 'branch-deploy';
}
