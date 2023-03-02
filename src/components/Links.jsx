import React from 'react';
import Teams from '../assests/cricket.gif';
// import Schedule from '../assests/calendar.png';
import MatchSchedule from '../assests/calendar-icon.gif';
import Summary from '../assests/strategy.gif';
import './Links.scss';

const Links = () => {
  return (
    <>
      <div className='links mt-4'>
        <h3>Links</h3>
      </div>
      <div className='btn-wrapper d-flex'>
        <button
          className='btn btn-primary'
          style={{ backgroundColor: '#AAFFE0' }}
        >
          <img
            src={MatchSchedule}
            style={{ width: '40px', aspectRatio: 1 }}
            alt='schedule'
          ></img>
        </button>
        <div className='btn-content'>Match Schedule</div>
      </div>
      <div className='btn-wrapper d-flex'>
        <button
          className='btn btn-primary'
          style={{ backgroundColor: '#FFDEA8' }}
        >
          <img
            src={Summary}
            alt='summary'
            style={{ width: '40px', aspectRatio: 1 }}
          ></img>
        </button>
        <div className='btn-content'>Match Summary</div>
      </div>
      <div className='btn-wrapper d-flex'>
        <button
          className='btn btn-primary'
          style={{ backgroundColor: '#80F7FF' }}
        >
          <img
            src={Teams}
            alt='teams'
            style={{ width: '40px', aspectRatio: 1 }}
          />
        </button>
        <div className='btn-content'>Teams</div>
      </div>
    </>
  );
};

export default Links;
