export const documentLoader = async (url: string) => {
  switch (url) {
    case "https://www.w3.org/2018/credentials/v1": {
      return {
        contextUrl: null,
        documentUrl: "https://www.w3.org/2018/credentials/v1",
        document: require("./contexts/credentials-v1.json"),
      };
    }
    default:
      throw new Error(`JSON-LD context does not available: ${url}`);
  }
};
