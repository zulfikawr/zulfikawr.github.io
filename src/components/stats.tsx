import { useMemo } from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { useFirstEverLoad, useVisitCounts } from '../hooks/use-first-ever-load';
import Transition from '../pages/transition';

export function Stats() {
  const [stats] = useFirstEverLoad();
  const [visits] = useVisitCounts();

  const firstEverLoadTime = useMemo(() => new Date(stats.time), [stats.time]);

  return (
    <div>
      <div className="h-screen">
        <div className="flex justify-start p-4">
          <Link
            href="/"
            className="px-4 py-2 mt-4 ml-4 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none custom-card"
          >
            <FiArrowLeft className="w-6 h-6" />
          </Link>
        </div>
        <Transition>
          <div className="flex justify-center items-center mt-48 md:mt-40">
            <div className="max-w-2xl mx-10 rounded-md p-4 custom-card text-black dark:text-white">
              <p>
                You first visited my website on{' '}
                {firstEverLoadTime.toLocaleDateString()} at{' '}
                {firstEverLoadTime.toLocaleTimeString()} and on this first
                visit, you were on the {stats.path} page. Since then, you have
                visited {visits - 1} more times.{' '}
                {visits > 1 && 'Thanks for coming back!'}
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
