import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ClubCard from './components/ClubCard';
import Filter from './components/Filter';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import RecruitingClubCard from './components/RecruitingClubCard';
import { clubs as mockClubs } from './mock/clubs';
import { carouselImages } from './mock/carousel';
import type { Club } from './types';

function App() {
  const [clubs] = useState<Club[]>(mockClubs);
  const [filteredClubs, setFilteredClubs] = useState<Club[]>(clubs);

  const allTags = [...new Set(clubs.flatMap(club => club.tags))];
  const recruitingClubs = clubs.filter(club => club.isRecruiting);

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
    <div className="flex min-h-screen flex-col bg-gray-50 text-center">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-grow p-4 pt-20">
        <Carousel images={carouselImages} />

        <section className="mt-20">
          <h2 className="mb-4 text-left text-2xl font-bold">모집중인 동아리</h2>
          <div className="-m-2 flex overflow-x-auto">
            {recruitingClubs.map(club => (
              <RecruitingClubCard key={club.id} club={club} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="mb-4 text-left text-2xl font-bold">전체 동아리</h2>
          <Filter allTags={allTags} onFilterChange={handleFilterChange} />
          <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredClubs.map(club => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
