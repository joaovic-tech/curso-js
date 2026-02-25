export const fetchJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  return await rawData.json();
};
