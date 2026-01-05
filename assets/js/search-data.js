// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed publications in computational materials science and machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects in materials science, machine learning, and signal processing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching experience at universities and in physics olympiad coaching.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "projects-li-sn-phase-discovery",
          title: 'Li-Sn Phase Discovery',
          description: "Machine learning accelerated discovery of new lithium-tin compounds",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_lisn/";
            },},{id: "projects-li-b-c-stability-analysis",
          title: 'Li-B-C Stability Analysis',
          description: "First-principles study of potentially superconducting lithium-boron-carbon compounds",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_libc/";
            },},{id: "projects-maise-software",
          title: 'MAISE Software',
          description: "Neural network interatomic potentials and molecular dynamics implementation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_maise/";
            },},{id: "projects-radar-signal-processing",
          title: 'Radar Signal Processing',
          description: "ML approaches for radar target detection and coverage analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_radar/";
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
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=", "_blank");
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
