import { Content, Language } from './types';

// Placeholder Logo URL - ideally this would be the actual uploaded asset
// Since we don't have the file system, we use a text representation or a placeholder
export const LOGO_URL = "/assets/logo_icon.png";

// Single external destination for all donation CTAs
export const DONATE_URL = "https://donorbox.org/passion-and-compassion-ministry-donations";

export const TRANSLATIONS: Record<Language, Content> = {
  pt: {
    nav: {
      about: "Quem Somos",
      ministries: "Ministérios",
      projects: "Projetos",
      contact: "Contato",
      partner: "Seja um Parceiro"
    },
    hero: {
      title: "Proclamando o Evangelho no Coração da Amazônia",
      subtitle: "Nos últimos 20 anos, temos trabalhado incansavelmente para proclamar o Evangelho, preparar trabalhadores e alcançar os abatidos e oprimidos.",
      cta: "Conheça Nossa História",
      donate: "Doe Agora"
    },
    about: {
      title: "Uma Jornada de Fé e Milagres",
      description1: "Sediada em Manaus, nossa igreja vibrante com cerca de 600 membros é uma família espiritual unida pela crença inabalável na soberania de Deus e na autoridade das Escrituras.",
      description2: "Maravilhamo-nos ao olhar para trás e ver tudo o que o Senhor fez. Estamos saindo do barco e entrando nas águas novamente para um novo capítulo.",
      stat1: "20+",
      stat1Label: "Anos de Caminhada",
      stat2: "600+",
      stat2Label: "Membros da Família",
      allianceTitle: "Comunidade Basileia",
      allianceDesc: "Pastoreamos intencionalmente outros pastores e igrejas que nos alcançaram. A Comunidade Basileia nasceu dessa união de corações comprometidos com o chamado de Cristo."
    },
    pillars: {
      title: "Fé Enraizada na Verdade",
      cards: {
        education: {
          title: "Instituto Theocidade",
          desc: "Mais do que uma escola; um lugar onde mentes e corações são forjados com a Palavra de Deus, profundidade doutrinária e história da igreja.",
          sub: "Seminário Teológico",
          image: "/assets/theocidade.jpg"
        },
        social: {
          title: "Adoração e Intercessão",
          desc: "Uma sala de adoração ativa duas vezes por semana, onde elevamos incenso ao Senhor e intercedemos por nossa cidade com louvor e oração.",
          sub: "Vida Espiritual",
          image: "/assets/worship.jpg"
        },
        missions: {
          title: "EMA - Escola de Missões",
          desc: "Nosso campo de treinamento para a linha de frente. Equipamos missionários e avivalistas para proclamar o evangelho com ousadia.",
          sub: "Treinamento Prático",
          image: "/assets/ema.jpg"
        }
      },
    },
    ministriesPage: {
      hero: {
        title: "Fundamentos da Fé e Missão",
        subtitle: "Uma igreja vibrante e escolas que preparam trabalhadores para a colheita."
      },
      church: {
        title: "Igreja Mission Passion and Compassion",
        badge: "Sede em Manaus",
        description: "Uma família de 600 membros unida pela crença inabalável na soberania de Deus e na autoridade das Escrituras.",
        highlights: [
          "Pequenos Grupos Familiares.",
          "Educação Cristã para maturidade espiritual.",
          "Sala de Adoração e Intercessão (2x por semana)."
        ]
      },
      education: {
        theocidade: {
          title: "Instituto Theocidade",
          desc: "Mais do que uma escola; um lugar onde mentes são forjadas na doutrina, história da igreja e teologia bíblica. Formando pensadores cristãos.",
          btn: "Conheça o Instituto"
        },
        ema: {
          title: "EMA - Escola de Missões",
          desc: "O campo de treinamento para a linha de frente. Equipamos missionários cheios do Espírito para proclamar o evangelho nas ruas de Manaus, aldeias e nações.",
          btn: "Conheça a EMA"
        }
      },
      basileia: {
        title: "Comunidade Basileia",
        desc: "Nos últimos 5 anos, temos pastoreado intencionalmente outros pastores e igrejas. Uma rede de homens e mulheres comprometidos com o chamado de Cristo e o cuidado do corpo."
      },
      info: {
        title: "Junte-se a Nós",
        cards: [
          { title: "Cultos de Celebração", value: "Domingos às 18h" },
          { title: "Sala de Oração", value: "Terças e Quintas" },
          { title: "Localização", value: "Manaus, Amazonas" }
        ]
      }
    },
    socialProjects: {
      title: "Projetos Sociais & Ribeirinhos",
      description: "Alcançando de forma tangível, como testemunhos de Cristo, os abatidos e os oprimidos.",
      cards: {
        casa: {
          title: "Casa dos Filhos",
          desc: "Um farol de esperança em Manaus para 60 crianças em risco. Oferecemos apoio educacional, refeições e a afirmação de que são amadas pelo Criador.",
          image: "/assets/casa_dos_filhos.jpg"
        },
        timbo: {
          title: "Base Timbó",
          desc: "Mulheres usam tesouros da floresta para criar artesanato, encontrando renda e, mais importante, sua identidade e dignidade em Cristo.",
          image: "/assets/timbo_kids.jpg"
        },
        supia: {
          title: "Base Supiá",
          desc: "Usamos a música como ponte para alcançar corações de crianças e jovens, ensinando a Palavra e aulas de crescimento espiritual.",
          image: "/assets/supia_music.jpg"
        }
      }
    },
    videoSection: {
      title: "Conheça Nossa História",
      subtitle: "Assista ao vídeo e veja de perto o que Deus tem feito através da nossa missão."
    },
    impact: {
      title: "Alcance Global",
      subtitle: "Da Amazônia para as Nações: Índia, Escócia e além.",
      legend: "Expansão Missionária"
    },
    action: {
      title: "Participe do Próximo Capítulo",
      cards: {
        pray: {
          title: "Ore",
          desc: "Interceda pela Índia (Maharashtra) e por nossos missionários na Escócia.",
          placeholder: "Para receber notícias",
          btn: "Inscrever-se"
        },
        give: {
          title: "Contribua",
          desc: "Agradecemos seu amor e apoio financeiro que tornam tudo isso possível.",
          giving: "Email: givingmpc@gmail.com",
          btn: "Doar Agora"
        },
        go: {
          title: "Envolva-se",
          desc: "Gostaríamos de convidá-lo a embarcar nessa jornada conosco. Venha fazer parte.",
          btn: "Saiba Mais"
        }
      }
    },
    footer: {
      rights: "Missão Paixão e Compaixão. Todos os direitos reservados."
    }
  },
  en: {
    nav: {
      about: "Who We Are",
      ministries: "Ministries",
      projects: "Projects",
      contact: "Contact",
      partner: "Become a Partner"
    },
    hero: {
      title: "Proclaiming the Gospel in the Heart of the Amazon",
      subtitle: "Faith, Theology, and Compassion in action for 20 years transforming lives in Manaus and beyond.",
      cta: "Discover Our Story",
      donate: "Donate Now"
    },
    about: {
      title: "A History of Faith and Service",
      description1: "For two decades, Mission Passion and Compassion has been a beacon of hope in the Amazon region. We started with a small prayer group and are now a family of over 600 members actively serving in Manaus.",
      description2: "We are writing a new chapter, expanding our borders to take the love of Christ to isolated river communities and distant nations.",
      stat1: "20+",
      stat1Label: "Years of History",
      stat2: "600+",
      stat2Label: "Active Members",
      allianceTitle: "Alliance Project: Expansion & Unity",
      allianceDesc: "Through the Alliance Project, we integrate efforts to build churches, nutrition centers, and schools in remote areas. It is our practical response to reach places where the Gospel and human dignity need to flourish."
    },
    pillars: {
      title: "Our Pillars",
      cards: {
        education: {
          title: "Education",
          desc: "Training leaders through Theocidade Institute & EMA. We believe solid theological knowledge is the foundation for lasting transformation.",
          sub: "Focus: Theology & Training",
          image: "/assets/theocidade.jpg"
        },
        social: {
          title: "Social Action",
          desc: "The 'Casa dos Filhos' offers refuge and support for at-risk children, demonstrating God's love through practical care.",
          sub: "Focus: Children & Community",
          image: "/assets/worship.jpg"
        },
        missions: {
          title: "Missions",
          desc: "From the heart of the forest in Timbó and Supiá to the ends of the earth. We bring the good news where it hasn't been heard yet.",
          sub: "Focus: River Communities & Global",
          image: "/assets/ema.jpg"
        }
      }
    },
    socialProjects: {
      title: "Social & River Projects",
      description: "Transforming realities through practical love and opportunity.",
      cards: {
        casa: {
          title: "Children's House",
          desc: "In Manaus, we serve 60 at-risk children with educational, nutritional, and spiritual support, changing destinies.",
          image: "/assets/casa_dos_filhos.jpg"
        },
        timbo: {
          title: "Timbó Base",
          desc: "Empowering river community women through handicrafts, generating income and dignity for entire families.",
          image: "/assets/timbo_kids.jpg"
        },
        supia: {
          title: "Supiá Base",
          desc: "Music project as a cultural bridge to reach river youth, developing talents and character.",
          image: "/assets/supia_music.jpg"
        }
      }
    },
    videoSection: {
      title: "Watch Our Story",
      subtitle: "Press play and see up close what God has been doing through our mission."
    },
    impact: {
      title: "Global Impact",
      subtitle: "From Manaus to the World: Our connection network",
      legend: "Basileia Community"
    },
    action: {
      title: "Join the Next Chapter",
      cards: {
        pray: {
          title: "Pray",
          desc: "Sign up to receive prayer requests and news from the mission field.",
          placeholder: "Your best email",
          btn: "Subscribe"
        },
        give: {
          title: "Give",
          desc: "Your resources fuel the Kingdom. Support the mission through your generosity.",
          giving: "Email for giving: givingmpc@gmail.com",
          btn: "Donate Now"
        },
        go: {
          title: "Get Involved",
          desc: "Feel the call? Learn about our School of Missions and come serve.",
          btn: "Learn More"
        }
      }
    },
    footer: {
      rights: "All rights reserved."
    },
    ministriesPage: {
      hero: {
        title: "Foundations of Faith and Mission",
        subtitle: "A vibrant church and schools that prepare workers for the harvest."
      },
      church: {
        title: "Mission Passion and Compassion Church",
        badge: "Based in Manaus",
        description: "A family of 600 members united by an unshakable belief in the sovereignty of God and the authority of the Scriptures.",
        highlights: [
          "Small Family Groups.",
          "Christian education for spiritual maturity.",
          "Worship and Intercession Room (2x per week)."
        ]
      },
      education: {
        theocidade: {
          title: "Theocidade Institute",
          desc: "More than a school; a place where minds are forged in doctrine, church history, and biblical theology. Shaping Christian thinkers.",
          btn: "Discover the Institute"
        },
        ema: {
          title: "EMA - School of Missions",
          desc: "The training ground for the front lines. We equip Spirit-filled missionaries to proclaim the gospel in the streets of Manaus, villages, and nations.",
          btn: "Discover EMA"
        }
      },
      basileia: {
        title: "Basileia Community",
        desc: "For the past 5 years, we have intentionally shepherded other pastors and churches. A network of men and women committed to the call of Christ and the care of the body."
      },
      info: {
        title: "Join Us",
        cards: [
          { title: "Celebration Services", value: "Sundays at 6pm" },
          { title: "Prayer Room", value: "Tuesdays and Thursdays" },
          { title: "Location", value: "Manaus, Amazonas" }
        ]
      }
    }
  }
};

export const GLOBAL_COORDINATES = [
  { name: "Manaus", lat: -3.119, lng: -60.021, type: "source" },
  { name: "Scotland", lat: 56.4907, lng: -4.2026, type: "target" },
  { name: "India", lat: 20.5937, lng: 78.9629, type: "target" },
];