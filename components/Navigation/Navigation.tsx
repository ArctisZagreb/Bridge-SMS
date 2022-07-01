import { DesktopNavigation } from "./desktopNavigation/DesktopNavigation";
import { MobileNavigation } from "./mobileNavigation/MobileNavigation";
export const Navigation = () => {
  return (
    <nav>
      <MobileNavigation />
      <DesktopNavigation />
    </nav>
  );
};
