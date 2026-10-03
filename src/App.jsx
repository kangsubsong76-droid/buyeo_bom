import React, { useState, useEffect } from 'react';
import {
  Instagram,
  Heart,
  Sprout,
  Sun,
  Wind,
  MapPin,
  Calendar,
  Coffee,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  Menu,
  X,
  Home,
  Feather,
  Leaf,
  Layers,
  Flame,
  Check,
  Clock,
  Compass,
  Smile,
  ShieldCheck,
  Quote,
  Users,
  Briefcase,
  History,
  FolderOpen,
  CheckCircle2,
  Copy,
  Phone,
  Car,
  Bus
} from 'lucide-react';

// Curated authentic images
import heroHillside from './assets/images/curated/hero_hillside.jpg';
import signboardBom from './assets/images/curated/signboard_bom.jpg';
import farmHouses from './assets/images/curated/farm_houses.jpg';
import gardenNatural from './assets/images/curated/garden_natural.jpg';
import mulchingSoil from './assets/images/curated/mulching_soil.jpg';
import nativeSeeds from './assets/images/curated/native_seeds.jpg';
import harvestPotatoes from './assets/images/curated/harvest_potatoes.jpg';
import dryingPeppers from './assets/images/curated/drying_peppers.jpg';
import woodWorkshop from './assets/images/curated/wood_workshop.jpg';
import woodCraftsmanHands from './assets/images/curated/wood_craftsman_hands.jpg';
import mandalaMindfulness from './assets/images/curated/mandala_mindfulness.jpg';
import farmRabbit from './assets/images/curated/farm_rabbit.jpg';
import carpenterFriends from './assets/images/curated/carpenter_friends.jpg';
import farmDog from './assets/images/curated/farm_dog.jpg';
import rusticBread from './assets/images/curated/rustic_bread.jpg';
import hostsCouple from './assets/images/curated/hosts_couple.jpg';
import stoveFire from './assets/images/curated/stove_fire.jpg';

// Architectural & Building journey images
import buildMasterplan from './assets/images/curated/build_masterplan.jpg';
import buildFramingSite from './assets/images/curated/build_framing_site.jpg';
import buildCarpentryWork from './assets/images/curated/build_carpentry_work.jpg';
import buildBrickMasonry from './assets/images/curated/build_brick_masonry.jpg';
import buildWorkshopSiding from './assets/images/curated/build_workshop_siding.jpg';
import buildFireplaceSanctuary from './assets/images/curated/build_fireplace_sanctuary.jpg';

