'use client';

import { Container, Stack } from '@mantine/core';
import { LoginForm } from '@/components/LoginForm/LoginForm';

export default function SignIn() {
  return (
    <Container>
      <Stack align="center">
        <LoginForm />
      </Stack>
    </Container>
  );
}
