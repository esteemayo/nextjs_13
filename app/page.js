'use client';
import { useEffect, useState } from 'react';

import Loading from './loading';
import Courses from '@/components/Courses';
import CourseSearch from '@/components/CourseSearch';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>Welcome to Esteem Designs</h1>
      <Courses courses={courses} />
    </>
  );
}

export default Home;
