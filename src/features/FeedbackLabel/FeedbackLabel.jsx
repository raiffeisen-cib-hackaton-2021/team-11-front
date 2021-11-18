import styled from "styled-components";
import { ChatAskRaif } from "@fcc/icons";
import { ModalWindow } from "shared/ui/Modal/ModalWindow";
import { useState } from "react";

export const FeedbackLabel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFeedbackClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <LabelWrapper onClick={handleFeedbackClick}>
        <ChatAskRaif size="xl" />
      </LabelWrapper>
      <ModalWindow
        title="Обратная связь"
        startText=""
        feedbackText="Напишите нам, что не понравилось или пошло не так"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        feedbackStep
      />
    </>
  );
};

const LabelWrapper = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 20px;
  right: 100px;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: #fed500;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.35);
  cursor: pointer;
  transition: all 200ms ease-out;

  :hover {
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
  }
`;
