'use client';

import { Button, Flex, Input, Text } from '@mantine/core';
import { GoogleButton } from '@/components/GoogleButton/GoogleButton';

export function LoginForm() {
  return (
    <form>
      <Text c="violet" size="xl">
        Авторизация
      </Text>
      <Input
        required
        type="text"
        variant="unstyled"
        size="md"
        radius="xs"
        placeholder="Введите логин"
      />
      <Input
        required
        type="password"
        variant="unstyled"
        size="md"
        radius="xs"
        placeholder="Введите пароль"
      />
      <Flex>
        <Button size="md" variant="outline" color="violet" type="submit">
          Войти
        </Button>
        <GoogleButton />
      </Flex>
    </form>
  );
}
