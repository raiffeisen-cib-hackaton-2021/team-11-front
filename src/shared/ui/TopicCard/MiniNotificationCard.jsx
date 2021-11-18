import styled from "styled-components";
import { format } from "date-fns";
import { Badge, Heading, Span, Whitespace, Flex } from "@fcc/ui";
import { Dislike, Like } from "@fcc/icons";
import { CATEGORIES_CONFIG } from "../../../constants";
import { useState } from "react";
import { RouterLink } from "shared/ui/Link/Link";

const votedIds = {
  like: "like",
  dislike: "dislike",
};

export const MiniNotificationCard = ({
  type,
  title = fishTitle,
  previewText = fishText,
} = {}) => {
  const [voted, setVoted] = useState("");

  const handleVoted = (id) => () => {
    setVoted(id);
  };
  return (
    <CardWrapper>
      <CardHeader>
        <Flex>
          <Badge size="s" color={CATEGORIES_CONFIG[type].color}>
            {CATEGORIES_CONFIG[type].title}
          </Badge>
          <Whitespace ml="s4">
            <Span size="s">{format(new Date(), "dd.MM.yyyy")}</Span>
          </Whitespace>
        </Flex>

        <VotedContainer>
          <IconWrapper
            voted={voted === votedIds.dislike}
            onClick={handleVoted(votedIds.dislike)}
          >
            <Dislike size="s" />
          </IconWrapper>
          <IconWrapper
            voted={voted === votedIds.like}
            onClick={handleVoted(votedIds.like)}
          >
            <Like size="s" />
          </IconWrapper>
        </VotedContainer>
      </CardHeader>
      <RouterLink to="/topics/all">
        <Heading size="xs">{title}</Heading>
      </RouterLink>
      <CardBody>{previewText}</CardBody>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  font-size: 16px;
  border-radius: 8px;
  width: 400px;
  padding: 16px;
  background-color: #ffffff;
  box-shadow: 0 8px 32px 0 rgb(0 0 0 / 8%);
  margin-bottom: 30px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardBody = styled.div`
  color: #808185;
  font-size: 12px;
  justify-content: flex-start;
`;

const VotedContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-left: 16px;
  color: ${({ voted }) => (voted ? "#2b2d33" : "#aaabad")};
  cursor: pointer;
  transition: all 200ms ease-out;

  :hover {
    color: #404247;
  }
`;
const fishText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.`;

const fishTitle = "Lorem ipsum dolor sit amet";
