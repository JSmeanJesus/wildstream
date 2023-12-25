'use client';

import React, { useState } from 'react';
import { Select, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const [selectedTheme, setSelectedTheme] = useState('light');

  const handleThemeChange = (theme: any) => {
    setSelectedTheme(theme);

    if (theme === 'light' || theme === 'dark') {
      setColorScheme(theme);
    } else {
      // theme === 'auto';
      // setColorScheme(theme);
    }
  };

  return (
    <Group justify="center">
      <Select
        placeholder="Change theme"
        data={['light', 'dark', 'auto']}
        value={selectedTheme}
        onChange={(value) => handleThemeChange(value)}
      />
    </Group>
  );
}
