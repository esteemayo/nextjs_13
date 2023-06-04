import { useState } from 'react';

const CourseSearch = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>CourseSearch</div>
  );
}

export default CourseSearch;
