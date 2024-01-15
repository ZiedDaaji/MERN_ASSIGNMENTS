import React from 'react';

const SecondDisplay = (props) => {

    const { newboxColor } = props;

    return (
        <div>
            {
                newboxColor.map((box, index ) => (
                    <div key={ index } style={
                        {
                            margin: "15px",
                            width: box.size,
                            height: box.size,
                            display: "inline-block",
                            backgroundColor: box.color
                        }
                    }>                       
                    </div>
                )
                )
            }
        </div>
    );
}

export default SecondDisplay;