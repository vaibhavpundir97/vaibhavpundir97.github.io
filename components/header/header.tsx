"use client"

import { Group, ActionIcon, Text, useMantineColorScheme } from '@mantine/core';
import classes from './header.module.css';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconGithub } from '../svg/svg';
import { useEffect } from 'react';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/projects', label: 'Projects' },
  { link: '/resume', label: 'Resume' }
];

export function Header() {

  const { setColorScheme } = useMantineColorScheme();
  useEffect(() => {
      setColorScheme('dark');
    }, []
  )

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <a className={classes.link} href='https://vaibhavpundir97.vercel.app/'>
            <Text fw={600}>{'<VP />'}</Text>
          </a>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
            <ActionIcon
              component='a'
              href='https://github.com/vaibhavpundir97'
              target='_blank'
              variant='outline'
              color='gray'
              mx='sm'
            >
              <IconGithub style={{width: 20, height: 20}} />
            </ActionIcon>
            <ActionIcon
              component='a'
              href='https://www.linkedin.com/in/vaibhavpundir97'
              target='_blank'
              variant='gradient'
              mx='sm'
                gradient={{ from: 'indigo', to: 'blue', deg: 90 }}
            >
              <IconBrandLinkedin />
            </ActionIcon>
            {/* <ColorSchemeToggle /> */}
          </Group>
        </Group>

      </div>
    </header>
  );
}