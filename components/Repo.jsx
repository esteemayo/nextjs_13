async function fetchRepo(name) {
  const res = await fetch(`http://api.github.com/repos/esteemayo/${name}`);
  const repo = await res.json();
  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <div>Repo</div>
  );
}

export default Repo;
