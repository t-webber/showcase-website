import { LocaleParams } from "@/locales/config";
import { Dictionary, getDictionary } from "@/locales/dictionaries";
import { DEPARTMENTS } from "./members";
import { Block } from "@/components/styles/blocks";
import { AppearOnScroll } from "@/components/animations/scroll";
import { Person } from "./person";

export interface Alt {
    before: string;
    after: string;
}

function Department({
    d_members,
    t_members,
    alt
}: {
    alt: Alt;
    t_members: Dictionary["pages"]["team"]["board"]["members"];
    d_members: (typeof DEPARTMENTS)[number]["members"];
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
            {d_members.map((d_member, i) => (
                <Person {...d_member} key={i} t={t_members[d_member.id]} alt={alt} />
            ))}
        </div>
    );
}

export default function Team({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.team;
    return (
        <Block>
            <header>
                <h1 className="text-4xl font-bold">{t.title}</h1>
                <p></p>
            </header>
            {DEPARTMENTS.map(({ id, members }, i) => (
                <section key={i}>
                    <AppearOnScroll>
                        <h2 className="text-3xl">{t[id].title}</h2>
                        <Department d_members={members} t_members={t[id].members} alt={t.alt} />
                    </AppearOnScroll>
                </section>
            ))}
        </Block>
    );
}
