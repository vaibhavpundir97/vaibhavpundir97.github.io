import { Center } from "@mantine/core";
import { Header } from "@/components/header/header";
import { Timeline } from "@/components/timeline/timeline";

export default function About() {
  return (
    <>
      <Header />
        <Center>
          <Timeline defaultColor="bg-cyan-500" />
        </Center>
    </>
  );
}
