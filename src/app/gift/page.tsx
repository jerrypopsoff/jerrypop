import { Gift } from '../../components/Gift';

export const metadata = {
  title: 'A Special Gift for Gikui · Jerrypop',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <Gift />;
}
