import { Input } from '@mantine/core';
//import classes from './Search.module.css';

interface SearchProps {
  className?: string;
  children?: React.ReactNode;
}

export const Search: React.FC<SearchProps> = () => (
  <Input variant="unstyled" size="xl" radius="xs" placeholder="Введите имя стримера" />
);
