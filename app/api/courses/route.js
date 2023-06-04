import { v4 as uuid } from 'uuid';
import { NextResponse } from 'next/server';
import courses from './data.json';

export async function GET(request) {
  return NextResponse.json(courses);
}
