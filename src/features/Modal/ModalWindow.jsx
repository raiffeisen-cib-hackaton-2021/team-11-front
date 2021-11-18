import { Button, Groups, Textarea, Whitespace } from '@fcc/ui';
import { Dislike } from '@fcc/icons';
import { useState } from 'react';
import styled from 'styled-components';
import { ModalSuccess } from './ModalSuccess';

export const ModalWindow = ({ title, startText, feedbackText }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDislike, setIsDislike] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const enterClick = () => {
        setIsOpen(false);
        setIsSuccess(true);
    };

    const dislikeClick = () => {
        setIsDislike(true);
    };

    const sendFeedback = () => {
        setIsOpen(false);
        setIsSuccess(true);
        setIsDislike(false);
    };
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Show modal</Button>
            <ModalBlockBackground isOpen={isOpen}>
                <ModalWrapper isOpen={isOpen}>
                    <ModalHeader>
                        <Title>{title}</Title>
                    </ModalHeader>
                    <ModalBody>
                        {isDislike ? (
                            <>
                                <Whitespace mb='s4'>{feedbackText}</Whitespace>
                                <Textarea placeholder='Расскажите, что было не удобно и что не понравилось' />
                            </>
                        ) : (
                            startText
                        )}
                    </ModalBody>
                    <ModalFooter>
                        {isDislike ? (
                            <Button size='l' design='accent' onClick={sendFeedback}>
                                Отправить
                            </Button>
                        ) : (
                            <Groups justifyContent='flex-end'>
                                <Button size='l' design='outline' onClick={dislikeClick}>
                                    <Dislike /> Нет
                                </Button>
                                <Button size='l' design='accent' onClick={enterClick}>
                                    Все хорошо
                                </Button>
                            </Groups>
                        )}
                    </ModalFooter>
                </ModalWrapper>
            </ModalBlockBackground>
            <ModalSuccess isOpen={isSuccess} setIsOpen={setIsSuccess} />
        </>
    );
};

const ModalBlockBackground = styled.div`
    position: fixed;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    transition: all 0.3s ease-out;
    padding: 32px;
    background-color: rgba(43, 45, 51, 0.24);
`;

const ModalWrapper = styled.div`
    z-index: 2;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    transition: all 0.3s ease-in-out;
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 8%);
    border-radius: 16px;
    background-color: #ffffff;
    position: relative;
    margin: auto;
    transform: scale(1);
    width: 620px;
`;

const ModalHeader = styled.div`
    padding-top: 32px;
    padding-right: 32px;
    padding-left: 32px;
    box-sizing: border-box;
    width: 100%;
`;

const Title = styled.div`
    margin-bottom: 12px;
    font-weight: bold;
    color: #2b2d33;
    font-size: 24px;
    line-height: 30px;
    padding-right: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const ModalBody = styled.div`
    margin-bottom: 32px;
    padding-right: 32px;
    padding-left: 32px;
    color: #808185;
    font-size: 16px;
    line-height: 26px;
    justify-content: flex-start;
    flex-grow: 1;
    max-width: 100%;
`;

const ModalFooter = styled.div`
    padding-right: 32px;
    padding-left: 32px;
    padding-bottom: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;
