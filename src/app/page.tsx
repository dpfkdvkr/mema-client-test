'use client';
import Button from '@/components/Button';

export default function Home() {
  const onClick = () => {
    console.log('a');
  };
  return (
    <div>
      <Button name="버튼" onClick={onClick} />
    </div>
  );
}
