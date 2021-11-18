import { ModalWindow } from "shared/ui/Modal/ModalWindow";

export const FeedbackModal = () => (
  <ModalWindow
    title="Обратная связь"
    startText="Оцените %НАЗВАНИЕ СЦЕНАРИЯ%, было удобно и все ли получилось?"
    feedbackText="Помогите нам улучшить %НАЗВАНИЕ СЦЕНАРИЯ%"
  />
);
