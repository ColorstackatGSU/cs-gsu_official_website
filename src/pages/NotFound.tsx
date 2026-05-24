import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="bg-white py-32">
      <div className="container-wide max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-gsu-red">404</p>
        <h1 className="mt-3 text-4xl">Page not found</h1>
        <p className="mt-4 text-gsu-blue-steel">
          The page you're looking for doesn't exist — or it hasn't been built yet.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back home
        </Link>
      </div>
    </section>
  );
}
