import { courses } from '../data/courses'
import CourseCard from '../components/CourseCard'

export default function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="grid">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
