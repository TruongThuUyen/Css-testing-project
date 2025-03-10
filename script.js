const bannerSlides = [
  {
    id: 1,
    url: './assets/images/activities/image-go-karts.jpg',
    alt: 'image-go-karts',
    title: 'go karts',
    description:
      'Enjoy an adrenaline ride in any weather. Outdoor track and indoor hall at a professional level with Sodi go-karts.',
  },
  {
    id: 2,
    url: './assets/images/activities/image-jumparena.png',
    alt: 'image-jumparena',
    title: 'jumparena',
    description:
      'Aréna se spoustou atrakcí pro děti i dospělé všech věkových kategorií. Trampolíny, lezecká stěna, ninja dráha a další atrakce.',
  },

  {
    id: 3,
    url: './assets/images/activities/image-virtual-reality.png',
    alt: 'image-virtual-reality',
    title: 'Virtuální realita',
    description:
      'Díky naší virtuální realitě vstoupíte do jiného světa a poznáte nové technologie. Vyberte si z naší nabídky her a zažijte VR na vlastní kůži.',
  },
  {
    id: 4,
    url: './assets/images/activities/image-multiball.png',
    alt: 'image-multiball',
    title: 'MULTIBALL',
    description:
      'Interaktivní sportovní a herní konzole, která z pohybu a vzdělávání dělá opravdovou zábavu. Velké množství her zaujme všechny věkové kategorie.',
  },
  {
    id: 5,
    url: './assets/images/activities/image-laser-shooting-range.png',
    alt: 'image-laser-shooting-range',
    title: 'Laserová střelnice',
    description:
      'Vyzkoušejte si nebo vypilujte svou mušku! Laserová střelnice se třemi režimy střelby na čas otestuje nejen vaši přesnost, ale také rychlost a postřeh.',
  },
];

