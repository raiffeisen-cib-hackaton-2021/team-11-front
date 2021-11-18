import {
  Input,
  P,
  Radio,
  Span,
  Whitespace,
  Flex,
  InputSlider,
  Groups,
  Button,
  NotificationService,
  Notifications,
} from "@fcc/ui";
import { ModalWindow } from "shared/ui/Modal/ModalWindow";
import { useState } from "react";

export function MainPage() {
  const [isOpen, setIsOpen] = useState(false);

  const service = new NotificationService();

  return (
    <>
      <Notifications service={service} />
      РБО
      <div>Banner</div>
      <Flex>
        <Flex.Item>
          <P size="xl" margin="s">
            Валюта депозита
          </P>
          <Whitespace mb="s4">
            <Groups design="vertical">
              <Radio>RUB</Radio>
              <Radio>EUR</Radio>
              <Radio>USD</Radio>
            </Groups>
          </Whitespace>
          <Input
            placeholder="Сумма депозита"
            design="outline"
            size="xxl"
            postfix={"руб."}
          />
        </Flex.Item>
        <Flex.Item style={{ width: "100%" }}>
          <P size="xl" margin="s">
            Срок
          </P>
          <Groups design="vertical">
            <InputSlider
              noInput
              design="material"
              onChange={() => {}}
              min={1}
              max={4}
              value={2}
            >
              <InputSlider.Tag val={1}>1W</InputSlider.Tag>
              <InputSlider.Tag val={2}>3W</InputSlider.Tag>
              <InputSlider.Tag val={3}>1M</InputSlider.Tag>
              <InputSlider.Tag val={4}>3M</InputSlider.Tag>
            </InputSlider>
          </Groups>
          <Whitespace mt="s10">
            <Groups design="horizontal">
              <P>
                Ставка{" "}
                <Span size="m" weight="bold">
                  5.5%
                </Span>
              </P>
              <Button
                design="accent"
                onClick={() => {
                  service.plain({
                    title: "Plain notification.",
                    message: "Депозит размещен",
                  });
                  setTimeout(() => {
                    setIsOpen(true);
                  }, 700);
                }}
              >
                Разместить депозит
              </Button>
            </Groups>
          </Whitespace>
        </Flex.Item>
      </Flex>
      <ModalWindow
        isOpen={isOpen}
        title="Обратная связь"
        startText="Оцените 'Размещение депозита', было удобно и все ли получилось?"
        feedbackText="Помогите нам стать лучше"
        setIsOpen={setIsOpen}
      />
    </>
  );
}
