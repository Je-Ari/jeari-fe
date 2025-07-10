import type { Club } from '../types';

export const clubs: Club[] = [
  { id: 1, name: '코딩 동아리', description: '함께 배우고 성장하는 코딩 동아리입니다.', isRecruiting: true, tags: ['IT', '코딩'] },
  { id: 2, name: '사진 동아리', description: '사진 촬영과 편집을 배웁니다.', isRecruiting: false, tags: ['예술', '사진'] },
  { id: 3, name: '농구 동아리', description: '매주 농구 경기를 즐깁니다.', isRecruiting: true, tags: ['스포츠', '농구'] },
  { id: 4, name: '영화 감상 동아리', description: '다양한 장르의 영화를 보고 토론합니다.', isRecruiting: false, tags: ['문화', '영화'] },
  { id: 5, name: '봉사 동아리', description: '지역 사회에 기여하는 봉사활동을 합니다.', isRecruiting: true, tags: ['봉사'] },
];
