import Link from 'next/link';

async function fetchCourses() {
  const res = await fetch('http://localhost:3001/api/courses');
  const courses = await res.json();
  return courses;
}

const Courses = () => {
  return (
    <div>Courses</div>
  );
}

export default Courses;
