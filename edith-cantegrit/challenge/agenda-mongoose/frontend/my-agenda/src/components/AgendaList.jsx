import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    enterUserInAgendaList,
    requestLoadAgendaList
} from '../redux/actions/agenda-actions';

function AgendaList({myAgenda, dispatch}) {
    const [newName, setNewName] = useState('')
    const [newAge, setNewAge] = useState(0)
    const [newStreet, setNewStreet] = useState('')
    const [newNumber, setNewNumber] = useState(0)
    const [newCity, setNewCity] = useState('')
    const [newCountry, setNewCountry] = useState('')
    const [newCode, setNewCode] = useState('')
    const newUser =
        {
            name: newName,
            age: newAge, 
            address: {
                street: newStreet,
                number: newNumber,
                city: newCity,
                country: {
                    code: newCode,
                    country: newCountry
                }
            }

        }
        
    useEffect(() => {
        if(!myAgenda?.length) {
            dispatch(requestLoadAgendaList());
        }
    }, [dispatch, myAgenda?.length])
    
    return (
    <>
        <h1>My Agenda</h1>
        {myAgenda && myAgenda
        .map((user, index) => {
           return (
            <div>
                <h1 key={`${index}name`}>Name:{user.name}</h1>
                <h2 key={`${index}age`}>Age:{user.age}</h2>
                <h2 key={`${index}street`}>Street: {user.address.street}</h2>
                <h2 key={`${index}number`}>Number: {user.address.number}</h2>
                <h2 key={`${index}city`}>City: {user.address.city}</h2>
                <h2 key={`${index}country`}>Country: {user.address.country.name}</h2>
                <h2 key={`${index}code`}>Code: {user.address.country.code}</h2>
            </div>
            )
        })}
        <input
        onChange={(event) => setNewName(event.target.value)}
        value={newName}
        placeholder="Enter a new name"
        />
        <input
        onChange={(event) => setNewAge(event.target.value)}
        value={newAge}
        placeholder="Enter a new age"
        />
        <input
        onChange={(event) => setNewStreet(event.target.value)}
        value={newStreet}
        placeholder="Enter a new street"
        />
        <input
        onChange={(event) => setNewNumber(event.target.value)}
        value={newNumber}
        placeholder="Enter a new number"
        />
        <input
        onChange={(event) => setNewCity(event.target.value)}
        value={newCity}
        placeholder="Enter a new city"
        />
        <input
        onChange={(event) => setNewCountry(event.target.value)}
        value={newCountry}
        placeholder="Enter a new country"
        />
        <input
        onChange={(event) => setNewCode(event.target.value)}
        value={newCode}
        placeholder="Enter a new code"
        />

        <button type="button" onClick={ () => dispatch(enterUserInAgendaList(newUser))}>Add</button>
    </>
)}

function mapStateToProps({agendaReducer}) {
    return {
        myAgenda: agendaReducer.agendaList,
    };
}

connect()
export default connect(mapStateToProps)(AgendaList)
