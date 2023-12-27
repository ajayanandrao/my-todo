import { parseISO, formatDistanceToNow } from "date-fns";

import React from 'react'

const Time = ({ timestamp }) => {
    let timeAgo = ""

    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    return (
        <div>

            &nbsp; <i>{timeAgo}</i>

        </div>
    )
}

export default Time