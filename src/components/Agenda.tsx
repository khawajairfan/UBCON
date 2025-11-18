import { useState } from 'react';
import agendaJson from '../data/agendaData.json';

interface AgendaItem {
  time: string;
  location: string;
  event: string;
  eventSecondary?: string;
  isItalic?: boolean;
  speakerLink?: string;
  speakerImage?: string;
}

interface DayAgenda {
  date: string;
  dayName: string;
  items: AgendaItem[];
}

const Agenda = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1); // 0 = April 18, 1 = April 19, etc.

  const agendaData: DayAgenda[] = agendaJson.days;

  const handleDayClick = (dayIndex: number) => {
    setSelectedDay(dayIndex);
  };

  const currentDayData = agendaData[selectedDay];

  return (
    <section className="agenda-section">
      <div className="agenda-container">
        <h2 className="agenda-title">agenda</h2>
        
        {/* Date Circles */}
        <div className="agenda-dates">
          {agendaData.map((day, index) => (
            <div
              key={index}
              className={`agenda-date-circle ${
                selectedDay === index ? 'date-purple' : 'date-pink'
              }`}
              style={{
                top: `${196 + (index * 147)}px`
              }}
              onClick={() => handleDayClick(index)}
            >
              {day.date}
            </div>
          ))}
        </div>

        {/* Dynamic Agenda Items */}
        {currentDayData.items.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="agenda-item"
            style={{
              top: `${196 + (itemIndex * 145)}px`
            }}
          >
            <div className="agenda-time-column">
              {item.time && (
                <div className="agenda-time">{item.time}</div>
              )}
            </div>
            
            <div className="agenda-details-column">
              {item.location && (
                <div className="agenda-location">{item.location}</div>
              )}
              <div className={`agenda-event ${item.isItalic ? 'agenda-event-italic' : ''}`}>
                {item.event}
                {item.eventSecondary && (
                  <>
                    <br />
                    {item.speakerLink ? (
                      <a href={item.speakerLink} target="_blank" rel="noopener noreferrer">
                        {item.eventSecondary}
                      </a>
                    ) : (
                      <span className="italic-text">{item.eventSecondary}</span>
                    )}
                  </>
                )}
              </div>
              {item.speakerImage && (
                <img 
                  src={item.speakerImage} 
                  alt="Speaker" 
                  className="agenda-speaker-thumb" 
                />
              )}
            </div>
          </div>
        ))}

        {/* Separator Lines */}
        {currentDayData.items.length > 1 && (
          <>
            {Array.from({ length: currentDayData.items.length - 1 }).map((_, index) => (
              <div
                key={index}
                className="agenda-line"
                style={{
                  top: `${326 + (index * 145)}px`
                }}
              />
            ))}
          </>
        )}

        <p className="agenda-note">*Full agenda will be released closer to the event.</p>
      </div>
    </section>
  );
};

export default Agenda;

