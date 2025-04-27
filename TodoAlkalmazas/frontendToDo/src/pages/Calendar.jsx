import { useState, useEffect } from 'react';
import axios from 'axios';
import Month from '../components/Month';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [allEvents, setAllEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handlePreviousMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:3000/events');
                setAllEvents(response.data);
            } catch (err) {
                setError(err.message || 'Ismeretlen hiba történt');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const filteredEvents = allEvents.filter(event => {
        const eventDate = new Date(event.date);
        return (
            eventDate.getFullYear() === currentDate.getFullYear() &&
            eventDate.getMonth() === currentDate.getMonth()
        );
    });

    if (loading) {
        return <p>Adatok betöltése...</p>;
    }

    if (error) {
        return <p>Hiba történt: {error}</p>;
    }

    return (
        <div className="calendar-container">
            <Month 
                date={currentDate} 
                events={filteredEvents} 
                onPreviousMonth={handlePreviousMonth}
                onNextMonth={handleNextMonth}
            />
        </div>
    );
}

export default Calendar;
