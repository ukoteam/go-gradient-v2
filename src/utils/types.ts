export type TCardType = {
    id: string;
    name: string;
    nameDescription: string;
    logo: string;
    link: string;
    flag: boolean;
    cardPage: TCardPageType
}

type TCardPageType = {
    description: string;
    background: string;
    admin: TAdminType;
    questions?: Array<TQuestionType>;
}

type TAdminType = {
    name: string;
    mailTo: string;
    forConnection?: string;
}

export type TQuestionType = {
    title: string,
    steps: Array<TStepType>
}

type TStepType = {
    text?: string,
    image?: string,
    links?: Array<TLinkType>
}

type TLinkType = {
    capture: string,
    link: string
}