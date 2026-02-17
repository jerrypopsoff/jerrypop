import { Metadata } from 'next';
import { Secret } from '../../components/Secret';

const TITLE = 'Invite enclosed';
const DESCRIPTION =
  'You have been invited to a top secret event. Please RSVP ASAP!';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <Secret />;
}
