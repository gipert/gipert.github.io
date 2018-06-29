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

export const myName = 'Luigi Pertoldi';
export const profession = 'Ph.D. Physics Student';
export const address = 'via Marzolo 8, 35121 Padova (Italy)';
export const emails: string[] = [
  'pertoldi@pd.infn.it',
  'luigi.pertoldi@pd.infn.it',
];
export const socialNetworks: { [key: string]: string } = {
  github: 'https://github.com/gipert'
};

/*********
* Skills *
*********/

// Backend
// Backend / Code
export const cpp: Skill = { level: 0.8, name: 'C++' };
export const python: Skill = { level: 0.5, name: 'Python' };
export const julia: Skill = { level: 0.3, name: 'Julia' };
export const latex: Skill = { level: 0.8, name: 'LaTeX' };

// Backend / Deploy
export const docker: Skill = { level: 0.9, name: 'Docker containers' };
export const singularity: Skill = { level: 0.9, name: 'Singularity containers' };
export const git: Skill = { level: 0.8, name: 'Git' };

// Frontend
// Frontend / HEP
export const root: Skill = { level: 0.8, name: 'ROOT Cern' };
export const tminuit: Skill = { level: 0.8, name: 'MINUIT' };

// Frontend / Statistics
export const bat: Skill = { level: 0.9, name: 'Bayesian Analysis Toolkit' };

// Frontend / Software management
export const homebrew: Skill = { level: 0.9, name: 'Homebrew package manager' };

// Frontend / Music
export const finale: Skill = { level: 0.9, name: 'Finale music notation software' };

export const skills: SkillSet[] = [
  {
    title: 'Backend',
    data: [
      {
        title: 'Code',
        data: { cpp, python, julia, latex },
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
        data: { root, tminuit },
      },
      {
        title: 'Statistics',
        data: { bat },
      },
      {
        title: 'Software management',
        data: { homebrew },
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
      I'm working for the GERDA collaboration on the background model of
      the experiment, in particular producing the Monte Carlo simulations
      and the Probability Density Distribution to describe the data.
    `,
    urls: [
      'https://github.com/gipert/gerdasw-containers',
      'https://github.com/gipert/0nbb-sensitivity',
    ],
    startsAt: new Date('2017'),
    endsAt: new Date('2020'),
    graduation: 'Ph.D.',
      skills: {
        bat,
        docker,
        singularity,
        julia,
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
    name: 'Tools and methodologies for GERDA Phase II background modeling',
    description: `
      A poster I presented at the International Neutrino Summer School 2018
      about the revised background model we adopted for the second phase of
      the experiments. Some preliminary results are also discussed.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://www.dropbox.com/s/cffpjcpt84dogex/INSS2018-poster.pdf?dl=0',
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
      A short talk about the results of my master thesis projecte presented at Società
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
      enough free time) to publish some sheet music (not so much sadly) I
      transcribed over the years. Warning: it's in italian!
    `,
    startsAt: new Date('2014'),
    endsAt: new Date('2015'),
    urls: [
      'http://lptranscriptions.altervista.org',
      'https://gumroad.com/luigipertoldi',
    ],
    media: [],
    skills: {
      finale,
    },
  },
];



/*******
* Misc *
********/

export const misc: ShowCase[] = [
  {
    name: 'My Docker and Singularity images',
    description: `
      The Singularity and Docker images I use the most.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('20??'),
    urls: [
      'https://github.com/gipert/my-containers',
      'https://hub.docker.com/u/gipert/',
      'https://singularity-hub.org/collections/478',
    ],
    media: [],
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
    media: [],
    skills: {
        root,
    },
  },
];

/**************
* Experiments *
**************/
/*
export const experiments: ShowCase[] = [
    {
    name: 'Button Animations',
    description: `
      I created a couple of different Buttons which are planned to be the main
      call to action buttons on a website. All buttons are previewed on dribbble
      and the code is available Open Source at CodePen.
    `,
    startsAt: new Date('2014-08-05'),
    endsAt: new Date('2017-07-02'),
    urls: [
      'https://dribbble.com/shots/3545734-Liquid-button-v2',
      'https://dribbble.com/shots/2629106-Button-Group',
      'https://dribbble.com/shots/1673204-Submit-Button',
    ],
    media: [],
    skills: {
    },
  },
];
 */

/***********
* Projects *
***********/
/*
export const projects: ShowCase[] = [
  {
    name: 'Squoint',
    description: `
      Squoint is a puzzle game which is optimized for mobile devices and touch
      gestures. The game is currently in closed beta and will be launched soon.
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [],
    media: [],
    skills: {
    },
  },
];
 */

/***********
* Packages *
***********/
/*
export const packages: ShowCase[] = [
  {
    name: 'Lets talk about ... Template',
    description: `
      A template with example slides. Thats my base branch with which i create
      my slides for presentations.
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--template',
      'https://github.com/tamino-martinius/lets-talk-about--example',
    ],
    media: [],
    skills: {
    },
  },
];
 */
