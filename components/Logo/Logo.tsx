import { Title } from '@mantine/core';
import Link from 'next/link';
import styles from './Logo.module.css';

export function Logo() {
  return (
    <Title order={1} size="h2">
      <Link className={styles.Logo} href="/">
        Wildstream
      </Link>
    </Title>
  );
}
