import { Container } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { Header } from '@/components/Header/Header';

export default function HomePage() {
  return (
    <>
      <Container>
        <Header />
        <Welcome />
      </Container>
    </>
  );
}
