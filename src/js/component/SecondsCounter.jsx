import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const SecondsCounter = ({ firstDigit, secondDigit, thirdDigit, fourthDigit, fifthDigit }) => {
    return(
        <nav style={{ padding: '40px', backgroundColor: "black", color: "white" }}>
            <div style={{ fontSize: '200px', textAlign: 'center', }}>
            <i className="far fa-clock "></i> {fifthDigit} {fourthDigit} {thirdDigit} {secondDigit} {firstDigit}
            <div>

            </div>
            
            </div>
      </nav>  
    );
};







SecondsCounter.propTypes= {
    firstDigit: PropTypes.number,
    secondDigit: PropTypes.number,
    thirdDigit: PropTypes.number,
    fourthDigit: PropTypes.number,
    fifthDigit: PropTypes.number,
}

let counter = 0;
setInterval(function(){
    const five = Math.floor(counter / 10000) % 10; 
    const four = Math.floor(counter / 1000) % 10;   
    const three = Math.floor(counter / 100) % 10;   
    const two = Math.floor(counter / 10) % 10;      
    const one = Math.floor(counter / 1) % 10;       

    console.log(five, four, three, two, one);
    
    ReactDOM.render(
        <SecondsCounter 
            firstDigit={one} 
            secondDigit={two} 
            thirdDigit={three} 
            fourthDigit={four} 
            fifthDigit={five} 
        />,
        document.querySelector('#app')
    );
    
    counter++;
}, 1000);

export default SecondsCounter;
