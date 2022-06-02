const urlStore = [];

export const getUrl = (shortId: string) => {
  return urlStore.filter((url) => url?.shortId === shortId)?.[0]?.url;
};

export const setUrl = (shortId: string, url: string) => {
  urlStore.push({ shortId, url });
};
