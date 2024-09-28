export const getImageUrl = (coverPath: string): string => {
    return `${import.meta.env.VITE_API_URL}${coverPath}`;
};
  