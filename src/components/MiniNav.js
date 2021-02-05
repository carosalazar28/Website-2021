import { Link } from 'react-router-dom';

export function MaxNav({ handleCloseNav }) {

  return (
    <div>
      <ul className="nav">
        <li><Link onClick={handleCloseNav} to="/">Home</Link></li>
        <li><Link onClick={handleCloseNav} to="/experience">Experience</Link></li>
        <li><Link onClick={handleCloseNav} to="/projects">Projects</Link></li>
        <li><Link onClick={handleCloseNav} to="/blog">Blog</Link></li>
      </ul>
    </div>
  );
}