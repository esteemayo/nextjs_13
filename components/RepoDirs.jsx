import Link from 'next/link';

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(`http://api.github.com/repos/esteemayo/${name}/contents`);
  const contents = await res.json();
  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === 'dir');

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => {
          const { path, name } = dir;
          return (
            <li key={dir.path}>
              <Link href={`/code/repos/${name}/${dir.path}`}>
                {dir.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default RepoDirs;
