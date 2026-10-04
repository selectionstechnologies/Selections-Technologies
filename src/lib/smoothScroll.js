// Holds the active Lenis instance so other components (e.g. ScrollToTop) can drive scrolling through it
let lenis = null

export const getLenis = () => lenis
export const setLenis = (instance) => {
  lenis = instance
}
