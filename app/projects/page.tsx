"use client"

import {
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconShirt, IconSocial, IconZoom } from '@tabler/icons-react';
import classes from './page.module.css';
import { Header } from '@/components/header/header';
import { IconDeepLearning, IconFileSystem, IconLunar, IconSelfie } from '@/components/svg/svg';

const projects = [
  {
    title: 'Outfit Recommendation System',
    description:
      'Developed a VBPR model trained on 800K+ images from the Deep Fashion dataset by analyzing implicit user feedback to personalize recommendations. Additionally, chatGPT was integrated to enhance the recommendations based on the weather of the day.',
    icon: IconShirt,
  },
  {
    title: 'Vanilla File System',
    description:
      'Implemented a simple file system from scratch by developing a frame & page-table manager, virtual memory management, and scheduling.',
    icon: IconFileSystem
  },
  {
    title: 'Tiny Social Network Service',
    description:
      'Built a highly available, scalable, and fault-tolerant social network service using Google RPC in C++. Orchestrated coordination and synchronization across multiple clusters and servers.',
    icon: IconSocial,
  },
  {
    title: 'Motion Deblurring Using DL',
    description:
      'Created a machine learning model in Tensorflow employing Bottleneck Residual Blocks and Gated Fusion Network. Achieved a PSNR value of 27.11 with just 8.6 million parameters effectively removing motion-induced blur from images.',
    icon: IconDeepLearning,
  },
  {
    title: 'SelfieLess Acts',
    description:
      'Developed a web application on AWS EC2 cloud platform. Built a container orchestration system on AWS EC2, ensuring fault tolerance, load balancing, and autoscaling. Supported microservices for the web application, enhancing its reliability and scalability.',
    icon: IconSelfie
  },
  {
    title: 'Lunar-Lander Game',
    description:
      'Trained a model using Deep Recurrent Q-Learning in PyTorch achieving an accuracy of 86% after 10K epochs.',
    icon: IconLunar
  },
  {
    title: 'Image Scaling using Gesture Recognition',
    description:
      'Analyzed hand signs to zoom in & zoom out of images using Convolutional Neural Networks with an accuracy of 97%.',
    icon: IconZoom
  }
];

export default function Projects() {
  const theme = useMantineTheme();
  const features = projects.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <>
      <Header />
      <Container size="lg" py="lg">
        {/* <Group justify="center">
          <Badge variant="filled" size="lg">
            Best company ever
          </Badge>
        </Group>

        <Title order={2} className={classes.title} ta="center" mt="sm">
          Integrate effortlessly with any technology stack
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
          hunger drives it to try biting a Steel-type Pokémon.
        </Text> */}

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    </>
  );
}