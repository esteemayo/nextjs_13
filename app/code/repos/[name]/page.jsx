import Repo from "@/components/Repo";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
      <Repo name={name} />
    </div>
  );
}

export default RepoPage;
