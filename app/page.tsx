import ConcertsStrip from './components/concertsStrip';
import Concerts from './components/concertsStrip';

export default function Page() {
  return (
    <div className="h-full flex items-center lg:items-end justify-end absolute inset-0 lg:relative">
      <ConcertsStrip />
    </div>
  );
}
