// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed publications in computational materials science and machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected research projects in materials science, machine learning, and signal processing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic and professional experience in computational physics, machine learning, and materials science.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching-amp-mentorship",
          title: "Teaching &amp; Mentorship",
          description: "Teaching and mentorship experience in university physics and physics olympiad coaching.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "projects-li-sn-phase-discovery",
          title: 'Li–Sn Phase Discovery',
          description: "Neural-network potentials + large-scale structure search to accelerate DFT-grade materials discovery",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_lisn/";
            },},{id: "projects-li-b-c-thermodynamic-stability-map",
          title: 'Li–B–C Thermodynamic Stability Map',
          description: "First-principles stability audit of LiBC delithiation and proposed lithium borocarbide phases",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_libc/";
            },},{id: "projects-maise-software",
          title: 'MAISE Software',
          description: "Automated neural-network potential training + molecular dynamics (including NPT) in an open-source simulation stack",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_maise/";
            },},{id: "projects-radar-heartbeat-monitoring-with-transformers",
          title: 'Radar Heartbeat Monitoring with Transformers',
          description: "Hybrid radar signal processing + Transformer fusion for robust heartbeat/HRV under random body motion (RBM)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_heartbeat/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Saba-Kharabadze-CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73.%6B%68%61%72%61%62%61%64%7A%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kharabadze", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4504-4181", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ydLSLn0AAAAJ&hl=en&oi=ao", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
