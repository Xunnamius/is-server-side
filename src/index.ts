const _isServerSide = () => typeof window == 'undefined';

/**
 * Alias for `isServerSide()`
 */
export const isServer = _isServerSide;

/**
 * Returns `true` if this code is currently executing on the server (SSR/SSG).
 */
export const isServerSide = _isServerSide;
