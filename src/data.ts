import {
  Stage,
  Job,
  Education,
  ShowCase,
  Skill,
  SkillSet,
  State,
} from './data_types';

/********
* State *
********/

export const state = new State();

/*********
* Header *
*********/

export const my_name = 'Luigi Pertoldi';
export const profession = 'Ph.D. Physics Student';
export const address = 'via Marzolo 8, 35121 Padova (Italy)';
export const emails: string[] = [
  'pertoldi@pd.infn.it',
  'luigi.pertoldi@pd.infn.it',
  'luigi.pertoldi@protonmail.com',
  'luigi.pertoldi@pm.com',
];
export const socialNetworks: { [key: string]: string } = {
  github: 'https://github.com/gipert',
  orcid: 'https://orcid.org/0000-0002-0467-2571',
  inspire_hep: 'https://inspirehep.net/authors/1667599'
};
export const academic_cv = 'https://gipert.github.io/files/academic-cv.pdf';
export const sailing_cv = 'https://gipert.github.io/files/sailing-cv.pdf';

/*********
* Skills *
*********/

// Backend
// Backend / Code
export const cpp: Skill = { level: 0.8, name: 'C++' };
export const python: Skill = { level: 0.5, name: 'Python' };
export const julia: Skill = { level: 0.7, name: 'Julia' };
export const latex: Skill = { level: 0.8, name: 'LaTeX typesetting system' };
export const asymptote: Skill = { level: 0.6, name: 'Asymptote vector graphics language' };
export const bash: Skill = { level: 0.8, name: 'Bourne Again Shell scripting language' };

// Backend / Deploy
export const docker: Skill = { level: 0.9, name: 'Docker containers' };
export const singularity: Skill = { level: 0.9, name: 'Singularity containers' };
export const git: Skill = { level: 0.8, name: 'Git' };

// Frontend
// Frontend / HEP
export const root: Skill = { level: 0.8, name: 'ROOT CERN' };
export const geant4: Skill = { level: 0.5, name: 'Geant4 Simulation Toolkit' };
export const tminuit: Skill = { level: 0.8, name: 'MINUIT' };

// Frontend / Statistics
export const bat: Skill = { level: 0.9, name: 'Bayesian Analysis Toolkit' };

// Frontend / Misc
export const unix_clt: Skill = { level: 0.9, name: 'Unix command line tools' };

// Frontend / Music
export const finale: Skill = { level: 0.9, name: 'Finale music notation software' };
export const lilypond: Skill = { level: 0.1, name: 'LilyPond music notation software' };

export const skills: SkillSet[] = [
  {
    title: 'Backend',
    data: [
      {
        title: 'Code',
        data: { cpp, python, julia, latex, bash, asymptote },
      },
      {
        title: 'Deploy',
        data: { docker, singularity, git },
      },
    ],
  },
  {
    title: 'Frontend',
    data: [
      {
        title: 'HEP',
        data: { root, geant4, tminuit },
      },
      {
        title: 'Statistics',
        data: { bat },
      },
      {
        title: 'Music',
        data: { finale, lilypond },
      },
      {
        title: 'Misc',
        data: { unix_clt },
      },
    ],
  },
];


/*******************
* Curriculum Vitae *
*******************/

export const curriculumVitae: (Job | Education)[] = [
  {
    institution: [
      'INFN Sezione di Padova',
      'Università degli Studi di Padova',
    ],
    description: `
      I am mainly working on the background model and liquid argon veto model of
      the GERDA experiment. I am one of the "simulations and background study
      task group" leaders.
    `,
    urls: [
      'https://github.com/gipert/gerda-fitter',
      'https://github.com/gipert/gerda-factory',
      'https://github.com/gipert/gerda-larmap',
      'https://github.com/gipert/0nbb-sensitivity',
      'https://github.com/gipert/gerda-pcalib-sim',
      'https://github.com/gipert/gedet-plots',
    ],
    startsAt: new Date('2017'),
    endsAt: new Date('2020'),
    graduation: 'Ph.D.',
      skills: {
        bat,
        docker,
        singularity,
        julia,
        geant4,
    },
  },

  {
    university: 'Università degli Studi di Padova',
    description: `
      Two-year master study plan in Physics, high-energy (HEP) curriculum.
      I wrote a thesis about the 'Search for Lorentz and CPT symmetries
      violation in double-beta decay using data from the GERDA experiment'
    `,
    urls: [
        'http://tesi.cab.unipd.it/56428/1/Tesi_LM_Pertoldi_Luigi.pdf',
        'https://github.com/gipert/master-thesis',
        'https://github.com/gipert/laboratorio-muoni-cosmici',
        'https://github.com/gipert/PSD-tools',
        'https://github.com/gipert/read-dir-cxx',
    ],
    startsAt: new Date('2015'),
    endsAt: new Date('2017'),
    graduation: 'Master Degree',
    skills: {
        bat,
    },
  },

  {
    university: 'Università degli Studi di Padova',
    description: `
      Three-year bachelor study plan in general Physics. I wrote a thesis about
      the 'Sensitivity to the neutrino mass hierarchy with the JUNO experiment'
    `,
    urls: [
        'http://tesi.cab.unipd.it/50124/1/Pertoldi_Luigi.pdf',
        'https://github.com/gipert/bachelor-thesis',
        'https://github.com/gipert/progressbar',
    ],
    startsAt: new Date('2012'),
    endsAt: new Date('2015'),
    graduation: 'Bachelor Degree',
    skills: {
        root,
        tminuit,
    },
  },
];


