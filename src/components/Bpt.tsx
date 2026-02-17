'use client';

import { useEffect, useState } from 'react';
import { PageContentLayout } from './PageContentLayout';
import { Paragraph } from './common/Paragraph';
import { OptimizedImage } from './common/OptimizedImage';
import BptHeaderSrc from '../images/bpt.jpeg';

const CELEBRATION_EMOJIS = ['🥂', '💍', '✨', '🎉', '💖', '🍾', '💐', '🎊'];

interface FloatingEmoji {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

function useFloatingEmojis() {
  const [emojis, setEmojis] = useState<FloatingEmoji[]>([]);

  useEffect(() => {
    const generated: FloatingEmoji[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji:
        CELEBRATION_EMOJIS[
          Math.floor(Math.random() * CELEBRATION_EMOJIS.length)
        ],
      left: Math.random() * 100,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 10,
      size: 20 + Math.random() * 16,
    }));
    setEmojis(generated);
  }, []);

  return emojis;
}

function FloatingEmojis() {
  const emojis = useFloatingEmojis();

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {emojis.map((e) => (
        <span
          key={e.id}
          className="animate-float-up absolute bottom-0"
          style={{
            left: `${e.left}%`,
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
            animationIterationCount: 'infinite',
            fontSize: `${e.size}px`,
          }}
        >
          {e.emoji}
        </span>
      ))}
    </div>
  );
}

const DETAIL_SECTIONS = [
  {
    label: 'Date',
    content: <p>Thursday, 5 March 2026</p>,
  },
  {
    label: 'Arrival',
    content: (
      <>
        <p>5:30 &ndash; 5:45pm</p>
        <p>
          The big surprise is at 6pm, about an hour after Gikui says
          &quot;yes!&quot;
        </p>
      </>
    ),
  },
  {
    label: 'Location',
    content: (
      <>
        <p>Bar Part Time</p>
        <p>496 14th Street</p>
        <p>San Francisco, CA 94103</p>
      </>
    ),
  },
  {
    label: 'RSVP',
    content: (
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
    ),
  },
  {
    label: 'Drinks',
    content: (
      <p>
        We&apos;ll have a tab open with a minimum spend to hit; please order
        from the tab and do not pay for anything!
      </p>
    ),
  },
  {
    label: 'Food',
    content: (
      <p>
        Outside food is not allowed, but we will have a cake. We will likely end
        up migrating to a nearby group-friendly spot for dinner after the
        surprise and celebration (e.g. Zeitgeist, Southern Pacific, etc.).
      </p>
    ),
  },
  {
    label: 'Important',
    content: <p>Pls do not tell Gikui because it&apos;s a surprise</p>,
  },
];

export function Bpt() {
  return (
    <PageContentLayout>
      <FloatingEmojis />
      <OptimizedImage
        alt="Photograph of Gikui and Jerry madly in love"
        aspectRatioCss="1"
        className="-mt-21 mb-8 w-full"
        placeholder="blur"
        preload={true}
        sizes="100vw"
        src={BptHeaderSrc}
        widthCss="100%"
      />
      <h1
        className="animate-fade-in-up mb-6 mt-2 text-4xl font-semibold"
        style={{ animationDelay: '0.1s' }}
      >
        You&apos;re invited
      </h1>
      <Paragraph
        className="animate-fade-in-up text-xl"
        style={{ animationDelay: '0.3s' }}
      >
        to a surprise engagement celebration for Gikui and Jerry!
      </Paragraph>
      <div className="my-8 w-full max-w-2xl space-y-8">
        <section className="border-highlight bg-highlight animate-shimmer rounded-lg border p-8">
          <div className="space-y-6 text-left">
            {DETAIL_SECTIONS.map((section, i) => (
              <div
                key={section.label}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.5 + i * 0.15}s` }}
              >
                <p className="mb-1 font-light uppercase">{section.label}</p>
                {section.content}
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageContentLayout>
  );
}
