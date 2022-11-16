import React from 'react'
import { Box } from "rebass";

/* Component made to minimise reused code */

export default function Icon({ src, iconClass, iconTitle, tag }) {
    return (
        /* Container for both images and tags. This to easily place these elements. */
        /* Making use of React Props to dynamically display content. */
        <Box className='icon-item tooltip'>
            <img src={src} className={`${iconClass}`} alt="" />
            <span className={iconTitle}>{tag}</span>
            <span className="tooltiptext">
                {tag === 'Certified' ? 'Informed Choice is a global standard in sports nutrition quality control.'
                    : 'plastic number 7 is any type of plastic that is sometimes recyclable and sometimes not.'}
            </span>
        </Box>
    )
}