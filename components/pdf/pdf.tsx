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
                Relevant Coursework: Information Storage & Retrieval, Parallel Computing, Distributed Systems, Deep Learning and Data Analytics.
              </Text>
              <Text fw={700} span>Bachelor of Computer Science,</Text>
              <Text ml='xs' span>PES University</Text>
              <Text span style={{float: 'right'}}>2016 - 2020</Text>
            </Paper>
            <Paper my="md">
              <Title order={3}>SKILLS</Title>
              <Divider mb='xs' />
              <Grid>
                <Grid.Col pb='2px' span={3}>
                  <Text fw={700}>Languages & Databases</Text>
                </Grid.Col>
                <Grid.Col pb='2px' span={9}>
                  <Text>
                    Python, C++, C, Java, Swift, Bash, SQL, MongoDB
                  </Text>
                </Grid.Col>
                <Grid.Col py='2px' span={3}>
                  <Text fw={700}>Web Development</Text>
                </Grid.Col>
                <Grid.Col py='2px' span={9}>
                  <Text>
                    Node.js, React.js, Next.js, WordPress, PHP
                  </Text>
                </Grid.Col>
                <Grid.Col py='2px' span={3}>
                  <Text fw={700}>ML & Big Data</Text>
                </Grid.Col>
                <Grid.Col py='2px' span={9}>
                  <Text>
                    PyTorch, TensorFlow, Apache Hadoop
                  </Text>
                </Grid.Col>
                <Grid.Col py='2px' span={3}>
                  <Text fw={700}>DevOps & Tools</Text>
                </Grid.Col>
                <Grid.Col py='2px' span={9}>
                  <Text>
                    Docker, Kubernetes, Ansible, Jenkins, Git
                  </Text>
                </Grid.Col>
                <Grid.Col py='2px' span={3}>
                  <Text fw={700}>Soft Skills</Text>
                </Grid.Col>
                <Grid.Col py='2px' span={9}>
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
                  <Text fw={700} span>Student Web Developer</Text>
                  <Text style={{float: 'right'}}>May 2024 - Present</Text>
                </div>
                <div>
                  <Text span>Texas A&M Univerisity College of Veterinary Medicine & Biomedical Sciences</Text>
                  <Text fs="italic" style={{float: 'right'}}>College Station, TX</Text>
                </div>
                <List ml="lg">
                  <List.Item>
                    Helping maintain various multi-sited websites using <Text span fw={600}>WordPress</Text> Content Management System.
                  </List.Item>
                  <List.Item>
                    Using tools like <Text span fw={600}>SiteImprove</Text> and <Text span fw={600}>Google Analytics</Text> to monitor & fix Usability, Accessibility, QA, and SEO issues.
                  </List.Item>
                </List>
              </div>
              <div style={{margin: '8px 0'}}>
                <div>
                  <Text fw={700} span>Machine Learning Engineer</Text>
                  <Text style={{float: 'right'}}>May 2024 - Aug 2024</Text>
                </div>
                <div>
                  <Text span>BrainBit AI</Text>
                  <Text fs="italic" style={{float: 'right'}}>College Station, TX</Text>
                </div>
                <List ml="lg">
                  <List.Item>
                    Designed novel generative diffusion models using <Text span fw={600}>PyTorch</Text> for synthesizing realistic drum sounds from text prompts.
                  </List.Item>
                  <List.Item>
                    Developed and optimized <Text span fw={600}>search algorithms</Text> to improve the retrieval of relevant drum sound samples from the dataset, enhancing the accuracy and speed of sound matching based on user input.
                  </List.Item>
                  <List.Item>
                    Built a comprehensive <Text span fw={600}>300K+</Text> sample text-audio dataset for drum sounds using <Text span fw={600}>Gemini</Text> and <Text span fw={600}>TogetherAI</Text>.
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
                    Led full-stack web development projects using <Text span fw={600}>React</Text>, <Text span fw={600}>Node.js</Text>, and <Text span fw={600}>Python</Text>, deploying via <Text span fw={600}>Docker</Text> and <Text span fw={600}>Kubernetes</Text>, improving user engagement by <Text span fw={600}>40%</Text> and supporting high-traffic search queries.
                  </List.Item>
                  <List.Item>
                    Engineered a comprehensive unit test framework in <Text span fw={600}>Python</Text>, reducing testing cycle time by <Text span fw={600}>60%</Text>, significantly enhancing developer efficiency across multiple teams.
                  </List.Item>
                  <List.Item>
                    Developed and automated a robust <Text span fw={600}>CI/CD</Text> pipeline using <Text span fw={600}>Jenkins</Text>, <Text span fw={600}>Docker</Text>, and <Text span fw={600}>GitLab</Text>, reducing deployment time by <Text span fw={600}>30%</Text> and enhancing release frequency in an <Text span fw={600}>agile</Text> environment.
                  </List.Item>
                  <List.Item>
                    Maintained and expanded automated unit test frameworks, contributing to <Text span fw={600}>25%</Text> reduced testing time and ensuring robust <Text span fw={600}>QA</Text> for production-ready deployments.
                  </List.Item>
                  <List.Item>
                    Leveraged <Text span fw={600}>deep learning</Text> and <Text span fw={600}>natural language processing</Text> (NLP) to analyze <Text span fw={600}>Bugzilla</Text> data & exception’s traceback, automating the bug assignment process with an accuracy of <Text span fw={600}>96%</Text>.
                  </List.Item>
                </List>
              </div>
              {/* <div style={{margin: '8px 0'}}>
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
              </div> */}
            </Paper>
            <Paper my="md">
              <Title order={3}>PROJECTS</Title>
              <Divider mb='xs' />
              <Text fw={700}>Outfit Recommendation System</Text>
              <List ml="lg">
                <List.Item>
                  Implemented a VBPR model trained on the Deep Fashion dataset of over <Text span fw={600}>800K+</Text> diverse fashion images to build a highly personalized outfit <Text span fw={600}>recommendation system</Text>.
                </List.Item>
                <List.Item>
                  Designed and developed an intuitive, responsive user interface in <Text span fw={600}>Next.js</Text> to deliver tailored outfit suggestions, seamlessly integrating real-time weather data for enhanced user experience.
                </List.Item>
              </List>
              <Text fw={700}>Tiny Social Network Service</Text>
              <List ml="lg">
                <List.Item>
                  Built a highly available, scalable, and fault-tolerant social network service using <Text span fw={600}>Google RPC</Text> in <Text span fw={600}>C++</Text>.
                </List.Item>
                <List.Item>
                  Orchestrated <Text span fw={600}>coordination</Text> and <Text span fw={600}>synchronization</Text> across multiple clusters and servers.
                </List.Item>
              </List>
              <Text fw={700}>A Web Application ‘SelfieLessActs’ on AWS EC2 Cloud Platform</Text>
              <List ml="lg">
                <List.Item>
                  Developed a container orchestration system on <Text span fw={600}>AWS EC2</Text> (IaaS), ensuring fault tolerance, load balancing, and autoscaling.
                </List.Item>
                <List.Item>
                  Supported <Text span fw={600}>microservices</Text> for the web application, enhancing its reliability and scalability.
                </List.Item>
              </List>
            </Paper>
              {/* <Text fw={700}>Motion Deblurring using Deep Learning</Text>
              <List ml="lg">
                <List.Item>
                  Created a machine learning model in Tensorflow employing Bottleneck Residual Blocks and Gated Fusion Network.
                </List.Item>
                <List.Item>
                  Achieved a PSNR value of 27.11 with just 8.6 million parameters effectively removing motion-induced blur from images.
                </List.Item>
              </List>
            </Paper> */}
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
                  Led a team of 6 members to achieve <Text span fw={600}>1st Runner-up</Text> in Smart India Hackathon 2019 (Software Edition), outperforming 30+ competing teams nationwide.
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