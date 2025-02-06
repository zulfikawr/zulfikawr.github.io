import Navbar from '../components/navbar';

export default function Page404() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex justify-center items-center p-6">
        <main className="mx-auto grid max-w-2xl grid-cols-4">
          <Navbar />
          <div className="col-span-4 flex flex-col items-center">
            <div className="flex h-52 flex-col justify-center items-center overflow-hidden rounded-xl px-8 py-10 relative custom-card">
              <div className="space-y-4 text-center">
                <div>
                  <h1 className="text-xl text-glow-black dark:text-white dark:text-glow-white">
                    404
                  </h1>
                  <p className="text-black dark:text-white dark:text-opacity-70">
                    Sorry, I couldn't locate that page for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
