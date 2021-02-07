import { useRouter } from 'next/router';

export default function SurveyForm() {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <div>
      <iframe
        src={`https://docs.google.com/forms/d/${pid}/viewform?embedded=true`}
        width={640}
        height={692}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Loading… lscreen>
      </iframe>
    </div>
  );
}
