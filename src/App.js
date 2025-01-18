import { useState } from 'react';
import { Container, Title, LoadingOverlay, Alert, Paper, Text } from '@mantine/core';
import SearchBox from './components/SearchBox';
import WordDefinition from './components/WordDefinition';
import { fetchWordDefinition } from './services/dictionaryApi';

function App() {
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = async (word) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWordDefinition(word);
      setWordData(data);
      setSearchHistory(prev => [word, ...prev.filter(w => w !== word)].slice(0, 5));
    } catch (err) {
      setError('Word not found or an error occurred. Please try again.');
      setWordData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size="lg" py="xl">
      <Paper shadow="xs" p="md" mb="xl" radius="md">
        <Title order={1} align="center" mb="xl">
          Dictionary Word Lookup
        </Title>
        
        <SearchBox onSearch={handleSearch} />
        
        {searchHistory.length > 0 && (
          <Text size="sm" color="dimmed" mt="sm">
            Recent searches: {searchHistory.join(', ')}
          </Text>
        )}
      </Paper>
      
      <div style={{ position: 'relative', minHeight: '200px' }}>
        <LoadingOverlay visible={loading} />
        
        {error && (
          <Alert color="red" title="Error" variant="filled">
            {error}
          </Alert>
        )}
        
        {wordData && !loading && !error && <WordDefinition data={wordData} />}
      </div>
    </Container>
  );
}

export default App; 