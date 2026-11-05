let sequence=0;

/** Identifiers are local record keys, not authentication tokens. Opaque preview
 * frames may expose crypto without randomUUID, so a secure context is optional. */
export function uniqueId(source:Partial<Pick<Crypto,'randomUUID'>>|undefined=globalThis.crypto):string {
  if(typeof source?.randomUUID==='function')return source.randomUUID();
  sequence++;
  return `local-${Date.now().toString(36)}-${sequence.toString(36)}-${Math.random().toString(36).slice(2,12)}`;
}
