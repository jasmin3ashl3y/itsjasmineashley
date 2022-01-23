import React from 'react';
import { capitalizeFirstLetter } from "../helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
      } = props;

    return (
        <div className="flex-row px-1">
            <a href="/">
            <span> It's </span> Jasmine Ashley
            </a>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                    <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                        About me
                    </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>
                        Contact
                        </span>
                    </li>
                    {categories.map((category) => (
                        <li 
                        className={`mx-1 ${
                            currentCategory.name === category.name && !contactSelected && 'navActive'
                        }`} 
                        key={category.name}>
                        <span 
                        onClick={() => { 
                            setCurrentCategory(category);
                            setContactSelected(false);
                            }}>
                        {capitalizeFirstLetter(category.name)}
                        </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Nav;