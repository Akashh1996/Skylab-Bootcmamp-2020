import React from 'react'

function DetailItem({ heroes }) {
    const heroId = 11;
    return <div>{heroes.find((hero) => hero.id === heroId)}</div>

}
export default DetailItem
