import { useContext, useEffect, useRef } from "react";
import { termContext } from "../components/Terminal";

/**
 * Opens `url` (in `target`) exactly once, from the output of the command
 * that has just been submitted.
 *
 * Every output in the history is re-mounted on each render of the terminal,
 * so a redirect that only checks `rerender` fires again from every earlier
 * output of the same command (the Nth `cv` would open N tabs). Gating on
 * `index === 0` limits it to the newest output; the ref keeps the open from
 * running twice when React.StrictMode double-invokes effects in development.
 * @param {string | undefined} url - URL to open; undefined opens nothing
 * @param {string} target - window.open target, defaults to "_blank"
 */
export const useOpenOnSubmit = (url: string | undefined, target = "_blank") => {
  const { rerender, index } = useContext(termContext);
  const opened = useRef(false);

  useEffect(() => {
    if (!rerender || index !== 0 || !url || opened.current) return;
    opened.current = true;
    window.open(url, target);
  }, [rerender, index, url, target]);
};
