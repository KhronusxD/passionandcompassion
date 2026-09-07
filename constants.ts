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
      subtitle: "Fé, Teologia e Compaixão em ação há mais de 20 anos, transformando vidas no Brasil e além.",
      cta: "Conheça Nossa História",
      donate: "Doe Agora"
    },
    about: {
      title: "Uma História de Fé e Serviço",
      description1: "A Missão Paixão e Compaixão tem sido um farol de esperança na região amazônica, começando com uma pequena reunião numa sala de estar que se transformou numa família de mais de 600 membros ativos servindo a Cristo em Manaus.",
      description2: "Ao longo dos anos, nossa história se estendeu para além de Manaus, alcançando as comunidades ribeirinhas isoladas da Amazônia e, então, nações distantes.",
      stat1: "20+",
      stat1Label: "anos de História",
      stat2: "600+",
      stat2Label: "Membros da Família",
      allianceTitle: "Justiça Social",
      allianceDesc: "A Missão Paixão e Compaixão é profundamente comprometida com a Justiça Social Bíblica. Isso inclui ação social e missionária em diversas formas. É nosso desejo levar o Evangelho e a dignidade humana a todos."
    },
    pillars: {
      title: "Fé Enraizada na Verdade",
      cards: {
        education: {
          title: "Educação",
          desc: "Formando líderes através do Instituto Theocidade (Seminário Bíblico) e da EMA, nossa escola de missões. Cremos que o conhecimento teológico e missionário sólido é a base para a transformação duradoura.",
          sub: "Seminário Teológico",
          image: "/assets/theocidade.jpg"
        },
        social: {
          title: "Ação Social",
          desc: "Demonstrando o amor de Deus por meio de projetos como a Casa dos Filhos, ações esportivas, distribuição de cestas básicas e assistência psicológica e social.",
          sub: "Vida Espiritual",
          image: "/assets/worship.jpg"
        },
        missions: {
          title: "Missões",
          desc: "É nosso desejo não apenas anunciar o Evangelho, mas preparar e capacitar outros para serem luz num mundo em trevas. Do coração da floresta em Manaus e das comunidades ribeirinhas até os confins da terra, cremos numa igreja missionária.",
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
      title: "Nossos Projetos",
      description: "Transformando realidades por meio do amor prático e do Evangelho — em missões e ação social.",
      missionsTitle: "Projetos de Missões",
      socialTitle: "Projetos Sociais",
      missions: [
        {
          title: "Base Amazônica Timbó",
          desc: "Mulheres usam tesouros da floresta para criar artesanato, encontrando renda e, mais importante, sua identidade e dignidade em Cristo.",
          image: "/assets/timbo_kids.jpg"
        },
        {
          title: "Base Amazônica Supiá",
          desc: "Usamos a música como ponte para alcançar corações de crianças e jovens, ensinando a Palavra e o crescimento espiritual.",
          image: "/assets/supia_music.jpg"
        },
        {
          title: "Missões na Índia",
          desc: "Nossos missionários servindo e anunciando o Evangelho em Maharashtra, Índia.",
          image: "/assets/india_missions.png"
        },
        {
          title: "Missões na Escócia",
          desc: "Nossos missionários levando o Evangelho a comunidades na Escócia.",
          image: "/assets/scotland_missions.jpg"
        }
      ],
      social: [
        {
          title: "Casa dos Filhos",
          desc: "Um farol de esperança em Manaus para crianças em risco. Oferecemos apoio educacional, refeições e a afirmação de que são amadas pelo Criador.",
          image: "/assets/casa_dos_filhos.jpg"
        },
        {
          title: "Projeto Madalena",
          desc: "Restaurando dignidade e esperança a mulheres por meio do cuidado, da comunidade e do amor de Cristo.",
          image: "/assets/madalena_project.jpg"
        },
        {
          title: "Departamento de Assistência Social",
          desc: "Assistência psicológica e social, distribuição de cestas básicas e cuidado prático para famílias em necessidade.",
          image: "/assets/social_assistance.png"
        }
      ]
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
      subtitle: "Faith, Theology, and Compassion in action for over 20 years transforming lives in Brazil and beyond.",
      cta: "Discover Our Story",
      donate: "Donate Now"
    },
    about: {
      title: "A History of Faith and Service",
      description1: "Mission Passion and Compassion has been a beacon of hope in the Amazon region, beginning with a small meeting in a living room that has transformed into a family of over 600 active members serving Christ in Manaus.",
      description2: "Over the years our story has extended beyond Manaus and into the isolated river communities of the Amazon and then to distant nations.",
      stat1: "20+",
      stat1Label: "years of History",
      stat2: "600+",
      stat2Label: "Active Members",
      allianceTitle: "Social Justice",
      allianceDesc: "Mission Passion and Compassion is deeply committed to Biblical Social Justice. This includes social and missional outreach in various forms. It is our desire to bring the Gospel and human dignity to all."
    },
    pillars: {
      title: "Our Pillars",
      cards: {
        education: {
          title: "Education",
          desc: "Training leaders through the Theocidade Institute Bible Seminary & EMA, our missions school. We believe solid theological and missional knowledge is the foundation for lasting transformation.",
          sub: "Focus: Theology & Training",
          image: "/assets/theocidade.jpg"
        },
        social: {
          title: "Social Action",
          desc: "Demonstrating God's love through projects such as Casa dos Filhos, sports-themed outreaches, distribution of food baskets, & psychological and social assistance.",
          sub: "Focus: Children & Community",
          image: "/assets/worship.jpg"
        },
        missions: {
          title: "Missions",
          desc: "It is our desire to not only spread the Gospel, but to prepare and capacitate others to be a light in a dark world. From the heart of the rain forest in Manaus and river communities to the ends of the earth, we believe in a missional church.",
          sub: "Focus: River Communities & Global",
          image: "/assets/ema.jpg"
        }
      }
    },
    socialProjects: {
      title: "Our Projects",
      description: "Transforming realities through practical love and the Gospel — in missions and social action.",
      missionsTitle: "Missions Projects",
      socialTitle: "Social Projects",
      missions: [
        {
          title: "Timbó Amazon Base",
          desc: "Empowering river community women through handicrafts, generating income and dignity for entire families.",
          image: "/assets/timbo_kids.jpg"
        },
        {
          title: "Supiá Amazon Base",
          desc: "Music project as a cultural bridge to reach river youth, developing talents and character.",
          image: "/assets/supia_music.jpg"
        },
        {
          title: "India Missions",
          desc: "Our missionaries serving and sharing the Gospel in Maharashtra, India.",
          image: "/assets/india_missions.png"
        },
        {
          title: "Scotland Missions",
          desc: "Our missionaries taking the Gospel to communities in Scotland.",
          image: "/assets/scotland_missions.jpg"
        }
      ],
      social: [
        {
          title: "Casa dos Filhos",
          desc: "In Manaus, we serve at-risk children with educational, nutritional, and spiritual support, changing destinies.",
          image: "/assets/casa_dos_filhos.jpg"
        },
        {
          title: "Madalena Project",
          desc: "Restoring dignity and hope to women through care, community, and the love of Christ.",
          image: "/assets/madalena_project.jpg"
        },
        {
          title: "Social Assistance Department",
          desc: "Psychological and social assistance, food-basket distribution, and practical care for families in need.",
          image: "/assets/social_assistance.png"
        }
      ]
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
          desc: "Intercede for India (Maharashtra) and for our missionaries in Scotland.",
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
          desc: "Feel the call? Come and be part of this journey with us.",
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