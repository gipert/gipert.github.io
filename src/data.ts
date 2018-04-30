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
export const julia: Skill = { level: 0.3, name: 'Julia' };

// Backend / Deploy
export const docker: Skill = { level: 0.9, name: 'Docker' };
export const git: Skill = { level: 1.0, name: 'Git' };

// Frontend
// Frontend / HEP
export const root: Skill = { level: 0.8, name: 'ROOT Cern' };
export const tminuit: Skill = { level: 0.8, name: 'TMinuit' };

// Frontend / Statistics
export const bat: Skill = { level: 0.9, name: 'BAT' };

// Frontend / Typesetting
export const latex: Skill = { level: 0.8, name: 'LaTeX' };

export const skills: SkillSet[] = [
  {
    title: 'Backend',
    data: [
      {
        title: 'Code',
        data: { cpp, julia },
      },
      {
        title: 'Deploy',
        data: { docker, git },
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
        title: 'Typesetting',
        data: { latex },
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
      Ph.D. in Physics.
    `,
    urls: [
      'https://github.com/gipert/gerdasw-containers',
      'https://github.com/gipert/0nbb-sensitivity',
    ],
    startsAt: new Date('2017'),
    endsAt: new Date('2020'),
    graduation: 'Ph.D.',
    skills: {
        docker,
    },
  },

  {
    university: 'Università degli Studi di Padova',
    description: `
      two-year master study plan in Physics, high-energy (HEP) curriculum.
      I wrote a thesis about the 'Search for Lorentz and CPT symmetries violation in
      double-beta decay using data from the GERDA experiment'
    `,
    urls: [
      'https://github.com/gipert/master-thesis',
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
      three-year bachelor study plan in general Physics. I wrote a thesis on the
      'Sensitivity to the neutrino mass hierarchy with the JUNO experiment'
    `,
    urls: [
        'https://github.com/gipert/bachelor-thesis',
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


/**************
* Experiments *
**************/

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


/***********
* Projects *
***********/

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


/********
* Talks *
********/

export const talks: ShowCase[] = [
  {
    name: 'Lets talk about ... API (of shyftplan)',
    description: `
      A short introduction of APIs in general and the models of shyftplan in
      specific. This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--api',
      'http://lets-talk-about--api.tamino-martinius.de',
    ],
    media: [],
    skills: {
    },
  },
];


/***********
* Packages *
***********/

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


/*******
* Misc *
*******/

export const misc: ShowCase[] = [
  {
    name: 'RVM Docker Images',
    description: `
      This repository generates a rainbow table of Ubuntu versions and Ruby
      versions. The source is available on GitHub and the prebuild images
      are available on Docker Hub.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('2018'),
    urls: [
      'https://hub.docker.com/r/taminomartinius/rvm/',
      'https://github.com/tamino-martinius/docker-rvm',
    ],
    media: [],
    skills: {
      docker,
    },
  },
];
