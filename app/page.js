'use client';
import { useEffect, useState } from 'react';

import Courses from '@/components/Courses';

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
      <Courses />
    </>
  );
}

export default Home;
