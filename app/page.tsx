import { Container, Stack } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { Search } from '@/components/Search/Search';

export default function HomePage() {
  return (
    <>
      <Container>
        <Stack align="center">
          <Search />
          <Welcome />
        </Stack>
      </Container>
    </>
  );
}
