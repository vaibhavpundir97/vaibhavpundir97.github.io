"use client"

import { Title, Group, Text, rem, useMantineTheme, ActionIcon, Paper } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';
import Typewriter from 'typewriter-effect';
import classes from './page.module.css';
import { Header } from '@/components/header/header';
import { IconGithub, IconHi } from '@/components/svg/svg';
import { TechStack } from '@/components/techstack/techstack';

export default function Home() {
  const theme = useMantineTheme();

  return (
    <>
      <Header />
      <Paper mx='xl' className={classes.inner}>
        <div className={classes.content}>
          <IconHi
            style={{ width: rem(50), height: rem(50) }}
            stroke={2}
            color={theme.colors.blue[6]}
          />
          <Title className={classes.title}>
            I'm <span className={classes.highlight}>Vaibhav Pundir</span>
          </Title>
          <Text my='md' component='div' fw={700} size='xl'>
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Machine Learning Enthusiast",
                  "Web Developer",
                  "DevOps Engineer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
              }}
            />
          </Text>

          <Text mt={30} fw={500}>
            I'm a Master of Computer Science student at Texas A&M University with a passion for developing innovative software solutions. With a strong foundation in full-stack development and machine learning, I thrive on turning complex problems into elegant solutions.
          </Text>

          <Group mt={30}>
            <ActionIcon
              component='a'
              href='https://github.com/vaibhavpundir97'
              target='_blank'
              variant='outline'
              color='gray'
              size='lg'
            >
              <IconGithub style={{width: 24, height: 24}} />
            </ActionIcon>
            <ActionIcon
              component='a'
              href='https://www.linkedin.com/in/vaibhavpundir97'
              target='_blank'
              variant='gradient'
              gradient={{ from: 'indigo', to: 'blue', deg: 90 }}
              size='lg'
            >
              <IconBrandLinkedin />
            </ActionIcon>
          </Group>
        </div>
        <TechStack />
      </Paper>
    </>
  );
}