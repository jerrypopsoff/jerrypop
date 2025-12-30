'use client';

import { PageContentLayout } from './PageContentLayout';
import { Paragraph } from './common/Paragraph';
import { ButtonLink } from './common/ButtonLink';
import { OptimizedImage } from './common/OptimizedImage';
import GiftHeaderSrc from '../images/GiftHeader.png';
import GiftSiamOrchidSrc from '../images/GiftSiamOrchid.png';
import GiftZuniSrc from '../images/GiftZuni.jpg';
import GiftBonusZuniSrc from '../images/GiftBonusZuni.png';
import GiftFooterSrc from '../images/GiftFooter.png';

export function Gift() {
  return (
    <>
      <OptimizedImage
        alt="Gift header image"
        aspectRatioCss="16 / 9"
        className="-mt-25 w-full"
        sizes="100vw"
        src={GiftFooterSrc}
        widthCss="100%"
      />
      <PageContentLayout>
        <h1 className="mb-3 mt-12 text-3xl font-semibold">
          A Special Christmas Gift for Gikui
        </h1>
        <Paragraph>
          Enjoy this day of relaxation and a lovely lunch date. Hope it&apos;s a
          beautiful and perfect day for a beautiful and perfect person.
        </Paragraph>
        <div className="mt-12 w-full max-w-2xl space-y-12">
          {/* Massage Section */}
          <section className="border-highlight bg-highlight rounded-lg border p-8">
            <OptimizedImage
              alt="Siam Orchid"
              aspectRatioCss="16 / 9"
              className="mb-6 w-full"
              sizes="(min-width: 640px) 640px, 100vw"
              src={GiftSiamOrchidSrc}
              widthCss="100%"
            />
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
            <OptimizedImage
              alt="Zuni Café"
              aspectRatioCss="16 / 9"
              className="mb-6 w-full"
              sizes="(min-width: 640px) 640px, 100vw"
              src={GiftZuniSrc}
              widthCss="100%"
            />
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
      </PageContentLayout>
      <div className="mt-16 w-full">
        <OptimizedImage
          alt="Gift footer image"
          aspectRatioCss="1"
          src={GiftHeaderSrc}
          className="w-full"
          sizes="100vw"
          widthCss="100%"
        />
      </div>
      <h2 className="mt-16 text-center text-6xl font-semibold">🫶🏻</h2>
      <div className="mt-16 w-full">
        <OptimizedImage
          alt="Gift footer bonus image"
          aspectRatioCss="1"
          className="w-full"
          sizes="100vw"
          src={GiftBonusZuniSrc}
          widthCss="100%"
        />
      </div>
    </>
  );
}
