import React from "react";
import iconsSprite from '../../accets/images/icons-sprite.svg'

type iconPropsType = {
    iconId: string
}

export const Icon = (props: iconPropsType) => {
    return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>            
        </svg>

    )
}