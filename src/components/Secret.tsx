import { PageContentLayout } from './PageContentLayout';
import { Paragraph } from './common/Paragraph';
import { ButtonLink } from './common/ButtonLink';

export function Secret() {
  return (
    <PageContentLayout>
      <h1 className="mt-8 text-3xl font-semibold">Top secret</h1>
      <Paragraph className="my-12 text-xl">
        By selecting to proceed, I hereby swear to keep any and all learned
        information a secret from every living being (especially Gikui).
      </Paragraph>
      <div className="flex flex-col items-center gap-4">
        <ButtonLink href="/bpt">Proceed</ButtonLink>
        <ButtonLink href="/">Leave (not recommended)</ButtonLink>
      </div>
    </PageContentLayout>
  );
}
