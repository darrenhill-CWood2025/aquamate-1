export function FooterContact() {
  return (
    <div className="bg-sand-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Ready to transform <br/>your pool? 
          </h2>
          <dl className="mt-6 text-base text-gray-600">
            <div>
              <dt className="sr-only">Email</dt>
              <dd>
                <a href="mailto:sales@aquamatepool.com" className="font-semibold text-blue-600">
                  sales@aquamatepool.com
                </a>
              </dd>
            </div>
            <div className="mt-1">
              <dt className="sr-only">Phone number</dt>
              <dd>1-705-445-4454</dd>
            </div>
          </dl>
        </div>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0 text-gray-900">
          {/* <a
            href="mailto:sales@aquamatepool.com"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            sales@aquamatepool.com
          </a>
          <a href="/contact" className="text-sm/6 font-semibold text-gray-900">
            Contact us <span aria-hidden="true">→</span>
          </a> */}
          <dd>
                <b>Our Location</b>
                <address className="mt-1 not-italic">
                  AquaMate Inc.<br />
                  5 - 91 Sandford Fleming Drive<br />
                  Collingwood, ON<br />
                  L9Y 5A6
                </address>
              </dd>
        </div>
      </div>
    </div>
  )
}
