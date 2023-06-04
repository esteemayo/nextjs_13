import Link from 'next/link';

import Repo from '@/components/Repo';
import RepoDirs from '@/components/RepoDirs';
import { Suspense } from 'react';

const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
      <Suspense fallback='loading repo...'>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
}

export default RepoPage;
