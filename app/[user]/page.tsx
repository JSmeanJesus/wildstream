//testing ui, not prod version

'use client';

import { Avatar, Badge, Box, Text, Stack, Group, Flex, Container } from '@mantine/core';
import { IconBuilding, IconUsers } from '@tabler/icons-react';
import { notFound } from 'next/navigation';
//if (!profile.user) return notFound();

const avatarUrl = 'https://picsum.photos/200/300'; //Mock

export const dynamic = 'force-dynamic';

const Profile = () => (
  <Container>
    <Stack>
      <Box>
        <Group style={{ position: 'relative' }}>
          <Badge
            gradient={{ from: 'blue.5', to: 'violet.5' }}
            size="md"
            variant="gradient"
            style={{
              position: 'absolute',
              top: '3%',
              right: '3%',
            }}
          >
            <Flex align="center">Premium</Flex>
          </Badge>

          <Flex gap="xl">
            <Avatar
              alt="profileuserlogin"
              radius="md"
              src={avatarUrl as string}
              style={{
                height: '150px',
                width: '150px',
              }}
            />

            <Flex align="flex-start" direction="column" gap="5px">
              <Text fw={700} mt="xs" size="xl">
                profileuserlogin
              </Text>

              <Flex align="center" fz="xs" gap="3px">
                <IconUsers size="12px" stroke={1.5} />
                <Text>followers: </Text>
                <Text>237236273</Text>
              </Flex>
              <Flex align="center" fz="xs" gap="3px">
                <Text size="sm">Hey there, fellow gamers and friends! 👋</Text>
              </Flex>
            </Flex>
          </Flex>
        </Group>
      </Box>
    </Stack>
  </Container>
);

export default Profile;
