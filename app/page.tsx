import { Container } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { Search } from '@/components/Search/Search';

export default function HomePage() {
  return (
    <>
      <Container>
        <Welcome />
        <Search />
      </Container>
    </>
  );
}
