export type Language = 'pt' | 'en';

export interface Content {
  nav: {
    about: string;
    ministries: string;
    projects: string;
    contact: string;
    partner: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    donate: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    stat1: string;
    stat1Label: string;
    stat2: string;
    stat2Label: string;
    allianceTitle: string;
    allianceDesc: string;
  };
  pillars: {
    title: string;
    cards: {
      education: {
        title: string;
        desc: string;
        sub: string;
        image?: string;
      };
      social: {
        title: string;
        desc: string;
        sub: string;
        image?: string;
      };
      missions: {
        title: string;
        desc: string;
        sub: string;
        image?: string;
      };
    };
  };

  socialProjects: {
    title: string;
    description: string;
    cards: {
      casa: {
        title: string;
        desc: string;
        image?: string;
      };
      timbo: {
        title: string;
        desc: string;
        image?: string;
      };
      supia: {
        title: string;
        desc: string;
        image?: string;
      };
    };
  };
  videoSection: {
    title: string;
    subtitle: string;
  };
  impact: {
    title: string;
    subtitle: string;
    legend: string;
  };
  action: {
    title: string;
    cards: {
      pray: {
        title: string;
        desc: string;
        placeholder: string;
        btn: string;
      };
      give: {
        title: string;
        desc: string;
        giving: string;
        btn: string;
      };
      go: {
        title: string;
        desc: string;
        btn: string;
      };
    };
  };
  footer: {
    rights: string;
  };
  ministriesPage: {
    hero: {
      title: string;
      subtitle: string;
    };
    church: {
      title: string;
      badge: string;
      description: string;
      highlights: string[];
    };
    education: {
      theocidade: {
        title: string;
        desc: string;
        btn: string;
      };
      ema: {
        title: string;
        desc: string;
        btn: string;
      };
    };
    basileia: {
      title: string;
      desc: string;
    };
    info: {
      title: string;
      cards: {
        title: string;
        value: string;
      }[];
    };
  };
}