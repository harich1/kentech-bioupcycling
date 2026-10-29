import Link from "next/link";
import { collaborators } from "@/lib/collaborators";
import type { Lang } from "@/lib/content";

export default function Collaborators({ lang, full = false }: { lang: Lang; full?: boolean }) {
  const ko = lang === "ko";
  const researchers = collaborators.filter(x => x.kind === "researcher");
  const organisations = collaborators.filter(x => x.kind === "organisation");
  return (
    <section className={`collaborators-section ${full ? "full" : ""}`} aria-labelledby="collaborators-title">
      <div className="section-wrap content-section">
        <div className="collaborators-heading">
          <div>
            <p className="eyebrow">PEOPLE & PARTNERS</p>
            <h2 id="collaborators-title">{ko ? "함께하는 연구자와 협력기관" : "Our collaborating researchers and organisations"}</h2>
            <p className="lead">{ko ? "센터를 기반으로 협력자의 전문성과 새로운 연구 콘셉트를 연결하고, 연구사업을 하나씩 만들어갑니다." : "Building on the center, we connect collaborators’ expertise with new research concepts and develop research projects step by step."}</p>
          </div>
          {!full && <Link className="text-link" href={`/${lang}/network#collaborators-title`}>{ko ? "연구 네트워크 자세히 보기" : "Explore the research network"} ↗</Link>}
        </div>
        <p className="collaborators-direction">{ko ? "협력 네트워크 확장 → 연구 콘셉트 구체화 → 연구사업 발굴·수행" : "Grow the network → Develop research concepts → Establish and deliver research projects"}</p>
        <div className="collaborators-group-heading"><h3>{ko ? "협력 연구자" : "Collaborating researchers"}</h3><span>{researchers.length} {ko ? "명" : "researchers"}</span></div>
        <ul className="researcher-directory">
          {researchers.map(person => <li key={person.id} data-collaborator={person.id}>
            <span className="collaborator-field">{person.role}</span>
            <h4>{person.name[lang]} {person.title && <small>{person.title[lang]}</small>}</h4>
            <p>{person.field[lang]}</p>
          </li>)}
        </ul>
        <div className="collaborators-group-heading"><h3>{ko ? "협력기관" : "Collaborating organisations"}</h3><span>{organisations.length} {ko ? "곳" : "organisations"}</span></div>
        <ul className="organisation-directory">
          {organisations.map(org => <li key={org.id} data-collaborator={org.id}>
            <span className="collaborator-field">{org.role}</span>
            <h4>{org.name[lang]}</h4>
            <p>{org.field[lang]}</p>
          </li>)}
        </ul>
        <div className="collaborators-invitation">
          <p>{ko ? "새로운 전문성과 연구의 연결을 기다립니다. 공동연구와 기술협력으로 함께해 주세요." : "Connect your expertise with our network through joint research and technology collaboration."}</p>
          <Link className="button outline" href={`/${lang}/contact`}>{ko ? "협력 참여 문의" : "Discuss collaboration"} ↗</Link>
        </div>
        {full && <p className="collaborators-scope">{ko ? "위 목록은 센터의 협력 분야를 소개합니다. 개별 프로젝트의 수행기관과 역할은 아래 프로젝트 참여 구조에서 별도로 확인할 수 있습니다." : "This directory presents collaboration areas within the center’s network. Project-specific organisations and responsibilities are presented separately below."}</p>}
      </div>
    </section>
  );
}
