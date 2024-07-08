"use client"

import { Group, ActionIcon } from '@mantine/core';
import { Avatar } from '@mantine/core';
import classes from './header.module.css';
import { IconBrandGithubFilled, IconBrandLinkedin } from '@tabler/icons-react';
import { ColorSchemeToggle } from './ColorSchemeToggle';
import { IconGithub } from '../svg/svg';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/projects', label: 'Projects' },
  { link: '/resume', label: 'Resume' }
];

export function Header() {

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
          <Avatar
            component='a'
            href='https://vaibhavpundir97.github.io'
            color="violet"
            radius="xl"
          >
            VP
          </Avatar>
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
            <ColorSchemeToggle />
          </Group>
        </Group>

      </div>
    </header>
  );
}