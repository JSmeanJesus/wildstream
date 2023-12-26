import { Button, Flex, Group, Title } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
//import classes from './Header.module.css';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const isAuth = false; //Mock

export const Header: React.FC<HeaderProps> = () => (
  <header>
    <Flex m={24} align="center" justify="space-between" direction="row">
      <Title order={1} size="h4">
        Wildstream
      </Title>
      <Group>
        <ColorSchemeToggle />
        <Button variant="filled" color="violet">
          {isAuth ? 'Выйти' : 'Войти'}
        </Button>
      </Group>
    </Flex>
  </header>
);
