import { TextInput, Button, Group } from '@mantine/core';
import { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Group>
        <TextInput
          placeholder="Enter a word to search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: 1 }}
          size="md"
          radius="md"
        />
        <Button type="submit" size="md" radius="md" color="green">
          Search
        </Button>
        {searchTerm && (
          <Button 
            variant="light" 
            color="gray" 
            onClick={handleClear}
            size="md"
            radius="md"
          >
            Clear
          </Button>
        )}
      </Group>
    </form>
  );
};

export default SearchBox; 