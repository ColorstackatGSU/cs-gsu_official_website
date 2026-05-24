import { Link } from 'react-router-dom';

export default function MissionBlurb() {
  return (
    <section className="bg-white py-20">
      <div className="container-wide max-w-4xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gsu-red">Our Mission</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">
          Leveraging Georgia State's resources to grow the next generation of underrepresented technologists.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gsu-blue-steel">
          ColorStack at GSU connects Black, Latinx, and other historically underrepresented students in computing
          with the mentorship, opportunities, and community they need to thrive — on campus and beyond.
        </p>
        <Link to="/about" className="btn-secondary mt-8">
          Learn More
        </Link>
      </div>
    </section>
  );
}
