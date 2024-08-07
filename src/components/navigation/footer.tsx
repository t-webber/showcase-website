import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FullLogo } from "../telecom-etude/logos";
import Link from "next/link";
import { IconType } from "react-icons";
import { Button } from "../ui/button";
import { getDictionary } from "@/locales/dictionaries";
import { Locale } from "@/locales/config";
import { BtnLink, EmailContact } from "../telecom-etude/contact";

const Network = ({ href, Icon }: { href: string; Icon: IconType }) => (
    <Link href={href} className="p-1 m-0 rounded-full">
        <Icon className="fill-[url(#te-gradient)] hover:fill-primary transition-colors duration-2000" />
    </Link>
);

const LinkItem = ({ href, name }: { href: string; name: string }) => (
    <Button variant="link" className="text-foreground py-[3px]" asChild>
        <Link className="w-fit h-fit pl-0 py-0" href={href}>
            {name}
        </Link>
    </Button>
);

const NetworkLinks = () => (
    <div className="flex space-x-4 p-2 w-full justify-evenly">
        <Network href="https://www.linkedin.com/company/telecom-etude/" Icon={FaLinkedin} />
        <Network href="https://www.facebook.com/TelecomEtude" Icon={FaFacebook} />
        <Network href="https://www.instagram.com/telecometude" Icon={FaInstagram} />
        <Network href="mailto:contact@telecom-etude.fr" Icon={FaEnvelope} />
    </div>
);

const SiteMapBlock = ({ title, items }: { title: string; items: { name: string; href: string }[] }) => (
    <section className="flex flex-col items-center">
        <h3 className="text-lg font-semibold pb-2 pt-6 pl-0 w-fit text-center">{title}</h3>
        {items.map((item, k) => (
            <LinkItem {...item} key={k} />
        ))}
    </section>
);

const SiteMap = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale).navigation.sitemap;

    return (
        <div className="p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10">
                <SiteMapBlock
                    title={t.whoarewe}
                    items={[
                        { name: t.home, href: "/" },
                        { name: t.about, href: "/about" },
                        { name: t.commitment, href: "/commitment" },
                        { name: t.team, href: "/team" }
                    ]}
                />
                <SiteMapBlock
                    title={t.partners}
                    items={[
                        { name: t.company_partners, href: "/partners" },
                        { name: "IESEG Conseil Paris", href: "/ieseg" }
                    ]}
                />
                <SiteMapBlock
                    title={t.offer}
                    items={[
                        { name: t.offer, href: "/offer" },
                        { name: "FAQ", href: "/faq" }
                    ]}
                />
                <SiteMapBlock
                    title={t.contact_information}
                    items={[
                        { name: t.contact_form, href: "/contact" },
                        { name: t.blog, href: "/blog" },
                        { name: t.legal_mentions, href: "/legal-mentions" }
                    ]}
                />
            </div>
        </div>
    );
};

export const Mentions = () => (
    <div>
        <div className="w-[200px]">
            <FullLogo />
        </div>
        <div className="p-2 flex flex-col items-start space-y-2">
            <p>&copy;{new Date().getFullYear()} Telecom Etude</p>
            <EmailContact />
            <BtnLink href="https://maps.app.goo.gl/etZHknTudKMuTjRZ9" className="flex flex-col">
                <p>19, place Marguerite Perey</p>
                <p>91120 Palaiseau</p>
            </BtnLink>
        </div>
    </div>
);

export const Footer = ({ locale }: { locale: Locale }) => {
    return (
        <div className="border-t-[1px] border-primary flex flex-col sm:flex-row items-center space-y-2 py-4 justify-around">
            <section className="p-10">
                <Mentions />
                <NetworkLinks />
            </section>
            <SiteMap locale={locale} />
        </div>
    );
};
