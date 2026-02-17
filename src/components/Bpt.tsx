import { PageContentLayout } from './PageContentLayout';
import { Paragraph } from './common/Paragraph';

export function Bpt() {
  return (
    <PageContentLayout>
      <h1 className="mb-4 mt-12 text-5xl font-semibold">You&apos;re invited</h1>
      <Paragraph className="text-xl">
        to a surprise engagement celebration for Gikui and Jerry!
      </Paragraph>
      <div className="mt-12 w-full max-w-2xl space-y-8">
        <section className="border-highlight bg-highlight rounded-lg border p-8">
          <div className="space-y-4 text-left">
            <div>
              <p className="font-semibold">Date</p>
              <p className="text-sm opacity-90">Thursday, 5 March 2026</p>
            </div>
            <div>
              <p className="font-semibold">Arrival</p>
              <p className="text-sm opacity-90">
                5:30 &ndash; 5:45pm (6pm planned arrival for surprise)
              </p>
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-sm opacity-90">
                Bar Part Time &middot; 496 14th St, San Francisco, CA 94103
              </p>
              <p className="text-sm opacity-90">
                The seating area is rented out
              </p>
            </div>
            <div>
              <p className="font-semibold">Drinks</p>
              <p className="text-sm opacity-90">
                We&apos;ll have a tab open with a minimum spend to hit &mdash;
                please order from the tab rather than paying separately!
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageContentLayout>
  );
}
