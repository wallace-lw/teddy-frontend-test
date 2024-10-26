export const getRouteName = (url: string): string => {
  try {
    const parsedUrl = new URL(url, "http://random-base"); 
    return parsedUrl.pathname;
  } catch (error) {
    console.error("Invalid URL:", error);
    return "";
  }
}