import {useRouter} from 'next/router';

export default function Article() {
  const router = useRouter();
  const {pid} = router.query;
  return (
    <div>
      {pid}
    </div>
  );
}

