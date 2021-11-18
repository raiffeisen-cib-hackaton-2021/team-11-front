import { Button } from '@fcc/ui';
import { ChatRaif } from '@fcc/icons';
import styled from 'styled-components';

export const ModalSuccess = ({ isOpen, setIsOpen }) => {
    const enterClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <ModalBlockBackground isOpen={isOpen}>
                <ModalWrapper isOpen={isOpen}>
                    <Circle>
                        <ChatRaif size='l' />
                    </Circle>
                    <Title>Обратная связь</Title>
                    <ModalBody>Спасибо за отзыв!</ModalBody>
                    <ModalFooter>
                        <Button size='l' design='outline' onClick={enterClick}>
                            Вернуться
                        </Button>
                    </ModalFooter>
                </ModalWrapper>
            </ModalBlockBackground>
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
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    transition: all 0.3s ease-in-out;
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 8%);
    border-radius: 16px;
    background-color: #ffffff;
    position: relative;
    margin: auto;
    transform: scale(1);
    width: 620px;
    height: 320px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    margin-bottom: 12px;
    font-weight: bold;
    color: #2b2d33;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const ModalBody = styled.div`
    margin-bottom: 10px;
    padding-right: 32px;
    padding-left: 32px;
    color: #808185;
    font-size: 16px;
    line-height: 26px;
    //justify-content: center;
    //flex-grow: 1;
    max-width: 100%;
`;

const ModalFooter = styled.div`
    padding-bottom: 16px;
`;

const Circle = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fee600;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0 16px 0;
`;
