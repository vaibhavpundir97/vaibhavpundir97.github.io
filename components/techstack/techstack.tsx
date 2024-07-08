import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Group,
  useMantineTheme,
} from '@mantine/core';
import classes from './techstack.module.css';
import { ICONS, TECHNOLOGIES } from '../data';

const techstack = Object.entries(TECHNOLOGIES).map(([key, value]) => ({
  title: value,
  icon: ICONS[key],
}));

export function TechStack() {
  const theme = useMantineTheme();

  const items = techstack.map((item) => (
    <UnstyledButton p='md' key={item.title} className={classes.item}>
      <item.icon size="2rem" style={{ width: 64, height: 64 }} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card mt='md' withBorder radius="md">
      <Group justify="space-between">
        <Text fw={500}>Tech Stack</Text>
      </Group>
      <SimpleGrid cols={6} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}