import { MiniNotificationCard } from "shared/ui/TopicCard/MiniNotificationCard";
import { CATEGORIES } from "../constants";

export function MainPage() {
  return (
    <>
      РБО
      <MiniNotificationCard type={CATEGORIES.ATTENTION} />
    </>
  );
}
