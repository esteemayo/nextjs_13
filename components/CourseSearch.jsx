import { useState } from 'react';

const CourseSearch = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        type='text'
        className='search-input'
        placeholder='Search Courses...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  );
}

export default CourseSearch;