/********
* Talks *
********/

export const talks: ShowCase[] = [
  {
    name: 'Modeling of GERDA Phase II data',
    description: `
      A poster presented at the Neutrino2020 conference toghether with K. v.
      Sturm about the GERDA background model. We presented the background
      decomposition of single- and two-detector data in GERDA Phase II.
    `,
    startsAt: new Date('2020'),
    endsAt: new Date('2020'),
    urls: [
      'https://indico.fnal.gov/event/19348/contributions/186251',
      'https://doi.org/10.1007/JHEP03(2020)139',
    ],
    media: [],
    skills: {
    },
  },
  {
    name: 'Searching 0νββ with GERDA Phase II',
    description: `
      A talk on the latest data release (presented at the Neutrino 2018
      conference in Heidelberg) of GERDA Phase II held at the 'Revealing the
      history of the universe with underground particle and nuclear research
      2019' conference in Sendai, Japan.
    `,
    startsAt: new Date('2019'),
    endsAt: new Date('2019'),
    urls: [
      'http://www.lowbg.org/ugnd/workshop/sympo_all/201903_Sendai/slides/7pm/7pm_5.pdf',
    ],
    media: [],
    skills: {
    },
  },
  {
    name: 'Il modello di fondo di GERDA Fase II',
    description: `
      A short talk about the preliminary results of the GERDA Phase II
      background model presented at Società Italiana di Fisica (SIF) 104th
      national congress.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://gipert.github.io/files/SIF2018.pdf',
    ],
    media: [],
    skills: {
    },
  },
  {
    name: 'The Bayesian Blocks algorithm',
    description: `
      An overview of the Bayesian Blocks as a non-parametric representation of
      data proposed by J. D. Scargle in 1998 for time series analysis in
      Astrophysics. I implement the method in C++ and Julia and apply it to the
      energy spectrum of the GERDA experiment.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://gipert.github.io/files/bayesian-blocks.pdf',
      'https://github.com/gipert/bayesian-blocks',
    ],
    media: [],
    skills: {
    },
  },
  {
    name: 'Tools and methodologies for GERDA Phase II background modeling',
    description: `
      A poster I presented at the International Neutrino Summer School 2018
      about the revised background model we adopted for the second phase of
      the experiment. Some preliminary results are also discussed.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://gipert.github.io/files/INSS2018-poster.pdf',
    ],
    media: [],
    skills: {
    },
  },
  {
    name: 'Ricerca del doppio decadimento beta senza neutrini 0νββ in Gerda fase II',
    description: `
      A short general talk about the GERDA experiment and most recent results.
      The talk was presented at IFAE conference 2018.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://tinyurl.com/ifae2018pertoldi',
    ],
    media: [],
    skills: {
    },
  },
  {
    name: 'Ricerca di violazione delle simmetrie di Lorentz e CPT nel 2νββ con GERDA',
    description: `
      A short talk about the results of my master thesis project presented at Società
      Italiana di Fisica (SIF) 103rd national congress.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('2017'),
    urls: [
      'https://github.com/gipert/master-thesis/blob/master/slides/slides.pdf',
    ],
    media: [],
    skills: {
    },
  },
];


/********
* Music *
*********/

export const music: ShowCase[] = [
  {
    name: 'LP Transcriptions',
    description: `
      Small website I created during the university years (when I had actually
      enough free time) to share the sheet music (not so much sadly) I
      transcribed over the years.
    `,
    startsAt: new Date('2014'),
    endsAt: new Date('20??'),
    urls: [
      'https://gipert.github.io/sheet-music',
      'https://gumroad.com/luigipertoldi',
    ],
    media: [],
    skills: {
      finale,
      lilypond,
    },
  },
];



/***********
* Projects *
************/

export const projects: ShowCase[] = [
  {
    name: 'Bayesian blocks algorithm C++ and Julia implementation',
    description: `
      Julia and C++ Implementations of the bayesian blocks algorithm,
      originally designed by J. D. Scargle in 1998.
    `,
    startsAt: new Date('2019'),
    endsAt: new Date('2019'),
    urls: [
      'https://github.com/gipert/bayesian-blocks',
      'https://doi.org/10.1088/0004-637X/764/2/167',
      'https://arxiv.org/abs/1708.00810',
    ],
    media: [],
    skills: {
        cpp,
        julia,
    },
  },
  {
    name: 'Bayesian histogram fitter',
    description: `
      A fully JSON-configurable bayesian fitting engine (based on BAT and ROOT)
      for data in the form of ROOT histograms. Taylored on GERDA data and
      Probability Density Functions.
    `,
    startsAt: new Date('2019'),
    endsAt: new Date('2020'),
    urls: [
      'https://github.com/gipert/gerda-fitter',
    ],
    media: [],
    skills: {
        cpp,
        bat,
        root,
    },
  },
  {
    name: 'Poisson bands algorithm implementation',
    description: `
      Header-only poisson smallest interval computing and drawing utilities.
    `,
    startsAt: new Date('2019'),
    endsAt: new Date('2019'),
    urls: [
      'https://gist.github.com/gipert/194f8fb16cbc41dee7586ab04483b659',
      'https://doi.org/10.1140/epjp/i2012-12024-0',
    ],
    media: [],
    skills: {
        cpp,
        root,
    },
  },
  {
    name: 'C++ progress bar',
    description: `
      A very simple, header-only, fully customizable, progress bar (with
      percentage) for C++ loops.
    `,
    startsAt: new Date('2016'),
    endsAt: new Date('2020'),
    urls: [
      'https://github.com/gipert/progressbar',
    ],
    media: [],
    skills: {
        cpp,
    },
  },
  {
    name: 'Germanium detectors drawing library',
    description: `
      Beautiful HPGe detector technical drawing library written in the
      gorgeous Asymptote vector graphics language.
    `,
    startsAt: new Date('2019'),
    endsAt: new Date('2020'),
    urls: [
      'https://github.com/gipert/gedet-plots',
    ],
    media: [],
    skills: {
        asymptote,
    },
  },
  {
    name: 'My Docker and Singularity images',
    description: `
      The Singularity and Docker images I use the most.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('20??'),
    urls: [
      'https://github.com/gipert/Dockerfiles',
      'https://github.com/gipert/Singularity.def',
      'https://hub.docker.com/u/gipert/',
      'https://cloud.sylabs.io/library/gipert',
    ],
    media: [],
    skills: {
        docker,
        singularity,
    },
  },
  {
    name: 'Singularity virtual environments manager',
    description: `
      A simple and customizable application written in Bash to manage a
      container depot. Allows executing commands, opening shells inside a
      registered container from any location. Concept stolen from
      oschulz/singularity-venv.
    `,
    startsAt: new Date('2020'),
    endsAt: new Date('2020'),
    urls: [
      'https://github.com/gipert/singularity-venv',
    ],
    media: [],
    skills: {
        bash,
    },
  },
  {
    name: 'Paul Tol\'s color palettes for ROOT',
    description: `
      Implementation of Paul Tol's color palettes for the ROOT CERN
      software suite. To be included in a ROOT macro.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://gist.github.com/gipert/df72b67c1d02bbb41f1dd406b6397811',
      'https://personal.sron.nl/~pault/data/colourschemes.pdf',
    ],
    media: [],
    skills: {
        root,
    },
  },
  {
    name: 'My Linux dotfiles',
    description: `
      I love ricing my Arch Linux distribution, check out my dotfiles!
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('20??'),
    urls: [
      'https://github.com/gipert/.dotfiles',
    ],
    media: [],
    skills: {
      unix_clt,
    },
  },
];


// vim: tabstop=2 shiftwidth=2 expandtab
