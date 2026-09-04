export default function App() {
  return (
    <>
      <header className="max-w-2xl mx-auto px-6 pt-16">
      <h1 className="text-4xl font-semibold tracking-tight">Mika Dylan T. Bartido</h1>
      <p className="mt-2 text-lg text-slate-600">Third year BSIT student at Cebu Institute of Technology – University.</p>
      <hr className="mt-8 border-slate-200"/>
      </header>

  <main className="max-w-2xl mx-auto px-6 py-10">


    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">About</h2>
      <p className="leading-relaxed text-slate-700">
        I grew up in Pagadian and is currrently studying in Cebu City for college. I picked IT because this is the only course where I can actually see myself committing
        for a long time. 
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Details</h2>
      <p className="leading-relaxed text-slate-700">
        Course: BS Information Technology
        <br/>
        Year level: Third year
        <br/>
        Hometown: Pagadian City, Zamboanga del Sur
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Things I like</h2>
      <ul className="list-disc list-inside space-y-1 text-slate-700">
        <li>Watching movies and TV shows</li>
        <li>Going on a food trip</li>
        <li>Cleaning</li>
        <li>Hiking on a good weather</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3">Reach me</h2>
      <p className="leading-relaxed text-slate-700">
        mikadylan.bartido@cit.edu
        <br/>
        @mika_dylan on most things
      </p>
    </section>

  </main>

  <section className="max-w-2xl mx-auto px-6 pb-16">
    <hr className="mb-6 border-slate-200"/>
    <p className="text-sm text-slate-500">Made for CSIT340.</p>
  </section>
    </>
  )
}

