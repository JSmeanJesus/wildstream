'use client';

import { Button } from '@mantine/core';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  return (
    <Button
      size="md"
      variant="outline"
      color="violet"
      onClick={() => signIn('google', { callbackUrl })}
    >
      Войти через гугл
    </Button>
  );
};
