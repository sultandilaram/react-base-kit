import { useEffect } from "react";
import { useLocalStorage, usePrefersDarkMode } from ".";

export default function useDarkMode(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const [enabledState, setEnabledState] = useLocalStorage<boolean>(
    "dark-mode-enabled",
    false
  );
  const prefersDarkMode = usePrefersDarkMode();

  const enabled =
    typeof enabledState !== "undefined" ? enabledState : prefersDarkMode;

  useEffect(() => {
    const className = "dark-mode";
    const element = window.document.body;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setEnabledState];
}
