import Link from "next/link";
import { copy, type Lang } from "@/lib/content";
import { tr, crosscut } from "@/lib/center";
import {
  Hero,
  Heading,
  Photo,
  Cards,
  Platform,
  Partners,
  CTA,
  Roadmap,
  Projects,
  Resources,
} from "./CenterUI";
export default function ExtraPages({
  lang,
  path,
}: {
  lang: Lang;
  path: string;
}) {
  const t = copy[lang];
  const L = (ko: string, en: string) => tr(lang, [ko, en]);
  const hero = (title: string, subtitle: string, kicker: string) => (
    <Hero
      lang={lang}
      path={path}
      title={title}
      subtitle={subtitle}
      kicker={kicker}
    />
  );
  const concept = L(
    "연구 환경 설명용 이미지 · 실제 센터 보유 장비나 특정 현장의 기록 사진이 아닙니다.",
    "Illustrative research image · Not a record of center-owned equipment or a specific project site.",
  );
  if (path === "about")
    return (
      <>
        {hero(
          L(
            "자원을 다시 바라보고,\n새로운 가치를 연구합니다",
            "Rethinking resources.\nResearching new value.",
          ),
          L(
            "바이오매스에서 에너지·소재까지 이어지는 연구·실증·협력 플랫폼",
            "A research, demonstration and collaboration platform linking biomass with energy and materials",
          ),
          "ABOUT THE CENTER",
        )}
        <section className="section-wrap content-section split-layout">
          <div>
            <Heading
              eyebrow="VISION"
              title={L(
                "자원순환의 가능성을\n현장 적용으로",
                "From circular potential\nto practical application",
              )}
              text={L(
                "센터는 바이오가스, RNG, 수소 전환, 탄소순환과 바이오소재를 연결하는 연구 방향을 지향합니다. 실험실의 질문을 파일럿 검증과 산업 현장의 적용 조건으로 이어갑니다.",
                "The center’s research directions connect biogas, RNG, hydrogen conversion, carbon circularity and biomaterials, linking laboratory questions with pilot evaluation and industrial application requirements.",
              )}
            />
          </div>
          <Photo
            src="/kentech-campus-2.png"
            caption={L(
              "한국에너지공과대학교 캠퍼스 소개 이미지",
              "KENTECH campus illustration",
            )}
          />
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section">
            <Heading
              eyebrow="MISSION"
              title={L(
                "센터의 네 가지 실행 방향",
                "Four directions for the center",
              )}
            />
            <Cards
              lang={lang}
              items={[
                [
                  [
                    "폐자원에서 에너지·소재로",
                    "Waste resources to energy & materials",
                  ],
                  [
                    "바이오가스·RNG·수소와 소재 활용 경로를 연구합니다.",
                    "Researching pathways to biogas, RNG, hydrogen and materials.",
                  ],
                ],
                [
                  [
                    "연구와 현장 실증의 연결",
                    "Linking research and demonstration",
                  ],
                  [
                    "연구 인프라와 산업 파트너의 질문을 연결해 적용 조건을 검토합니다.",
                    "Connecting research infrastructure with industry questions to assess application conditions.",
                  ],
                ],
                [
                  ["지역 에너지 순환", "Regional energy circularity"],
                  [
                    "도시·농촌 바이오매스와 분산형 에너지 활용 모델을 살펴봅니다.",
                    "Exploring urban and rural biomass and distributed energy models.",
                  ],
                ],
                [
                  ["환경성 평가와 사업화", "Assessment and translation"],
                  [
                    "LCA와 공정 평가를 바탕으로 기술이전·공동사업의 근거를 쌓습니다.",
                    "Building evidence for technology transfer and joint projects through life-cycle and process assessment.",
                  ],
                ],
              ]}
            />
          </div>
        </section>
        <section className="section-wrap content-section">
          <Heading
            eyebrow="OUR APPROACH"
            title={L(
              "연구·실증·산업을 연결하는 협력",
              "Connecting research, demonstration and industry",
            )}
          />
          <Platform lang={lang} />
          <div className="button-row">
            <Link className="button outline" href={`/${lang}/network`}>
              {L("연구 네트워크", "Research network")} ↗
            </Link>
            <Link className="text-link" href={`/${lang}/industry`}>
              {L("산업협력 방식", "Ways to collaborate")} ↗
            </Link>
          </div>
        </section>
        <CTA lang={lang} />
      </>
    );
  if (path === "technology")
    return (
      <>
        {hero(
          L(
            "자원에서 전력·열·수소와 소재까지",
            "From resources to power, heat, hydrogen and materials",
          ),
          L(
            "원료, 전환, 저장·공급, 데이터와 탄소순환을 연결하는 통합 연구 구조",
            "An integrated research framework connecting feedstocks, conversion, storage and supply, data and carbon circularity",
          ),
          "TECHNOLOGY PLATFORM",
        )}
        <section className="section-wrap content-section">
          <Platform lang={lang} />
          <Cards
            lang={lang}
            items={[
              [
                ["원료 플랫폼", "Feedstock platform"],
                [
                  "농업 바이오매스, 음식물·도시 유기성 폐기물, 가축분뇨 등 원료별 성상과 전처리 조건을 검토합니다.",
                  "Examining characteristics and pretreatment for agricultural biomass, food and urban organic wastes, and livestock manure.",
                ],
              ],
              [
                ["바이오가스 플랫폼", "Biogas platform"],
                [
                  "혐기소화, 정제와 메탄 순도 제어를 연결합니다.",
                  "Connecting digestion, purification and methane-purity control.",
                ],
              ],
              [
                ["수소·저장 플랫폼", "Hydrogen & storage platform"],
                [
                  "SMR·열촉매 전환, 수소 혼입, LOHC·금속수소화물 등의 연구 경로를 다룹니다.",
                  "Research pathways include SMR, thermocatalytic conversion, blending, LOHC and metal hydrides.",
                ],
              ],
              [
                ["에너지 공급", "Energy supply"],
                [
                  "도시가스망, 분산형 전력·열 활용과 도시–농촌 에너지 순환을 살펴봅니다.",
                  "Exploring gas networks, distributed power and heat, and urban–rural energy circularity.",
                ],
              ],
              [
                ["스마트 모니터링", "Smart monitoring"],
                [
                  "IoT, 실시간 분석, 디지털 트윈과 AI 운전 최적화의 연계를 연구합니다.",
                  "Researching links between IoT, real-time analysis, digital twins and AI-based optimisation.",
                ],
              ],
              [
                ["탄소순환·소재", "Carbon circularity & materials"],
                [
                  "CCU, 바이오차·영양염 회수, 바이오소재와 LCA를 연결합니다.",
                  "Connecting CCU, biochar and nutrient recovery, biomaterials and LCA.",
                ],
              ],
            ]}
          />
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section split-layout">
            <Photo
              src="/greeneple-circular-rng.png"
              contain
              caption={L(
                "기존 공개 기술 개념자료 · 활용 경로 설명이며 나주 실증 성과를 뜻하지 않습니다.",
                "Previously published concept material (Korean). Energy pathways, not demonstrated Naju results.",
              )}
            />
            <div>
              <Heading
                eyebrow="CIRCULAR PATHWAYS"
                title={L(
                  "기술의 연결과 적용 범위를 함께",
                  "Connecting technologies with defined scope",
                )}
                text={L(
                  "RNG의 가스 공급·연료전지·수소 전환 등은 연구와 적용 검토의 경로입니다. SAF 등 추가 활용 경로도 개별 기술·사업의 검증이 필요합니다.",
                  "RNG supply, fuel cells and hydrogen conversion are research and application pathways. Additional routes, including SAF, require their own technical and project validation.",
                )}
              />
              <p>
                {L(
                  "기술 비교에서는 공정 효율, 경제성과 환경성을 함께 살펴봅니다. 개별 비교 수치는 동일한 평가 조건과 근거가 확인된 경우에 제시합니다.",
                  "Technology comparisons consider efficiency, economics and environmental performance together. Numerical comparisons require consistent conditions and supporting evidence.",
                )}
              </p>
              <Link className="text-link" href={`/${lang}/projects/naju`}>
                {L("나주에 적용하는 공정 보기", "See the Naju process")} ↗
              </Link>
            </div>
          </div>
        </section>
        <CTA lang={lang} />
      </>
    );
  if (path === "network")
    return (
      <>
        {hero(
          L(
            "전문성을 연결하는\n융합 연구 네트워크",
            "A research network\nconnecting expertise",
          ),
          L(
            "공정·분석·데이터·탄소순환을 잇는 개방형 연구 방향",
            "An open research approach across processes, analysis, data and carbon circularity",
          ),
          "RESEARCH NETWORK",
        )}
        <section className="section-wrap content-section">
          <div className="network-core">
            <p className="eyebrow">BIO-UPCYCLING CENTER</p>
            <h2>
              AX · ANALYSIS · CCU
              <br />
              METABOLOMICS · AD
            </h2>
            <p>
              {L(
                "공통의 연구 질문을 중심으로 전문 분야를 연결합니다.",
                "Connecting specialist disciplines around shared research questions.",
              )}
            </p>
          </div>
          <Cards
            lang={lang}
            items={[
              ...crosscut,
              [
                ["CCU·탄소순환", "CCU & carbon circularity"],
                [
                  "탄소 활용 경로와 공정 환경성을 연결하는 연구축입니다.",
                  "Connecting carbon utilisation pathways with process environmental performance.",
                ],
              ],
              [
                ["혐기소화·미생물 전환", "Digestion & microbial conversion"],
                [
                  "원료 특성, 미생물 반응과 운전 조건을 연결합니다.",
                  "Connecting feedstock properties, microbial reactions and operating conditions.",
                ],
              ],
            ]}
          />
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section">
            <Heading
              eyebrow="PROJECT COLLABORATION"
              title={L(
                "확인된 프로젝트 참여 구조",
                "Defined project participation",
              )}
              text={t.networkNote}
            />
            <Partners lang={lang} />
            <p className="scope-note">
              {L(
                "나주 과제의 수행 역할입니다. 개별 연구자의 참여와 기관의 공식 소속 관계는 별도로 구분합니다.",
                "These are Naju project roles. Individual participation and formal institutional affiliations are separate matters.",
              )}
            </p>
          </div>
        </section>
        <CTA lang={lang} />
      </>
    );
  if (path === "pilot")
    return (
      <>
        {hero(
          L(
            "벤치 스케일에서\n산업 현장까지",
            "From the laboratory\nto industrial applications",
          ),
          L(
            "규모가 달라질 때 무엇을 새롭게 검증해야 하는지 설명합니다.",
            "Understanding what must be evaluated as scale and operating conditions change.",
          ),
          "PILOT & SCALE-UP",
        )}
        <section className="section-wrap content-section">
          <Roadmap lang={lang} />
          <p className="scope-note">
            {L(
              "TRL 구간은 연구개발의 일반적인 단계 설명입니다. 센터 또는 개별 프로젝트가 특정 TRL을 달성했다는 인증·평가 결과가 아닙니다.",
              "TRL ranges describe general development stages, not an assessed or certified readiness level for the center or a particular project.",
            )}
          </p>
          <Cards
            lang={lang}
            items={[
              [
                ["원료와 반응", "Feedstock & reaction"],
                [
                  "원료 성상, 전처리 조건, 반응 파라미터와 생산물 특성을 확인합니다.",
                  "Evaluate feedstock characteristics, pretreatment, reaction parameters and products.",
                ],
              ],
              [
                ["공정 통합·연속 운전", "Integration & continuous operation"],
                [
                  "공정 간 연결, 소화액 순환과 안정적인 투입·배출을 검토합니다.",
                  "Examine process interfaces, recirculation and stable feeding and discharge.",
                ],
              ],
              [
                ["안전성·경제성·환경성", "Safety, economics & environment"],
                [
                  "현장 조건, 에너지 투입, 운영비와 LCA 평가 범위를 함께 검토합니다.",
                  "Consider site conditions, energy inputs, operating costs and LCA boundaries.",
                ],
              ],
            ]}
          />
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section">
            <Heading
              eyebrow="FIELD PROJECTS"
              title={L("현재의 현장 사례", "Current field projects")}
            />
            <Projects lang={lang} />
          </div>
        </section>
        <CTA lang={lang} />
      </>
    );
  if (path === "industry")
    return (
      <>
        {hero(
          L(
            "연구실과 산업 현장 사이,\n함께 만드는 연결",
            "Connecting research\nwith industry",
          ),
          L(
            "공동연구·현장 실증·기술이전·사업화를 위한 협력",
            "Collaboration for joint research, field trials, technology transfer and translation",
          ),
          "INDUSTRY COLLABORATION",
        )}
        <section className="section-wrap content-section split-layout">
          <div>
            <Heading
              eyebrow="WORK TOGETHER"
              title={L(
                "현장의 질문에서\n공동의 연구 과제로",
                "From practical questions\nto shared research",
              )}
              text={L(
                "에너지·유틸리티, 가스·수소, 폐기물 관리, 농업과 스타트업 등 다양한 분야의 적용 조건을 함께 살펴봅니다.",
                "Exploring application requirements across energy and utilities, gas and hydrogen, waste management, agriculture and startups.",
              )}
            />
            <div className="chips">
              {["Energy", "Gas & H₂", "Biomass", "Startups"].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
          <Photo
            src="/photo-partner-meeting.png"
            caption={L(
              "산학 협력 설명용 이미지 · 특정 기관과의 실제 회의 기록이 아닙니다.",
              "Illustrative collaboration image · Not a record of a meeting with specific organisations.",
            )}
          />
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section">
            <Cards
              lang={lang}
              items={[
                [
                  ["공동연구·공동 실증", "Joint research & trials"],
                  [
                    "현장 원료, 목표와 운전 제약을 바탕으로 시험 범위와 역할을 협의합니다.",
                    "Define trial scope and responsibilities around feedstock, objectives and site constraints.",
                  ],
                ],
                [
                  ["기술이전", "Technology transfer"],
                  [
                    "기술의 검증 수준, 적용 조건과 권리 범위를 검토합니다.",
                    "Review validation maturity, application requirements and intellectual-property scope.",
                  ],
                ],
                [
                  ["사업화·스핀오프", "Translation & spin-offs"],
                  [
                    "라이선스, 공동사업과 창업 등 연구성과의 활용 경로를 논의합니다.",
                    "Discuss licensing, joint ventures and startup pathways for research outcomes.",
                  ],
                ],
              ]}
            />
          </div>
        </section>
        <section className="section-wrap content-section">
          <Heading
            eyebrow="NAJU PROJECT PARTNERS"
            title={L(
              "나주 실증의 협력 구조",
              "Collaboration in the Naju project",
            )}
            text={L(
              "그리네플은 나주 과제에서 위탁연구 주관을 맡습니다. 개별 과제의 역할과 센터 전체의 소속 관계를 구분합니다.",
              "Greeneple leads commissioned research in the Naju project. Project roles are distinguished from the center’s institutional affiliations.",
            )}
          />
          <Partners lang={lang} />
          <Link className="text-link spaced" href={`/${lang}/projects/naju`}>
            {L("나주 과제 상세", "Naju project details")} ↗
          </Link>
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section">
            <Heading
              eyebrow="GLOBAL & REGIONAL NETWORKS"
              title={L(
                "지역에서 국제 협력까지",
                "From regional to international collaboration",
              )}
            />
            <Cards
              lang={lang}
              items={[
                [
                  ["대학·연구기관", "Universities & research institutes"],
                  [
                    "공동 연구와 연구자·학생 교류의 접점을 찾습니다.",
                    "Exploring joint research and researcher and student exchange.",
                  ],
                ],
                [
                  ["산업·공공 파트너", "Industry & public partners"],
                  [
                    "전력공급·분산형 전력(IDPP), 설계·조달·시공(EPC), 열병합(CHP) 등 산업 적용의 역할을 검토합니다.",
                    "Examining industrial roles in power supply and distributed power (IDPP), engineering, procurement and construction (EPC), and combined heat and power (CHP).",
                  ],
                ],
                [
                  ["기후·에너지 네트워크", "Climate & energy networks"],
                  [
                    "공개 사례와 연구자료를 바탕으로 국제적인 논의와 협력 기회를 살펴봅니다.",
                    "Exploring international dialogue and collaboration through public project and research information.",
                  ],
                ],
              ]}
            />
            <div className="enquiry-steps">
              <strong>{L("협력 절차", "How to collaborate")}</strong>
              <span>
                {L(
                  "문의·목적 공유 → 적용 조건 검토 → 범위·역할 협의",
                  "Share objectives → Review conditions → Agree scope and roles",
                )}
              </span>
            </div>
          </div>
        </section>
        <CTA lang={lang} />
      </>
    );
  if (path === "education")
    return (
      <>
        {hero(
          L(
            "실험과 데이터,\n현장에서 배우는 연구",
            "Learning through experiments,\ndata and field questions",
          ),
          L(
            "교육·연구 참여와 산업 협업의 접점을 소개합니다.",
            "Exploring education, research participation and industry collaboration.",
          ),
          "EDUCATION & PARTICIPATION",
        )}
        <section className="section-wrap content-section split-layout">
          <Photo src="/photo-lab-reactors.png" caption={concept} />
          <div>
            <Heading
              eyebrow="LEARN THROUGH RESEARCH"
              title={L(
                "공정을 이해하고,\n결과를 해석하는 경험",
                "Understanding processes.\nInterpreting evidence.",
              )}
              text={L(
                "장비 운용, 분석 데이터 해석, 파일럿 검증과 산업 파트너 협업을 연결하는 연구 참여 방향입니다.",
                "Research participation directions connecting equipment operation, analytical interpretation, pilot evaluation and industry collaboration.",
              )}
            />
          </div>
        </section>
        <section className="muted-section">
          <div className="section-wrap content-section">
            <Cards
              lang={lang}
              items={[
                [
                  ["RNG·바이오가스", "RNG & biogas"],
                  [
                    "정제·고도화와 에너지 활용 조건에 관한 연구 주제",
                    "Research topics in upgrading and energy-use requirements",
                  ],
                ],
                [
                  ["바이오 수소 시스템", "Biohydrogen systems"],
                  [
                    "수소 생산과 저장·운송을 연결하는 연구 주제",
                    "Research topics linking hydrogen production, storage and transport",
                  ],
                ],
                [
                  ["탄소중립 공학", "Carbon-neutral engineering"],
                  [
                    "CCU·LCA·바이오차 등 탄소순환 연구 주제",
                    "Research topics in CCU, LCA, biochar and carbon circularity",
                  ],
                ],
                [
                  [
                    "학생 연구·인턴십 문의",
                    "Student research & internship enquiries",
                  ],
                  [
                    "단기 연구·실험실 실습 등 관심 분야와 참여 가능 기간을 알려 주세요.",
                    "Share your research interests and availability for short-term research or laboratory experience.",
                  ],
                ],
              ]}
            />
            <p className="scope-note">
              {L(
                "교육·연구 참여 방향 안내이며 현재 모집 중인 공고가 아닙니다. 프로그램 운영 여부, 지원 자격과 일정은 개별 확인이 필요합니다.",
                "This describes participation directions, not an active recruitment announcement. Programme availability, eligibility and schedules require individual confirmation.",
              )}
            </p>
          </div>
        </section>
        <CTA lang={lang} />
      </>
    );
  return (
    <>
      {hero(
        L(
          "연구의 근거를 나누는\n성과와 공개자료",
          "Research evidence\nand open resources",
        ),
        L(
          "프로젝트 설명과 기술 개념을 확인할 수 있는 자료를 연결합니다.",
          "Find project information and technology concepts.",
        ),
        "RESULTS & RESOURCES",
      )}
      <section className="section-wrap content-section">
        <Resources lang={lang} />
        <Heading
          eyebrow="RESEARCH OUTPUTS"
          title={L("성과를 확인하는 기준", "Reading research outputs")}
          text={L(
            "논문·특허·학술발표·수상은 식별정보와 공개 근거가 확인된 자료를 게시합니다. 현재 확인되지 않은 건수나 실적은 표시하지 않습니다.",
            "Papers, patents, presentations and awards require identifiable public evidence. Unconfirmed counts and results are not displayed.",
          )}
        />
        <Cards
          lang={lang}
          items={[
            [
              ["논문·특허", "Papers & patents"],
              [
                "제목·저자·발행처·DOI 또는 출원·등록번호를 확인할 수 있는 자료",
                "Materials identified by title, authors, publisher and DOI, or patent application and registration numbers",
              ],
            ],
            [
              ["학술발표·수상", "Presentations & awards"],
              [
                "행사명·일자·발표자 또는 수여기관을 확인할 수 있는 자료",
                "Materials identifying the event, date, presenter or awarding organisation",
              ],
            ],
            [
              ["실증·미디어", "Demonstration & media"],
              [
                "시험 조건을 밝힌 결과와 대상·시점을 표시한 공개 사진·영상",
                "Results with test conditions and public photos or videos with subject and date",
              ],
            ],
          ]}
        />
      </section>
      <CTA lang={lang} />
    </>
  );
}
