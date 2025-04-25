/**
 * See
 * {@link https://docs.netlify.com/site-deploys/overview/#deploy-contexts Deploy contexts}.
 */
type NetlifyDeployContext =
  | 'production'
  | 'deploy-preview'
  | 'branch-deploy'
  | 'preview-server'
  | 'dev';

function isNetlifyDeployContext(
  context?: string,
): context is NetlifyDeployContext {
  return (
    context === 'production' ||
    context === 'deploy-preview' ||
    context === 'branch-deploy' ||
    context === 'preview-server' ||
    context === 'dev'
  );
}

function getDeployContext(): NetlifyDeployContext {
  const deployContext = process.env.NEXT_PUBLIC_DEPLOY_CONTEXT;

  if (!isNetlifyDeployContext(deployContext)) {
    throw new Error(`Invalid deploy context "${deployContext}"`);
  }

  return deployContext;
}

export function isProduction() {
  return getDeployContext() === 'production';
}
