import Button from '@mui/joy/Button';
import Link from 'next/link';

export default function ButtonLink({ text, href }) {
  return (
    <Button variant='solid'>
      <Link href={href}>{text}</Link>
    </Button>
  );
}
