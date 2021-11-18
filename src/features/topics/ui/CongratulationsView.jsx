import { TopicCard } from "shared/ui/TopicCard/TopicCard";
import styled from "styled-components";
import { CATEGORIES } from "../../../constants";

export function CongratulationsView(props) {
  return (
    <Wrapper>
      <ViewWrapper>
        <img
          src="/images/presents.jpg"
          width="690px"
          height="250px"
          alt="presents"
        />
        <Title>Поздравления</Title>
        <Text>Настроимся на позитивную волну</Text>
      </ViewWrapper>

      {props.data.map((info) => (
        <TopicCard info={info} type={CATEGORIES.CONGRATULATIONS} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ViewWrapper = styled.div`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 8px 32px 0 rgb(0 0 0 / 8%);
  padding-bottom: 30px;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin: 24px 0 16px 0;
  padding-left: 24px;
`;

const Text = styled.div`
  font-size: 16px;
  padding-left: 24px;
`;