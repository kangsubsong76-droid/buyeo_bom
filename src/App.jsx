import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import heroFarm from './assets/images/hero_farm.png';
import natureLake from './assets/images/nature_lake.png';
import natureHands from './assets/images/nature_hands.jpg';
import natureForest from './assets/images/nature_forest.jpg';
import stove from './assets/images/stove.jpg';
import bread from './assets/images/bread.jpg';
import gardenCrops from './assets/images/garden_crops.jpg';
import kitchenAll from './assets/images/kitchen_all.jpg';
import potatoes from './assets/images/potatoes.jpg';
import studioExterior from './assets/images/studio_exterior.jpg';
import farmLandscape from './assets/images/farm_landscape.jpg';
import farmingHands from './assets/images/farming_hands.jpg';
import dogLiving from './assets/images/dog_living.jpg';
import farmLayout from './assets/images/farm_layout.png';
import locationMap from './assets/images/location_map.png';
import naturePath from './assets/images/nature_path.jpg';
import heroCalmBw from './assets/images/hero_calm_bw.jpg';
import handsHeart from './assets/images/hands_heart.jpg';
import meditationCandle from './assets/images/meditation_candle.jpg';
import morningYoga from './assets/images/morning_yoga.jpg';
import meditationArtVertical from './assets/images/meditation_art_vertical.jpg';
import meditationClassWarm from './assets/images/meditation_class_warm.png';
import meditationSmile from './assets/images/meditation_smile.png';
import meditationClassBack from './assets/images/meditation_class_back.png';
import woodPlaneShavings from './assets/images/wood_plane_shavings.jpg';
import farmToTableMeal from './assets/images/farm_to_table_meal.jpg';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased text-farm-800 bg-farm-50 selection:bg-farm-200 selection:text-farm-700">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 bg-white/90 backdrop-blur-md shadow-sm`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-serif text-2xl md:text-3xl tracking-tighter text-farm-900 font-bold">
            봄: 있는 그대로
          </div>
          <div className="hidden md:flex space-x-12 text-base font-bold text-farm-900">
            <a href="#story" className="hover:text-farm-600 transition-colors">Story</a>
            <a href="#meditation" className="hover:text-farm-600 transition-colors">Meditation</a>
            <a href="#space" className="hover:text-farm-600 transition-colors">Space</a>
            <a href="#experience" className="hover:text-farm-600 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-farm-600 transition-colors">Contact</a>
          </div>
          <button className="text-xs tracking-widest uppercase font-bold text-farm-900 border-b-2 border-farm-900 pb-1 hover:text-farm-700 hover:border-farm-700">Menu</button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroCalmBw}
              alt="봄 있는 그대로 농원"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-black/30"></div>

          <div className="relative z-20 text-center px-6">
            <div className="mb-8">
              <span className="inline-block text-white tracking-[0.3em] uppercase text-[11px] md:text-sm font-bold border border-white/40 px-5 py-2 rounded-full backdrop-blur-sm">
                Buyeo, Korea — Nature Healing Farm
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tighter leading-tight drop-shadow-lg">
              <span className="block mb-2">봄: 있는 그대로 농원</span>
              <span className="block font-light opacity-80 text-2xl md:text-4xl font-sans tracking-widest mt-6">Bom, let it be</span>
            </h1>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce cursor-pointer">
            <span className="text-[10px] tracking-widest uppercase font-bold block mb-2">Scroll</span>
            <div className="w-px h-12 bg-white/50 mx-auto"></div>
          </div>
        </section>

        {/* Introduction / Story */}
        <section id="story" className="py-32 md:py-56 bg-farm-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
              <div className="lg:col-span-12 text-center mb-24">
                <span className="text-farm-300 text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Philosophy</span>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-farm-600 leading-snug lg:leading-tight">
                  <span className="block mb-2 md:mb-4">온전히 <strong className="text-farm-900 font-bold">관(觀)</strong>하고,</span>
                  <span className="block mb-2 md:mb-4">온전히 <strong className="text-farm-900 font-bold">행(行)</strong>하며,</span>
                  <span className="block">온전히 <strong className="text-farm-900 font-bold">득(得)</strong>하다</span>
                </h2>
                <div className="w-12 h-px bg-farm-200 mx-auto mt-12 mb-12"></div>
                <p className="max-w-2xl mx-auto text-farm-400 font-light text-lg leading-relaxed break-keep">
                  우리는 삶의 번아웃을 넘어 자연의 리듬으로 돌아갑니다.<br />
                  도시에서의 치열한 기획과 교육의 경력을 뒤로하고,<br className="hidden md:block" />
                  이제는 흙을 만지고 나무를 깎으며 진짜 나를 마주합니다.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-24">
                <div className="group relative">
                  <div className="overflow-hidden rounded-2xl aspect-[3/4]">
                    <img src={handsHeart} alt="마음 챙김" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="mt-8">
                    <h3 className="font-serif text-2xl text-farm-600 mb-4">자연농 기반의 생태 순환</h3>
                    <p className="text-farm-400 font-light text-base leading-relaxed break-keep">
                      농약, 비료, 경운 없는 3무(無) 농법을 통해 대지의 회복을 돕고,
                      그 생명력을 담은 '진짜 식탁'을 일굽니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl mb-12">
                  <img src={farmLandscape} alt="부여 봄 농원 풍경" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-farm-100 shadow-sm">
                    <span className="text-farm-200 text-3xl font-serif mb-4 block">5,950㎡</span>
                    <p className="text-xs text-farm-300 uppercase tracking-widest font-bold">Total Area</p>
                    <p className="text-sm text-farm-400 mt-2 font-light">낮은 산자락 숲세권 부지</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-farm-100 shadow-sm">
                    <span className="text-farm-200 text-3xl font-serif mb-4 block">1,800평</span>
                    <p className="text-xs text-farm-300 uppercase tracking-widest font-bold">Heritage</p>
                    <p className="text-sm text-farm-400 mt-2 font-light">생태가 살아 숨쉬는 공간</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meditation Program Section (New) */}
        < section id="meditation" className="py-24 md:py-40 bg-white overflow-hidden" >
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-24">
              <span className="text-farm-400 text-xs font-bold tracking-widest uppercase mb-4 block">Daily Program</span>
              <h2 className="font-serif text-4xl md:text-6xl text-farm-800">현존과 비움</h2>
              <div className="w-12 h-px bg-farm-300 mx-auto mt-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 h-auto md:h-[500px]">
              {/* 1. Morning Yoga */}
              <div className="relative group rounded-2xl overflow-hidden h-[300px] md:h-full">
                <img src={morningYoga} alt="아침 요가" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-6 left-6 text-white p-4">
                  <h3 className="text-2xl font-serif mb-2">아침 요가</h3>
                  <p className="text-sm opacity-80">몸을 깨우는 스트레칭</p>
                </div>
              </div>

              {/* 2. Candle Meditation */}
              <div className="relative group rounded-2xl overflow-hidden h-[300px] md:h-full text-center">
                <img src={meditationCandle} alt="촛불 명상" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                  <h3 className="text-3xl font-serif mb-4">촛불 명상</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    흔들리는 불꽃을 바라보며<br />내면의 고요를 찾습니다.
                  </p>
                </div>
              </div>

              {/* 3. Group Class */}
              <div className="relative group rounded-2xl overflow-hidden h-[300px] md:h-full lg:col-span-2">
                <img src={meditationClassWarm} alt="그룹 명상" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 inline-block">Group Session</span>
                  <h3 className="text-3xl md:text-4xl font-serif mb-4">함께하는 치유</h3>
                  <p className="text-base md:text-lg opacity-90 max-w-lg leading-relaxed">
                    성북동 현존명상센터의 전문 인스트럭터와 함께 호흡하고,
                    서로의 에너지를 나누며 깊은 이완을 경험합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Illustration Banner */}
            <div className="mt-8 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
              <img src={meditationArtVertical} alt="명상 일러스트" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <h2 className="text-white font-serif text-4xl md:text-6xl drop-shadow-xl text-center leading-tight">
                  "그저 있는 그대로,<br />나를 만나는 시간"
                </h2>
              </div>
            </div>
          </div>
        </section >
        <section id="space" className="py-32 md:py-56 bg-farm-950 text-farm-50 overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 gap-8">
              <h2 className="font-serif text-4xl md:text-7xl lg:text-8xl tracking-tighter">
                치유의 터전<br />
                <span className="italic font-light opacity-50">Healing Hardware</span>
              </h2>
              <p className="max-w-sm text-farm-300 font-light text-base leading-relaxed break-keep opacity-80">
                실내 목공 치유실부터 숲밭 산책로까지,<br />
                안전하고 편안한 배리어 프리 공간을 지향합니다.
              </p>
            </div>

            {/* Farm Layout Map */}
            <div className="mb-24 bg-farm-900/50 rounded-3xl p-4 md:p-8 border border-farm-800">
              <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-farm-950">
                <img src={farmLayout} alt="농원 안내도" className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 left-6 bg-farm-950/80 backdrop-blur-sm px-6 py-3 rounded-full border border-farm-800">
                  <span className="text-farm-200 text-xs font-serif tracking-widest">ECO-FARM GUIDE MAP</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Studio */}
              <div className="group relative h-[600px] overflow-hidden rounded-3xl">
                <img src={studioExterior} alt="목공 치유실 실외" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-farm-950 via-farm-950/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <h3 className="font-serif text-3xl mb-4 text-white">Studio</h3>
                  <p className="text-farm-200 text-sm font-light opacity-80 leading-relaxed break-keep">
                    목공 치유실 & 다목적 명상 라운지.<br />
                    휠체어 진입이 가능한 배리어 프리 유니버설 디자인.
                  </p>
                </div>
              </div>

              {/* Eco Farm */}
              <div className="group relative h-[600px] overflow-hidden rounded-3xl">
                <img src={gardenCrops} alt="자연농 텃밭" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-farm-950 via-farm-950/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <h3 className="font-serif text-3xl mb-4 text-white">Eco Garden</h3>
                  <p className="text-farm-200 text-sm font-light opacity-80 leading-relaxed break-keep">
                    1,000㎡의 자연농 텃밭과 숲밭.<br />
                    닭, 오리와 공생하는 생태 순환의 정원.
                  </p>
                </div>
              </div>

              {/* Indoor Living */}
              <div className="group relative h-[600px] overflow-hidden rounded-3xl">
                <img src={kitchenAll} alt="다목적 명상실 실내" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-farm-950 via-farm-950/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <h3 className="font-serif text-3xl mb-4 text-white">Lounge</h3>
                  <p className="text-farm-200 text-sm font-light opacity-80 leading-relaxed break-keep">
                    요가와 다도, 나눔이 있는 공간.<br />
                    따뜻한 채광과 나무의 질감이 가득한 라운지.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs (Software) */}
        <section id="experience" className="py-32 md:py-56 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-40">
              <span className="text-farm-300 text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Software</span>
              <h2 className="font-serif text-4xl md:text-6xl text-farm-600 mb-8 tracking-tighter">몸 · 숲 · 밥 프로그램</h2>
              <p className="text-farm-400 font-light max-w-2xl mx-auto break-keep italic">
                나만의 수저를 깎는 몰입의 시간부터,<br className="md:hidden" /> 직접 수확한 작물로 차려낸 정성스러운 한 끼까지.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-48">
              <div className="relative">
                <div className="aspect-square rounded-full overflow-hidden border-8 border-farm-50 shadow-2xl skew-x-1 transition-transform duration-700 hover:rotate-2">
                  <img src={woodPlaneShavings} alt="몰입의 목공 시간" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-farm-100 rounded-full flex items-center justify-center text-farm-500 font-serif text-xs text-center p-4">
                  나를 깎다,<br />잡념을 비우다
                </div>
              </div>
              <div className="space-y-8">
                <h3 className="font-serif text-4xl text-farm-600 leading-[1.1]">
                  [몸] 몰입의 목공<br />
                  <span className="text-xl md:text-2xl text-farm-300 italic font-light">Wood Carving Experience</span>
                </h3>
                <p className="text-farm-400 font-light leading-relaxed break-keep text-lg">
                  나무의 결을 따라 천천히 손을 움직입니다.
                  나만의 수저나 소품을 직접 깎으며 '행함' 속에 잡념을 비워내고
                  온전한 몰입의 즐거움을 경험합니다.
                </p>
                <div className="pt-4 flex gap-4">
                  <span className="px-4 py-2 bg-farm-50 rounded-full text-[10px] font-bold text-farm-400 tracking-wider">WOODWORK</span>
                  <span className="px-4 py-2 bg-farm-50 rounded-full text-[10px] font-bold text-farm-400 tracking-wider">FOCUSING</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center flex-row-reverse mb-48">
              <div className="order-2 md:order-1 space-y-8">
                <h3 className="font-serif text-4xl text-farm-600 leading-[1.1]">
                  [숲] 생태 순환 농부<br />
                  <span className="text-xl md:text-2xl text-farm-300 italic font-light">Eco-Farming Connection</span>
                </h3>
                <p className="text-farm-400 font-light leading-relaxed break-keep text-lg">
                  땅을 살리는 농사를 통해 생명의 원리를 체득합니다.
                  닭과 오리를 돌보며 생명 존중과 정서적 교감을 경험하고,
                  우주와 내가 하나로 연결되어 있음을 느낍니다.
                </p>
                <div className="pt-4 flex gap-4">
                  <span className="px-4 py-2 bg-farm-50 rounded-full text-[10px] font-bold text-farm-400 tracking-wider">NATURAL FARM</span>
                  <span className="px-4 py-2 bg-farm-50 rounded-full text-[10px] font-bold text-farm-400 tracking-wider">CONNECTION</span>
                </div>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="aspect-square rounded-full overflow-hidden border-8 border-farm-50 shadow-2xl -skew-x-1 transition-transform duration-700 hover:-rotate-2">
                  <img src={potatoes} alt="부여 봄 수확물" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="aspect-square rounded-full overflow-hidden border-8 border-farm-50 shadow-2xl skew-x-1 transition-transform duration-700 hover:rotate-2">
                  <img src={farmToTableMeal} alt="현미 채식 팜투테이블" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-8">
                <h3 className="font-serif text-4xl text-farm-600 leading-[1.1]">
                  [밥] 팜투테이블<br />
                  <span className="text-xl md:text-2xl text-farm-300 italic font-light">Farm-to-Table Meditation</span>
                </h3>
                <p className="text-farm-400 font-light leading-relaxed break-keep text-lg">
                  텃밭에서 갓 수확한 싱싱한 작물로 차려낸 밥상입니다.
                  미각을 깨우는 식사 명상을 통해 음식에 깃든 우주의 에너지를
                  온전히 득(Acquire)하는 기쁨을 누립니다.
                </p>
                <div className="pt-4 flex gap-4">
                  <span className="px-4 py-2 bg-farm-50 rounded-full text-[10px] font-bold text-farm-400 tracking-wider">HEALING FOOD</span>
                  <span className="px-4 py-2 bg-farm-50 rounded-full text-[10px] font-bold text-farm-400 tracking-wider">TASTE MEDITATION</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle / Atmosphere */}
        <section className="py-32 md:py-56 bg-farm-100/50">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/20 rounded-3xl overflow-hidden border border-farm-200">
              <div className="h-[400px] md:h-[600px] overflow-hidden">
                <img src={dogLiving} alt="농원의 일상" className="w-full h-full object-cover grayscale-[10%]" />
              </div>
              <div className="p-12 md:p-24 flex flex-col justify-center bg-white">
                <h2 className="font-serif text-3xl md:text-4xl text-farm-500 mb-8 break-keep leading-tight">
                  "지금 이 순간, 있는 그대로 명상을 즐기다"
                </h2>
                <p className="text-farm-400 font-light text-base leading-relaxed break-keep">
                  특별한 형식에 얽매이지 않습니다.
                  숲을 걷고, 멍하니 불꽃을 바라보고, 맨발로 흙을 밟는
                  일상의 모든 행위가 즐거운 휴식이자 명상이 됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-32 md:py-56 bg-farm-50 text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <span className="text-farm-300 text-[10px] uppercase tracking-[0.3em] font-bold block mb-8">Visit Us</span>
            <h2 className="font-serif text-5xl md:text-6xl text-farm-600 mb-16 tracking-tighter">당신이 쉴 곳</h2>

            <div className="space-y-12 mb-20">
              <div>
                <h4 className="text-farm-200 text-xs uppercase tracking-widest font-bold mb-4">Location</h4>
                <p className="text-farm-500 text-xl font-medium">충청남도 부여군 임천면 남성로 1107-12</p>

                {/* Location Map with Overlay */}
                <div className="mt-12 relative w-full aspect-video md:aspect-[2/1] rounded-2xl overflow-hidden shadow-lg border border-farm-100">
                  <img src={locationMap} alt="오시는 길" className="w-full h-full object-cover" />
                  {/* Overlay Card to 'Replace' text */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm px-8 py-6 rounded-xl shadow-xl border border-farm-100 text-center min-w-[200px]">
                    <span className="block text-farm-300 text-[10px] tracking-widest uppercase font-bold mb-2">Destination</span>
                    <span className="block text-farm-700 font-serif text-xl font-bold">봄: 있는 그대로 농원</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-farm-200 text-xs uppercase tracking-widest font-bold mb-4">Inquiry</h4>
                <p className="text-farm-500 text-xl font-medium">서울 성북동 '현존명상센터' 연계 프로그램 가능</p>
              </div>
              <div className="flex gap-8 justify-center">
                <a href="https://www.instagram.com/bom_let.be" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white border border-farm-200 flex items-center justify-center text-farm-400 group-hover:bg-farm-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Instagram size={20} />
                  </div>
                  <span className="text-farm-400 text-[10px] tracking-widest font-bold uppercase group-hover:text-farm-600 transition-colors">Farm Story</span>
                </a>
                <a href="https://www.instagram.com/simplwood" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white border border-farm-200 flex items-center justify-center text-farm-400 group-hover:bg-farm-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Instagram size={20} />
                  </div>
                  <span className="text-farm-400 text-[10px] tracking-widest font-bold uppercase group-hover:text-farm-600 transition-colors">Wood Studio</span>
                </a>
              </div>
            </div>

            <button className="px-12 py-5 bg-farm-600 text-white rounded-full font-bold shadow-2xl hover:bg-farm-500 hover:scale-105 transition-all text-xs tracking-[0.2em] uppercase">
              프로그램 안내 및 예약 신청
            </button>
          </div>
        </section>
      </main >

      <footer className="py-24 border-t border-farm-100 bg-white">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="font-serif text-xl tracking-tighter text-farm-300 font-bold mb-8">봄: 있는 그대로</div>
          <p className="text-farm-200 text-[9px] tracking-[0.3em] uppercase mb-4 text-center leading-relaxed">
            자연농 기반 생태 순환 농원 & 치유 스테이<br />
            Copyright © 2026 Buyeo Bom Farm. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Styles for Animations */}
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes ken-burns {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-fade-in {
          animation: fade-in 2s ease-out forwards;
        }
        .delay-700 {
          animation-delay: 0.7s;
          opacity: 0;
        }
      `}</style>
    </div >
  );
};

export default App;
