import { Metadata } from 'next';
import { getMetadata } from '../utilities/metadata';
import { ClientOnly } from './[[...slug]]/client';

export const metadata: Metadata = {
  ...getMetadata(),
  title: 'Page Not Found · Jerrypop',
};

export default function Page() {
  return <ClientOnly />;
}
