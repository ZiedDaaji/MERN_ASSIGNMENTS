import React from 'react';

const ColorDisplay = (props) => {

    const { boxColor } = props;

    return (
        <div>
            {
                boxColor.map(( color, index ) => (
                    <div key={ index } style = {
                        {
                            margin: "15px",
                            width: "80px",
                            height: "80px",
                            display: "inline-block",
                            backgroundColor: color
                        }
                    }>                       
                    </div>
                )
                )
            }
        </div>
    );
}
    
export default ColorDisplay;