const renderBanner = () => {
  const splideListEl = document.querySelector('.splide__list');
  bannerSlides.forEach((slide) => {
    splideListEl.innerHTML += `
        <li key=${slide.id}
          class="splide__slide relative z-1 flex flex-col justify-end max-w-[var(--container-width)] h-[720px] px-4 lg:px-12 pb-[50px] bg-[linear-gradient(180deg,rgba(25,25,25,0)_52.85%,#191919_100%),url('${slide.url}')] bg-cover bg-center">
          <div class="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-10">
            <!-- Left Content -->
            <div class="w-full text-white mb-5 sm:mb-0">
              <h1 class="max-w-full lg:max-w-[429px] mb-4 lg:mb-6 text-7xl md:text-8xl xl:text-[120px] font-bold uppercase line-height-normal">${slide.title}</h1>
              <div class="flex items-center justify-between lg:justify-normal gap-0 lg:gap-3 text-[var(--primary-text-color)]">
                <span class="text-sm max-w-[297px] lg:max-w-[347px] h-[54px] leading-[18px]">
                 ${slide.description}
                </span>
                <button
                  class="relative w-[163px] h-[49px] flex items-center justify-center leading-none">
                  <svg
                    width="163"
                    height="49"
                    class="absolute w-[158px] lg:w-[163px] h-[40px] lg:h-[49px]"
                    viewBox="0 0 163 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_1_791" fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.763961 37.6087C-1.71886 42.9133 2.15269 49 8.00958 49H138.795C141.9 49 144.724 47.2034 146.04 44.3913L161.486 11.3913C163.969 6.0867 160.097 0 154.24 0H23.4552C20.3503 0 17.5258 1.79656 16.2096 4.60869L0.763961 37.6087Z" />
                   </mask>
                    <path
                      d="M16.2096 4.60869L15.3039 4.18478L16.2096 4.60869ZM161.486 11.3913L160.58 10.9674L161.486 11.3913ZM146.04 44.3913L145.135 43.9674L146.04 44.3913ZM0.763961 37.6087L-0.141742 37.1848L0.763961 37.6087ZM8.00958 50H138.795V48H8.00958V50ZM146.946 44.8152L162.392 11.8152L160.58 10.9674L145.135 43.9674L146.946 44.8152ZM154.24 -1H23.4552V1H154.24V-1ZM15.3039 4.18478L-0.141742 37.1848L1.66966 38.0326L17.1153 5.0326L15.3039 4.18478ZM23.4552 -1C19.9622 -1 16.7846 1.02113 15.3039 4.18478L17.1153 5.0326C18.267 2.57199 20.7384 1 23.4552 1V-1ZM162.392 11.8152C165.185 5.84754 160.829 -1 154.24 -1V1C159.365 1 162.753 6.32586 160.58 10.9674L162.392 11.8152ZM138.795 50C142.288 50 145.465 47.9789 146.946 44.8152L145.135 43.9674C143.983 46.428 141.512 48 138.795 48V50ZM8.00958 48C2.8848 48 -0.502802 42.6741 1.66966 38.0326L-0.141742 37.1848C-2.93491 43.1525 1.42058 50 8.00958 50V48Z"
                      fill="#D9D9D9"
                      mask="url(#path-1-inside-1_1_791)" />
                  </svg>
                  <span
                    class="relative z-10 text-[var(--primary-text-color)]  text-sm lg:text-base leading-[20px] w-[107px] h-[20px] font-medium text-center whitespace-nowrap overflow-hidden">
                    Find out more
                  </span>
                </button>
              </div>
            </div>

            <!-- Right Content -->
             <div class="relative max-w-full lg:max-w-[382px] -mb-10">
              <!-- Shadow Layer -->
              <div
                class="absolute w-[100px] h-[100px] right-[146px] lg:right-0 lg:left-[110px] top-[-45px] [background:radial-gradient(50%_50%_at_50%_50%,#E30613_0%,#009FE3_100%)] blur-[50px]"></div>
              <div
                class="absolute w-[168px] h-[168px] bottom-0 lg:bottom-normal right-[48px] lg:right-normal lg:left-[163px] lg:top-[0] [background:radial-gradient(50%_50%_at_50%_50%,rgba(0,159,227,0.5)_0%,rgba(227,6,19,0.5)_100%)] blur-[50px]"></div>
              <!-- Flag item -->
              <img
                src="./assets/images/flag.png"
                alt="Racing flag"
                class="absolute bottom-[62px] lg:bottom-[98px] left-[-14px] w-[87px] h-[87px] z-1 object-cover" />

              <div class="content__inner relative ">
                <div
                  class="content-background relative pt-2 pl-[14px] pb-5 pr-4 text-var(--primary-text-color)">
                  <div class="flex items-center mb-3">
                    <p
                      class="w-[352px] h-[38px] text-right text-[32px] tracking-tight text-[var(--primary-text-color)] leading-none uppercase font-big-shoulders-text">
                      Everyday fun for everyone
                    </p>
                  </div>
                  <p
                    class="text-sm text-[var(--primary-text-color)] font-normal text-sm leading-[18px]">
                    A few kilometers from Cheb, we have built a new entertainment centre
                    <span
                      class="bg-[linear-gradient(90deg,#009FE3_14%,#FFFFFF_61.46%,#E30613_111%)] bg-clip-text text-transparent font-normal text-sm leading-[18px]">
                      FUN Arena Cheb
                    </span>
                    for you. You will find entertainment and sports activities for children and
                    adults here.
                  </p>
                </div>
              </div>

              <!-- Phone Number -->
              <div class="absolute top-[95px] lg:top-[131px] right-[5px]">
                <div
                  class="phone-number__inner relative flex gap-[10px] items-center w-[178px] bg-[var(--primary-text-color)] rounded-[24px]">
                  <span
                    class="inline-block py-[9px] pl-3 leading-[1.25rem] font-[var(--font-lexend-deca)] text-[var(--text-midnight-gray)] text-base font-lexend-deca font-bold">
                    +420737878891
                  </span>
                  <div
                    class="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#e53e3e]">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="30" height="30" rx="15" fill="#E30613" />
                      <path
                        d="M12.7898 10.1095L12.4766 9.40486C12.2718 8.94413 12.1694 8.71375 12.0163 8.53745C11.8244 8.31651 11.5743 8.15395 11.2944 8.06833C11.0711 8 10.819 8 10.3148 8C9.57726 8 9.20848 8 8.8989 8.14178C8.53423 8.30879 8.2049 8.67144 8.07368 9.05047C7.96228 9.37222 7.9942 9.70289 8.058 10.3642C8.73726 17.4035 12.5965 21.2627 19.6358 21.942C20.2971 22.0058 20.6278 22.0377 20.9495 21.9263C21.3286 21.7951 21.6912 21.4657 21.8583 21.1011C22 20.7915 22 20.4227 22 19.6852C22 19.1809 22 18.9289 21.9317 18.7056C21.8461 18.4257 21.6835 18.1756 21.4626 17.9837C21.2863 17.8306 21.0559 17.7282 20.5952 17.5234L19.8905 17.2102C19.3916 16.9885 19.142 16.8776 18.8886 16.8535C18.6459 16.8304 18.4013 16.8645 18.1742 16.9529C17.9369 17.0453 17.7272 17.2201 17.3077 17.5696C16.8901 17.9176 16.6814 18.0916 16.4263 18.1848C16.2001 18.2674 15.9011 18.298 15.663 18.2628C15.3942 18.2233 15.1885 18.1134 14.777 17.8934C13.4968 17.2093 12.7908 16.5033 12.1066 15.223C11.8867 14.8115 11.7767 14.6057 11.7371 14.3371C11.702 14.0989 11.7326 13.7999 11.8152 13.5738C11.9084 13.3187 12.0824 13.1099 12.4304 12.6923C12.7799 12.2729 12.9547 12.0631 13.0471 11.8258C13.1356 11.5987 13.1696 11.3541 13.1465 11.1115C13.1224 10.858 13.0115 10.6085 12.7898 10.1095Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
          </div>
        </li>
    `;
  });
};

document.addEventListener('DOMContentLoaded', function () {
  renderBanner();

  const dotsContainer = document.querySelector('.slide-dots');
  if (dotsContainer) {
    dotsContainer.innerHTML = '';

    bannerSlides.forEach((_, index) => {
      const dot = document.createElement('div');
      const childDot = document.createElement('div');
      dot.className = 'slide-dot' + (index === 0 ? ' active' : '');
      childDot.className = 'child-dot';
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
      dot.appendChild(childDot);

      dot.addEventListener('click', () => {
        splide.go(index);
      });
    });
  }

  var splide = new Splide('.splide', {
    type: 'fade',
    // autoplay: true,
    interval: 4000,
    autoHeight: false,
    rewind: true,
    arrows: false,
    pagination: false,
  });

  splide.on('moved', function (newIndex) {
    updateActiveDot(newIndex);
  });

  splide.on('autoplay:playing', function (rate) {
    const currentIndex = splide.index;
    updateActiveDot(currentIndex);
  });

  function updateActiveDot(activeIndex) {
    const dots = document.querySelectorAll('.slide-dot');
    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  splide.mount();
});
