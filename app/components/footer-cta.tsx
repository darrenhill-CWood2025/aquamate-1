export const FooterCTA = () => {
  return (
    <div className="bg-sand-100 py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">Get in touch</h2>
              <p className="mt-4 text-base/7 text-gray-600">
                Contact us for custom pool liner fabrication.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-sand-100 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">Sales</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
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
              <div className="rounded-2xl bg-sand-100 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">Support</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a href="mailto:support@aquamatepool.com" className="font-semibold text-blue-600">
                        support@aquamatepool.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>1-705-445-4454</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">Location</h2>
              <p className="mt-4 text-base/7 text-gray-600">
                Visit our facility in Collingwood, Ontario.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-sand-100 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">Collingwood</h3>
                <address className="mt-3 space-y-1 text-sm/6 not-italic text-gray-600">
                  <p>7887 Industrial Parkway</p>
                  <p>Collingwood, ON L9Y 3Z1</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
