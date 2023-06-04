import Repo from "@/components/Repo";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>Repo Details</p>
    </div>
  );
}

export default RepoPage;
