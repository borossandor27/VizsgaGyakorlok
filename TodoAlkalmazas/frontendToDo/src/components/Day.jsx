import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
const Daydiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 12vh;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
`;
const DayNumber = styled.h2`
    font-size: 2rem;
    color: #333;
`;
const EventButton = styled(Button)`
    width: 100%;
    padding: 2px;
    font-size: 0.8rem;
    margin-top: 5px;
    border: 1px solid ${({ $color }) => $color};
    background-color: transparent;
    color: ${({ $color }) => $color};
    transition: all 0.3s ease;

    &:hover {
        background-color: ${({ $color }) => $color};
        color: white;
    }
`;


const Day = ({ day, events }) => {
    // Színtípus hozzárendelése
    const getColor = (type) => {
        switch (type) {
            case 'important':
                return '#dc3545'; // piros
            case 'holiday':
                return '#198754'; // zöld
            default:
                return '#343a40'; // sötétszürke
        }
    };

    return (
        <Daydiv>
            <DayNumber>{day}</DayNumber>
            {events.map((event, index) => (
                <EventButton key={index} $color={getColor(event.type)}>
                    {event.title}
                </EventButton>
            ))}
        </Daydiv>
    );
}


export default Day;