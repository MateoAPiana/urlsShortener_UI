export type urlRegister = {
  url: string,
  newURL: string
}

export type urlsListItem = {
  url_original: string
  url_shorted: string,
  countVisited: number
}

declare global {
  interface Window {
    cookieStore: {
      get: (name: string) => Promise<{ name: string; value: string } | null>;
      set: (name: string, value: string) => Promise<void>;
      delete: (name: string) => Promise<void>;
    };
  }
}
