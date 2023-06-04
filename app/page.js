'use client';
import { useEffect, useState } from 'react';
import Courses from '@/components/Courses';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <h1>Welcome to Esteem Designs</h1>
      <Courses />
    </>
  );
}

export default Home;
