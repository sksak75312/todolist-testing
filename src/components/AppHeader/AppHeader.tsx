import { Link } from 'react-router-dom';

export default function AppHeader() {
  return <header>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/todolist">TodoList</Link>
      </li>
    </ul>
  </header>
}