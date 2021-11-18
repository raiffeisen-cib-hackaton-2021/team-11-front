import { useParams } from "react-router-dom";
import { EventsView } from "features/topics/ui/EventsView";
import { NewsView } from "features/topics/ui/NewsView";
import { CongratulationsView } from "features/topics/ui/CongratulationsView";
import { AttentionView } from "features/topics/ui/AttentionView";
import { AllTopicsView } from "features/topics/ui/AllTopicsView";
import { Sidebar } from "shared/ui/Sidebar/Sidebar";
import styled from "styled-components";

const viewMap = {
  all: AllTopicsView,
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

  return (
    <Wrapper className="content">
      <Sidebar />
      <View data={[1, 2, 4, 5]} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
