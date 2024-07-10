'use client';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export function ColorSchemeToggle() {
  const [ theme, setTheme ] = useState<string>('dark');
  const { setColorScheme } = useMantineColorScheme();
  useEffect(() => {
      if(window.matchMedia("(prefers-color-scheme: light)").matches) {
        setColorScheme('light');
        setTheme('light')
      }
    }, []
  )

  return (
    <ActionIcon
      mx='sm'
      variant='outline'
      color={theme == 'dark' ? 'yellow' : 'blue'}
      onClick={() => {
        setTheme(theme == 'dark' ? 'light' : 'dark');
        setColorScheme(theme == 'dark' ? 'light' : 'dark')
      }}>
      {theme == 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
    </ActionIcon>
  );
}
