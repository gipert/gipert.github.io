import {
  Stage,
  Job,
  Education,
  Talk,
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
export const profession = 'Post-doctoral researcher';
export const address = 'TUM Physik Department (E15), James-Franck-Str. 1, 85748 Garching (DE)';
export const emails: string[] = [
  'gipert@pm.me',
  'pertoldi@pd.infn.it',
  'luigi.pertoldi@tum.de',
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
export const python: Skill = { level: 0.8, name: 'Python' };
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
      'Technische Universität München',
      'INFN Sezione di Padova',
    ],
    description: `
      Working on data analysis and Monte Carlo simulations for the GERDA and
      LEGEND experiments.
    `,
    urls: [
      'https://www.ph.tum.de/about/people/vcard/727D81B5400139BA',
    ],
    startsAt: new Date('2020-11-01'),
    position: 'Post-doctoral researcher',
  },

  {
    institution: [
      'INFN Sezione di Padova',
      'Università degli Studi di Padova',
    ],
    description: `
      Mostly working on the background and liquid argon veto model of the GERDA
      experiment. "Simulations and background study task group" co-coordinator.
      My PhD thesis title is "Search for new physics with two-neutrino
      double-beta decay in GERDA data".
    `,
    urls: [
      'https://github.com/gipert/phd-thesis/releases/download/v1.1/pertoldi-phd-thesis.pdf',
      'https://github.com/gipert/phd-thesis/releases/download/v1.1/pertoldi-phd-slides.pdf',
      'https://github.com/gipert/phd-thesis',
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

export const talks: Talk[] = [
  {
    title: 'First results on neutrinoless double beta decay from LEGEND-200',
    description: `
      I was invited to give a seminar about LEGEND at King's College and UCL in
      London.
    `,
    date: new Date('2025-03-15'),
    urls: [
      'https://gipert.github.io/files/202500-LEGENDSeminar_edited.pdf',
    ],
  },
  {
    title: 'The first year of LEGEND-200 physics data in the quest for 0νββ',
    description: `
      I was invited to present the first LEGEND-200 0νββ results at the
      Neutrino 2024 conference in Milano (IT), following an intense year spent
      preparing for the data unblinding.
    `,
    date: new Date('2024-05-18'),
    urls: [
      'https://gipert.github.io/files/202406-Neutrino24_edited.pdf',
    ],
  },
  {
    title: 'Searching for matter creation with GERDA and beyond',
    description: `
      A talk about the legacy of the GERDA experiment and the future of LEGEND
      I gave at the International School of Subnuclear Physics in Erice (IT).
    `,
    date: new Date('2022-06-19'),
    urls: [
      'https://gipert.github.io/files/202206-EriceSchool_edited.pdf',
      'https://ettoremajoranafoundation.it/scuola/international-school-of-subnuclear-physics',
    ],
  },
  {
    title: 'Final Results of GERDA on the Search for Neutrinoless Double-β Decay',
    description: `
      Presentation of the final results of the GERDA experiment at the PANIC
      2021 conference.
    `,
    date: new Date('2021-09-08'),
    urls: [
      'https://indico.lip.pt/event/592/contributions/3302/',
      'https://indico.lip.pt/event/592/contributions/3302/attachments/2786/4394/PANIC2021_edited_conf.pdf'
    ],
  },
  {
    title: 'The Simulation of Neutrinoless double beta decay experiments',
    description: `
      A contribution to the kick-off meeting of the French underground physics
      community about the simulation framework developed by the GERDA and LEGEND
      collaborations.
    `,
    date: new Date('2021-06-01'),
    urls: [
      'https://indico.in2p3.fr/event/23971/contributions/95735/',
      'https://indico.in2p3.fr/event/23971/contributions/95735/attachments/64513/89539/GdR-DUPhy-Pertoldi.pdf',
    ],
  },
  {
    title: 'Modeling of GERDA Phase II data',
    description: `
      A poster presented at the Neutrino2020 conference toghether with K. v.
      Sturm about the GERDA background model. We presented the background
      decomposition of single- and two-detector data in GERDA Phase II.
    `,
    date: new Date('2020-06-22'),
    urls: [
      'https://indico.fnal.gov/event/19348/contributions/186251',
      'https://doi.org/10.1007/JHEP03(2020)139',
    ],
  },
  {
    title: 'Searching 0νββ with GERDA Phase II',
    description: `
      A talk on the latest data release (presented at the Neutrino 2018
      conference in Heidelberg) of GERDA Phase II held at the 'Revealing the
      history of the universe with underground particle and nuclear research
      2019' conference in Sendai, Japan.
    `,
    date: new Date('2019-03-07'),
    urls: [
      'http://www.lowbg.org/ugnd/workshop/sympo_all/201903_Sendai/slides/7pm/7pm_5.pdf',
    ],
  },
  {
    title: 'The Bayesian Blocks algorithm',
    description: `
      An overview of the Bayesian Blocks as a non-parametric representation of
      data proposed by J. D. Scargle in 1998 for time series analysis in
      Astrophysics. I implement the method in C++ and Julia and apply it to the
      energy spectrum of the GERDA experiment.
    `,
    date: new Date('2018-07-19'),
    urls: [
      'https://gipert.github.io/files/bayesian-blocks.pdf',
      'https://github.com/gipert/bayesian-blocks',
    ],
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
    urls: [
      'https://gipert.github.io/sheet-music',
      'https://gumroad.com/luigipertoldi',
    ],
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
    urls: [
      'https://github.com/gipert/bayesian-blocks',
      'https://doi.org/10.1088/0004-637X/764/2/167',
      'https://arxiv.org/abs/1708.00810',
    ],
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
    urls: [
      'https://github.com/gipert/gerda-fitter',
    ],
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
    urls: [
      'https://gist.github.com/gipert/194f8fb16cbc41dee7586ab04483b659',
      'https://doi.org/10.1140/epjp/i2012-12024-0',
    ],
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
    urls: [
      'https://github.com/gipert/progressbar',
    ],
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
    urls: [
      'https://github.com/gipert/gedet-plots',
    ],
    skills: {
        asymptote,
    },
  },
  {
    name: 'My Docker and Singularity images',
    description: `
      The Singularity and Docker images I use the most.
    `,
    urls: [
      'https://github.com/gipert/Dockerfiles',
      'https://github.com/gipert/Singularity.def',
      'https://hub.docker.com/u/gipert/',
      'https://cloud.sylabs.io/library/gipert',
    ],
    skills: {
        docker,
        singularity,
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
    skills: {
      unix_clt,
    },
  },
];


// vim: tabstop=2 shiftwidth=2 expandtab
