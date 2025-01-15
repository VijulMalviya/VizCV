import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export const UseScrollTop = () => {
  const pathname = usePathname();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};
