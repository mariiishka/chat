import {type Metadata} from 'next';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'Weather app'
};

export default function Page() {
  return (
    <div>
      <Header />
    </div>
  );
}
