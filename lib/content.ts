export type Lang = "ko" | "en";
export const languages: Lang[] = ["ko", "en"];
export const paths = [
  "",
  "about",
  "research",
  "technology",
  "network",
  "pilot",
  "facilities",
  "industry",
  "education",
  "achievements",
  "projects",
  "projects/naju",
  "projects/gangjin",
  "news",
  "contact",
];
export const isLang = (value: string): value is Lang =>
  value === "ko" || value === "en";
export const copy = {
  ko: {
    name: "바이오업사이클링 센터",
    home: "홈",
    menu: "메뉴",
    skip: "본문 바로가기",
    nav: ["센터 소개", "연구·기술", "주요사업", "소식·활동", "문의"],
    tagline: "바이오매스의 가능성을 자원순환의 다음 단계로",
    intro:
      "저활용 바이오매스를 에너지 자원으로 전환하고, 연구와 현장 실증을 연결합니다.",
    heroButton: "주요사업 살펴보기",
    more: "자세히 보기",
    all: "전체 프로젝트",
    overviewTitle: "연구에서 실증으로, 실증에서 적용으로",
    overview:
      "바이오업사이클링 센터는 바이오매스 전환 기술과 공정데이터 기반 평가를 함께 살펴봅니다. 원료의 특성부터 전처리, 바이오가스 생산과 고질화까지 연결하며 현장에서의 적용 가능성을 연구합니다.",
    researchTitle: "바이오매스 전환을 연결하는 네 가지 기술",
    researchIntro:
      "각 공정의 역할과 적용 범위를 이해하고, 프로젝트별 시험 조건과 검증 결과를 구분합니다.",
    tech: [
      [
        "원료 전처리",
        "바이오매스의 입도와 성상을 조절해 후속 생물학적 전환에 적합한 조건을 연구합니다. 원료 특성에 따라 처리 조건과 에너지 투입을 함께 검토합니다.",
      ],
      [
        "건식 혐기소화",
        "산소가 없는 조건에서 미생물 반응을 활용해 유기성 원료를 바이오가스로 전환합니다. 원료 공급, 반응 조건과 공정 안정성이 주요 검토 항목입니다.",
      ],
      [
        "바이오가스 고질화",
        "생산된 바이오가스에서 불순물을 제거하고 메탄 농도를 높이는 공정입니다. 최종 가스 품질과 활용 조건을 함께 검토합니다.",
      ],
      [
        "공정데이터·CO₂ 평가",
        "공정별 운전데이터를 수집·분석하고 CO₂ 발생량을 평가하는 체계를 개발합니다. 배출량 평가는 실제 온실가스 감축 성과의 검증과 구분합니다.",
      ],
    ],
    aboutTitle: "자원의 가치와 현장 적용을 함께 연구합니다",
    aboutIntro: "연구·실증·협력을 연결하는 바이오업사이클링 플랫폼",
    aboutRoles: [
      [
        "연구",
        "원료와 공정의 특성을 이해하고 바이오매스 전환 기술의 적용 가능성을 살펴봅니다.",
      ],
      [
        "실증",
        "프로젝트별 조건에서 기술을 검토하고, 설계 목표와 실제 운전 결과를 구분해 축적합니다.",
      ],
      [
        "협력",
        "연구와 사업 현장의 질문을 연결하고, 기관별 역할에 맞는 협력 기회를 찾습니다.",
      ],
    ],
    networkTitle: "프로젝트로 연결되는 협력",
    networkText:
      "센터는 연구·기술과 사례를 소개하고 협력의 접점을 연결합니다. 각 프로젝트의 수행 책임과 참여 범위는 해당 사업을 수행하는 기관에 따라 구분됩니다.",
    networkNote: "아래는 나주 실증 과제의 참여 구조입니다.",
    partners: [
      ["한국전력공사", "과제 총괄"],
      ["그리네플", "위탁연구 주관"],
      ["롯데건설", "위탁연구 참여"],
    ],
    projectsTitle: "현장과 연결되는 주요사업",
    projectsIntro:
      "서로 다른 현장과 단계에서 진행하는 바이오매스 전환 프로젝트를 소개합니다.",
    najuTitle: "나주 바이오가스 전환 시스템 실증",
    najuType: "실증 시스템 구축",
    najuSummary:
      "볏짚의 에너지 전환과 공정데이터 기반 CO₂ 발생량 평가를 연계하는 실증 과제입니다.",
    gangjinTitle: "강진 ADOS 파일럿",
    gangjinType: "파일럿 운영",
    gangjinSummary:
      "왕겨 배치식 운영에서 볏짚 연속식 운영으로 확장한 건식 혐기소화 파일럿입니다.",
    najuOfficial:
      "CO₂ 발생량 평가 플랫폼을 적용한 농업부산물 바이오가스 전환 시스템 실증",
    najuBody:
      "나주 실증 과제는 저활용 바이오매스 잔재물의 에너지 회수와 전환 공정의 CO₂ 발생량 평가를 목표로 합니다. 원료 전처리, 건식 혐기소화, 바이오가스 고질화와 공정데이터 수집을 연계하는 시스템을 구축합니다.",
    najuFacts: [
      ["위치", "전라남도 나주시, 한전 에너지신기술연구소"],
      ["과제 기간", "2026년 7월 1일 ~ 2028년 6월 30일"],
      ["초기 시운전 원료", "볏짚"],
      ["추진 현황", "2026년 10월 기준 설비 제작 중"],
    ],
    feedTitle: "초기 적용에서 원료의 확장으로",
    feedBody:
      "초기 시운전에는 볏짚을 사용할 계획입니다. 향후 커피박과 폐목재를 포함한 농·임업 부산물 및 식품가공 잔재물로 적용 범위를 확대하고자 합니다. 확대 대상의 나주 플랜트 처리 성능은 향후 검토·검증 대상입니다.",
    scheduleTitle: "추진 일정",
    schedule: [
      ["2026.10", "설비 제작 중"],
      ["2026.11", "시운전 예정"],
      ["2026.12", "본격 가스 생산 예정"],
    ],
    scheduleNote:
      "2026년 10월 기준 계획입니다. 실제 추진 상황에 따라 일정과 현황을 갱신합니다.",
    scopeTitle: "이 과제가 확인하고자 하는 것",
    scopeBody:
      "바이오매스의 에너지 전환과 공정별 CO₂ 발생량 평가를 연결하는 것이 목표입니다. 나주 플랜트의 운전 성능과 환경성 결과는 시운전·운영 이후 검증하며, 강진 파일럿의 운영 결과와 별도로 관리합니다.",
    processTitle: "실증 시스템의 공정 구성",
    processCaption: "공정 개념도 · 상세 설비 도면이 아닙니다.",
    gangjinBody:
      "강진 파일럿은 건식 혐기소화 기술의 운전 조건과 바이오가스 생산 특성을 살펴보는 현장입니다. 초기 왕겨 배치식 운영 이후, 지속적인 원료 투입을 위한 Hybrid-ADOS 연속식 운영으로 시스템을 확장했습니다.",
    gangjinFacts: [
      ["위치", "전라남도 강진군"],
      ["1단계", "2025년 11월 ~ 2026년 3월 · 왕겨 배치식 운영"],
      ["2단계", "2026년 4월부터 · 볏짚 연속식 운영"],
      ["자료 기준일", "2026년 10월 1일"],
    ],
    gangjinScope:
      "파일럿의 운영 결과는 해당 설비와 시험 조건에 대한 자료입니다. 나주 플랜트의 실적 또는 모든 원료의 상용 처리 성능을 뜻하지 않습니다.",
    gangjinFocus: [
      [
        "원료와 운전 방식",
        "왕겨 원물의 배치식 운영과 볏짚 분쇄물의 연속식 운영을 구분합니다.",
      ],
      [
        "공정 운영",
        "원료 투입과 소화액 순환 조건에 따른 바이오가스 생산 특성을 살펴봅니다.",
      ],
      [
        "확장 검토",
        "파일럿 운영 경험을 토대로 원료·규모·운전 조건이 달라질 때 필요한 검토 항목을 정리합니다.",
      ],
    ],
    newsTitle: "소식·활동",
    newsIntro: "프로젝트의 진행 소식과 연구·협력 활동을 전합니다.",
    newsHeading: "나주 실증 시스템 제작 진행",
    newsText:
      "나주 실증 과제는 설비 제작을 진행하고 있습니다. 2026년 11월 시운전과 12월 본격 가스 생산을 계획하고 있습니다.",
    contactTitle: "협력의 시작, 함께 나누는 질문",
    contactIntro: "연구 협력, 현장 실증과 기술 적용에 관한 문의를 보내 주세요.",
    contactText:
      "관심 원료, 적용 현장과 문의 내용을 함께 알려주시면 협력 논의에 도움이 됩니다.",
    email: "이메일 문의",
    address: "전라남도 나주시 켄텍길 21 한국에너지공과대학교",
    formFallback: "현재 문의는 이메일로 받고 있습니다.",
    cta: "바이오매스 전환의 다음 가능성을 함께 살펴보세요.",
    inquiry: "협력 문의",
    updated: "기준일: 2026년 10월 13일",
    footer: "바이오매스 전환 연구와 현장 실증을 연결합니다.",
  },
  en: {
    name: "Bio-Upcycling Center",
    home: "Home",
    menu: "Menu",
    skip: "Skip to content",
    nav: [
      "About",
      "Research & Technology",
      "Projects",
      "News & Activities",
      "Contact",
    ],
    tagline: "New possibilities for biomass. The next step in circularity.",
    intro:
      "Connecting research and field demonstration to turn underused biomass into energy resources.",
    heroButton: "Explore our projects",
    more: "Explore project",
    all: "All projects",
    overviewTitle: "From research to demonstration and application",
    overview:
      "The Bio-Upcycling Center explores biomass conversion alongside process-data-based assessment. We connect feedstock characteristics, pretreatment, biogas production and upgrading to study their potential for application in the field.",
    researchTitle: "Four technologies. One connected process.",
    researchIntro:
      "Understanding each process and its scope, with test conditions and results documented separately for each project.",
    tech: [
      [
        "Feedstock pretreatment",
        "Studying particle size and feedstock properties to support biological conversion. Treatment conditions and energy inputs are considered for each feedstock.",
      ],
      [
        "Dry anaerobic digestion",
        "Using microbial activity without oxygen to convert organic feedstock into biogas. Feedstock supply, reaction conditions and process stability are key considerations.",
      ],
      [
        "Biogas upgrading",
        "Removing impurities and increasing the methane concentration of biogas. Gas quality is considered alongside the requirements of its intended use.",
      ],
      [
        "Process data & CO₂ assessment",
        "Developing a framework to collect and analyse operating data and assess process CO₂ emissions. Emissions assessment is distinct from verification of greenhouse gas reductions.",
      ],
    ],
    aboutTitle: "Exploring resource value and practical application",
    aboutIntro:
      "A platform connecting biomass research, demonstration and collaboration",
    aboutRoles: [
      [
        "Research",
        "Understanding feedstock and process characteristics to explore the application of biomass conversion technologies.",
      ],
      [
        "Demonstration",
        "Investigating technologies under project-specific conditions and distinguishing design targets from operating results.",
      ],
      [
        "Collaboration",
        "Connecting questions from research and industry with opportunities shaped by each organisation’s role.",
      ],
    ],
    networkTitle: "Collaboration through projects",
    networkText:
      "The center presents research, technologies and project cases and connects opportunities for collaboration. Delivery responsibilities and participation are specific to the organisations implementing each project.",
    networkNote:
      "The following roles relate to the Naju demonstration project.",
    partners: [
      [
        "Korea Electric Power Corporation (KEPCO)",
        "Overall project coordination",
      ],
      ["Greeneple", "Lead commissioned research organisation"],
      [
        "LOTTE Engineering & Construction",
        "Participating commissioned research organisation",
      ],
    ],
    projectsTitle: "Projects connected to the field",
    projectsIntro:
      "Biomass conversion projects at distinct locations and stages of development.",
    najuTitle: "Naju Biogas Conversion Demonstration",
    najuType: "Demonstration system development",
    najuSummary:
      "A demonstration project connecting rice straw conversion with process-data-based CO₂ emissions assessment.",
    gangjinTitle: "Gangjin ADOS Pilot",
    gangjinType: "Pilot operation",
    gangjinSummary:
      "A dry anaerobic digestion pilot extended from batch operation with rice husks to continuous operation with rice straw.",
    najuOfficial:
      "Pilot Demonstration of a CO₂ Emissions Assessment Platform for an Agricultural Byproducts-to-Biogas Conversion System",
    najuBody:
      "The Naju demonstration project aims to recover energy from underused biomass residues and assess CO₂ emissions from the conversion process. It is developing an integrated system combining feedstock pretreatment, dry anaerobic digestion, biogas upgrading and process data collection.",
    najuFacts: [
      [
        "Location",
        "KEPCO research site, Naju, Jeollanam-do, Republic of Korea",
      ],
      ["Project period", "1 July 2026 – 30 June 2028"],
      ["Initial commissioning feedstock", "Rice straw"],
      ["Current stage", "Equipment fabrication as of October 2026"],
    ],
    feedTitle: "Starting with rice straw. Exploring a broader scope.",
    feedBody:
      "Rice straw is planned as the initial commissioning feedstock. Future work aims to expand the scope to agricultural and forestry residues and food-processing residues, including spent coffee grounds and waste wood. Performance with these additional feedstocks at the Naju plant remains subject to investigation and validation.",
    scheduleTitle: "Project timeline",
    schedule: [
      ["Oct 2026", "Equipment fabrication"],
      ["Nov 2026", "Commissioning planned"],
      ["Dec 2026", "Regular gas production planned"],
    ],
    scheduleNote:
      "Plans as of October 2026. Dates and status will be updated as the project progresses.",
    scopeTitle: "What the project aims to demonstrate",
    scopeBody:
      "The aim is to connect biomass energy conversion with process-level CO₂ emissions assessment. Operating performance and environmental results at Naju will be evaluated after commissioning and operation, separately from the Gangjin pilot results.",
    processTitle: "Demonstration process",
    processCaption: "Process concept · Not a detailed engineering drawing.",
    gangjinBody:
      "The Gangjin pilot investigates operating conditions and biogas production characteristics of dry anaerobic digestion. Following initial batch operation with rice husks, the system was extended to continuous Hybrid-ADOS operation to support regular feedstock input.",
    gangjinFacts: [
      ["Location", "Gangjin, Jeollanam-do, Republic of Korea"],
      ["Phase 1", "November 2025 – March 2026 · Rice husk batch operation"],
      ["Phase 2", "From April 2026 · Continuous rice straw operation"],
      ["Source date", "1 October 2026"],
    ],
    gangjinScope:
      "Pilot results relate to the specific equipment and test conditions. They do not establish performance at the Naju plant or commercial treatment performance for all feedstocks.",
    gangjinFocus: [
      [
        "Feedstock and operation",
        "Distinguishing batch operation with untreated rice husks from continuous operation with ground rice straw.",
      ],
      [
        "Process operation",
        "Investigating biogas production characteristics in relation to feedstock input and liquid circulation conditions.",
      ],
      [
        "Further application",
        "Using pilot experience to identify considerations when feedstock, scale or operating conditions change.",
      ],
    ],
    newsTitle: "News & Activities",
    newsIntro: "Updates from projects, research and collaboration.",
    newsHeading: "Naju demonstration system: fabrication underway",
    newsText:
      "Equipment fabrication is underway for the Naju demonstration project. Commissioning is planned for November 2026, with regular gas production planned for December 2026.",
    contactTitle: "Start a conversation",
    contactIntro:
      "Get in touch about research collaboration, field demonstration and technology applications.",
    contactText:
      "Tell us about your feedstock, application site and questions to help start a focused discussion.",
    email: "Contact by email",
    address:
      "Korea Institute of Energy Technology, 21 Kentech-gil, Naju, Jeollanam-do, Republic of Korea",
    formFallback: "Please contact us by email.",
    cta: "Explore the next possibilities for biomass conversion with us.",
    inquiry: "Contact us",
    updated: "As of 13 October 2026",
    footer: "Connecting biomass conversion research and field demonstration.",
  },
};
