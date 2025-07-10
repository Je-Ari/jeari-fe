import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ClubCard from './components/ClubCard';
import Filter from './components/Filter';
import Carousel from './components/Carousel'; // Carousel 컴포넌트 import
import Footer from './components/Footer'; // Footer 컴포넌트 import
import { clubs as mockClubs } from './mock/clubs';
import { carouselImages } from './mock/carousel'; // Carousel 이미지 데이터 import
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
    <div className="flex min-h-screen flex-col text-center">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-grow p-4 pt-20">
        <Carousel images={carouselImages} /> {/* Carousel 컴포넌트 추가 */}
        <Filter allTags={allTags} onFilterChange={handleFilterChange} />
        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredClubs.map(club => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
