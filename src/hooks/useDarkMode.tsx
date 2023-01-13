import { useEffect } from "react";
import { useLocalStorage, usePrefersDarkMode } from ".";

export default function useDarkMode(
  darkModeClass = "dark"
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [enabledState, setEnabledState] = useLocalStorage<boolean>(
    "dark-mode-enabled",
    false
  );
  const prefersDarkMode = usePrefersDarkMode();

  const enabled =
    typeof enabledState !== "undefined" ? enabledState : prefersDarkMode;

  useEffect(() => {
    const element = window.document.body;
    if (enabled) {
      element.classList.add(darkModeClass);
    } else {
      element.classList.remove(darkModeClass);
    }
  }, [enabled]);

  return [enabled, setEnabledState];
}
