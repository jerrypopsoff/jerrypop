import { Secret } from '../../components/Secret';

export const metadata = {
  title: 'Top secret',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <Secret />;
}
