import styled from 'styled-components';
import Day from './Day';
import Button from 'react-bootstrap/Button';

const Monthdiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const CalendarWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    width: 100%;
    max-width: 900px; /* opcionális, hogy ne legyen túl széles nagy kijelzőn */
`;

const MonthTitle = styled.h2`
    grid-column: span 7;
    font-size: 2rem;
    color: #333;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const DayName = styled.div`
    font-weight: bold;
    text-align: center;
    padding: 10px 0;
`;

const EmptyDay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 12vh;
    border: none;
    background-color: transparent;
`;


const Month = ({ date, events, onPreviousMonth, onNextMonth }) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let startDay = new Date(year, month, 1).getDay();
    if (startDay === 0) startDay = 7;

    const dayNames = ["H", "K", "Sze", "Cs", "P", "Szo", "V"];
    const totalSlots = [];

    // Napok nevei
    dayNames.forEach((dayName, index) => {
        totalSlots.push(<DayName key={`dayName-${index}`}>{dayName}</DayName>);
    });

    // Üres helyek a hónap elején
    for (let i = 1; i < startDay; i++) {
        totalSlots.push(<EmptyDay key={`empty-start-${i}`} />);
    }

    // Napok megjelenítése
    for (let day = 1; day <= daysInMonth; day++) {
        totalSlots.push(
            <Day
                key={`day-${day}`}
                day={day}
                events={events.filter(event => {
                    const eventDate = new Date(event.date);
                    return eventDate.getDate() === day &&
                           eventDate.getMonth() === month &&
                           eventDate.getFullYear() === year;
                })}
            />
        );
    }

    // Hónap végi üres helyek
    while ((totalSlots.length - 7) % 7 !== 0) {
        totalSlots.push(<EmptyDay key={`empty-end-${totalSlots.length}`} />);
    }

    return (
        <Monthdiv>
            <CalendarWrapper>
                <MonthTitle>
                    <Button variant="outline-dark" onClick={onPreviousMonth}>{"<"}</Button>
                    {date.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long' })} havi események
                    <Button variant="outline-dark" onClick={onNextMonth}>{">"}</Button>
                </MonthTitle>
                {totalSlots}
            </CalendarWrapper>
        </Monthdiv>
    );
};

export default Month;
