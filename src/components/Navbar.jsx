import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">TrainingCodeByWill</span>
      <div className="profile">
        <ThemeToggle />
        <img src="/media/avatar.png" alt="perfil" />
      </div>
    </nav>
  )
}
