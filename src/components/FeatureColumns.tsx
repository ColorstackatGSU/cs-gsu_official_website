const features = [
  {
    title: 'Workshops',
    image: '/images/involvement-img.jpg',
    body: 'Hands-on technical sessions covering interview prep, system design, web dev, AI, and more — taught by peers and industry mentors.',
  },
  {
    title: 'Professional Development',
    image: '/images/involvement-img2.jpg',
    body: 'Resume reviews, mock interviews, recruiter coffee chats, and direct pipelines to internships with our corporate partners.',
  },
  {
    title: 'Community',
    image: '/images/involvement/kickoff-event.png',
    body: 'A welcoming home for underrepresented students in tech — study sessions, social events, and a Slack you can rely on.',
  },
];

export default function FeatureColumns() {
  return (
    <section className="bg-gsu-light-gray/40 py-20">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">What we do</h2>
          <p className="mt-3 text-gsu-blue-steel">
            Three pillars that power every member's journey through ColorStack at GSU.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gsu-light-blue/30">
                <img
                  src={f.image}
                  alt={f.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gsu-blue-steel">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
