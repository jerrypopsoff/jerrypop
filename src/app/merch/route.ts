import { NextResponse } from 'next/server';
import { MERCH_HREF } from '../../constants/navigation';

export function GET() {
  return NextResponse.redirect(MERCH_HREF, 307);
}
