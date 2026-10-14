import type { Lang } from "./content";
export type Text = readonly [string, string];
export const tr = (lang: Lang, text: Text) => text[lang === "ko" ? 0 : 1];
export const sections = [
  ["about", "센터 소개", "About"],
  ["research", "연구·기술", "Research"],
  ["projects", "실증·프로젝트", "Projects"],
  ["facilities", "연구 인프라", "Infrastructure"],
  ["industry", "협력·참여", "Collaboration"],
  ["news", "소식·자료", "News & resources"],
];
export const subnav = [
  [
    ["about", "센터의 비전", "Our vision"],
    ["network", "연구 네트워크", "Research network"],
  ],
  [
    ["research", "연구 분야", "Research areas"],
    ["technology", "통합 기술 플랫폼", "Technology platform"],
  ],
  [
    ["projects", "프로젝트 한눈에", "Project overview"],
    ["projects/naju", "나주 실증", "Naju demonstration"],
    ["projects/gangjin", "강진 파일럿", "Gangjin pilot"],
    ["pilot", "스케일업 로드맵", "Scale-up roadmap"],
  ],
  [["facilities", "시설·시험 역량", "Facilities & testing"]],
  [
    ["industry", "산업협력", "Industry collaboration"],
    ["education", "교육·연구 참여", "Education & participation"],
    ["contact", "문의", "Contact"],
  ],
  [
    ["news", "소식·활동", "News & activities"],
    ["achievements", "성과·공개자료", "Results & resources"],
  ],
];
export const domains: {
  id: string;
  title: Text;
  body: Text;
  topics: Text;
  code: string;
}[] = [
  {
    id: "biogas",
    code: "BIOGAS",
    title: ["바이오가스·혐기소화", "Biogas & anaerobic digestion"],
    body: [
      "유기성 자원을 미생물 반응으로 전환하는 연구입니다. 원료 특성과 반응 조건을 함께 살펴 안정적인 바이오가스 생산 경로를 검토합니다.",
      "Research into microbial conversion of organic resources, linking feedstock characteristics and reaction conditions to stable biogas production.",
    ],
    topics: [
      "건식·고율 혐기소화 · 유기성 폐기물 자원화 · 농업 바이오매스",
      "Dry and high-rate digestion · Organic resource recovery · Agricultural biomass",
    ],
  },
  {
    id: "rng",
    code: "RNG",
    title: ["재생천연가스·고질화", "Renewable natural gas & upgrading"],
    body: [
      "바이오가스의 불순물 제거와 메탄 농도 향상, 최종 가스 품질을 연구합니다. 가스망과 에너지 수요처별 활용 조건을 연결합니다.",
      "Research into impurity removal, methane enrichment and gas quality, with attention to end-use requirements and gas-grid integration.",
    ],
    topics: [
      "가스 정제 · 메탄 순도 · 도시가스망 연계",
      "Gas purification · Methane purity · Gas-grid integration",
    ],
  },
  {
    id: "hydrogen",
    code: "HYDROGEN",
    title: ["바이오매스 기반 수소 전환", "Biomass-derived hydrogen"],
    body: [
      "바이오가스와 RNG의 수소 전환 경로를 다룹니다. 촉매 반응, 에너지 투입과 전환 효율을 함께 검토하는 연구 방향입니다.",
      "Research directions for converting biogas and RNG to hydrogen, examining catalysts, energy inputs and conversion efficiency together.",
    ],
    topics: [
      "수증기 메탄 개질(SMR) · 열촉매 전환 · 효율 평가",
      "Steam methane reforming (SMR) · Thermocatalytic conversion · Efficiency assessment",
    ],
  },
  {
    id: "storage",
    code: "STORAGE",
    title: ["수소 저장·운송", "Hydrogen storage & transport"],
    body: [
      "생산된 에너지의 저장과 공급을 연결하는 기술을 살펴봅니다. 수소 혼입과 운송은 공급망의 안전성·재료·운전 조건을 함께 검토해야 합니다.",
      "Research directions connecting energy production with storage and supply, including the safety, materials and operating conditions of hydrogen blending and transport.",
    ],
    topics: [
      "수소 혼입 · 공급망 수송 · LOHC · 금속수소화물",
      "Hydrogen blending · Supply networks · LOHC · Metal hydrides",
    ],
  },
  {
    id: "carbon",
    code: "CARBON",
    title: ["탄소순환·환경성 평가", "Carbon circularity & assessment"],
    body: [
      "탄소 포집·활용과 자원 회수 경로를 살펴보고 전과정 관점에서 환경성을 평가합니다. 공정 CO₂ 발생량과 검증된 온실가스 감축량을 구분합니다.",
      "Exploring carbon capture and utilisation and resource recovery, with life-cycle environmental assessment. Process CO₂ emissions are distinguished from verified greenhouse gas reductions.",
    ],
    topics: [
      "CCU · 바이오차 · 영양염 회수 · 전과정 평가(LCA)",
      "CCU · Biochar · Nutrient recovery · Life-cycle assessment (LCA)",
    ],
  },
  {
    id: "materials",
    code: "BIOMATERIALS",
    title: ["바이오소재·자원 회수", "Biomaterials & resource recovery"],
    body: [
      "유기성 자원을 에너지뿐 아니라 소재로 활용하는 경로를 연구 주제로 연결합니다. 생성물의 특성과 활용 조건을 함께 검토합니다.",
      "Connecting organic-resource conversion with material applications as well as energy, considering product characteristics and use conditions.",
    ],
    topics: [
      "PHA · 바이오플라스틱 · 폐자원 소재화",
      "PHA · Bioplastics · Waste-to-material pathways",
    ],
  },
];
export const crosscut: Text[][] = [
  [
    ["AX·디지털 트윈", "AX & digital twins"],
    [
      "IoT 기반 운전데이터, 공정 모델과 AI를 연결해 의사결정·최적화·자율운전의 적용 가능성을 연구합니다.",
      "Connecting IoT operating data, process models and AI to explore decision support, optimisation and autonomous operation.",
    ],
  ],
  [
    ["실시간 분석·제어", "Real-time analysis & control"],
    [
      "가스 조성, 반응 상태, 압력과 이상 신호를 분석해 공정의 안정성과 제어 조건을 살펴봅니다.",
      "Analysing gas composition, reaction state, pressure and abnormal signals to understand process stability and control.",
    ],
  ],
  [
    ["대사체 분석", "Metabolomics"],
    [
      "미생물 반응과 대사체 정보를 통해 바이오공정의 전환 특성과 성능 변화를 해석하는 연구축입니다.",
      "An analytical research axis for interpreting microbial reactions and changes in bioprocess conversion and performance.",
    ],
  ],
];
export const equipment: Text[][] = [
  [
    ["가스·성분 분석", "Gas & composition analysis"],
    [
      "GC 등 가스 분석 장비를 통한 조성 확인과 운전 조건별 비교",
      "Gas composition analysis, including GC, and comparison across operating conditions",
    ],
  ],
  [
    ["반응·소화 시험", "Reaction & digestion testing"],
    [
      "혐기소화 반응기·촉매 반응 시스템의 원료별 반응 특성 평가",
      "Feedstock-specific evaluation using digestion reactors and catalytic reaction systems",
    ],
  ],
  [
    ["정제·고도화", "Purification & upgrading"],
    [
      "가스 정제 과정의 품질 변화와 활용 조건 검토",
      "Evaluation of gas-quality changes during purification and requirements for use",
    ],
  ],
  [
    ["모니터링·제어", "Monitoring & control"],
    [
      "압력·가스·공정데이터 수집과 운전 상태 해석",
      "Collection of pressure, gas and process data and interpretation of operating conditions",
    ],
  ],
];
export const roadmap: Text[][] = [
  [
    ["TRL 1–3", "TRL 1–3"],
    ["벤치 스케일", "Bench scale"],
    [
      "기술 개념·타당성, 소재 스크리닝과 공정 파라미터를 검토합니다.",
      "Evaluate technical concepts, feasibility, material screening and process parameters.",
    ],
  ],
  [
    ["TRL 4–6", "TRL 4–6"],
    ["파일럿 스케일", "Pilot scale"],
    [
      "공정 통합, 연속 운전과 조건별 성능 비교를 통해 확대 적용의 근거를 쌓습니다.",
      "Build evidence for scale-up through process integration, continuous operation and performance comparisons.",
    ],
  ],
  [
    ["TRL 7–9", "TRL 7–9"],
    ["현장 실증·산업 적용", "Field demonstration & deployment"],
    [
      "현장 인프라, 안전성, 모듈화와 운영성을 확인하며 사업화 조건을 검토합니다.",
      "Assess site infrastructure, safety, modularisation and operability to inform deployment.",
    ],
  ],
];
export const projectDirections: Text[][] = [
  [
    ["바이오수소", "Biohydrogen"],
    [
      "촉매 개질과 수소 생산 공정의 파일럿 적용 검토",
      "Exploring pilot applications of catalytic reforming and hydrogen production",
    ],
  ],
  [
    ["RNG 플랫폼", "RNG platform"],
    [
      "바이오가스 고질화와 도시가스망 연계 조건 연구",
      "Research into upgrading and gas-grid integration requirements",
    ],
  ],
  [
    ["순환 탄소 네트워크", "Circular carbon network"],
    [
      "CCU·바이오차·영양염 회수의 연결",
      "Connecting CCU, biochar and nutrient recovery",
    ],
  ],
  [
    ["수소 혼입", "Hydrogen blending"],
    [
      "파이프라인 활용의 안전성과 운전 조건 검토",
      "Examining pipeline safety and operating conditions",
    ],
  ],
  [
    ["스마트 바이오리파이너리", "Smart biorefinery"],
    [
      "디지털 트윈·분석 데이터 기반 공정 최적화",
      "Process optimisation using digital twins and analytical data",
    ],
  ],
  [
    ["정부 R&D·국제협력", "Public R&D & international collaboration"],
    [
      "공공 연구개발, 창업지원과 국내외 연구 네트워크를 통한 협력 기회 탐색",
      "Exploring collaboration through public R&D, startup support and research networks",
    ],
  ],
];
export const goals: Text[][] = [
  [
    ["바이오가스 생산 성능", "Biogas production"],
    [
      "원료 투입 조건에 따른 가스 발생과 조성 변화를 확인합니다.",
      "Examine gas generation and composition under defined feedstock input conditions.",
    ],
  ],
  [
    ["공정 안정성", "Process stability"],
    [
      "운전데이터를 통해 반응 상태와 지속적인 운전 가능성을 평가합니다.",
      "Use operating data to evaluate reaction conditions and sustained operation.",
    ],
  ],
  [
    ["원료 적용성", "Feedstock suitability"],
    [
      "초기 볏짚 적용을 검토하고, 추가 원료는 성상과 처리 이력에 따라 별도 평가합니다.",
      "Evaluate the initial use of rice straw; assess other feedstocks separately based on characteristics and treatment history.",
    ],
  ],
  [
    ["CO₂ 발생량 평가", "CO₂ emissions assessment"],
    [
      "공정별 데이터와 평가 범위를 정리해 발생량을 평가합니다. 검증된 감축 실적과 구분합니다.",
      "Define process data and assessment boundaries to evaluate emissions, separately from verified reductions.",
    ],
  ],
];
