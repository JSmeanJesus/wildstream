import { Box, Text } from '@mantine/core';
import VideoItem from '../VideoItem/VideoItem';

//Mock
const videos = [
  { id: 1, title: 'Пост 1', content: 'Содержание поста 1' },
  { id: 2, title: 'Пост 2', content: 'Содержание поста 2' },
  { id: 3, title: 'Пост 3', content: 'Содержание поста 3' },
];

export default function VideoQueue() {
  return (
    <Box>
      <Text>Очередь заказаных видео</Text>
      {/* add map */}
      {videos.map((video) => (
        <VideoItem key={video.id} videosUrl={video.id} />
      ))}
    </Box>
  );
}

// videoName, videoDuration, videoViews, videoImage, videoDescription
