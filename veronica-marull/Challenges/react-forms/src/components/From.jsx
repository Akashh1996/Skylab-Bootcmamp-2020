import React, { useState } from 'react';

function From() {
    const [fromValue, setFromValue] = useState('');

    const  onFromChange = (event => {
        setFromValue(event.target.value);
    })

    return (
        <div>
            <label for="from">Salida de: </label>

                <select name="from" id="from" value={fromValue} onChange={onFromChange} required>
                    <option value="">Salida de</option>
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
export default From