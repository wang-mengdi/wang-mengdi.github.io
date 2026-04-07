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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-posts",
          title: "Posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum Vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-georgia-tech-school-of-ic-phd-graduation-resources",
        
          title: "Georgia Tech School of IC PhD Graduation Resources",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/gatech-ic-phd-graduation-resources/";
          
        },
      },{id: "news-paper-accepted-at-journal-of-computational-physics",
          title: 'Paper accepted at Journal of Computational Physics',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-started-as-a-game-engine-research-intern-at-tiktok-inc-san-jose-ca",
          title: 'Started as a Game Engine Research Intern at TikTok Inc., San Jose, CA....',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-siggraph-2025",
          title: 'Paper accepted at SIGGRAPH 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "projects-cirrus",
          title: 'Cirrus',
          description: "Adaptive Hybrid Particle-Grid Flow Maps on GPU",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_cirrus/";
            },},{id: "projects-meso",
          title: 'MESO',
          description: "Modern GPU Fluid Simulator in C++ and CUDA",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_meso/";
            },},{id: "projects-simplex",
          title: 'Simplex',
          description: "Physics Simulation, Optimization, and Visualization Library",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_simplex/";
            },},{id: "projects-melp-thin-film",
          title: 'MELP Thin Film',
          description: "Moving Eulerian-Lagrangian Particle Method for Thin Film and Foam Simulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_melp_thin_film/";
            },},{id: "projects-sph-thin-film",
          title: 'SPH Thin Film',
          description: "Smoothed Particle Hydrodynamics for Thin-Film Fluids",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_sph_thin_film/";
            },},{
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
