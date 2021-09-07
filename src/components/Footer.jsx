import React from 'react';
import '../index.css';

export class Footer extends React.Component {
    render() {
        return (
            <div className='footer brown-text'>
                In partnership with <a className='brown-text' rel="noreferrer" target="_blank" href='https://thebrownandwhite.com/'>The Brown and White</a> | 
                See more at the <a className='brown-text' rel="noreferrer" target="_blank" href='https://thebrownandwhite.com/data-graphics/'>Data and Graphics Department</a>
            </div>
        )
    }
}