import { Card, Text, Title, List, Button, Stack, Group, Badge } from '@mantine/core';
import { IconVolume } from '@tabler/icons-react';

const WordDefinition = ({ data }) => {
  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack spacing="md">
        <Group justify="space-between">
          <Title order={2}>{data.word}</Title>
          {data.phonetics.some(p => p.audio) && (
            <Badge color="green" variant="light">
              Has Audio
            </Badge>
          )}
        </Group>

        {data.phonetics.map((phonetic, index) => (
          <Group key={index} spacing="md">
            {phonetic.text && (
              <Text fw={500} color="green">
                {phonetic.text}
              </Text>
            )}
            {phonetic.audio && (
              <Button
                variant="light"
                size="sm"
                onClick={() => playAudio(phonetic.audio)}
                leftSection={<IconVolume size={16} />}
                color="green"
              >
                Play Audio
              </Button>
            )}
          </Group>
        ))}

        {data.origin && (
          <div>
            <Title order={4}>Origin:</Title>
            <Text color="dimmed">{data.origin}</Text>
          </div>
        )}

        {data.meanings.map((meaning, index) => (
          <Card key={index} withBorder padding="sm">
            <Title order={4} color="green">
              {meaning.partOfSpeech.charAt(0).toUpperCase() +
                meaning.partOfSpeech.slice(1)}
            </Title>
            
            <List spacing="xs" mt="sm">
              {meaning.definitions.map((def, idx) => (
                <List.Item key={idx}>
                  <Text>{def.definition}</Text>
                  {def.example && (
                    <Text color="dimmed" size="sm" mt={4}>
                      Example: "{def.example}"
                    </Text>
                  )}
                  {def.synonyms?.length > 0 && (
                    <Group spacing={4} mt={4}>
                      <Text size="sm" color="dimmed">Synonyms:</Text>
                      {def.synonyms.map((syn, synIdx) => (
                        <Badge 
                          key={synIdx} 
                          size="sm" 
                          variant="dot"
                        >
                          {syn}
                        </Badge>
                      ))}
                    </Group>
                  )}
                </List.Item>
              ))}
            </List>
          </Card>
        ))}
      </Stack>
    </Card>
  );
};

export default WordDefinition; 