// Instagram 9 square feed images
import insta01 from './assets/images/curated/insta_01.jpg';
import insta02 from './assets/images/curated/insta_02.jpg';
import insta03 from './assets/images/curated/insta_03.jpg';
import insta04 from './assets/images/curated/insta_04.jpg';
import insta05 from './assets/images/curated/insta_05.jpg';
import insta06 from './assets/images/curated/insta_06.jpg';
import insta07 from './assets/images/curated/insta_07.jpg';
import insta08 from './assets/images/curated/insta_08.jpg';
import insta09 from './assets/images/curated/insta_09.jpg';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSeason, setActiveSeason] = useState('spring');
  const [activeProgramTab, setActiveProgramTab] = useState('meditation');
  const [activeArchiveCategory, setActiveArchiveCategory] = useState('all');
  const [copiedAddress, setCopiedAddress] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Daily timeline of farm life
  const dailyTimeline = [
    {
      time: '06:30',
      period: '새벽 & 아침',
      title: '숲밭 산책과 걷기 명상',
      desc: '안개 걷히는 1,800평 언덕길을 고요히 걸으며, 발바닥에 닿는 대지의 온기와 풀잎의 이슬을 온몸으로 느낍니다.',
      tag: '몸의 감각 깨우기',
      img: gardenNatural
    },
    {
      time: '08:30',
      period: '아침 식사',
      title: '정갈한 텃밭 밥상 & 천연 발효빵',
      desc: '갓 딴 채소로 차린 샐러드와 직접 구운 따뜻한 발효빵. 한 입 한 입 음식의 맛과 향을 천천히 음미합니다.',
      tag: '음식 명상',
      img: rusticBread
    },
    {
      time: '10:00',
      period: '오전 일과',
      title: '살아있는 흙과 만나는 자연농',
      desc: '땅을 갈아엎지 않고 풀을 베어 덮어주며 대지를 돌봅니다. 땀방울 속에 잡념이 사라지고 깊은 몰입이 찾아옵니다.',
      tag: '무경운 · 자연 멀칭',
      img: mulchingSoil
    },
    {
      time: '14:00',
      period: '오후 시간',
      title: '스튜디오 나무다움의 손작업',
      desc: '은은한 나무 향이 감도는 목공소에서 대패질과 사포질을 합니다. 나무의 결을 어루만지는 손끝의 알아차림.',
      tag: '원목 손작업',
      img: woodWorkshop
    },
    {
      time: '16:30',
      period: '늦은 오후',
      title: '나선형 만다라 정원 앞 차담(茶談)',
      desc: '직접 덖은 제철 허브차 한 잔을 앞에 두고, 도시 회원들과 함께 삶의 깊은 이야기를 편견 없이 나눕니다.',
      tag: '현존 나눔',
      img: mandalaMindfulness
    },
    {
      time: '20:00',
      period: '고요한 밤',
      title: '장작 난로 불멍과 깊은 침묵',
      desc: '타닥타닥 타오르는 난로의 불꽃을 바라보며 지나간 과거와 오지 않은 미래를 내려놓고 고요한 밤을 맞이합니다.',
      tag: '내면의 쉼',
      img: stoveFire
    }
  ];

  // Farm History & Milestones with Authentic Construction Journey
  const farmMilestones = [
    {
      year: '2023',
      period: '봄 ~ 가을',
      title: '대지와의 첫 만남 & 손글씨 마스터플랜',
      subtitle: '경사와 물길을 살피며 직접 도면을 그리다',
      image: buildMasterplan,
      imageCaption: '손으로 직접 기록한 구획(Zone 1~4), 수로, 우물, 텃밭 배치도',
      items: [
        '도시 생활을 정리하고 충남 부여군 임천면 1,800평 언덕에 터를 잡음',
        '대지의 자연 경사와 물길을 살피며 손으로 직접 농원 마스터플랜(Zone 1~4 구획, 수로 및 우물 설계) 작성',
        '3무(無경운·無화학비료·자연멀칭) 자연농·퍼머컬처 텃밭 기반 개간 시작'
      ]
    },
    {
      year: '2024 상반기',
      period: '봄 ~ 초여름',
      title: '나무를 세우고 붉은 벽돌을 쌓아올리다',
      subtitle: '목구조 골조와 공방 골함석 외벽, 장인의 조적',
      images: [
        { src: buildFramingSite, label: '햇살 아래 목구조 골조 현장 전경' },
        { src: buildBrickMasonry, label: '붉은 고벽돌 수평 조적 시공' },
        { src: buildWorkshopSiding, label: '심플우드 공방 은빛 골함석 외벽' },
        { src: buildCarpentryWork, label: '목수의 정밀한 개구부 창호 시공' }
      ],
      items: [
        '가구 목수 남편(심플우드)과 목수 친구들이 뜻을 모아 살림집 및 목공소 직영 착공',
        '독일 시스템 기밀 단열 하우스랩 위에 붉은 고벽돌을 한 장 한 장 손으로 쌓아 올림',
        '창작 공간인 심플우드 목공방에 은회색 골함석 외벽을 시공하여 단단하고 소박한 건축미 완성'
      ]
    },
    {
      year: '2024 하반기',
      period: '늦여름 ~ 겨울',
      title: '불을 지피고 숲을 담는 쉼터 완성',
      subtitle: '통창 너머 숲과 따뜻한 주물 벽난로',
      image: buildFireplaceSanctuary,
      imageCaption: '통창 너머 부여의 녹음과 타오르는 주물 벽난로가 있는 고요한 명상 쉼터',
      items: [
        '계절의 변화를 파노라마로 담아내는 통창과 고효율 스칸디나비아 주물 벽난로 설치 완공',
        '첫 장작불을 지피며 몸과 마음이 쉴 수 있는 자연 속 안식처의 골격을 온전히 갖춤',
        '지하 암반수 및 친환경 태양광 발전 인프라 구축'
      ]
    },
    {
      year: '2025',
      period: '사계절',
      title: '현존명상센터 부여캠퍼스 개원 & 숲밭 안정',
      subtitle: '도심 회원들의 사마타 집중 수련처이자 생태 정원',
      image: mandalaMindfulness,
      imageCaption: '나선형 만다라 허브 명상 정원과 고요한 명상의 아침',
      items: [
        '성북동 현존명상센터의 공식 외원 ‘부여캠퍼스’로 정식 지정 (도시 회원 집중수련처)',
        '중심으로 에너지가 모이는 나선형 만다라 허브 명상 정원(Spiral Garden) 조성',
        'WWOOF Korea 공식 호스트 등록, 국내외 청년·생태 활동가들과 우핑 교류',
        '토종 씨앗 채종 및 자급자족 유기순환 숲밭 생태계 안착'
      ]
    },
    {
      year: '2026',
      period: '현재',
      title: '일상 속 현존과 나눔의 치유농원',
      subtitle: '개인·가족 힐링 리트릿 및 기업 웰니스 개방',
      image: hostsCouple,
      imageCaption: '있는 그대로의 삶을 나누는 봄농원의 두 호스트',
      items: [
        '도심 회원을 위한 주말 집중 정진 및 1:1 맞춤형 힐링 세션 상시 운영',
        '직무 스트레스 완화와 팀 번아웃 회복을 위한 기업·기관 마인드풀니스 웰니스 프로그램 런칭',
        '온·오프라인을 잇는 지속 가능한 생태 명상 커뮤니티로 도약'
      ]
    }
  ];

  // Farm Archive Gallery
  const archiveItems = [
    {
      id: 1,
      cat: 'build',
      catName: '집 짓던 날',
      title: '손으로 직접 그린 농원 마스터플랜',
      desc: '대지의 경사와 물길을 살피며 손수 작성한 수로, 계단식 밭(Zone 1~4), 우물 구획도.',
      img: buildMasterplan,
      date: '2023.04'
    },
    {
      id: 2,
      cat: 'build',
      catName: '집 짓던 날',
      title: '5월 햇살 아래 오른 목구조 골조',
      desc: '1,800평 언덕 위에 기둥과 서까래를 세우고 벽돌을 맞이하던 설레는 공사 현장 전경.',
      img: buildFramingSite,
      date: '2024.05'
    },
    {
      id: 3,
      cat: 'build',
      catName: '집 짓던 날',
      title: '목수의 정밀한 수평과 창호 시공',
      desc: '문틀 하나 창틀 하나, 매 순간 호흡을 집중하여 세운 목공 작업의 현장.',
      img: buildCarpentryWork,
      date: '2024.05'
    },
    {
      id: 4,
      cat: 'build',
      catName: '집 짓던 날',
      title: '붉은 고벽돌을 한 장씩 쌓아올리다',
      desc: '기밀 단열재 위에 노란 수평실을 띄우고 정성으로 줄눈을 맞춘 조적 벽체.',
      img: buildBrickMasonry,
      date: '2024.05'
    },
    {
      id: 5,
      cat: 'build',
      catName: '집 짓던 날',
      title: '심플우드 공방의 은빛 골함석 외벽',
      desc: '소박하고 단단하게, 자연의 비바람을 견뎌줄 목공 작업실의 골함석 마감.',
      img: buildWorkshopSiding,
      date: '2024.05'
    },
    {
      id: 6,
      cat: 'build',
      catName: '집 짓던 날',
      title: '통창 숲 뷰와 타오르는 벽난로의 첫 불',
      desc: '완성된 쉼터 거실, 통창 너머 초록 숲을 바라보며 장작 난로에 첫 불을 지피던 순간.',
      img: buildFireplaceSanctuary,
      date: '2024.08'
    },
    {
      id: 7,
      cat: 'craft',
      catName: '스튜디오 심플우드',
      title: '대패질 끝에 드러나는 나뭇결',
      desc: '인위적인 코팅 없이 자연 원목 그대로의 결을 살려 농원의 살림살이를 만듭니다.',
      img: woodCraftsmanHands,
      date: '2024.09'
    },
    {
      id: 8,
      cat: 'nature',
      catName: '대지의 결실',
      title: '첫 수확 햇감자의 선물',
      desc: '비료도 농약도 없이 대지가 품어준 포슬포슬한 햇감자를 손으로 거두던 벅찬 날.',
      img: harvestPotatoes,
      date: '2024.06'
    },
    {
      id: 9,
      cat: 'mind',
      catName: '명상과 쉼',
      title: '나선형 만다라 텃밭의 첫 아침',
      desc: '중심을 향해 둥글게 돌아가는 만다라 허브밭에서 맞이한 평온한 현존의 시간.',
      img: mandalaMindfulness,
      date: '2025.04'
    },
    {
      id: 10,
      cat: 'nature',
      catName: '대지의 결실',
      title: '가을 볕 아래 말리는 태양초 고추',
      desc: '임천면의 맑은 가을 햇살과 솔바람으로 천천히 말려가는 붉은 고추들.',
      img: dryingPeppers,
      date: '2025.09'
    },
    {
      id: 11,
      cat: 'life',
      catName: '농원 일상',
      title: '목수 아빠의 집에서 웃는 반려견',
      desc: '원목으로 지어준 아늑한 집 문을 열고 다정하게 손님을 맞는 농원의 단짝.',
      img: farmDog,
      date: '2025.10'
    },
    {
      id: 12,
      cat: 'life',
      catName: '농원 일상',
      title: '겨울 난로 앞 타닥타닥 타오르는 불멍',
      desc: '바깥의 찬 공기를 뒤로하고 장작 난로 불꽃을 마주하며 마음의 짐을 내려놓습니다.',
      img: stoveFire,
      date: '2025.12'
    },
    {
      id: 13,
      cat: 'life',
      catName: '농원 일상',
      title: '천연 발효로 구운 소박한 빵',
      desc: '농원의 아침을 열어주는 구수한 빵 내음. 느리게 발효되어 속이 편안한 식탁.',
      img: rusticBread,
      date: '2026.02'
    }
  ];

  const filteredArchive = activeArchiveCategory === 'all'
    ? archiveItems
    : archiveItems.filter(item => item.cat === activeArchiveCategory);

  // Curiosity FAQ / Personal stories
  const personalNotes = [
    {
      q: '왜 풀을 뽑지 않고 베어서 덮어둘까요?',
      a: '자연농에서 풀은 뽑아 없애야 할 잡초가 아니라 대지를 품어주는 소중한 이불입니다. 풀을 베어 덮어주면(자연 멀칭) 한낮의 뙤약볕에도 흙의 수분이 마르지 않고, 미생물이 번식하며 스스로 비옥한 흙으로 돌아갑니다.',
      tag: '자연농의 지혜'
    },
    {
      q: '현존명상센터 부여캠퍼스에서는 어떤 수련을 하나요?',
      a: '무언가를 머리로 채우는 교육이 아닌, 도시에서 쌓인 과도한 자극을 비워내는 수련입니다. 숲밭 걷기, 맨손 흙 만지기, 천천히 씹어 삼키는 식사 명상, 차담을 통해 내 몸과 마음의 감각을 지금 이 순간으로 데려옵니다.',
      tag: '현존 리트릿'
    },
    {
      q: '도시의 안정적인 경력을 정리하고 왜 부여 언덕이었을까요?',
      a: '남편은 가구 목수로서, 아내는 인사컨설팅과 자연치유를 공부하며 늘 삶의 본질을 고민했습니다. 낮은 산자락이 감싸 안은 1,800평의 평온한 언덕, 그리고 조선시대 석빙고가 남아있을 만큼 맑은 숨이 흐르는 이곳에서 비로소 "있는 그대로의 삶"을 지을 수 있었습니다.',
      tag: '귀촌 이야기'
    }
  ];

  // Instagram feed items with genuine stories
  const instagramFeed = [
    {
      img: insta01,
      caption: '농약과 비료 없이 햇살과 바람으로 자라는 숲밭의 생명들 🌱',
      tag: '#자연농 #퍼머컬처',
      link: 'https://www.instagram.com/bom_let.be'
    },
    {
      img: insta02,
      caption: '나무의 결을 매만지는 시간. 손끝의 감각에 온전히 머물기 ✨',
      tag: '#스튜디오나무다움 #목공',
      link: 'https://www.instagram.com/simplwood'
    },
    {
      img: insta03,
      caption: '6월의 감자 수확. 흙이 선물해 준 포슬포슬한 결실들 🥔',
      tag: '#생태텃밭 #수확의기쁨',
      link: 'https://www.instagram.com/bom_let.be'
    },
    {
      img: insta04,
      caption: '목수 아빠가 직접 지어준 나무집에서 활짝 웃는 농원 반려견 🐶',
      tag: '#농원일상 #시골살이',
      link: 'https://www.instagram.com/bom_let.be'
    },
    {
      img: insta05,
      caption: '직접 구운 소박한 천연 발효빵과 텃밭 샐러드로 차린 아침 식탁 🥖',
      tag: '#슬로우푸드 #소박한밥상',
      link: 'https://www.instagram.com/bom_let.be'
    },
    {
      img: insta06,
      caption: '나선형 만다라 허브밭에서 맞이하는 맑은 아침의 알아차림 ☀️',
      tag: '#현존명상 #마음챙김',
      link: 'https://www.instagram.com/bom_let.be'
    },
    {
      img: insta07,
      caption: '여름 볕 아래 붉게 익어가는 태양초 고추 말리기 🌶️',
      tag: '#자연건조 #사계절농사',
      link: 'https://www.instagram.com/bom_let.be'
    },
    {
      img: insta08,
      caption: '마당 한 켠 폭신한 보금자리에서 평화롭게 쉬어가는 토끼들 🐰',
      tag: '#농원동물 #평화로운쉼',
      link: 'https://www.instagram.com/bom_let.be'
    },
    {
      img: insta09,
      caption: '타닥타닥 타오르는 장작 난로 불꽃을 바라보며 깊은 비움 🔥',
      tag: '#불멍 #겨울쉼',
      link: 'https://www.instagram.com/bom_let.be'
    }
  ];

  // Seasonal calendar from farm profile
  const seasonalWork = {
    spring: {
      title: '봄 (3월 ~ 5월)',
      subtitle: '대지가 깨어나고 새 생명이 움트는 계절',
      items: [
        { month: '3월', task: '봄 이랑 정리, 낙엽 멀칭, 쌈채소와 허브 파종' },
        { month: '4월', task: '봄 채소 모종 정식, 지주대 세우기, 풀 베어 땅 덮기' },
        { month: '5월', task: '들깨 모종 키우기, 고구마 순 심기, 과채류 정식 및 순지르기' }
      ]
    },
    summer: {
      title: '여름 (6월 ~ 8월)',
      subtitle: '푸르른 잎과 열매가 무성해지는 생명의 계절',
      items: [
        { month: '6월', task: '들깨 본밭 정식, 텃밭 풀 관리(자연 멀칭), 배수로 정비' },
        { month: '7월', task: '향긋한 깻잎 수확, 여름 채소 수확, 씨앗 받기' },
        { month: '8월', task: '가을 채소 파종, 허브 수확과 자연 건조, 태양초 말리기' }
      ]
    },
    autumn: {
      title: '가을 (9월 ~ 11월)',
      subtitle: '결실을 감사히 거두고 갈무리하는 풍요의 계절',
      items: [
        { month: '9월', task: '토종밤 줍기, 가을 텃밭 솎아주기, 씨앗 채종 및 보관' },
        { month: '10월', task: '고구마 수확, 들깨 베고 털기, 밤 선별과 갈무리' },
        { month: '11월', task: '저온압착 생들기름 짜기, 김장 채소 수확, 석빙고 자연 저장' }
      ]
    },
    winter: {
      title: '겨울 (12월 ~ 2월)',
      subtitle: '땅을 쉬게 하고 내면을 채우는 고요한 쉼',
      items: [
        { month: '12월', task: '농기구 정돈 및 보관, 농원 정비, 고요한 겨울 쉼' },
        { month: '1월', task: '씨앗 갈무리, 봄 농사 계획, 목공소 원목 손작업' },
        { month: '2월', task: '토종 씨앗 발아 검사, 모종 흙 준비, 텃밭 정돈' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFBF7] text-[#2C3228] selection:bg-[#E8DFD1] selection:text-[#2C3228] font-sans antialiased">
      {/* ──────────────────────────────────────────
          Navigation Header
      ────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FCFBF7]/90 backdrop-blur-md border-b border-[#EAE3D2]/70 py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#" className="group flex items-baseline gap-2 text-decoration-none">
            <span className="font-serif text-2xl md:text-2xl font-bold tracking-tight text-[#242A20] group-hover:text-[#52634B] transition-colors">
              봄 : 있는 그대로
            </span>
            <span className="text-[11px] font-sans tracking-wider text-[#7A8372] hidden sm:inline border-l border-[#DCD3C0] pl-2 ml-1">
              현존명상센터 부여캠퍼스
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-7 text-[13.5px] font-medium text-[#4A5445]">
            <a href="#retreat" className="hover:text-[#1F251B] transition-colors text-[#43573C] font-bold">현존캠퍼스</a>
            <a href="#couple" className="hover:text-[#1F251B] transition-colors">부부 이야기</a>
            <a href="#programs" className="hover:text-[#1F251B] transition-colors">치유 프로그램</a>
            <a href="#archive" className="hover:text-[#1F251B] transition-colors">농원 아카이브</a>
            <a href="#milestones" className="hover:text-[#1F251B] transition-colors">주요 연혁</a>
            <a href="#daily" className="hover:text-[#1F251B] transition-colors">농원의 하루</a>
            <a href="#farming" className="hover:text-[#1F251B] transition-colors">자연농 숲밭</a>
            <a href="#stay" className="hover:text-[#1F251B] transition-colors">머무름·우핑</a>
            <a href="#instagram" className="hover:text-[#1F251B] transition-colors flex items-center gap-1 text-[#556B4E]">
              <Instagram size={14} />
              <span>인스타</span>
            </a>
            <a href="#contact" className="hover:text-[#1F251B] transition-colors font-bold text-[#44563C]">
              오시는 길
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#2C3228] hover:text-[#52634B] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF7F0] border-b border-[#EAE3D2] px-6 py-6 space-y-3.5 animate-in fade-in duration-300">
            <a
              href="#retreat"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#43573C] font-bold py-1"
            >
              현존명상센터 부여캠퍼스
            </a>
            <a
              href="#couple"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#404A3A] font-medium py-1"
            >
              호스트 부부 이야기
            </a>
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#404A3A] font-medium py-1"
            >
              치유 & 명상 프로그램 (명상 / 개인·가족 / 기업)
            </a>
            <a
              href="#archive"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#404A3A] font-medium py-1"
            >
              농원 아카이브 (기록과 순간들)
            </a>
            <a
              href="#milestones"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#404A3A] font-medium py-1"
            >
              농원의 주요 연혁
            </a>
            <a
              href="#daily"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#404A3A] font-medium py-1"
            >
              농원의 하루 (일상 비주얼)
            </a>
            <a
              href="#farming"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#404A3A] font-medium py-1"
            >
              자연농 숲밭 & 퍼머컬처
            </a>
            <a
              href="#stay"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#404A3A] font-medium py-1"
            >
              머무름과 우핑
            </a>
            <a
              href="#instagram"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#556B4E] font-medium py-1 flex items-center gap-2"
            >
              <Instagram size={16} />
              <span>인스타그램 갤러리</span>
            </a>
          </div>
        )}
      </nav>

      {/* ──────────────────────────────────────────
          Hero Section
      ────────────────────────────────────────── */}
      <header className="relative min-h-[94vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Tranquil Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroHillside}
            alt="부여 봄 농원 언덕 전경"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[0.98]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FCFBF7] via-[#FCFBF7]/40 to-black/25"></div>
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFBF7]/90 backdrop-blur-sm border border-[#E7DFD0] text-[13px] text-[#4F5B49] mb-8 font-medium shadow-xs">
            <Sparkles size={13} className="text-[#657C5C]" />
            <span>현존명상센터 부여캠퍼스 · 충남 부여 임천면 1,800평 언덕 숲밭</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1E2519] leading-[1.3] md:leading-[1.25] tracking-tight mb-6">
            자연 있는 그대로의 숲밭,<br className="hidden sm:inline" />
            <span className="text-[#364431]">일상 속 명상이 함께하는 농원</span>
          </h1>

          <p className="text-base sm:text-xl font-light text-[#596554] tracking-wide max-w-2xl mx-auto leading-relaxed mb-8">
            A forest garden of living soil and everyday mindfulness
          </p>

          <p className="text-sm md:text-base text-[#5F6B58] max-w-xl mx-auto leading-relaxed mb-12 font-light">
            도시 회원들의 깊은 쉼과 집중수련을 위한 안식처.<br className="hidden md:inline" />
            흙을 만지고 바람 소리에 귀 기울이며, '지금, 여기'에 온전히 깨어납니다.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#programs"
              className="px-7 py-3 rounded-full bg-[#3D4F37] text-[#FAF8F2] text-sm font-medium hover:bg-[#2F3E2A] transition-all shadow-sm"
            >
              치유 프로그램 보기
            </a>
            <a
              href="#archive"
              className="px-7 py-3 rounded-full bg-[#FCFBF7]/85 backdrop-blur-sm border border-[#DCD3C0] text-[#3D4F37] text-sm font-medium hover:bg-[#FCFBF7] transition-all"
            >
              농원 아카이브
            </a>
          </div>
        </div>

        {/* Subtle Bottom Scroll Cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-[#7F8B75]">
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans block mb-1">Scroll</span>
          <div className="w-px h-6 bg-[#A3B098] mx-auto"></div>
        </div>
      </header>

      {/* ──────────────────────────────────────────
          Section 1: Truebeing Meditation Campus (현존명상센터 부여캠퍼스)
      ────────────────────────────────────────── */}
      <section id="retreat" className="py-24 md:py-36 px-6 border-b border-[#EDE6D8]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[12px] uppercase tracking-[0.25em] text-[#7B8770] font-semibold block mb-3">
              Truebeing Meditation Center · Buyeo Campus
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#222A1E] tracking-tight">
              도시의 소음을 벗어나, 흙과 마주하는 집중수련
            </h2>
            <div className="w-8 h-px bg-[#C8BCAB] mx-auto mt-6 mb-6"></div>
            <p className="text-[#5E6B56] max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light">
              봄농원은 <strong className="font-medium text-[#222A1E]">현존명상센터(Truebeing Meditation)의 부여캠퍼스</strong>입니다.<br />
              성북동 본원이 도심 속 일상 수련과 1:1 심층 상담의 중심이라면, 이곳 부여캠퍼스는 대지 위에 서서 호흡을 고르고 침묵과 알아차림으로 내면을 회복하는 전용 수련처입니다.
            </p>
          </div>

          {/* Dual Visual Showcase: Signboard & Fireplace Sanctuary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-xs aspect-[4/3] bg-[#EAE4D7] group">
              <img
                src={signboardBom}
                alt="봄 있는 그대로 현존명상센터 부여캠퍼스 목재 간판"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/75 via-black/30 to-transparent text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#E3DDD1] font-mono block mb-1">
                  Buyeo Campus Signboard
                </span>
                <p className="font-serif text-base md:text-lg">
                  봄 : 있는 그대로 · 현존명상센터 부여캠퍼스
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xs aspect-[4/3] bg-[#EAE4D7] group">
              <img
                src={buildFireplaceSanctuary}
                alt="통창 숲 뷰와 타오르는 주물 벽난로가 있는 고요한 명상 쉼터"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/75 via-black/30 to-transparent text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#E3DDD1] font-mono block mb-1">
                  Fireplace & Forest Sanctuary
                </span>
                <p className="font-serif text-base md:text-lg">
                  통창 너머 숲과 따뜻한 벽난로 앞 명상실
                </p>
              </div>
            </div>
          </div>

          {/* 3 Core Practices */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-white border border-[#E8E1D3] space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-[#4A5D43]">
                <Compass size={20} />
              </div>
              <h4 className="font-serif text-base font-bold text-[#232B1E]">
                정통 사마타(Samatha) 집중수련
              </h4>
              <p className="text-xs text-[#63705C] font-light leading-relaxed">
                마음의 실체를 통찰하고 생각의 소용돌이에서 벗어나는 알아차림. 과거와 미래라는 관념을 내려놓고 '지금 이 순간'의 순수한 현존에 머뭅니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E1D3] space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-[#4A5D43]">
                <Sprout size={20} />
              </div>
              <h4 className="font-serif text-base font-bold text-[#232B1E]">
                자연농 텃밭 노동 명상
              </h4>
              <p className="text-xs text-[#63705C] font-light leading-relaxed">
                1,800평 언덕 숲밭에서 맨발로 흙을 딛고 풀을 베어 덮어주는 시간. 몸의 단순한 움직임 속에서 머리의 번뇌가 씻겨나갑니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E1D3] space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-[#4A5D43]">
                <Flame size={20} />
              </div>
              <h4 className="font-serif text-base font-bold text-[#232B1E]">
                통창 벽난로 불멍 & 차담
              </h4>
              <p className="text-xs text-[#63705C] font-light leading-relaxed">
                숲을 마주하는 큰 창가, 타닥타닥 타오르는 장작 난로 앞에서 따뜻한 야생차를 마시며 삶의 본질을 나누는 깊은 쉼의 시간.
              </p>
            </div>
          </div>

          {/* Official Connection Banner with truebeing-meditation.com */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#F7F3EA] border border-[#E4DBCB] shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-[#E5DEC9] text-[#3D4C37] text-[11px] font-semibold tracking-wide">
                    정통 사마타명상 본원
                  </span>
                  <span className="text-xs text-[#6B7963]">
                    서울 성북동 본원 ↔ 부여캠퍼스
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#222A1E]">
                  현존명상센터 (Truebeing Meditation)
                </h3>
                <p className="text-xs md:text-sm text-[#5B6753] font-light leading-relaxed">
                  "굳어진 습관 · 감정의 기복 · 지친 일상... 삶은 의지로 바꾸는 것이 아닙니다. 정통 사마타 명상을 통해 마음에서 벗어나는 순간, 비로소 참된 나를 회복하는 변화가 시작됩니다."
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#6E7B67]">
                  <span>📍 서울 본원: 성북구 성북로 15길 15-2 (최순우 옛집 골목 안 2F)</span>
                  <span>📞 010-3188-3105</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href="https://truebeing-meditation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#44553F] hover:bg-[#32402E] text-white text-xs tracking-wider transition-all shadow-xs group"
                >
                  <span className="font-medium">명상센터 공식 사이트 방문</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://cafe.naver.com/bhakti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white border border-[#DDD3C2] hover:bg-[#FAF8F5] text-[11px] text-[#485542] transition-colors"
                  >
                    <span>수련생 카페</span>
                    <ArrowUpRight size={11} />
                  </a>
                  <a
                    href="https://www.instagram.com/truebeing_meditation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white border border-[#DDD3C2] hover:bg-[#FAF8F5] text-[11px] text-[#485542] transition-colors"
                  >
                    <span>공식 인스타그램</span>
                    <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 2: Dedicated Hosts Section (우리 부부 이야기)
      ────────────────────────────────────────── */}
      <section id="couple" className="py-24 md:py-36 px-6 bg-white border-b border-[#EDE6D8]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-[12px] uppercase tracking-[0.25em] text-[#7B8770] font-semibold block mb-3">
              Our Hosts & Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#222A1E] tracking-tight">
              봄농원을 가꾸는 부부의 이야기
            </h2>
            <div className="w-8 h-px bg-[#C8BCAB] mx-auto mt-6 mb-6"></div>
            <p className="text-[#5E6B56] max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light">
              가구를 만들던 목수 남편과 인사 코칭·자연치유를 공부하는 아내.<br />
              8년 넘게 요가와 현존명상을 수련하며 살아온 두 사람이 부여 언덕에서 나만의 속도로 짓는 삶의 기록입니다.
            </p>
          </div>

          {/* Couple Joint Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-16 bg-[#F6F2E9] border border-[#EAE3D4]">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="md:col-span-5 aspect-[4/5] md:aspect-auto h-full">
                <img
                  src={hostsCouple}
                  alt="호스트 부부 모습"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-7 p-8 md:p-12 space-y-4">
                <span className="text-xs font-serif font-bold text-[#556B4E] uppercase tracking-widest">
                  Welcome to Bom Farm
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#232B1E] leading-snug">
                  "매트 위에 앉아 있는 것만이 명상이 아닙니다.<br className="hidden sm:inline" />
                  하나의 일에 온전히 머무는 순간이 곧 삶입니다."
                </h3>
                <p className="text-sm text-[#5C6955] leading-relaxed font-light">
                  늘 과거를 후회하거나 미래를 불안해하며 헤매는 현대인의 마음을 '지금, 여기(Here and Now)'로 데려오는 연습.
                  부여 언덕 숲밭의 흙과 나무, 바람 속에서 그 소박한 배움을 함께 나누고 싶습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Husband & Wife Individual Story Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Husband Card: @simplwood */}
            <div className="p-8 rounded-2xl bg-[#FCFBF7] border border-[#EAE3D4] flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#D5CBB9]">
                    <img
                      src={woodCraftsmanHands}
                      alt="목수 남편 손길"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8A7667]">Woodworker & Meditator</span>
                    <h4 className="font-serif text-lg font-bold text-[#232B1E]">남편 송강섭</h4>
                    <p className="text-xs text-[#707D68] font-mono">스튜디오 나무다움 (@simplwood)</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#EFEAE0] text-xs text-[#52604C] leading-relaxed font-light italic">
                  <Quote size={14} className="text-[#8E6D52] mb-1 inline mr-1" />
                  "도시에서 가구를 만들며 반듯한 직선과 흠 없는 표면을 좇던 때가 있었습니다. 하지만 이곳 부여의 흙밭에 터를 잡고 집과 작업실을 손수 지으며, 나무가 휘어진 채로, 풀이 돋아난 채로 아름답다는 것을 깨달았습니다. 나무의 결을 쓰다듬고 흙을 쥐는 매 순간이 제게는 가장 정직한 수련입니다."
                </div>

                <p className="text-xs text-[#63705C] leading-relaxed font-light">
                  농원의 집과 작업실을 지역 목수님과 함께 직접 건축했으며, 친환경 원목 가구 제작 및 현존명상 지도자로 함께하고 있습니다.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EDE6D8]">
                <a
                  href="https://www.instagram.com/simplwood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7F5E45] hover:text-[#523C2B]"
                >
                  <Instagram size={14} />
                  <span>@simplwood 인스타에서 작업 보기</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Wife Card: @bom_let.be */}
            <div className="p-8 rounded-2xl bg-[#FCFBF7] border border-[#EAE3D4] flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#D5CBB9]">
                    <img
                      src={mandalaMindfulness}
                      alt="명상하는 아내"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#63755C]">Coach & Nature Healer</span>
                    <h4 className="font-serif text-lg font-bold text-[#232B1E]">아내</h4>
                    <p className="text-xs text-[#707D68] font-mono">봄, 있는 그대로 (@bom_let.be)</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#EFEAE0] text-xs text-[#52604C] leading-relaxed font-light italic">
                  <Quote size={14} className="text-[#556B4E] mb-1 inline mr-1" />
                  "치열하게 사람들의 마음과 조직을 코칭하다 깊은 번아웃을 마주했습니다. 자연치유와 동양의학을 배우며 '진정한 회복은 무언가를 억지로 채우는 게 아니라, 지금 이 순간의 나를 있는 그대로 수용할 때 시작된다'는 것을 배웠습니다. 텃밭의 풀 한 포기, 따스한 밥상 한 그릇으로 도시 분들의 마음을 보듬고 싶습니다."
                </div>

                <p className="text-xs text-[#63705C] leading-relaxed font-light">
                  인사컨설팅과 코칭 경력을 거쳐 체질 및 자연치유를 연구하며, 정갈한 식탁과 차담, 힐링 워크숍을 이끌고 있습니다.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EDE6D8]">
                <a
                  href="https://www.instagram.com/bom_let.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#44563C] hover:text-[#2E3C27]"
                >
                  <Instagram size={14} />
                  <span>@bom_let.be 인스타에서 일상 보기</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 3: 치유 & 명상 프로그램 (새로 추가!)
      ────────────────────────────────────────── */}
      <section id="programs" className="py-24 md:py-36 px-6 border-b border-[#EDE6D8]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[12px] uppercase tracking-[0.25em] text-[#7B8770] font-semibold block mb-3">
              Healing & Mindfulness Programs
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#222A1E] tracking-tight">
              봄농원의 치유 & 명상 프로그램
            </h2>
            <div className="w-8 h-px bg-[#C8BCAB] mx-auto mt-6 mb-6"></div>
            <p className="text-[#5E6B56] max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light">
              내면의 고요를 찾는 명상부터 소중한 이들과 함께하는 개인·가족 쉼표, 조직의 회복을 돕는 기업 웰니스까지.<br />
              자연의 속도에 맞춰 깊은 회복을 선물하는 맞춤형 프로그램을 운영합니다.
            </p>

            {/* Program Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-10">
              <button
                onClick={() => setActiveProgramTab('meditation')}
                className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all ${
                  activeProgramTab === 'meditation'
                    ? 'bg-[#3D4F37] text-white shadow-xs font-bold'
                    : 'bg-white text-[#56634F] border border-[#DDD3C2] hover:bg-[#F4EFE5]'
                }`}
              >
                부여 농원 명상 프로그램
              </button>
              <button
                onClick={() => setActiveProgramTab('family')}
                className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all ${
                  activeProgramTab === 'family'
                    ? 'bg-[#3D4F37] text-white shadow-xs font-bold'
                    : 'bg-white text-[#56634F] border border-[#DDD3C2] hover:bg-[#F4EFE5]'
                }`}
              >
                개인 / 가족 힐링 (1회성 · 정기)
              </button>
              <button
                onClick={() => setActiveProgramTab('corporate')}
                className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all ${
                  activeProgramTab === 'corporate'
                    ? 'bg-[#3D4F37] text-white shadow-xs font-bold'
                    : 'bg-white text-[#56634F] border border-[#DDD3C2] hover:bg-[#F4EFE5]'
                }`}
              >
                기업 & 조직 웰니스 리트릿
              </button>
            </div>
          </div>

          {/* Program Tab 1: 부여 농원 명상 프로그램 */}
          {activeProgramTab === 'meditation' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
              <div className="p-7 rounded-2xl bg-white border border-[#E8E1D3] space-y-4 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#EAE4D5] flex items-center justify-center text-[#4B5E43] mb-3">
                    <Wind size={20} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#232B1E] mb-1">숲밭 걷기 명상</h3>
                  <p className="text-[11px] text-[#7A8772] font-mono uppercase tracking-wider mb-3">Walking Meditation</p>
                  <p className="text-xs text-[#54604F] leading-relaxed font-light">
                    1,800평 언덕길을 침묵 속에서 천천히 걸으며, 발바닥에 닿는 대지의 결감과 산바람, 새소리에 오감을 활짝 깨웁니다.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F2EDE2] text-[11px] text-[#707D68]">소요: 60분 · 야외 숲길</div>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#E8E1D3] space-y-4 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#EAE4D5] flex items-center justify-center text-[#4B5E43] mb-3">
                    <Compass size={20} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#232B1E] mb-1">만다라 호흡 명상</h3>
                  <p className="text-[11px] text-[#7A8772] font-mono uppercase tracking-wider mb-3">Mandala Spiral Breath</p>
                  <p className="text-xs text-[#54604F] leading-relaxed font-light">
                    나선형으로 배치된 만다라 허브밭 중심에서 자신의 들숨과 날숨에 주의를 모으고, 흩어진 생각을 편안히 가라앉힙니다.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F2EDE2] text-[11px] text-[#707D68]">소요: 50분 · 만다라 정원</div>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#E8E1D3] space-y-4 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#EAE4D5] flex items-center justify-center text-[#4B5E43] mb-3">
                    <Coffee size={20} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#232B1E] mb-1">감각을 깨우는 차담(茶談)</h3>
                  <p className="text-[11px] text-[#7A8772] font-mono uppercase tracking-wider mb-3">Mindful Tea Ceremony</p>
                  <p className="text-xs text-[#54604F] leading-relaxed font-light">
                    농원에서 직접 덖은 야생 허브차를 우려내어 찻잔의 온기와 향기를 천천히 음미하고, 편견 없이 마음을 나누는 찻자리.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F2EDE2] text-[11px] text-[#707D68]">소요: 60분 · 실내 다도실</div>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#E8E1D3] space-y-4 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#EAE4D5] flex items-center justify-center text-[#4B5E43] mb-3">
                    <Flame size={20} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#232B1E] mb-1">난롯가 불멍 침묵 명상</h3>
                  <p className="text-[11px] text-[#7A8772] font-mono uppercase tracking-wider mb-3">Fireplace Stillness</p>
                  <p className="text-xs text-[#54604F] leading-relaxed font-light">
                    타닥타닥 타오르는 참나무 장작 난로 불꽃을 묵묵히 바라보며 복잡한 뇌의 과열을 끄고 깊은 평온과 이완으로 들어갑니다.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F2EDE2] text-[11px] text-[#707D68]">소요: 60분 · 저녁/동절기</div>
              </div>
            </div>
          )}

          {/* Program Tab 2: 개인 / 가족 힐링 프로그램 (1회성, 정기) */}
          {activeProgramTab === 'family' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
              {/* 1회성 프로그램 */}
              <div className="p-8 rounded-2xl bg-white border border-[#E8E1D3] space-y-5 shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#4E6146] text-xs font-semibold">
                    <Sparkles size={13} />
                    <span>1회성 원데이 힐링</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#232B1E]">
                    '원데이 마음 쉼표' 프로그램
                  </h3>
                  <p className="text-xs text-[#5B6754] leading-relaxed font-light">
                    하루 동안 도시의 시계를 멈추고 온전히 자연의 품에서 나 자신, 혹은 소중한 가족과 머무는 당일 힐링 코스입니다.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 text-xs text-[#4F5C4A] font-light">
                      <CheckCircle2 size={16} className="text-[#556B4E] shrink-0 mt-0.5" />
                      <div><strong>숲밭 산책 & 호흡 명상</strong>: 언덕길을 걸으며 굳어진 몸과 호흡을 편안히 이완</div>
                    </div>
                    <div className="flex items-start gap-3 text-xs text-[#4F5C4A] font-light">
                      <CheckCircle2 size={16} className="text-[#556B4E] shrink-0 mt-0.5" />
                      <div><strong>자연치유 제철 밥상</strong>: 텃밭에서 갓 수확한 채소와 발효빵으로 차린 마인드풀 식사</div>
                    </div>
                    <div className="flex items-start gap-3 text-xs text-[#4F5C4A] font-light">
                      <CheckCircle2 size={16} className="text-[#556B4E] shrink-0 mt-0.5" />
                      <div><strong>목공 손작업 또는 찻자리</strong>: 나무 숟가락 깎기 손작업 또는 따스한 차담</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F2EDE2] text-xs text-[#707D68] flex justify-between items-center">
                  <span>대상: 개인, 커플, 부모님과 함께하는 가족 (소수 정예)</span>
                  <span className="font-medium text-[#3D4F37]">사전 예약제</span>
                </div>
              </div>

              {/* 정기 프로그램 */}
              <div className="p-8 rounded-2xl bg-white border border-[#E8E1D3] space-y-5 shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2E6] text-[#3D5434] text-xs font-semibold">
                    <Calendar size={13} />
                    <span>정기 힐링 스테이</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#232B1E]">
                    '사계절 정기 쉼 스테이' (1박 2일)
                  </h3>
                  <p className="text-xs text-[#5B6754] leading-relaxed font-light">
                    계절의 변화에 맞춰 정기적으로 찾아와 내면의 안정을 되찾는 1박 2일 체류형 힐링 프로그램입니다.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 text-xs text-[#4F5C4A] font-light">
                      <CheckCircle2 size={16} className="text-[#556B4E] shrink-0 mt-0.5" />
                      <div><strong>주말 현존 리트릿</strong>: 디지털 디톡스와 침묵 명상으로 깊은 내면의 휴식</div>
                    </div>
                    <div className="flex items-start gap-3 text-xs text-[#4F5C4A] font-light">
                      <CheckCircle2 size={16} className="text-[#556B4E] shrink-0 mt-0.5" />
                      <div><strong>사계절 흙과의 교감</strong>: 봄 파종, 여름 감자, 가을 밤 줍기, 겨울 장작 패기</div>
                    </div>
                    <div className="flex items-start gap-3 text-xs text-[#4F5C4A] font-light">
                      <CheckCircle2 size={16} className="text-[#556B4E] shrink-0 mt-0.5" />
                      <div><strong>체질별 자연치유 코칭</strong>: 아내 호스트의 동양의학 기반 1:1 라이프스타일 조언</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F2EDE2] text-xs text-[#707D68] flex justify-between items-center">
                  <span>숙소: 독립 욕실·주방 갖춘 전용 게스트룸</span>
                  <span className="font-medium text-[#3D4F37]">월간 정기 운영</span>
                </div>
              </div>
            </div>
          )}

          {/* Program Tab 3: 기업 프로그램 */}
          {activeProgramTab === 'corporate' && (
            <div className="bg-white rounded-2xl border border-[#E8E1D3] p-8 md:p-12 shadow-xs animate-in fade-in duration-300">
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE3D4] text-[#4F5B49] text-xs font-semibold mb-2">
                    <Briefcase size={13} />
                    <span>Corporate Wellness & Team Retreat</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#232B1E]">
                    조직의 번아웃을 씻어내는 '그린 리커버리(Green Recovery)'
                  </h3>
                  <p className="text-xs md:text-sm text-[#5C6B55] leading-relaxed font-light">
                    치열한 성과 압박과 디지털 스트레스에 지친 임직원 및 팀을 위한 맞춤형 자연 웰니스 워크숍.
                    인사컨설팅 및 코칭 경력의 호스트가 조직의 맥락을 깊이 이해하고 회복 솔루션을 제공합니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="p-5 rounded-xl bg-[#FCFBF7] border border-[#EAE3D4] space-y-2">
                    <h4 className="font-serif text-base font-bold text-[#232B1E]">번아웃 치유 리셋</h4>
                    <p className="text-xs text-[#5E6D57] leading-relaxed font-light">
                      스마트폰을 끄고 자연의 소리에 온전히 귀 기울이는 숲길 침묵 걷기 명상과 신체 이완 스트레칭.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-[#FCFBF7] border border-[#EAE3D4] space-y-2">
                    <h4 className="font-serif text-base font-bold text-[#232B1E]">마인드풀 팀빌딩</h4>
                    <p className="text-xs text-[#5E6D57] leading-relaxed font-light">
                      나선형 정원 앞 찻자리(차담)를 통해 계급장을 떼고 서로의 마음에 진솔하게 귀 기울이는 경청 워크숍.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-[#FCFBF7] border border-[#EAE3D4] space-y-2">
                    <h4 className="font-serif text-base font-bold text-[#232B1E]">원목 공예 몰입</h4>
                    <p className="text-xs text-[#5E6D57] leading-relaxed font-light">
                      스튜디오 나무다움에서 손으로 직접 나무를 깎고 다듬으며 뇌의 복잡함을 비워내는 손작업 테라피.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F6F1E7] border border-[#E4DBCB] text-center text-xs text-[#4F5B49] font-light">
                  ※ 기업/기관의 규모(10인 내외 소규모 집중형)와 목적에 맞추어 <strong>반일(Half-day), 당일(Full-day), 1박 2일 맞춤형 커리큘럼</strong>을 설계해 드립니다.
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 4: 우리 농원 아카이브 (새로 추가!)
      ────────────────────────────────────────── */}
      <section id="archive" className="py-24 md:py-36 px-6 bg-white border-b border-[#EDE6D8]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[12px] uppercase tracking-[0.25em] text-[#7B8770] font-semibold block mb-3">
              Farm Archive & Memories
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#222A1E] tracking-tight">
              봄농원의 기록과 기억들
            </h2>
            <div className="w-8 h-px bg-[#C8BCAB] mx-auto mt-6 mb-6"></div>
            <p className="text-[#5E6B56] max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light">
              빈 언덕에 집을 짓던 땀방울부터 흙이 안겨준 첫 감자 수확, 사계절의 결을 따라 쌓여온 농원의 소중한 순간들을 모았습니다.
            </p>

            {/* Archive Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {[
                { key: 'all', label: '전체 보기' },
                { key: 'build', label: '집 짓던 날' },
                { key: 'craft', label: '스튜디오 나무다움' },
                { key: 'nature', label: '대지의 결실' },
                { key: 'mind', label: '명상과 쉼' },
                { key: 'life', label: '농원 일상' }
              ].map(filter => (
                <button
                  key={filter.key}
                  onClick={() => setActiveArchiveCategory(filter.key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeArchiveCategory === filter.key
                      ? 'bg-[#2E3C29] text-white font-bold'
                      : 'bg-[#F6F2E9] text-[#55634F] hover:bg-[#EAE4D7]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Archive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArchive.map(item => (
              <div
                key={item.id}
                className="bg-[#FCFBF7] rounded-2xl overflow-hidden border border-[#EAE3D4] shadow-xs flex flex-col hover:border-[#CAD2C3] transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#FAF6EE] relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-[10.5px] font-mono">
                    {item.date}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/85 text-[#3D4F37] text-[10.5px] font-medium">
                    {item.catName}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#232B1E] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5C6A55] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 5: 우리 농원의 주요 연혁 & 건축 기록
      ────────────────────────────────────────── */}
      <section id="milestones" className="py-24 md:py-36 px-6 border-b border-[#EDE6D8]">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-[12px] uppercase tracking-[0.25em] text-[#7B8770] font-semibold block mb-3">
              Milestones & Architectural Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#222A1E] tracking-tight">
              봄농원이 걸어온 발자취와 건축 기록
            </h2>
            <div className="w-8 h-px bg-[#C8BCAB] mx-auto mt-6 mb-6"></div>
            <p className="text-[#5E6B56] max-w-xl mx-auto leading-relaxed text-sm md:text-base font-light">
              대지의 물길을 읽던 첫 손글씨 스케치부터 목구조와 붉은 고벽돌, 그리고 따뜻한 벽난로가 타오르기까지—우리의 손으로 지어 올린 정직한 시간들입니다.
            </p>
          </div>

          {/* Timeline Vertical Path */}
          <div className="relative border-l-2 border-[#DCD3C1] ml-3 md:ml-12 space-y-16 pl-6 md:pl-10">
            {farmMilestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#52634B] border-4 border-[#FCFBF7] shadow-xs"></div>

                <div className="space-y-4">
                  {/* Header */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2.5 mb-1">
                      <span className="font-serif text-2xl md:text-3xl font-bold text-[#232B1E]">
                        {milestone.year}
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#EDE6D8] text-[#55634E]">
                        {milestone.period}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-[#2C3726]">
                      {milestone.title}
                    </h3>
                    <p className="text-xs text-[#707F69] font-light mt-0.5">
                      {milestone.subtitle}
                    </p>
                  </div>

                  {/* Photo Display */}
                  {milestone.image && (
                    <div className="rounded-2xl overflow-hidden border border-[#E5DDD0] bg-[#F5EFE4] max-w-xl">
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full max-h-[360px] object-cover"
                      />
                      {milestone.imageCaption && (
                        <div className="p-3 bg-white/90 border-t border-[#EAE3D4] text-[11px] text-[#63725D] font-light">
                          📷 {milestone.imageCaption}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 4-Image Grid for Construction (2024 상반기) */}
                  {milestone.images && (
                    <div className="grid grid-cols-2 gap-3 max-w-xl">
                      {milestone.images.map((imgItem, i) => (
                        <div key={i} className="rounded-xl overflow-hidden border border-[#E6DFD2] bg-white group/img">
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={imgItem.src}
                              alt={imgItem.label}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                            />
                          </div>
                          <div className="p-2 text-[10px] text-[#566450] font-light bg-[#FAF7F1] truncate">
                            {imgItem.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Content List */}
                  <div className="p-5 md:p-6 rounded-2xl bg-white border border-[#E9E2D4] space-y-2.5 max-w-xl">
                    {milestone.items.map((it, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[#4F5D49] font-light leading-relaxed">
                        <span className="text-[#65795C] font-bold mt-1 text-[10px]">■</span>
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 6: A Day at Bom Farm (농원의 하루 비주얼 타임라인)
      ────────────────────────────────────────── */}
      <section id="daily" className="py-24 md:py-36 px-6 bg-white border-b border-[#EDE6D8]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-[12px] uppercase tracking-[0.25em] text-[#7B8770] font-semibold block mb-3">
              Visual Farm Life
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#222A1E] tracking-tight">
              봄농원의 하루, 자연과 호흡하는 리듬
            </h2>
            <div className="w-8 h-px bg-[#C8BCAB] mx-auto mt-6 mb-6"></div>
            <p className="text-[#5E6B56] max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light">
              시계 바늘에 쫓기는 하루 대신, 해가 뜨고 바람이 부는 자연의 흐름에 몸을 맡깁니다.<br />
              사진과 함께 만나는 봄농원의 다정한 하루 일과입니다.
            </p>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyTimeline.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FCFBF7] rounded-2xl overflow-hidden border border-[#EAE3D4] shadow-xs flex flex-col hover:border-[#CAD2C3] transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF6EE]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono">
                    {item.time} · {item.period}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10.5px] uppercase tracking-wider font-semibold text-[#5B6F54] block mb-1">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#232B1E] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5D6B57] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 7: Curiosity Notes & Personal Q&A
      ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-[#F8F5EE] border-b border-[#EDE6D8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[12px] uppercase tracking-[0.25em] text-[#7B8770] font-semibold block mb-2">
              Curiosity & Journal
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#222A1E] tracking-tight">
              봄농원이 들려주는 작은 이야기
            </h2>
            <div className="w-8 h-px bg-[#C8BCAB] mx-auto mt-4 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalNotes.map((note, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#EAE3D4] space-y-3 shadow-xs">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F3EEE3] text-[10.5px] font-bold text-[#4B5E43]">
                  {note.tag}
                </span>
                <h3 className="font-serif text-base font-bold text-[#232B1E] leading-snug">
                  {note.q}
                </h3>
                <p className="text-xs text-[#5C6B55] leading-relaxed font-light">
                  {note.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 8: Living Soil & Natural Farming (자연농 & 퍼머컬처)
      ────────────────────────────────────────── */}
      <section id="farming" className="py-24 md:py-36 px-6 bg-white border-b border-[#EDE6D8]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-[12px] uppercase tracking-[0.25em] text-[#7B8770] font-semibold block mb-3">
              Permaculture & Living Soil
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#222A1E] tracking-tight">
              살아있는 흙을 돌보는 자연농의 원칙
            </h2>
            <div className="w-8 h-px bg-[#C8BCAB] mx-auto mt-6 mb-6"></div>
            <p className="text-[#5E6B56] max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light">
              큰 농기계 대신 손과 작은 도구로 흙을 돌봅니다.<br />
              땅을 해치지 않고 자연의 순환에 맞춰 기르는 네 가지 원칙을 지켜나갑니다.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* 1. 살아있는 땅 */}
            <div className="p-7 rounded-2xl bg-[#FCFBF7] border border-[#E8E1D3] space-y-4 hover:border-[#CAD2C3] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#EAE4D5] flex items-center justify-center text-[#4B5E43]">
                <Sprout size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#273223]">살아있는 땅 만들기</h3>
              <p className="text-xs text-[#7A8772] uppercase tracking-wider font-medium">Living Soil</p>
              <p className="text-sm text-[#54604F] leading-relaxed font-light">
                낙엽과 자연 퇴비로 흙 속의 다양한 미생물과 소중한 생명력을 깨우고 기릅니다.
              </p>
            </div>

            {/* 2. 무경운 */}
            <div className="p-7 rounded-2xl bg-[#FCFBF7] border border-[#E8E1D3] space-y-4 hover:border-[#CAD2C3] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#EAE4D5] flex items-center justify-center text-[#4B5E43]">
                <Layers size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#273223]">무경운 (No-Till)</h3>
              <p className="text-xs text-[#7A8772] uppercase tracking-wider font-medium">Structure Preserved</p>
              <p className="text-sm text-[#54604F] leading-relaxed font-light">
                대지를 기계로 갈아엎지 않고 흙의 섬세한 층과 고유한 생태계를 그대로 지킵니다.
              </p>
            </div>

            {/* 3. 자연 멀칭 */}
            <div className="p-7 rounded-2xl bg-[#FCFBF7] border border-[#E8E1D3] space-y-4 hover:border-[#CAD2C3] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#EAE4D5] flex items-center justify-center text-[#4B5E43]">
                <Leaf size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#273223]">자연 멀칭</h3>
              <p className="text-xs text-[#7A8772] uppercase tracking-wider font-medium">Grass Mulching</p>
              <p className="text-sm text-[#54604F] leading-relaxed font-light">
                풀을 억지로 뽑지 않고 부드럽게 베어 땅을 덮어주어 수분을 지키고 흙으로 돌려보냅니다.
              </p>
            </div>

            {/* 4. 친환경 방제 & 종자 */}
            <div className="p-7 rounded-2xl bg-[#FCFBF7] border border-[#E8E1D3] space-y-4 hover:border-[#CAD2C3] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#EAE4D5] flex items-center justify-center text-[#4B5E43]">
                <Sun size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#273223]">무농약·토종 씨앗</h3>
              <p className="text-xs text-[#7A8772] uppercase tracking-wider font-medium">Pure & Native</p>
              <p className="text-sm text-[#54604F] leading-relaxed font-light">
                화학농약·비료·제초제를 배제하고, 공생 식물과 토종 종자 채종을 통해 자연과 공존합니다.
              </p>
            </div>
          </div>

          {/* Farm Scenes Visual Trio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-2xl overflow-hidden bg-[#FAF6EE] border border-[#EAE3D4]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={gardenNatural}
                  alt="무농약 자연농 텃밭"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-base font-bold text-[#222A1E] mb-1">자연의 결대로 자라는 작물</h4>
                <p className="text-xs text-[#63705C] font-light leading-relaxed">
                  들깨, 고구마, 토종밤, 그리고 제철 채소와 허브들이 조화롭게 어우러진 숲밭입니다.
                </p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden bg-[#FAF6EE] border border-[#EAE3D4]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={mulchingSoil}
                  alt="풀 베어 흙 덮어주기"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-base font-bold text-[#222A1E] mb-1">풀을 베어 흙을 보듬는 손</h4>
                <p className="text-xs text-[#63705C] font-light leading-relaxed">
                  자라난 풀을 베어 지표면을 덮어주면 흙의 수분이 유지되고 미생물의 보금자리가 됩니다.
                </p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden bg-[#FAF6EE] border border-[#EAE3D4]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={nativeSeeds}
                  alt="토종 종자 갈무리"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-base font-bold text-[#222A1E] mb-1">토종 씨앗 채종과 나눔</h4>
                <p className="text-xs text-[#63705C] font-light leading-relaxed">
                  한 해를 무사히 마친 작물에게서 건강한 씨앗을 거두어 다음 해의 생명을 준비합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 9: Studio Simplewood & Sustainable Living (목공 & 생태적 살림)
      ────────────────────────────────────────── */}
      <section id="woodcraft" className="py-24 md:py-36 px-6 border-b border-[#EDE6D8]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-[12px] uppercase tracking-[0.25em] text-[#7B8770] font-semibold block mb-3">
              Craft & Sustainability
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#222A1E] tracking-tight">
              스튜디오 나무다움 & 생태적 살림
            </h2>
            <div className="w-8 h-px bg-[#C8BCAB] mx-auto mt-6 mb-6"></div>
            <p className="text-[#5E6B56] max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light">
              가구를 만들던 목수가 지역 목수님과 함께 농원의 집과 작업실을 직접 지었습니다.<br />
              자연을 불필요하게 해치지 않는 단순하고 정직한 삶의 방식을 실천합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#EAE3D4] shadow-sm">
                <img
                  src={woodWorkshop}
                  alt="스튜디오 나무다움 목공소"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E9E2D4]">
                <img
                  src={woodCraftsmanHands}
                  alt="대패질하는 목수의 손"
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div>
                  <h4 className="font-serif text-base font-bold text-[#232B1E]">천연 원목 손작업</h4>
                  <p className="text-xs text-[#63705C] mt-1 font-light leading-relaxed">
                    나무의 결과 향을 존중하며 생활 가구와 도구를 손수 짓고 오래 고쳐 씁니다.
                  </p>
                </div>
              </div>

              {/* Eco-living Points */}
              <div className="space-y-3.5 text-sm text-[#4E5B49] font-light">
                <div className="flex items-start gap-3">
                  <Check size={16} className="text-[#556B4E] mt-0.5 shrink-0" />
                  <span><strong>6kW 태양광 발전</strong>으로 생활 전기를 스스로 자급합니다.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={16} className="text-[#556B4E] mt-0.5 shrink-0" />
                  <span><strong>지하수와 빗물 집수 시설</strong>로 텃밭 식물들에게 물을 공급합니다.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={16} className="text-[#556B4E] mt-0.5 shrink-0" />
                  <span>농원의 <strong>자연 석빙고</strong>를 활용해 냉장고 의존을 줄이고 작물을 신선하게 저장합니다.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={16} className="text-[#556B4E] mt-0.5 shrink-0" />
                  <span>제철 텃밭 채소와 로컬푸드로 밥상을 차려 비닐 포장과 운송 거리를 줄입니다.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 10: Animals & Table (농원의 동물 친구들과 소박한 식탁)
      ────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 bg-white border-b border-[#EDE6D8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[12px] uppercase tracking-[0.25em] text-[#7B8770] font-semibold block mb-3">
              Farm Life & Sharing
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#222A1E] tracking-tight">
              소박한 밥상과 평화로운 동행
            </h2>
            <div className="w-8 h-px bg-[#C8BCAB] mx-auto mt-6 mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Bread & Table */}
            <div className="bg-[#FCFBF7] rounded-2xl overflow-hidden border border-[#ECE5D8] shadow-sm flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={rusticBread}
                  alt="직접 구운 천연 발효빵"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#232B1E] mb-2">천연 발효빵과 텃밭 밥상</h3>
                  <p className="text-xs text-[#5D6B57] leading-relaxed font-light">
                    텃밭에서 갓 딴 싱싱한 채소, 직접 구운 빵, 정성껏 끓인 국으로 하루 세 끼 건강한 식사를 함께 요리하고 나눕니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2ECE1] text-[11px] text-[#7E8B75]">
                  한식 · 파스타 · 제철 샐러드 · 채식 조율 가능
                </div>
              </div>
            </div>

            {/* Card 2: Dog */}
            <div className="bg-[#FCFBF7] rounded-2xl overflow-hidden border border-[#ECE5D8] shadow-sm flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={farmDog}
                  alt="농원 반려견"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#232B1E] mb-2">농원의 반려견</h3>
                  <p className="text-xs text-[#5D6B57] leading-relaxed font-light">
                    언덕길을 힘차게 뛰놀며 방문객과 우퍼들을 다정하게 맞아주는 봄농원의 사랑스러운 마스코트입니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2ECE1] text-[11px] text-[#7E8B75]">
                  마당 산책 · 정겨운 교감
                </div>
              </div>
            </div>

            {/* Card 3: Rabbits & Chickens */}
            <div className="bg-[#FCFBF7] rounded-2xl overflow-hidden border border-[#ECE5D8] shadow-sm flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={farmRabbit}
                  alt="농원의 토끼"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#232B1E] mb-2">토끼와 닭, 길고양이들</h3>
                  <p className="text-xs text-[#5D6B57] leading-relaxed font-light">
                    토끼 2마리, 닭 6마리, 그리고 농원 마당을 편안하게 오가는 길고양이들이 함께 어우러져 평화로운 시간을 보냅니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2ECE1] text-[11px] text-[#7E8B75]">
                  동물 돌보기 · 생태계의 조화
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 11: Stay & WWOOF (머무름과 우핑 안내 & 캘린더)
      ────────────────────────────────────────── */}
      <section id="stay" className="py-24 md:py-36 px-6 border-b border-[#EDE6D8]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[12px] uppercase tracking-[0.25em] text-[#7B8770] font-semibold block mb-3">
              WWOOF & Stay
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#222A1E] tracking-tight">
              봄농원에서 머무는 시간
            </h2>
            <div className="w-8 h-px bg-[#C8BCAB] mx-auto mt-6 mb-6"></div>
            <p className="text-[#5E6B56] max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light">
              봄농원은 '해야 할 일'을 빨리 끝내는 곳이 아니라, 하나하나의 일에 온전히 머무는 연습을 하는 곳입니다.<br />
              흙 내음 속에서 건강한 일상을 함께 가꿀 분들을 기다립니다.
            </p>
          </div>

{/* WWOOF Korea Certified Host Banner */}
          <div className="mb-14 p-6 md:p-8 rounded-3xl bg-[#F3F8F0] border border-[#D3E5CE] shadow-xs">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#3E6533] text-white flex flex-col items-center justify-center shadow-xs shrink-0">
                  <span className="font-serif font-black text-sm tracking-tight leading-none">WWOOF</span>
                  <span className="text-[9px] font-sans tracking-widest text-[#C8E8BF] mt-0.5">KOREA</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#DEECD9] text-[#34592B] text-[11px] font-bold">
                      공식 인증 호스트 #61076
                    </span>
                    <span className="text-xs text-[#5D7C54]">유기순환 생태농원</span>
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-[#23351E]">
                    WWOOF Korea 공식 인증 호스트 농장
                  </h3>
                  <p className="text-xs text-[#526D4A] font-light mt-0.5 leading-relaxed">
                    유기농과 자연순환의 가치를 배우고, 대지와의 교감을 실천하는 세계적인 우핑 네트워크의 공식 호스트입니다.
                  </p>
                </div>
              </div>
              <a
                href="https://wwoof.kr/ko/host/61076"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#3E6533] hover:bg-[#325229] text-white text-xs font-medium transition-all shadow-xs shrink-0 group"
              >
                <span>우핑 호스트 프로필 보기</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Stay Highlights 3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-white border border-[#E9E2D4]">
              <div className="w-9 h-9 rounded-full bg-[#EAE4D5] flex items-center justify-center text-[#4B5E43] mb-4">
                <Home size={18} />
              </div>
              <h4 className="font-serif text-base font-bold text-[#222A1E] mb-2">편안한 독립 게스트룸</h4>
              <p className="text-xs text-[#586551] leading-relaxed font-light">
                독립 화장실, 전용 주방, 도어록 잠금장치가 있어 편안하고 안전한 개인 휴식 시간이 보장됩니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E9E2D4]">
              <div className="w-9 h-9 rounded-full bg-[#EAE4D5] flex items-center justify-center text-[#4B5E43] mb-4">
                <Calendar size={18} />
              </div>
              <h4 className="font-serif text-base font-bold text-[#222A1E] mb-2">여유로운 하루 일과</h4>
              <p className="text-xs text-[#586551] leading-relaxed font-light">
                하루 약 5시간, 주 5일 동안 자연농 텃밭 일과 동물 돌보기, 간단한 목공 손작업을 함께합니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E9E2D4]">
              <div className="w-9 h-9 rounded-full bg-[#EAE4D5] flex items-center justify-center text-[#4B5E43] mb-4">
                <Heart size={18} />
              </div>
              <h4 className="font-serif text-base font-bold text-[#222A1E] mb-2">몸과 마음의 돌봄</h4>
              <p className="text-xs text-[#586551] leading-relaxed font-light">
                원하시면 아침 스트레칭이나 따뜻한 차 한 잔과 함께하는 차담 명상에도 편안하게 함께하실 수 있습니다.
              </p>
            </div>
          </div>

          {/* Seasonal Farming Calendar Tabs */}
          <div className="p-8 rounded-2xl bg-white border border-[#E9E2D4]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EAE3D4] gap-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#222A1E]">사계절 농사 일지</h3>
                <p className="text-xs text-[#707D69] mt-0.5 font-light">자연의 순환에 맞춰 이루어지는 봄농원의 1년</p>
              </div>

              {/* Season Buttons */}
              <div className="flex bg-[#EFEAE0] p-1 rounded-xl">
                {['spring', 'summer', 'autumn', 'winter'].map((seasonKey) => (
                  <button
                    key={seasonKey}
                    onClick={() => setActiveSeason(seasonKey)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeSeason === seasonKey
                        ? 'bg-white text-[#2C3727] shadow-xs font-bold'
                        : 'text-[#64715D] hover:text-[#2C3727]'
                    }`}
                  >
                    {seasonKey === 'spring' && '봄'}
                    {seasonKey === 'summer' && '여름'}
                    {seasonKey === 'autumn' && '가을'}
                    {seasonKey === 'winter' && '겨울'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Contents */}
            <div className="pt-6 space-y-4">
              <div className="mb-2">
                <span className="font-serif text-base font-bold text-[#35432F]">
                  {seasonalWork[activeSeason].title}
                </span>
                <span className="text-xs text-[#73806C] ml-3 font-light">
                  — {seasonalWork[activeSeason].subtitle}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {seasonalWork[activeSeason].items.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FCFBF7] border border-[#EAE3D4]">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F3EEE3] text-[11px] font-bold text-[#4B5E43] mb-2">
                      {item.month}
                    </span>
                    <p className="text-xs text-[#44503E] leading-relaxed font-light">
                      {item.task}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 12: Instagram Feed Grid & Accounts (3번 요청 반영)
      ────────────────────────────────────────── */}
      <section id="instagram" className="py-24 md:py-36 px-6 bg-white border-b border-[#EDE6D8]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#4E6146] text-xs font-semibold mb-3">
              <Instagram size={14} />
              <span>@bom_let.be & @simplwood</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#222A1E] tracking-tight">
              농원의 생생한 순간들
            </h2>
            <div className="w-8 h-px bg-[#C8BCAB] mx-auto mt-6 mb-6"></div>
            <p className="text-[#5E6B56] max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light">
              생태, 순환, 그리고 알아차림으로 채워지는 농원의 일상을 인스타그램에서 실시간으로 만나보세요.
            </p>
          </div>

          {/* 9-Grid Instagram Feed Style Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16">
            {instagramFeed.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden bg-[#EDE6D8] aspect-square shadow-xs block cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-[#1D2619]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-between items-center">
                    <Instagram size={20} className="text-[#E7DFD0]" />
                    <ArrowUpRight size={18} className="text-[#E7DFD0]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#EBE5D8] leading-relaxed font-light line-clamp-3 mb-2">
                      {item.caption}
                    </p>
                    <span className="text-[11px] text-[#B7C7AD] tracking-wider font-mono">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Dual Instagram Profile Cards (봄 농원 & 목공 스튜디오) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* 1. 봄, 있는 그대로 Instagram */}
            <div className="p-7 rounded-2xl bg-[#FCFBF7] border border-[#E9E2D4] shadow-xs flex flex-col justify-between">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#F3EDE2] flex items-center justify-center text-[#4B5E43]">
                    <Instagram size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#232B1E]">봄, 있는 그대로</h3>
                    <p className="text-xs text-[#707D68] font-mono">@bom_let.be</p>
                  </div>
                </div>
                <p className="text-xs text-[#52604C] leading-relaxed font-light">
                  생태, 순환, 그리고 알아차림 삶으로의 여정. 숲밭의 생명들과 계절의 변화를 기록합니다.
                </p>
              </div>

              <a
                href="https://www.instagram.com/bom_let.be"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#44563C] text-white text-xs font-medium hover:bg-[#34422D] transition-colors flex items-center justify-center gap-2"
              >
                <Instagram size={14} />
                <span>@bom_let.be 인스타그램 방문하기</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* 2. 스튜디오 나무다움 Instagram */}
            <div className="p-7 rounded-2xl bg-[#FCFBF7] border border-[#E9E2D4] shadow-xs flex flex-col justify-between">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#F5ECE5] flex items-center justify-center text-[#7F5E45]">
                    <Instagram size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#232B1E]">스튜디오 심플우드</h3>
                    <p className="text-xs text-[#8A7667] font-mono">@simplwood</p>
                  </div>
                </div>
                <p className="text-xs text-[#52604C] leading-relaxed font-light">
                  자연을 닮은 원목 가구와 소품, 농원의 집을 손수 지은 목수 남편의 나무 작업 이야기.
                </p>
              </div>

              <a
                href="https://www.instagram.com/simplwood"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#6B503B] text-white text-xs font-medium hover:bg-[#523C2B] transition-colors flex items-center justify-center gap-2"
              >
                <Instagram size={14} />
                <span>@simplwood 인스타그램 방문하기</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 13: Contact & Location (오시는 길 & 방문 안내)
      ────────────────────────────────────────── */}
      <section id="contact" className="py-24 md:py-36 px-6 bg-[#FCFBF7] border-b border-[#EDE6D8]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[12px] uppercase tracking-[0.25em] text-[#7B8770] font-semibold block mb-3">
              Contact & Location
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#222A1E] tracking-tight">
              오시는 길 & 방문 안내
            </h2>
            <div className="w-8 h-px bg-[#C8BCAB] mx-auto mt-6 mb-6"></div>
            <p className="text-[#5E6B56] max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light">
              봄농원은 고요한 명상과 자연순환의 삶이 숨 쉬는 곳입니다.<br />
              방문객 모두의 깊은 쉼과 몰입을 위해 사전 문의 및 예약 후 방문해 주시기를 부탁드립니다.
            </p>
          </div>

          {/* Address Main Card */}
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#E9E1D2] shadow-xs mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-[#EFEAE0]">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7962]">
                  <MapPin size={16} className="text-[#52634B]" />
                  <span>농원 상세 주소</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#232B1E]">
                  충남 부여군 남성로 1107-12
                </h3>
                <p className="text-xs text-[#7A8673] font-light">
                  (충청남도 부여군 임천면 남성로 1107-12 · 우편번호 33171)
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('충남 부여군 남성로 1107-12');
                    setCopiedAddress(true);
                    setTimeout(() => setCopiedAddress(false), 2500);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F4EFE6] hover:bg-[#EAE2D4] text-xs text-[#43523B] font-medium transition-all"
                >
                  {copiedAddress ? <Check size={14} className="text-[#4E6E40]" /> : <Copy size={14} />}
                  <span>{copiedAddress ? '주소 복사 완료!' : '주소 복사'}</span>
                </button>

                <a
                  href="https://map.naver.com/v5/search/%EC%B6%A9%EB%82%A8%20%EB%B6%80%EC%97%AC%EA%B5%B0%20%EB%82%A8%EC%84%B1%EB%A1%9C%201107-12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#03C75A] hover:bg-[#02b350] text-white text-xs font-medium transition-all"
                >
                  <span>네이버 지도</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href="https://map.kakao.com/link/search/%EC%B6%A9%EB%82%A8%20%EB%B6%80%EC%97%AC%EA%B5%B0%20%EB%82%A8%EC%84%B1%EB%A1%9C%201107-12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FEE500] hover:bg-[#ebd300] text-[#191919] text-xs font-medium transition-all"
                >
                  <span>카카오맵</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Transportation Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#232B1E]">
                  <Car size={18} className="text-[#52634B]" />
                  <span>자가용 이용 시</span>
                </div>
                <div className="text-xs text-[#5A6853] font-light leading-relaxed space-y-1.5">
                  <p>• 네비게이션에 <strong>'충남 부여군 남성로 1107-12'</strong> 검색</p>
                  <p>• 서천공주고속도로 서부여IC 또는 논산천안고속도로에서 임천 방면으로 진입</p>
                  <p>• 농원 언덕 진입로를 따라 올라오시면 완만한 전용 주차 공간이 마련되어 있습니다.</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#232B1E]">
                  <Bus size={18} className="text-[#52634B]" />
                  <span>대중교통 이용 시</span>
                </div>
                <div className="text-xs text-[#5A6853] font-light leading-relaxed space-y-1.5">
                  <p>• <strong>부여시외버스터미널</strong> 하차 후 임천 방면 시내버스 탑승 (약 20~25분)</p>
                  <p>• 터미널에서 택시 이용 시 약 15분 소요</p>
                  <p>• KTX 이용 시 공주역 또는 논산역에서 부여 방면 버스/차량 환승</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Cards 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* 1. 봄 인스타그램 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E9E1D2] space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#F3EDE2] text-[#485B3F] flex items-center justify-center">
                  <Instagram size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#232B1E]">봄 : 농원 & 치유 문의</h4>
                  <p className="text-[11px] text-[#707D68] font-mono">@bom_let.be</p>
                </div>
              </div>
              <p className="text-xs text-[#5A6853] font-light leading-relaxed">
                자연치유 프로그램, 숲밭 명상 및 방문 일정 문의는 인스타그램 DM으로 다정하게 소통합니다.
              </p>
              <a
                href="https://www.instagram.com/bom_let.be"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#485B3F] font-bold hover:underline pt-1"
              >
                <span>인스타 DM 보내기</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* 2. 심플우드 인스타그램 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E9E1D2] space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#F5ECE5] text-[#7F5E45] flex items-center justify-center">
                  <Instagram size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#232B1E]">심플우드 : 목공 문의</h4>
                  <p className="text-[11px] text-[#8A7667] font-mono">@simplwood</p>
                </div>
              </div>
              <p className="text-xs text-[#5A6853] font-light leading-relaxed">
                원목 가구 및 소품 제작, 목공방 방문 및 나무 작업에 관한 문의를 환영합니다.
              </p>
              <a
                href="https://www.instagram.com/simplwood"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#7F5E45] font-bold hover:underline pt-1"
              >
                <span>인스타 DM 보내기</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* 3. 현존명상센터 서울 본원 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E9E1D2] space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#EAE8E3] text-[#414E3B] flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#232B1E]">현존명상센터 서울 본원</h4>
                  <p className="text-[11px] text-[#73806C] font-mono">010-3188-3105</p>
                </div>
              </div>
              <p className="text-xs text-[#5A6853] font-light leading-relaxed">
                도심 회원 리트릿 예약 및 1:1 대면 심층상담, 정규 명상 과정 관련 문의.
              </p>
              <a
                href="https://truebeing-meditation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#414E3B] font-bold hover:underline pt-1"
              >
                <span>명상센터 웹사이트 방문</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* WWOOF Korea Certified Host Banner */}
          <div className="p-8 rounded-3xl bg-[#F4F8F1] border border-[#D5E6D0] shadow-xs">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#3D6933] text-white flex flex-col items-center justify-center shadow-xs shrink-0">
                  <span className="font-serif font-black text-sm tracking-tight leading-none">WWOOF</span>
                  <span className="text-[9px] font-sans tracking-widest text-[#C8E8BF] mt-0.5">KOREA</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E1EEDC] text-[#34592B] text-[11px] font-bold">
                      공식 인증 호스트 #61076
                    </span>
                    <span className="text-xs text-[#5D7C54]">유기순환 생태농원</span>
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-[#23351E]">
                    WWOOF Korea 공식 인증 호스트 농장
                  </h3>
                  <p className="text-xs text-[#526D4A] font-light mt-0.5 leading-relaxed">
                    자연순환 농업과 생태적 삶을 실천하는 세계적인 우핑 네트워크의 공식 호스트입니다.
                  </p>
                </div>
              </div>
              <a
                href="https://wwoof.kr/ko/host/61076"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#3E6533] hover:bg-[#325229] text-white text-xs font-medium transition-all shadow-xs shrink-0 group"
              >
                <span>우핑 호스트 프로필 보기</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Footer
      ────────────────────────────────────────── */}
      <footer className="py-20 px-6 bg-[#F6F2E9] text-[#55634E]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-[#E5DDD0]">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#222A1E] mb-2">봄 : 있는 그대로</h3>
              <p className="text-xs text-[#6C7B65] font-light">
                자연 있는 그대로의 숲밭, 일상 속 명상이 함께하는 농원 · 현존명상센터 부여캠퍼스
              </p>
              <p className="text-xs text-[#8B9884] font-mono mt-1">
                A forest garden of living soil and everyday mindfulness
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a
                href="https://www.instagram.com/bom_let.be"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white border border-[#DDD3C2] text-[#3B4A34] hover:border-[#3B4A34] transition-colors flex items-center gap-1.5"
              >
                <Instagram size={14} />
                <span>@bom_let.be</span>
              </a>
              <a
                href="https://www.instagram.com/simplwood"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white border border-[#DDD3C2] text-[#3B4A34] hover:border-[#3B4A34] transition-colors flex items-center gap-1.5"
              >
                <Instagram size={14} />
                <span>@simplwood</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-[#6B7864] font-light leading-relaxed">
            <div>
              <p className="font-bold text-[#273223] mb-2 font-serif text-sm">농원 위치 & 캠퍼스</p>
              <p>충남 부여군 임천면 남성로 1107-12 (약 1,800평)</p>
              <p className="text-[11px] text-[#869580] mt-1">현존명상센터 부여캠퍼스 · 대중교통 및 주차 안내는 방문 시 상세 안내</p>
            </div>
            <div>
              <p className="font-bold text-[#273223] mb-2 font-serif text-sm">치유와 집중수련</p>
              <p>도시 회원 주말 리트릿 · 집중수련</p>
              <p>개인·가족 힐링 프로그램 · 기업 그린 리커버리</p>
            </div>
            <div>
              <p className="font-bold text-[#273223] mb-2 font-serif text-sm">철학과 마음</p>
              <p>자연을 불필요하게 해치지 않는 단순한 선택,</p>
              <p>'지금, 여기'의 삶에 온전히 머무는 평온한 쉼.</p>
            </div>
          </div>

          <div className="pt-8 text-center text-[11px] text-[#919E8B] font-light border-t border-[#EAE2D4]">
            © {new Date().getFullYear()} 봄 : 있는 그대로 (Buyeo Bom · Truebeing Meditation). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
