import Link from 'next/link';

const Courses = ({ courses }) => {
  return (
    <div className='courses'>
      {courses.map((course) => {
        const { id, title, level, description, link } = course;
        return (
          <div key={id} className='card'>
            <h2>{title}</h2>
            <small>Level: {level}</small>
            <p>{description}</p>
            <Link href={link} target='_blank' className='btn'>
              Go To Course
            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default Courses;
