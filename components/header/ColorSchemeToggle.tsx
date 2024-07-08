'use client';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export function ColorSchemeToggle() {
  const [ theme, setTheme ] = useState<boolean>(true);
  const { setColorScheme } = useMantineColorScheme();
  useEffect(() => {
      const t = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(t);
      setColorScheme(t ? 'dark' : 'light');
    }, []
  )

  return (
    theme ? (
      <ActionIcon
        mx='sm'
        variant='default'
        onClick={() => {
          setTheme(false);
          setColorScheme('light')
        }}>
        <IconSun />
      </ActionIcon>
    ) : (
      <ActionIcon
        mx='sm'
        variant='default'
        color='white'
        onClick={() => {
          setTheme(true);
          setColorScheme('dark')
        }}>
        <IconMoon color='gray' size={18} />
      </ActionIcon>
    )
  );
}
