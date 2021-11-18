import { useParams } from "react-router-dom";
import { EventsView } from "features/topics/ui/EventsView";
import { NewsView } from "features/topics/ui/NewsView";
import { CongratulationsView } from "features/topics/ui/CongratulationsView";
import { AttentionView } from "features/topics/ui/AttentionView";

const viewMap = {
  events: EventsView,
  news: NewsView,
  congratulations: CongratulationsView,
  attention: AttentionView,
};

export function Topic() {
  const params = useParams();
  const View = viewMap[params.topic];

  if (View === undefined) {
    return null;
  }

  return <View data={[1, 2, 4, 5]} />;
}
