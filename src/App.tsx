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
import { announcements, events } from './mock/posts';
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

        {/* 공지사항 및 행사 안내 섹션 */}
        <section className="mt-20 flex flex-col gap-6 md:flex-row">
          <div className="w-full md:w-1/2">
            <h3 className="mb-3 flex items-center justify-between text-left text-xl font-bold text-gray-800">
              공지사항
              <a href="#" className="mr-2 text-3xl text-blue-600 hover:underline">
                +
              </a>
            </h3>
            <ul className="rounded-lg bg-gray-50 py-4">
              {announcements.map(post => (
                <li key={post.id} className="mb-2 truncate border-b border-gray-200 pb-2 text-left text-gray-700 last:mb-0 last:border-b-0 hover:text-blue-600">
                  <a href="#">{post.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="mb-3 flex items-center justify-between text-left text-xl font-bold text-gray-800">
              행사 안내
              <a href="#" className="mr-2 text-3xl text-blue-600 hover:underline">
                +
              </a>
            </h3>
            <ul className="rounded-lg bg-gray-50 py-4">
              {events.map(post => (
                <li key={post.id} className="mb-2 truncate border-b border-gray-200 pb-2 text-left text-gray-700 last:mb-0 last:border-b-0 hover:text-blue-600">
                  <a href="#">{post.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-left text-2xl font-bold">모집중인 동아리</h2>
          <div className="-m-2 flex overflow-x-auto">
            {recruitingClubs.map(club => (
              <RecruitingClubCard key={club.id} club={club} />
            ))}
          </div>
        </section>

        <section className="mt-12">
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
