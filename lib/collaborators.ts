import type { Lang } from "./content";

export type Collaborator = {
  id: string;
  kind: "researcher" | "organisation";
  name: Record<Lang, string>;
  title?: Record<Lang, string>;
  role: string;
  field: Record<Lang, string>;
};

// Shared by the homepage and network page. Add new entries here; counts and
// layouts update automatically. Preserve native names until official English
// spellings are supplied. Do not infer affiliations or project responsibilities.
export const collaborators: Collaborator[] = [
  { id: "ahn-soomyeong", kind: "researcher", title: { ko: "교수", en: "Professor" }, name: { ko: "안수명", en: "안수명" }, role: "AX", field: { ko: "AX", en: "AX" } },
  { id: "kim-wooyeol", kind: "researcher", title: { ko: "교수", en: "Professor" }, name: { ko: "김우열", en: "김우열" }, role: "Real-time Analysis", field: { ko: "실시간 분석", en: "Real-time analysis" } },
  { id: "tan-jewan", kind: "researcher", title: { ko: "교수", en: "Professor" }, name: { ko: "탄제완", en: "탄제완" }, role: "CCU", field: { ko: "탄소 포집·활용", en: "Carbon capture & utilisation" } },
  { id: "yoo-geunje", kind: "researcher", title: { ko: "교수", en: "Professor" }, name: { ko: "유근제", en: "유근제" }, role: "Metabolomics", field: { ko: "대사체 분석", en: "Metabolomics" } },
  { id: "lee-changsoo", kind: "researcher", title: { ko: "교수", en: "Professor" }, name: { ko: "이창수", en: "이창수" }, role: "Anaerobic Digestion", field: { ko: "혐기소화", en: "Anaerobic digestion" } },
  { id: "kepco", kind: "organisation", name: { ko: "한국전력", en: "Korea Electric Power Corporation (KEPCO)" }, role: "Power Supply / IDPP", field: { ko: "전력 공급 / IDPP", en: "Power supply / IDPP" } },
  { id: "lotte-ec", kind: "organisation", name: { ko: "롯데건설", en: "LOTTE Engineering & Construction" }, role: "EPC", field: { ko: "설계·조달·시공", en: "Engineering, procurement & construction" } },
  { id: "khnp", kind: "organisation", name: { ko: "한국수력원자력", en: "Korea Hydro & Nuclear Power (KHNP)" }, role: "CHP", field: { ko: "열병합발전", en: "Combined heat & power" } },
];
