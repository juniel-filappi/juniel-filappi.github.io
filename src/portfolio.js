/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Portfólio de Juniel Filappi",
  description:
    "Olá! Sou estudante de engenharia da computação com experiência desde 2019 como desenvolvedor backend e frontend. Trabalho com PHP/Laravel e também tenho habilidades em JS/Node.js para o backend, além de JS/Vue.js/React/React Native para o frontend.",
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
    "Olá! Sou estudante de engenharia da computação com experiência desde 2019 como desenvolvedor backend e frontend. Trabalho com PHP/Laravel e também tenho habilidades em JS/Node.js para o backend, além de JS/Vue.js/React/React Native para o frontend.",
  resumeLink:
    "https://drive.google.com/file/d/1c-TweBO8ItJ-E_PgDvWxWuFUacTZFFaf/view?usp=sharing",
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
        "⚡ Desenvolvimento de websites front-end usando React, Vue, Next.js e Nuxt.js",
        "⚡ Desenvolvimento de aplicativos móveis usando React Native e Expo",
        "⚡ Criação de back-end usando PHP, Laravel, Node, Express, Adonis, Fastify e NestJS",
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
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "NuxtJS",
          fontAwesomeClassname: "simple-icons:nuxtdotjs",
          style: {
            color: "#00DC82",
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
          skillName: "NestJS",
          fontAwesomeClassname: "devicon-plain:nestjs",
          style: {
            color: "#E0234E",
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
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Fastify",
          fontAwesomeClassname: "simple-icons:fastify",
          style: {
            color: "#000000",
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
          skillName: "Vite",
          fontAwesomeClassname: "simple-icons:vite",
          style: {
            color: "#646CFF",
          },
        },
        {
          skillName: "Vitest",
          fontAwesomeClassname: "simple-icons:vitest",
          style: {
            color: "#6E9F18",
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
          skillName: "Expo",
          fontAwesomeClassname: "simple-icons:expo",
          style: {
            color: "#000020",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#FF4438",
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
      duration: "2019 - momento",
      descriptions: [
        "⚡ Estudei assuntos básicos de engenharia de software como Algoritmos, IA, Banco de dados, POP etc.",
        "⚡ Estou estudando assuntos mais avançados como Computação Gráfica, Redes de Computadores, Sistemas Distribuídos, etc.",
        "⚡ Pretendo me formar em 2025 e seguir carreira como desenvolvedor full stack.",
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
  ],
};

// Experience Page
const experience = {
  title: "Experiência",
  subtitle: "Trabalho, Estágio e Voluntariado",
  description:
    "Trabalhei em uma startup como desenvolvedor full stack, devops e arquiteto de software. Também trabalhei com algumas empresas bem estabelecidas, principalmente como desenvolvedor full stack em PHP/Laravel, Node/Express/Adonis/Fastify/NestJS e React, React Native e Vue.",
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
          duration: "Outubro 2022 - Presente",
          location: "Porto Alegre, Rio Grande do Sul",
          description:
            "- Trabalho como Full Stack utilizando Laravel/Node no backend e Vue.js/React no frontend;\n" +
            "- Desenvolvimento de extensões do google chrome usando vue.js;\n" +
            "- Trabalhei com refatorações de projetos, o ultimo feito foi migrar de vue-cli-service para vite.js e JS para Typescript;\n" +
            "- Desenvolvimento de novas features para somar ao produto final;\n" +
            "- Melhorias continuas no código da aplicação;\n" +
            "- Code review no Github;\n" +
            "- Participação de reuniões com cliente;",
          color: "#fc1f20",
        },
        {
          title: "Full Stack Developer",
          company: "TruckPag",
          logo_path: "truckpag_logo.webp",
          duration: "Outubro 2021 - Outubro 2022",
          location: "Cascavel, Paraná",
          description:
            "Atuei como desenvolvedor Back-end, manutenção de código e criação de features, fiz bastante melhorias de código também, migrei um projeto inteiro de Node.JS para laravel, definido certinho o prazo e separado por sprints, trabalho em equipe, testes unitários e Feature.",
          color: "#fc1f20",
        },
        {
          title: "Full Stack Developer",
          company: "DomPixel",
          logo_path: "dompixel_logo.png",
          duration: "Maio 2019 - Outubro 2021",
          location: "Cuiabá, Mato Grosso",
          description:
            "- Gerente de projetos;\n" +
            "- Trabalhei com PHP, Laravel e Node no backend das aplicações;\n" +
            "- Trabalhei com React e Vue no frontend das aplicações;\n" +
            "- Criei aplicações mobiles utilizando React native;\n" +
            "- Desenvolvi sistemas utilizando Next.js no frontend e Adonis.js no backend;\n" +
            "- Os projetos que desenvolvi em Js foram todos feitos usando Typescript;\n" +
            "- Desenvolvimento de API Rest no backend;",
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
    "Meus projetos utilizam uma grande variedade de ferramentas tecnológicas de última geração. Minha melhor experiência é criar projetos Full Stack e implantá-los em aplicações web usando infraestrutura em nuvem.",
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
      "Estou disponível em quase todas as redes sociais. Você pode me enviar uma mensagem, responderei dentro de 24 horas. Posso ajudá-lo com desenvolvimento de Laravel, Node, React, React Native, Vue.",
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
