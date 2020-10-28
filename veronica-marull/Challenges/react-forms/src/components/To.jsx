import React, { useState } from 'react';

function To() {
    const [toValue, setToValue] = useState('');

    const  onToChange = (event => {
        setToValue(event.target.value);
    })

    return (
        <div>
            <label for="to"></label>

                <select name="to" id="to" value={toValue} onChange={onToChange} required>
                    <option value="">Llegada a: </option>
                        <optgroup label="ARGENTINA">
                            <option value="eze">EZE-Bs.As.Ministro Pistarini</option>
                        </optgroup>
                        <optgroup label="ESPAÑA">
                            <option value="mad">MAD-Madrid-Barajas</option>
                            <option value="bcn">BCN-Barcelona-Prat</option>
                            <option value="pmi">PMI-Palma de Mallorca</option>
                        </optgroup>
                        <optgroup label="FRANCIA">
                            <option value="ory">ORY-Paris Orly Airport</option>
                            <option value="lys">LYS-Lyon Saint Exúpery</option>
                            <option value="nce">NCE-Niza</option>
                        </optgroup>
                </select>
        </div>
    )
}

export default To