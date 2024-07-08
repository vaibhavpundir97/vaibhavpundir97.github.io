"use client"

import { Button, Center } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { Header } from '@/components/header/header';
import { PDF } from '@/components/pdf/pdf';
import Link from 'next/link';

export default function Resume() {
  return (
    <>
      <Header />
      <Center m='md'>
        <Link
          href='/Vaibhav_Pundir_Resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          locale={false}
          download
          >
            <Button rightSection={<IconDownload size={14} />}>
              Download
            </Button>
        </Link>
      </Center>
      <PDF />
      <Center m='md'>
        <Link
          href='/Vaibhav_Pundir_Resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          locale={false}
          download
          >
            <Button rightSection={<IconDownload size={14} />}>
              Download
            </Button>
        </Link>
      </Center>
    </>
  );
}
