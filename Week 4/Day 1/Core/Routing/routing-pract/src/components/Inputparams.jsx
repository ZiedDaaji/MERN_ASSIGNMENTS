import React from 'react'
import { useParams } from 'react-router-dom';

const Inputparams = () => {
    const {word, color, bkgrd} = useParams()

    return (
        <div>
            {
                isNaN(word)?
                <p style= { color?
                {color: color, backgroundColor: bkgrd}
                :null
                }>This is a word: {word}
                </p>
                :
                <p>
                    This is a number: {word}
                </p>           
            }
        </div>
    )
}

export default Inputparams