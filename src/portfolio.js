/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Portfólio de Juniel Filappi",
  description:
    "Engenheiro da computação com experiência desde 2019 em desenvolvimento Full Stack, atuando com Laravel, Node.js, Vue.js, React e React Native, focado na criação de aplicações escaláveis e de alto desempenho.",
  og: {
    title: "Portfólio de Juniel Filappi",
    type: "website",
    url: "https://juniel-filappi.github.io",
  },
};

//Home Page
const greeting = {
  title: "Juniel Filappi",
  logo_name: "JunielFilappi",
  nickname: "",
  subTitle:
    "Engenheiro da computação com experiência desde 2019 em desenvolvimento Full Stack, atuando com Laravel, Node.js, Vue.js, React e React Native, focado na criação de aplicações escaláveis e de alto desempenho.",
  resumeLink:
    "https://drive.google.com/file/d/1vta5fiGt9yDH2ytrIqdSd5ZHKDhJ3Gnw/view?usp=sharing",
  portfolio_repository: "https://github.com/juniel-filappi/masterPortfolio",
  githubProfile: "https://github.com/juniel-filappi",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/juniel-filappi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/juniel-filappi-09a820181/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:juniel.filapp@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Desenvolvimento de websites front-end usando React, Vue, Nuxt e Next",
        "⚡ Desenvolvimento de aplicativos móveis usando React Native",
        "⚡ Criação de back-end usando PHP, Laravel, Node, NestJS, Express e Adonis",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: {
            color: "#4FC08D",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#007ACC",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "AdonisJS",
          fontAwesomeClassname: "simple-icons:adonisjs",
          style: {
            color: "#5A45FF",
          },
        },
        {
          skillName: "Nuxt 3",
          fontAwesomeClassname: "simple-icons:nuxt",
          style: {
            color: "#00DC82",
          },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "#E0234E",
          },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: {
            color: "#FF6600",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#B32629",
          },
        },
        {
          skillName: "Prisma",
          fontAwesomeClassname: "simple-icons:prisma",
          style: {
            color: "#2D3748",
          },
        },
        {
          skillName: "PrimeVue",
          fontAwesomeClassname: "simple-icons:primevue",
          style: {
            color: "#41B883",
          },
        },
        {
          skillName: "PrimeReact",
          fontAwesomeClassname: "simple-icons:primereact",
          style: {
            color: "#03C4E8",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MinIO",
          fontAwesomeClassname: "simple-icons:minio",
          style: {
            color: "#C72E49",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Sentry",
          fontAwesomeClassname: "simple-icons:sentry",
          style: {
            color: "#362D59",
          },
        },
        {
          skillName: "DataDog",
          fontAwesomeClassname: "simple-icons:datadog",
          style: {
            color: "#632CA6",
          },
        },
        {
          skillName: "Metabase",
          fontAwesomeClassname: "simple-icons:metabase",
          style: {
            color: "#509EE3",
          },
        },
        {
          skillName: "Vite",
          fontAwesomeClassname: "simple-icons:vite",
          style: {
            color: "#646CFF",
          },
        },
        {
          skillName: "React Query",
          fontAwesomeClassname: "simple-icons:reactquery",
          style: {
            color: "#FF4154",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Cloudflare",
          fontAwesomeClassname: "simple-icons:cloudflare",
          style: {
            color: "#F38020",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Engenharia da Computação",
      subtitle: "Unic - Universidade de Cuiabá",
      logo_path: "unic_logo.png",
      alt_name: "Unic",
      duration: "2019 - 2025",
      descriptions: [
        "⚡ Possuo formação e estudos sólidos nos principais fundamentos da engenharia de software, incluindo algoritmos, inteligência artificial, bancos de dados, programação orientada a objetos (POO), além de boas práticas de desenvolvimento e organização de código.",
        "⚡ Além dos fundamentos, aprofundei meus estudos em tópicos avançados da computação, como Computação Gráfica, Redes de Computadores, Sistemas Distribuídos, entre outras áreas essenciais para o desenvolvimento de sistemas modernos e escaláveis.",
      ],
      website_link: "https://www.unic.com.br/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Do Zero ao Profissional em PHP",
      subtitle: "- UpInside",
      logo_path: "upinside_logo.png",
      certificate_link: "",
      alt_name: "UpInside",
      color_code: "#008EBF",
    },
    {
      title: "Do Zero ao Profissional em Laravel",
      subtitle: "- UpInside",
      logo_path: "upinside_logo.png",
      certificate_link: "",
      alt_name: "UpInside",
      color_code: "#008EBF",
    },
    {
      title: "NodeJS",
      subtitle: "- Rocketseat",
      logo_path: "rocketseat_logo.png",
      certificate_link: "",
      alt_name: "rocketseat",
      color_code: "#9C5BF7",
    },
    {
      title: "ReactJS",
      subtitle: "- Rocketseat",
      logo_path: "rocketseat_logo.png",
      certificate_link: "",
      alt_name: "rocketseat",
      color_code: "#9C5BF7",
    },
    {
      title: "React Native",
      subtitle: "- Rocketseat",
      logo_path: "rocketseat_logo.png",
      certificate_link: "",
      alt_name: "rocketseat",
      color_code: "#9C5BF7",
    },
    {
      title: "IA",
      subtitle: "- Rocketseat",
      logo_path: "rocketseat_logo.png",
      certificate_link: "",
      alt_name: "rocketseat",
      color_code: "#9C5BF7",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experiência",
  subtitle: "Trabalho, Estágio e Voluntariado",
  description:
    "Possuo experiência profissional atuando em startup, onde desempenhei funções como desenvolvedor full stack, DevOps e arquiteto de software, participando ativamente da definição de arquitetura, escalabilidade e boas práticas de desenvolvimento. Também colaborei com empresas consolidadas no mercado, principalmente como desenvolvedor full stack",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Trabalho",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "PipeRun",
          logo_path: "piperun_logo.png",
          duration: "",
          location: "Porto Alegre, Rio Grande do Sul",
          description:
            "Atuação como Desenvolvedor Full Stack Sênior, utilizando Laravel e Node.js no backend, e Vue.js e React no frontend. Desenvolvimento de extensões para Google Chrome utilizando Vue.js, com foco em performance e experiência do usuário. Responsável por refatorações estruturais de projetos, incluindo a migração de vue-cli-service para Vite e a padronização do código de JavaScript para TypeScript. Desenvolvimento de novas funcionalidades, promovendo melhorias contínuas na qualidade do código e na evolução do produto. Atuação ativa em code reviews no GitHub, garantindo boas práticas, padronização e qualidade técnica. Participação em reuniões com clientes, contribuindo com alinhamentos técnicos, levantamento de requisitos e definição de soluções.",
          color: "#fc1f20",
        },
        {
          title: "Full Stack Developer",
          company: "Bankme",
          logo_path: "bankme_logo.png",
          duration: "",
          location: "Londrina, Paraná",
          description:
            "Atuação sênior no desenvolvimento de soluções escaláveis utilizando NestJS e TypeScript, com arquitetura baseada em microserviços e microfrontends. Implementação de mensageria com RabbitMQ, garantindo alta disponibilidade e comunicação assíncrona entre sistemas. Responsável pelo desenho, integração e otimização de bancos de dados PostgreSQL e MongoDB. Desenvolvimento de aplicações front-end com Next.js e React (TypeScript), com foco em performance, manutenibilidade e boas práticas. Experiência em ambientes de nuvem GCP, atuando em deploy, monitoramento e sustentação dos serviços. Participação ativa em times ágeis (SCRUM), contribuindo com decisões técnicas, definição de padrões e aplicação de princípios de inversão de dependência e arquitetura limpa.",
          color: "#fc1f20",
        },
        {
          title: "Backend Developer",
          company: "TruckPag",
          logo_path: "truckpag_logo.webp",
          duration: "",
          location: "Cascavel, Paraná",
          description:
            "Atuação no desenvolvimento e manutenção de aplicações backend utilizando Laravel e Node.js, com forte participação em refatoração, melhorias e ajustes em APIs REST, visando performance, segurança e manutenibilidade. Responsável pela migração completa de um projeto de Node.js para Laravel, incluindo análise técnica, definição de escopo, planejamento de prazos e execução da entrega. Implementação de testes unitários e de feature com PHPUnit, garantindo qualidade e confiabilidade do código. Atuação no desenvolvimento frontend com React, colaborando na integração entre front-end e backend e assegurando consistência das soluções entregues.",
          color: "#fc1f20",
        },
        {
          title: "Full Stack Developer",
          company: "DomPixel",
          logo_path: "dompixel_logo.png",
          duration: "",
          location: "Cuiabá, Mato Grosso",
          description:
            "Atuação como Gerente de Projetos, liderando equipes técnicas e sendo responsável pelo planejamento, execução e entrega de soluções digitais. Desenvolvimento e manutenção de aplicações backend utilizando PHP (Laravel), Node.js, AdonisJS e TypeScript, com foco na construção de APIs REST escaláveis e seguras. Atuação no desenvolvimento frontend com React, Vue.js e Next.js, garantindo performance, usabilidade e padronização de código. Desenvolvimento de aplicações mobile utilizando React Native. Participação ativa nas decisões de arquitetura, definição de padrões técnicos, boas práticas de desenvolvimento e acompanhamento de entregas, atuando de forma integrada entre gestão e execução técnica.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Estágio",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "DomPixel",
          logo_path: "dompixel_logo.png",
          duration: "Maio 2019 - julho 2021",
          location: "Cuiabá, Mato Grosso",
          description:
            "Comecei minha carreira na área de desenvolvimento, participando dos cursos oferecidos pela empresa. Após concluir esses cursos, comecei a trabalhar em diversos projetos, focando na refatoração de código e na implementação de melhorias técnicas.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Voluntariado",
      experiences: [
        {
          title: "Projeto Siminina Digital",
          company: "Unic",
          logo_path: "siminina_logo.jpeg",
          duration: "Fevereiro 2019 - Março 2019",
          location: "Cuiabá, Mato Grosso",
          description:
            "O Projeto Siminina foi uma parceria entre a Faculdade e a Prefeitura de Cuiabá, que tinha como objetivo oferecer aulas de informática básica para meninas sem acesso à internet. A Prefeitura identificava essas meninas e as levava para uma sala equipada, onde eu e outros instrutores ministrávamos as aulas, proporcionando a elas oportunidades de inclusão digital e desenvolvimento de novas habilidades.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projetos",
  description:
    "Meus projetos utilizam uma ampla variedade de ferramentas tecnológicas de última geração, sempre focadas em desempenho, escalabilidade e segurança. Possuo forte experiência na criação de soluções Full Stack, desde o planejamento da arquitetura até o desenvolvimento e a implantação de aplicações web em ambientes de nuvem, utilizando boas práticas de DevOps e infraestrutura moderna. Atuo de forma estratégica para garantir aplicações estáveis, eficientes e alinhadas às necessidades do negócio.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publicações",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contato",
    profile_image_path: "animated_juniel.png",
    description:
      "Estou presente e disponível na maioria das redes sociais. Você pode entrar em contato comigo a qualquer momento por mensagem — responderei em até 24 horas. Estou à disposição para colaborar em novos projetos, manutenções, integrações, melhorias de performance e desenvolvimento de soluções personalizadas conforme a sua necessidade. Fique à vontade para entrar em contato — será um prazer conversar sobre seu projeto.",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
