const isBrowser = typeof window !== "undefined";

export function showable(showbelow: Number = 0) {
    if (isBrowser) {
        return window.scrollY >= showbelow;
    }
    return false;
}
