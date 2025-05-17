import { redirect } from 'next/navigation';
import { MERCH_HREF } from '../../constants/navigation';

export default function Page() {
  redirect(MERCH_HREF);
}
