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
  Quote
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
          <div className="hidden lg:flex items-center space-x-8 text-[14px] font-medium text-[#4A5445]">
            <a href="#retreat" className="hover:text-[#1F251B] transition-colors text-[#43573C] font-bold">현존캠퍼스</a>
            <a href="#couple" className="hover:text-[#1F251B] transition-colors">부부 이야기</a>
            <a href="#daily" className="hover:text-[#1F251B] transition-colors">농원의 하루</a>
            <a href="#farming" className="hover:text-[#1F251B] transition-colors">자연농 숲밭</a>
            <a href="#woodcraft" className="hover:text-[#1F251B] transition-colors">나무다움</a>
            <a href="#stay" className="hover:text-[#1F251B] transition-colors">머무름과 우핑</a>
            <a href="#instagram" className="hover:text-[#1F251B] transition-colors flex items-center gap-1.5 text-[#556B4E]">
              <Instagram size={15} />
              <span>인스타그램</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2C3228] hover:text-[#52634B] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F0] border-b border-[#EAE3D2] px-6 py-6 space-y-4 animate-in fade-in duration-300">
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
              href="#woodcraft"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#404A3A] font-medium py-1"
            >
              스튜디오 나무다움
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
              href="#retreat"
              className="px-7 py-3 rounded-full bg-[#3D4F37] text-[#FAF8F2] text-sm font-medium hover:bg-[#2F3E2A] transition-all shadow-sm"
            >
              현존캠퍼스 안내
            </a>
            <a
              href="#daily"
              className="px-7 py-3 rounded-full bg-[#FCFBF7]/85 backdrop-blur-sm border border-[#DCD3C0] text-[#3D4F37] text-sm font-medium hover:bg-[#FCFBF7] transition-all"
            >
              농원의 일상 보기
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
          <div className="text-center mb-20">
            <span className="text-[12px] uppercase tracking-[0.25em] text-[#7B8770] font-semibold block mb-3">
              Truebeing Meditation Center · Buyeo Campus
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#222A1E] tracking-tight">
              도시의 소음을 벗어나, 흙과 마주하는 집중수련
            </h2>
            <div className="w-8 h-px bg-[#C8BCAB] mx-auto mt-6 mb-6"></div>
            <p className="text-[#5E6B56] max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light">
              봄농원은 <strong className="font-medium text-[#222A1E]">현존명상센터의 부여캠퍼스</strong>로 가꾸어지고 있습니다.<br />
              복잡한 도시 생활에 지친 회원들이 대지 위에 서서 호흡을 고르고, 깊은 침묵과 알아차림으로 내면을 회복하는 전용 수련처입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[4/5] bg-[#EAE4D7]">
                <img
                  src={signboardBom}
                  alt="봄 있는 그대로 현존명상센터 부여캠퍼스 목재 간판"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
                  <span className="text-[11px] uppercase tracking-widest text-[#E3DDD1] font-mono block mb-1">
                    Signboard on the Hillside
                  </span>
                  <p className="font-serif text-lg">
                    봄 : 있는 그대로 · 현존명상센터 부여캠퍼스
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4 text-[#444E3F] leading-relaxed text-[15px] font-light">
                <p>
                  도시의 빌딩 숲에서 실천하는 명상도 소중하지만, 바람의 결과 흙의 온기, 흙 속 미생물이 내뿜는 생명력 속에서 이루어지는 수련은 깊이가 다릅니다.
                </p>
                <p>
                  부여캠퍼스는 1,800평 언덕 전체가 하나의 열린 명상실입니다. 나선형 만다라 정원에서의 호흡, 숲길 걷기 명상, 맨손으로 잡초를 베고 흙을 덮는 노동 명상까지—일상의 모든 행위가 온전한 '현존(Presence)'으로 이어집니다.
                </p>
              </div>

              {/* 3 Core Retreat Offerings */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E8E1D3]">
                  <h4 className="font-serif text-base font-bold text-[#232B1E] flex items-center gap-2">
                    <Compass size={16} className="text-[#556B4E]" />
                    <span>도시 회원 집중수련 & 리트릿 (Deep Practice)</span>
                  </h4>
                  <p className="text-xs text-[#63705C] mt-1 font-light leading-relaxed">
                    주말 또는 일정 기간 동안 스마트폰을 내려놓고 침묵과 고요 속에서 자신의 내면을 깊이 응시하는 집중 명상 프로그램.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8E1D3]">
                  <h4 className="font-serif text-base font-bold text-[#232B1E] flex items-center gap-2">
                    <Sprout size={16} className="text-[#556B4E]" />
                    <span>자연농 텃밭 노동 명상 (Working Meditation)</span>
                  </h4>
                  <p className="text-xs text-[#63705C] mt-1 font-light leading-relaxed">
                    생각에 갇힌 뇌를 쉬게 하고 손발의 감각에 온전히 머물기. 씨앗을 심고 흙을 만지며 살아있는 대지와 하나 되는 경험.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8E1D3]">
                  <h4 className="font-serif text-base font-bold text-[#232B1E] flex items-center gap-2">
                    <Coffee size={16} className="text-[#556B4E]" />
                    <span>차담과 자연치유 식탁 (Tea & Mindful Dining)</span>
                  </h4>
                  <p className="text-xs text-[#63705C] mt-1 font-light leading-relaxed">
                    직접 덖은 야생 허브차와 제철 자연농 식재료로 차리는 정갈한 식사로 몸의 체질과 자연치유력을 깨웁니다.
                  </p>
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
          Section 3: A Day at Bom Farm (농원의 하루 비주얼 타임라인)
      ────────────────────────────────────────── */}
      <section id="daily" className="py-24 md:py-36 px-6 border-b border-[#EDE6D8]">
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
                className="bg-white rounded-2xl overflow-hidden border border-[#EAE3D4] shadow-xs flex flex-col hover:border-[#CAD2C3] transition-all"
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
          Section 4: Curiosity Notes & Personal Q&A
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
          Section 5: Living Soil & Natural Farming (자연농 & 퍼머컬처)
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
          Section 6: Studio Simplewood & Sustainable Living (목공 & 생태적 살림)
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
          Section 7: Animals & Table (농원의 동물 친구들과 소박한 식탁)
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
          Section 8: Stay & WWOOF (머무름과 우핑 안내 & 캘린더)
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
          Section 9: Instagram Feed Grid & Accounts (3번 요청 반영)
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
                    <h3 className="font-serif text-base font-bold text-[#232B1E]">스튜디오 나무다움</h3>
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
              <p>충청남도 부여군 임천면 평온한 언덕 (약 1,800평)</p>
              <p className="text-[11px] text-[#869580] mt-1">현존명상센터 부여캠퍼스 · 대중교통 및 주차 안내는 방문 시 상세 안내</p>
            </div>
            <div>
              <p className="font-bold text-[#273223] mb-2 font-serif text-sm">치유와 집중수련</p>
              <p>도시 회원 주말 리트릿 · 집중수련</p>
              <p>자연농 텃밭 가꾸기 · 숲밭 걷기 명상 · 차담</p>
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
