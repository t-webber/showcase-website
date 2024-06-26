export const frDictionary = {
    navigation: {
        errors: {
            unauthorized: {
                title: "Accès non autorisé",
                description: "Vous devez être connecté pour accéder à cette page",
                button: "Login",
                contact: null
            },
            forbidden: {
                title: "Accès interdit",
                description: "Vous ne disposez pas des autorisations nécessaires pour accéder à cette page. Veuillez contacter l'administrateur",
                button: "Retourner à la page d'accueil",
                contact: "Demandez les droits d'accès"
            },
            notfound: {
                title: "Page non trouvée",
                description: "La page que vous recherchez n'existe pas. Veuillez vérifier l'URL ou retourner à la page d'accueil",
                button: "Retourner à la page d'accueil",
                contact: null
            },
            unknown: {
                title: "Erreur inattendue",
                description: "Veuillez réessayer plus tard ou nous contacter",
                button: "Retourner à la page d'accueil",
                contact: "Signaler un problème"
            },
            httpError: "Erreur HTTP"
        },
        sitemap: {
            title: "Plan du site",
            whoarewe: "Qui sommes-nous ?",
            home: "Page d'accueil",
            about: "À propos",
            commitment: "Nos engagements",
            team: "Notre équipe",
            partners: "Nos partenaires",
            company_partners: "Entreprises partenaires",
            offer: "Notre offre",
            example_offers: "Exemple d'offres",
            contact_information: "Contact & Informations",
            contact_form: "Formulaire de contact",
            blog: "Blog",
            legal_mentions: "Mentions légales",
            login: "Connexion",
            logout: "Déconnexion"
        }
    },
    pages: {
        contact: {
            title: "Contactez-nous !",
            before: "Vous avez un projet en tête\u00A0? Vous avez besoin de plus d'informations sur notre offre ? N'hésitez pas à nous contacter en utilisant le formulaire ci-dessous ou en nous envoyant un email à ",
            after: ". Nous reviendrons vers vous dès que possible.",
            terms: "En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter dans le cadre de votre demande et de la relation commerciale qui peut en découler. ",
            form: {
                name: {
                    label: "Nom",
                    placeholder: "Votre nom",
                    error: "Merci de fournir un nom"
                },
                email: {
                    label: "Email",
                    placeholder: "Votre email",
                    error: "Merci de fournir une adresse email valide"
                },
                tel: {
                    label: "Téléphone",
                    placeholder: "Votre numéro de téléphone",
                    error: "Numéro de téléphone invalide"
                },
                societe: {
                    label: "Société",
                    placeholder: "Votre nom de société"
                },
                subject: {
                    label: "Objet",
                    placeholder: "Un titre pour votre message"
                },
                message: {
                    label: "Message",
                    placeholder: "Votre message à l'équipe",
                    error: "Merci d'écrire un message"
                },
                send: "Envoyer"
            },
            success: {
                title: "Message envoyé !",
                message: "Merci pour votre message. Nous vous recontacterons dès que possible."
            },
            error: {
                title: "Erreur lors de l'envoie",
                message: "Merci de nous envoyé un mail directement à"
            }
        },
        legal: {
            title: "Mentions légales",
            credits: "Crédits Photos",
            hosting: "Hébergement",
            dev: "Développement",
            madeBy: "Site réalisé en NextJS par Tom Webber",
            loi: {
                host: "Conformément aux dispositions de l'article 6 III-1 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, vous trouverez ci-dessous les informations relatives à l'éditeur et à l'hébergeur de ce site internet.",
                rgpd: {
                    before: "Conformément au RGPD, vous pouvez faire valoir vos droit d'accès, de portabilité, de rectification, d'opposition ou d'effacement de vos données en envoyant une demande à",
                    in: "ou via le ",
                    contact: "formulaire de contact",
                    after: "sur le site."
                }
            },
            loi1901: "Association loi 1901, affiliée à la CNJE",
            siegesocial: "Siège social : Télécom Paris, 19, place Marguerite Perey 91120 PALAISEAU",
            siret: "[Numéro SIRET : 332 711 522 00018 | Numéro URSSAF : 757 090058076001011 8",
            tva: "Numéro TVA Intra-communautaire : FR 1933 2711 522 00018 | Code APE : 6202A]",
            respoRGPD: "Délégué à la protection des données (DPO) : Leïla Iksil",
            rezelsiege: "Siège social : 19 Place Marguerite Perey, 91120 PALAISEAU",
            contact: "Contact :"
        }
    }
};
