export enum Section {
  Profile,
  Skills,
  CurriculumVitae,
  Talks,
  Projects,
  Music,
};

export enum Language {
  ruby,
  typescript,
  javascript,
  julia,
};

export const languages: Language[] = [
  Language.ruby,
  Language.typescript,
  Language.javascript,
  Language.julia,
];

export interface Stage {
  description?: string,
  startsAt?: Date,
  endsAt?: Date,
  urls?: string[],
  skills?: { [key: string]: Skill },
};

export interface Job extends Stage {
  institution?: string | string[],
  company?: string,
  remote?: boolean,
  position: string | string[],
};

export interface Education extends Stage {
  institution?: string | string[],
  university?: string,
  graduation: string,
};

export interface Talk {
  title: string,
  description?: string,
  date: Date,
  urls: string[],
  media?: string[],
};

export interface ShowCase extends Stage {
  name: string,
  media?: string[],
};

export interface Skill {
  level: number,
  name: string,
};

export interface SkillSet {
  title: string,
  data: SkillSet[] | { [key: string]: Skill },
};

export class State {
  currentLanguage: Language;
  currentLanguageHelper: LanguageHelper;

  private getLanguageClass(lang: Language): string {
    return `lang-${Language[lang]}`;
  }

  get language(): Language {
    return this.currentLanguage;
  }

  set language(lang: Language) {
    this.currentLanguage = lang;
    this.currentLanguageHelper = new LanguageHelper(lang);
    for (const language of languages) {
      document.body.classList.remove(this.getLanguageClass(language));
    }
    document.body.classList.add(this.getLanguageClass(lang));
    const title = document.title.substr(0, document.title.length - 2);
    switch (lang) {
      case Language.ruby: { document.title = title + 'rb'; break; }
      case Language.typescript: { document.title = title + 'ts'; break; }
      case Language.javascript: { document.title = title + 'js'; break; }
      case Language.julia: { document.title = title + 'jl'; break; }
    }
  }
};


export class LanguageHelper {
  constructor(private language: Language) {
  }

  get commentChar() {
    switch (this.language) {
      case Language.ruby: { return '#'; break; }
      case Language.typescript: { return '*'; break; }
      case Language.javascript: { return '*'; break; }
      case Language.julia: { return '#'; break; }
    }
  }

  get commentEnd() {
    switch (this.language) {
      case Language.ruby: { return '#'; break; }
      case Language.typescript: { return '/'; break; }
      case Language.javascript: { return '/'; break; }
      case Language.julia: { return '#'; break; }
    }
  }

  get stringChar() {
    switch (this.language) {
      case Language.ruby: { return '\''; break; }
      case Language.typescript: { return '\''; break; }
      case Language.javascript: { return '\''; break; }
      case Language.julia: { return '"'; break; }
    }
  }

  get multilineString() {
    switch (this.language) {
      case Language.ruby: { return '\''; break; }
      case Language.typescript: { return '`'; break; }
      case Language.javascript: { return '`'; break; }
      case Language.julia: { return '"""'; break; }
    }
  }

  get comment() {
    switch (this.language) {
      case Language.ruby: { return '#'; break; }
      case Language.typescript: { return '//'; break; }
      case Language.javascript: { return '//'; break; }
      case Language.julia: { return '#'; break; }
    }
  }

  get undefined() {
    switch (this.language) {
      case Language.ruby: { return 'nil'; break; }
      case Language.typescript: { return 'undefined'; break; }
      case Language.javascript: { return 'undefined'; break; }
      case Language.julia: { return 'nothing'; break; }
    }
  }

  get relationalOp() {
    switch (this.language) {
      case Language.ruby: { return ':'; break; }
      case Language.typescript: { return ':'; break; }
      case Language.javascript: { return ':'; break; }
      case Language.julia: { return '=>'; break; }
    }
  }
};
