import Link from 'next/link';
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa';

async function fetchRepos() {
  const res = await fetch('https://api.github.com/users/esteemayo/repos');

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const repos = await res.json();
  return repos;
}

const Repos = async () => {
  const repos = await fetchRepos();

  return (
    <div className='repo-container'>
      <h2>Repositories</h2>
      <ul className='repo-list'>
        {repos.map((repo) => {
          const { id, name, description, stargazers_count, forks_count, watchers_count } = repo;
          return (
            <li key={id}>
              <Link href={`/code/repos/${encodeURIComponent(name)}`}>
                <h3>{name}</h3>
                <p>{description}</p>
                <div className='repo-details'>
                  <span>
                    <FaStar /> {stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch /> {forks_count}
                  </span>
                  <span>
                    <FaEye /> {watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Repos;
