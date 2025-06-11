import React from 'react'
import { languagesList } from '../assets/languages'
export const Languages = () => {

    const languagestoList =
        (
            <div className='languages--container'>
                <ul>
                    {
                        languagesList.map(language => (
                            <li
                                style={{
                                    color: language.color,
                                    background: language.background
                                }}
                            >{language.name}</li>
                        ))
                    }
                </ul>
            </div>

        );
    return (
        <>
            {languagestoList}
        </>
    )
}
