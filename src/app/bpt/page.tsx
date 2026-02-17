import { Metadata } from 'next';
import { Bpt } from '../../components/Bpt';

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
  return <Bpt />;
}
