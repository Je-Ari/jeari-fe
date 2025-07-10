import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ClubCard from './components/ClubCard';
import Filter from './components/Filter';
import { clubs as mockClubs } from './mock/clubs';
import type { Club } from './types';

function App() {
  const [clubs] = useState<Club[]>(mockClubs);
  const [filteredClubs, setFilteredClubs] = useState<Club[]>(clubs);

  const allTags = [...new Set(clubs.flatMap(club => club.tags))];

  const handleFilterChange = (recruiting: boolean, tags: string[]) => {
    let updatedClubs = clubs;

    if (recruiting) {
      updatedClubs = updatedClubs.filter(club => club.isRecruiting);
    }

    if (tags.length > 0) {
      updatedClubs = updatedClubs.filter(club => tags.every(tag => club.tags.includes(tag)));
    }

    setFilteredClubs(updatedClubs);
  };

  return (
    <div className="min-h-screen text-center">
      <Header />
      <main className="p-4">
        <Filter allTags={allTags} onFilterChange={handleFilterChange} />
        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredClubs.map(club => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
