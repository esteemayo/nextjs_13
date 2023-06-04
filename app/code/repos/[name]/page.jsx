import Link from 'next/link';
import { Suspense } from 'react';

import Repo from '@/components/Repo';
import RepoDirs from '@/components/RepoDirs';

const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
      <Suspense fallback={<div>loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
}

export default RepoPage;
