import { useParams } from 'react-router-dom'
import { courses } from '../data/courses'
import { motion } from 'framer-motion'

export default function CourseDetail() {
  const { id } = useParams()
  const course = courses.find(c => c.id === id)

  if (!course) return <p>Curso no encontrado</p>

  localStorage.setItem(`progress-${course.id}`, 60)

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>{course.title}</h2>

      <video controls>
        <source src={course.video} type="video/mp4" />
      </video>

      <h3>Capturas</h3>
      <div className="screens">
        {course.screenshots.map((img, i) => (
          <img key={i} src={img} />
        ))}
      </div>

      <h3>Instrucciones</h3>
      <pre>{course.instructions}</pre>
    </motion.div>
  )
}
