import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gsu-blue text-white">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/white_logo.png.svg" alt="ColorStack GSU" className="h-10 w-auto" />
            <span className="font-display text-lg font-bold">ColorStack @ GSU</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/80">
            Building community for Black and Latinx students in computing at Georgia State University.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/involvement" className="hover:text-white">Involvement</Link></li>
            <li><Link to="/students" className="hover:text-white">Students</Link></li>
            <li><Link to="/sponsors" className="hover:text-white">Sponsors</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Get Involved</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/become-a-member" className="hover:text-white">Become a Member</Link></li>
            <li><a href="mailto:colorstackgsu@gmail.com" className="hover:text-white">Contact Us</a></li>
            <li><Link to="/sponsors" className="hover:text-white">Sponsor Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Connect</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><a href="https://www.instagram.com/colorstackgsu/" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/colorstackgsu/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></li>
            <li><a href="mailto:colorstackgsu@gmail.com" className="hover:text-white">Email</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-2 py-5 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ColorStack at Georgia State University. All rights reserved.</p>
          <p>Made with love by the ColorStack GSU e-board.</p>
        </div>
      </div>
    </footer>
  );
}
