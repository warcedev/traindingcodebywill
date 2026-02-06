import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CourseDetail from './pages/CourseDetail'
import DashboardLayout from './layout/DashboardLayout'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        }
      />
      <Route
        path="/course/:id"
        element={
          <DashboardLayout>
            <CourseDetail />
          </DashboardLayout>
        }
      />
    </Routes>
  )
}
