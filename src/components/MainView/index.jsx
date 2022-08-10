import './styles.css'
import { EmployeesList } from '../EmployeesList/index.jsx';

export const MainView = () => {

  return (
    <>
      <nav className="main-nav">A</nav>
      <div className="main-aside">
        <div>
          <main className="main-content">
            <div className="main-square"></div>
            <div className="main-square-shadow"></div>
          </main>
        </div>
        <EmployeesList />
      </div>
      <footer className="main-footer">D</footer>
    </>
  )
}
