import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProgressBar from './ProgressBar'

export default function CourseCard({ course }) {
  const progress =
    localStorage.getItem(`progress-${course.id}`) || 20

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
    >
      <Link to={`/course/${course.id}`} className="course-card">
        <img src={course.cover} />
        <h3>{course.title}</h3>
        <ProgressBar value={progress} />
      </Link>
    </motion.div>
  )
}
