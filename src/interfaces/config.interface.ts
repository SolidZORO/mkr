export interface IDotEnv {
  REACT_APP_SITE_NAME?: string;
}

export interface IBuild {
  MODE: string;
  VERSION: string;
  VERSION_DASH: string;
  VERSION_NUMBER: string;
  VERSION_HASH: string;
  BUILDTIME: string;
}
