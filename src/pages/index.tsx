import { Button } from '@radix-ui/themes';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <h1>Main page</h1>
      <Button color="gray" onClick={() => router.push('/post/1')}>
        Post1
      </Button>
    </>
  );
}
