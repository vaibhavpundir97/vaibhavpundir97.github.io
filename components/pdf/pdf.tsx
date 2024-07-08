import { Anchor, Center, Divider, Grid, List, Paper, Text, Title } from "@mantine/core";
import { IconDiamonds } from "@tabler/icons-react";

export function PDF() {
  return (
    <>
      <Grid>
        <Grid.Col span={2} />
        <Grid.Col span={8}>
          <Paper radius='xs' withBorder p='md'>
            <Center>
              <Title order={1}>
                Vaibhav Pundir
              </Title>
            </Center>
            <Center>
              <Text>+1(979) 635-0480</Text>
              <IconDiamonds style={{margin: '0 8px'}} size={10} />
              <Text>College Station, TX</Text>
            </Center>
            <Center>
              <Anchor
                href="mailto:vaibhav.pundir97@gmail.com"
                rel="noopener noreferer nofollow"
              >
                vaibhav.pundir97@gmail.com
              </Anchor>
              <IconDiamonds style={{margin: '0 8px'}} size={10} />
              <Anchor
                href="https://www.linkedin.com/in/vaibhavpundir97"
                target="_blank"
              >
                linkedin.com/in/vaibhavpundir97
              </Anchor>
              <IconDiamonds style={{margin: '0 8px'}} size={10} />
              <Anchor
                href="https://github.com/vaibhavpundir97"
                target="_blank"
              >
                github.com/vaibhavpundir97
              </Anchor>
              <IconDiamonds style={{margin: '0 8px'}} size={10} />
              <Anchor
                href="https://vaibhavpundir97.github.io"
                target="_blank"
              >
                vaibhavpundir97.github.io
              </Anchor>
            </Center>
            <Paper my="md">
              <Title order={3}>EDUCATION</Title>
              <Divider mb='xs' />
              <Text fw={700} span>Master of Computer Science,</Text>
              <Text ml='xs' span>Texas A&M University</Text>
              <Text span style={{float: 'right'}}>Expected 2025</Text>
              <Text>
                Relevant Coursework: Information Storage & Retrieval, Deep Learning, and Distributed Processing Systems.
              </Text>
              <Text fw={700} span>Bachelor of Computer Science,</Text>
              <Text ml='xs' span>PES University</Text>
              <Text span style={{float: 'right'}}>2016 - 2020</Text>
            </Paper>
            <Paper my="md">
              <Title order={3}>SKILLS</Title>
              <Divider mb='xs' />
              <Grid>
                <Grid.Col span={3}>
                  <Text fw={700}>Technical Skills</Text>
                </Grid.Col>
                <Grid.Col span={9}>
                  <Text>
                    Python, Java, C++, C, Bash, PyTorch, Tensorflow, Node JS, React JS, Next JS, SQL, MongoDB, Docker, Kubernetes, Ansible, Hadoop, Git
                  </Text>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Text fw={700}>Soft Skills</Text>
                </Grid.Col>
                <Grid.Col span={9}>
                  <Text>
                    Problem-solving, Attention to detail, Teamwork, Adaptability
                  </Text>
                </Grid.Col>
              </Grid>
            </Paper>
            <Paper my="md">
              <Title order={3}>EXPERIENCE</Title>
              <Divider mb='xs' />
              <div>
                <div>
                  <Text fw={700} span>Machine Learning Engineer</Text>
                  <Text style={{float: 'right'}}>May 2024 - PRESENT</Text>
                </div>
                <div>
                  <Text span>BrainBit AI</Text>
                  <Text fs="italic" style={{float: 'right'}}>College Station, TX</Text>
                </div>
                <List ml="lg">
                  <List.Item>
                    Built a comprehensive dataset of text-audio pairs for drum sounds, encompassing 100K+ samples, to train the diffusion models.
                  </List.Item>
                  <List.Item>
                    Developed state-of-the-art diffusion models for generating realistic drum sounds from text prompts.
                  </List.Item>
                </List>
              </div>
              <div style={{margin: '8px 0'}}>
                <div>
                  <Text fw={700} span>Member of Technical Staff - II</Text>
                  <Text style={{float: 'right'}}>Jan 2020 - Jul 2023</Text>
                </div>
                <div>
                  <Text span>VMware Software India</Text>
                  <Text fs="italic" style={{float: 'right'}}>Bengaluru, INDIA</Text>
                </div>
                <List ml="lg">
                  <List.Item>
                    Spearheaded full-stack web development projects using React, Node.js, and Python, deployed via Docker containers, which enhanced UI/UX and resulted in a 40% increase in user engagement.
                  </List.Item>
                  <List.Item>
                    Facilitated training for 3 new hires over 6 months, providing continuous guidance, mentorship on best practices, and constructive feedback to ensure their successful integration into the team.
                  </List.Item>
                  <List.Item>
                    Engineered a comprehensive unit test framework in Python, reducing testing cycle time by 60%, significantly enhancing developer efficiency across multiple teams.
                  </List.Item>
                </List>
              </div>
              <div style={{margin: '8px 0'}}>
                <div>
                  <Text fw={700} span>Software Engineering Intern</Text>
                  <Text style={{float: 'right'}}>Jun 2019 - Jul 2019</Text>
                </div>
                <div>
                  <Text span>Innodata Inc.</Text>
                  <Text fs="italic" style={{float: 'right'}}>Noida, INDIA</Text>
                </div>
                <List ml="lg">
                  <List.Item>
                    Built an NLP framework in Tensorflow, transcribing recorded meeting audio to text with 87% accuracy.
                  </List.Item>
                  <List.Item>
                    Engineered an ML model for text summarization, resulting in a 15% improvement in accuracy.
                  </List.Item>
                </List>
              </div>
            </Paper>
            <Paper my="md">
              <Title order={3}>PROJECTS</Title>
              <Divider mb='xs' />
              <Text fw={700}>Outfit Recommendation System</Text>
              <List ml="lg">
                <List.Item>
                  Utilized the Deep Fashion dataset of over 800K diverse fashion images to construct an outfit recommendation system.
                </List.Item>
                <List.Item>
                  Developed a VBPR model to personalize recommendations using implicit user feedback and integrated chatGPT for weather-based enhancements.
                </List.Item>
              </List>
              <Text fw={700}>Tiny Social Network Service</Text>
              <List ml="lg">
                <List.Item>
                  Built a highly available, scalable, and fault-tolerant social network service using Google RPC in C++.
                </List.Item>
              </List>
              <Text fw={700}>Motion Deblurring using Deep Learning</Text>
              <List ml="lg">
                <List.Item>
                  Created a machine learning model in Tensorflow employing Bottleneck Residual Blocks and Gated Fusion Network.
                </List.Item>
                <List.Item>
                  Achieved a PSNR value of 27.11 with just 8.6 million parameters effectively removing motion-induced blur from images.
                </List.Item>
              </List>
            </Paper>
            <Paper my="md">
              <Title order={3}>EXTRA-CURRICULAR ACTIVITIES</Title>
              <Divider mb='xs' />
              <List ml="lg">
                <List.Item>
                  Active member of the Honor Council at the Aggie Honor System Office.
                </List.Item>
              </List>
            </Paper>
            <Paper my="md">
              <Title order={3}>LEADERSHIP</Title>
              <Divider mb='xs' />
              <List ml="lg">
                <List.Item>
                  Led a team of 6 members to achieve 1st Runner-up in Smart India Hackathon 2019 (Software Edition), outperforming 30+ competing teams nationwide.
                </List.Item>
              </List>
            </Paper>
          </Paper>
        </Grid.Col>
        <Grid.Col span={2} />
      </Grid>
    </>
  )
}