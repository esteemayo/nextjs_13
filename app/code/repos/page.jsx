import Link from "next/link";

async function fetchRepos() {
  const res = await fetch('https://api.github.com/users/esteemayo/repos');
  const repos = await res.json();
  return repos;
}

const Repos = () => {
  return (
    <div>Repos</div>
  );
}

export default Repos;
