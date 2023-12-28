'use client';

import { Container, Stack } from '@mantine/core';
import Profile from '@/components/Profile/Profile';
import VideoQueue from '@/components/VideoQueue/VideoQueue';
import VideoInfo from '@/services/getVideoData';
//if (!profile.user) return notFound();
export const dynamic = 'force-dynamic';

export default function UserPage() {
  return (
    <Container>
      <Stack>
        <Profile />
        <VideoQueue />
        <VideoInfo />
      </Stack>
    </Container>
  );
}
