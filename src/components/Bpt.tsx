import { PageContentLayout } from './PageContentLayout';
import { Paragraph } from './common/Paragraph';

export function Bpt() {
  return (
    <PageContentLayout>
      <h1 className="mb-6 mt-2 text-4xl font-semibold">You&apos;re invited</h1>
      <Paragraph className="text-xl">
        to a surprise engagement celebration for Gikui and Jerry!
      </Paragraph>
      <div className="my-8 w-full max-w-2xl space-y-8">
        <section className="border-highlight bg-highlight rounded-lg border p-8">
          <div className="space-y-6 text-left">
            <div>
              <p className="mb-1 font-light uppercase">Date</p>
              <p>Thursday, 5 March 2026</p>
            </div>
            <div>
              <p className="mb-1 font-light uppercase">Arrival</p>
              <p>5:30 &ndash; 5:45pm</p>
              <p>
                The big surprise is at 6pm, about an hour after Gikui says
                &quot;yes!&quot;
              </p>
            </div>
            <div>
              <p className="mb-1 font-light uppercase">Location</p>
              <p>Bar Part Time</p>
              <p>496 14th Street</p>
              <p>San Francisco, CA 94103</p>
            </div>
            <div>
              <p className="mb-1 font-light uppercase">RSVP</p>
              <p>
                Please please please RSVP to Jerry{' '}
                <a
                  className="underline"
                  href="sms:+16167455629&body=I'm%20in!%20And%20I%20promise%20I%20won't%20breathe%20one%20word%20of%20this%20to%20Gikui%20or%20anyone%20on%20earth.%20By%20the%20way%2C%20this%20is%20"
                >
                  via text
                </a>{' '}
                by February 28th to help everything run smoothly
              </p>
            </div>
            <div>
              <p className="mb-1 font-light uppercase">Drinks</p>
              <p>
                We&apos;ll have a tab open with a minimum spend to hit; please
                order from the tab and do not pay for anything!
              </p>
            </div>
            <div>
              <p className="mb-1 font-light uppercase">Food</p>
              <p>
                Outside food is not allowed, but we will have a cake. We will
                likely end up migrating to a nearby group-friendly spot for
                dinner after the surprise and celebration (e.g. Zeitgeist,
                Southern Pacific, etc.).
              </p>
            </div>
            <div>
              <p className="mb-1 font-light uppercase">Important</p>
              <p>Pls do not tell Gikui because it&apos;s a surprise</p>
            </div>
          </div>
        </section>
      </div>
    </PageContentLayout>
  );
}
