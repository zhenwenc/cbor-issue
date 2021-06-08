declare module '@digitalbazaar/cborld' {
  export const decode: (options: unknown) => Promise<Record<string, unknown>>;
  export const encode: (options: unknown) => Promise<Uint8Array>;
}
