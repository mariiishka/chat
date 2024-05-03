import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'About me',
  description: 'Information about me'
};

export default function Page() {
  return (
    <div>
      <div className="flex gap-4 flex-wrap"></div>
    </div>
  );
}
