'use client';

import { Button, Flex, Group } from '@mantine/core';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { Logo } from '../Logo/Logo';

export function Header() {
  const session = useSession();

  return (
    <header>
      <nav>
        <Flex mt={24} mb={48} align="center" justify="space-between" direction="row">
          <Logo />
          <Group>
            <ColorSchemeToggle />
            <Link href="http://localhost:3000/signin">
              {!session.data && (
                <Button variant="filled" color="violet">
                  Войти
                </Button>
              )}
            </Link>
            {session.data && (
              <>
                <Link href={`${session.data.user?.name}`}>
                  <Button variant="outline" color="violet">
                    Профиль
                  </Button>
                </Link>
                <Button onClick={() => signOut()} variant="filled" color="violet">
                  Выйти
                </Button>
              </>
            )}
          </Group>
        </Flex>
      </nav>
    </header>
  );
}
