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
    <div>RepoDirs</div>
  );
}

export default RepoDirs;
