import {
  IconBrandAnsible,
  IconBrandNextjs,
  IconDeviceImac,
  IconSchool,
  IconSql,
} from "@tabler/icons-react";
import {
  IconBash,
  IconC,
  IconCpp,
  IconGit,
  IconHadoop,
  IconJava,
  IconKube,
  IconNodeJs,
  IconPython,
  IconPytorch,
  IconReact,
  IconTensorflow,
  IconMongodb,
  IconDocker,
  IconJs,
  IconSwift,
  IconJenkins,
} from "./svg/svg";

export const ICONS: { [key: string]: any } = {
  python: IconPython,
  react: IconReact,
  git: IconGit,
  c: IconC,
  next: IconBrandNextjs,
  node: IconNodeJs,
  sql: IconSql,
  mongodb: IconMongodb,
  docker: IconDocker,
  ansible: IconBrandAnsible,
  js: IconJs,
  bash: IconBash,
  cpp: IconCpp,
  hadoop: IconHadoop,
  java: IconJava,
  kubernetes: IconKube,
  pytorch: IconPytorch,
  tensorflow: IconTensorflow,
  swift: IconSwift,
  jenkins: IconJenkins
}

export const TECHNOLOGIES: { [key: string]: string } = {
  python: 'Python',
  react: 'React JS',
  next: 'Next JS',
  node: 'Node JS',
  java: 'Java',
  cpp: 'C++',
  c: 'C',
  hadoop: 'Hadoop',
  tensorflow: 'Tensorflow',
  pytorch: 'PyTorch',
  git: 'Git',
  bash: 'Bash',
  sql: 'SQL',
  mongodb: 'MongoDB',
  docker: 'Docker',
  ansible: 'Ansible',
  kubernetes: 'Kubernetes',
  js: 'JavaScript',
  swift: 'Swift',
  jenkins: 'Jenkins'
}

type TimelineElement = {
  id: number;
  title: string;
  name: string;
  location: string;
  description: string;
  buttonText: string;
  date: string;
  icon: any;
  color: string;
  tech: any[];
  direction: string;
};

export const TIMELINE_ELEMENTS: TimelineElement[] = [
  {
    id: 1,
    title: "Bachelor of Computer Science",
    name: 'PES University',
    location: "Bengaluru, India",
    description: '',
    buttonText: "Details",
    date: "Aug 2016 - May 2020",
    icon: IconSchool,
    color: "blue",
    tech: [
      "python",
      "java",
      "c",
      "js",
      "tensorflow",
      "docker",
      "sql"
    ].map(tech => ({
      name: TECHNOLOGIES[tech],
      icon: ICONS[tech]
    })),
    direction: 'right',
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    name: "Innodata Inc.",
    location: "Noida, India",
    description: "",
    buttonText: "Details",
    date: "Jun 2019 - Jul 2019",
    icon: IconDeviceImac,
    color: "purple",
    tech: [
      "python",
      "tensorflow"
    ].map(tech => ({
      name: TECHNOLOGIES[tech],
      icon: ICONS[tech]
    })),
    direction: 'left',
  },
  {
    id: 3,
    title: "Member of Technical Staff - Intern",
    name: "VMware",
    location: "Bengaluru, India",
    description: "",
    buttonText: "Details",
    date: "Jan 2020 - Jul 2020",
    icon: IconDeviceImac,
    color: "yellow",
    tech: [
      "python",
      "js",
      "node",
      "react",
      "sql",
      "git",
      "jenkins"
    ].map(tech => ({
      name: TECHNOLOGIES[tech],
      icon: ICONS[tech]
    })),
    direction: 'left',
  },
  {
    id: 4,
    title: "Member of Technical Staff - I",
    name: "VMware",
    location: "Bengaluru, India",
    description: "",
    buttonText: "Details",
    date: "Jul 2020 - Jan 2022",
    icon: IconDeviceImac,
    color: "red",
    tech: [
      "python",
      "react",
      "sql",
      "mongodb",
      "docker",
      "bash",
      "git"
    ].map(tech => ({
      name: TECHNOLOGIES[tech],
      icon: ICONS[tech]
    })),
    direction: 'left',
  },
  {
    id: 5,
    title: "Member of Technical Staff - II",
    name: "VMware",
    location: "Bengaluru, India",
    description: "",
    buttonText: "Details",
    date: "Jan 2022 - Jul 2023",
    icon: IconDeviceImac,
    color: "orange",
    tech: [
      "python",
      "react",
      "ansible",
      "mongodb",
      "docker",
      "kubernetes",
      "git"
    ].map(tech => ({
      name: TECHNOLOGIES[tech],
      icon: ICONS[tech]
    })),
    direction: 'left',
  },
  {
    id: 6,
    title: "Master of Computer Science",
    name: "Texas A&M University",
    location: "College Station, TX",
    description: "",
    buttonText: "Details",
    date: "Aug 2023 - PRESENT",
    icon: IconSchool,
    color: "orange",
    tech: [
      "python",
      "cpp",
      "tensorflow",
      "next",
      "git",
      "hadoop"
    ].map(tech => ({
      name: TECHNOLOGIES[tech],
      icon: ICONS[tech]
    })),
    direction: 'right',
  },
  {
    id: 7,
    title: "Student Technician (Sr. Grader)",
    name: "Texas A&M University",
    location: "College Station, TX",
    description: "",
    buttonText: "Details",
    date: "Jan 2024 - May 2024",
    icon: IconDeviceImac,
    color: "orange",
    tech: [
      "python",
      "java",
      "bash",
      "git"
    ].map(tech => ({
      name: TECHNOLOGIES[tech],
      icon: ICONS[tech]
    })),
    direction: 'left',
  },
  {
    id: 8,
    title: "Machine Learning Engineer",
    name: "BrainBit AI",
    location: "College Station, TX",
    description: "",
    buttonText: "Details",
    date: "May 2024 - Aug 2024",
    icon: IconDeviceImac,
    color: "orange",
    tech: [
      "python",
      "tensorflow",
      "pytorch",
      "git"
    ].map(tech => ({
      name: TECHNOLOGIES[tech],
      icon: ICONS[tech]
    })),
    direction: 'left',
  },
].reverse();
