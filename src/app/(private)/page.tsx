import {ContractEditor} from '@/widgets/contract-editor';
import {type Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Home'
};

export default function Home() {
  return (
    <>
      <ContractEditor />
    </>
  );
}
