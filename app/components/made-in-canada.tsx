import { Layers, Scissors, Package } from 'lucide-react'

function MapleLeaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M50,2 L57,16 L64,12.5 L61.5,34 L73,21 L75.5,28 L89,25 L85,38.5 L93,42.5 L70,59 L72.5,67 L52.5,63 L52.5,92 L47.5,92 L47.5,63 L27.5,67 L30,59 L7,42.5 L15,38.5 L11,25 L24.5,28 L27,21 L38.5,34 L36,12.5 L43,16 Z"
      />
    </svg>
  )
}

const steps = [
  {
    name: 'Canadian vinyl',
    description: 'Every pattern starts as premium liner vinyl made in Canada by our partner, Poolside by CGT.',
    icon: Layers,
  },
  {
    name: 'Fabricated in Ontario',
    description: 'Each liner is custom measured, cut and welded by our team in Collingwood, Ontario.',
    icon: Scissors,
  },
  {
    name: 'Canadian packaging',
    description: 'Right down to the boxes we ship in, your liner arrives in Canadian-made packaging.',
    icon: Package,
  },
]

export function MadeInCanada() {
  return (
    <section aria-labelledby="made-in-canada-heading" className="border-t border-gray-100 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-red-600">
            <MapleLeaf className="h-5 w-5" />
            100% Canadian
          </p>
          <h2 id="made-in-canada-heading" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Made in Canada, from vinyl to box
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            AquaMate is Canadian owned and operated, and everything we offer is produced here at home.
          </p>
        </div>

        <dl className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.name} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <dt className="flex items-center gap-3 text-base font-semibold text-gray-900">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {step.name}
              </dt>
              <dd className="mt-4 text-sm leading-6 text-gray-600">{step.description}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex justify-center">
          <a
            href="https://supportontariomade.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm text-gray-700 shadow-sm ring-1 ring-gray-200 hover:ring-gray-300"
          >
            <span className="font-semibold text-gray-900">Registered Ontario Made manufacturer</span>
            <span className="text-blue-700">#OntarioMade</span>
          </a>
        </div>
      </div>
    </section>
  )
}
