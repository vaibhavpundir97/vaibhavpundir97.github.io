"use client"

import { ActionIcon, Paper, Text, Tooltip, useMantineContext, useMantineTheme } from "@mantine/core";
import { TIMELINE_ELEMENTS } from "@/components/data";
import './timeline.css';
import { IconInfoCircle } from "@tabler/icons-react";

export function Timeline({ defaultColor }: { defaultColor: string }) {
  return (
    <Paper>
      {TIMELINE_ELEMENTS.map((element) => {

        const color = defaultColor || `bg-${element.color}-500`;

        return (
          <div key={element.id} className="flex m-4 relative">
            {/* <div
              className={`${color} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}
            ></div>
            <div
              className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}
            ></div> */}
            <div className="hidden items-start pt-0.5 relative sm:flex">
              {/* <div className="w-4/5 text-gray-500">{element.date}</div> */}
              <TimelineItem
                element={element}
                visibility={element.direction === 'left' ? 'visible': 'invisible'}
              />
              <div
                className={
                  `${element.direction === 'left' ? 'visible': 'invisible'}
                  ${color} h-1 w-12 translate-y-[1.875rem] opacity-30`
                }
              />
              {
                element.id !== TIMELINE_ELEMENTS[TIMELINE_ELEMENTS.length - 1].id &&
                  <div className={`${color} w-1 h-full translate-x-[1.875rem] translate-y-10 opacity-30`} />
              }
              <ActionIcon
                variant="gradient"
                gradient={{from: 'violet', to: 'cyan', deg: 90}}
                size='64'
                className="-translate-x-1"
              >
                <element.icon className={`p-1 rounded-lg z-20`} width={56} height={56} />
              </ActionIcon>
              <div
                className={
                  `${element.direction === 'right' ? 'visible': 'invisible'}
                  ${color} h-1 w-12 -translate-x-1 translate-y-[1.875rem] opacity-30`
                }
              />
              {/* <div
                className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}
              ></div> */}
            </div>
            <div className="-translate-x-1">
              <TimelineItem
                element={element}
                visibility={element.direction === 'right' ? 'visible': 'invisible'}
              />
            </div>
          </div>
        );
      })}
    </Paper>
  );
}

function TimelineItem({ element, visibility }: { element: any, visibility: string }) {

  // const theme = useMantineTheme();
  // const { colorScheme } = useMantineContext();
  // console.log(colorScheme == 'dark' ? theme.colors.gray[9] : theme.colors.indigo[0])

  return (
    <Paper
      // style={{backgroundColor: colorScheme == 'dark' ? theme.colors.gray[9] : theme.colors.indigo[0]}}
      className={`${visibility} border border-gray-600 rounded-lg px-8 py-4 w-full text-center z-10 sm:w-96`}
    >
      <Text lh={1.1} size='xl'>
        {element.title}
      </Text>
      <Text size="lg">{element.name}</Text>
      <Text size="sm">{element.location}</Text>
      <Text size="xs">{element.date}</Text>
      {/* <div className="mb-4 text-left">{element.description}</div> */}
      <Paper style={{background: 'inherit'}} my='md' className="flex flex-wrap justify-center">
        {element.tech.map((tech: any, index: string) => {
          return (
            <Tooltip key={`${index}`} label={tech.name}>
              <span style={{margin: '0 8px'}}>
                <tech.icon style={{ width: 24, height: 24 }} />
              </span>
            </Tooltip>
          );
        })}
      </Paper>
      {/* <a
        className={`${color} text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white`}
      >
        {element.buttonText}
      </a> */}
      {/* <ActionIcon
        variant="gradient"
        radius='xl'
        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
      >
        <IconInfoCircle />
      </ActionIcon> */}
    </Paper>
  )

}