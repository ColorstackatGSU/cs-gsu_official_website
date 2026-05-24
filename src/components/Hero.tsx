import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gsu-blue text-white">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "url('/images/homepage_img.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gsu-blue/95 via-gsu-blue/80 to-gsu-cool-blue/60" aria-hidden />

      <div className="container-wide relative grid gap-10 py-24 md:grid-cols-2 md:py-32">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gsu-light-blue">
            ColorStack · Georgia State Chapter
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Welcome to ColorStack at <span className="text-gsu-vibrant">Georgia State</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            A community of Black, Latinx, and underrepresented students in computing — built to launch careers,
            spark mentorship, and grow Atlanta's next generation of tech leaders.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/become-a-member" className="btn-accent">
              Become a Member
            </Link>
            <Link to="/about" className="btn-secondary border-white text-white hover:bg-white hover:text-gsu-blue">
              Learn More
            </Link>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -right-10 top-1/2 h-80 w-80 -translate-y-1/2 rounded-3xl bg-white/10 backdrop-blur" />
          <img
            src="/images/hp-2.png"
            alt="ColorStack at GSU students"
            className="relative ml-auto w-full max-w-md rounded-2xl object-cover shadow-2xl"
            onError={(e) => ((e.currentTarget.style.display = 'none'))}
          />
        </div>
      </div>
    </section>
  );
}
