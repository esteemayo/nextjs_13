const Repo = ({ params: { name } }) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>Repo Details</p>
    </div>
  );
}

export default Repo;
