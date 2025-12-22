'use client';

import { PageContentLayout } from './PageContentLayout';
import { Heading1 } from './common/Heading1';
import { Paragraph } from './common/Paragraph';
import { ButtonLink } from './common/ButtonLink';

export function Gift() {
  return (
    <PageContentLayout>
      <Heading1>
        🎁 💝 🎄
        <br />A Special Gift for Gikui
      </Heading1>
      <Paragraph>
        Merry Christmas! I hope you enjoy this day of relaxation and a lovely
        lunch date.
      </Paragraph>

      <div className="mt-12 w-full max-w-2xl space-y-12">
        {/* Massage Section */}
        <section className="border-highlight bg-highlight rounded-lg border p-8">
          <h2 className="text-center text-2xl font-semibold">
            Signature Thai Massage
          </h2>
          <div className="mt-6 space-y-4 text-left">
            <div>
              <p className="font-semibold">Siam Orchid Signature Massage</p>
              <p className="text-sm opacity-90">Saturday, January 3, 2026</p>
              <p className="text-sm opacity-90">11:30am - 1:00pm</p>
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-sm opacity-90">
                39 Polk Street, San Francisco, CA 94102
              </p>
            </div>
            <ButtonLink
              href="https://siamorchidsf.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              Siam Orchid
            </ButtonLink>
          </div>
        </section>

        {/* Lunch Section */}
        <section className="border-highlight bg-highlight rounded-lg border p-8">
          <h2 className="text-center text-2xl font-semibold">
            Lunch for two at Zuni Café
          </h2>
          <div className="mt-6 space-y-4 text-left">
            <div>
              <p className="font-semibold">Reservation</p>
              <p className="text-sm opacity-90">Table for Two</p>
              <p className="text-sm opacity-90">Saturday, January 3, 2026</p>
              <p className="text-sm opacity-90">1:30pm</p>
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-sm opacity-90">
                1658 Market Street, San Francisco, CA 94102
              </p>
            </div>
            <ButtonLink
              href="https://zunicafe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              Zuni Café
            </ButtonLink>
          </div>
        </section>
      </div>

      <Paragraph className="mt-16 text-lg">
        Looking forward to spending this special day with you!
      </Paragraph>
    </PageContentLayout>
  );
}
