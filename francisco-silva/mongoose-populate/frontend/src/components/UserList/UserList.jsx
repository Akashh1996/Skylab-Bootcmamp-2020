import React, {useEffect, useState} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestUsers, createUser } from '../../redux/actions/userAction';

import './UserList.css';


function UserList({ userList, dispatch}) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [code, setCode] = useState('');
    const [countryName, setCountryName] = useState('');
    useEffect(() => {
        if (!userList || !userList?.length) {
            dispatch(requestUsers());
        }
    }, [userList, dispatch])
    
    
    console.log(userList)
    return (
        <>
        
        <h1 className="users_title">Users</h1>
        <section>
        <div className = "list-wrapper">
            
            {userList &&
                userList.length &&
                userList.map((user) => <div className="user_wrapper" key = {user.id}>
                <span className="userName">{user["name"]} </span>
                </div>
                )}
        </div>
        <div className="form-wrapper">
            <form>
                <input id="name" type="text" value={name} onChange={(event) => { setName(event.target.value); }} placeholder="name"/>
                <input id="age" type="text" value={age} onChange={(event) => { setAge(event.target.value); }} placeholder="age"/>
                <input id="street" type="text" value={street} onChange={(event) => { setStreet(event.target.value); }} placeholder="street"/>
                <input id="number" type="text" value={number} onChange={(event) => { setNumber(event.target.value); }} placeholder="number"/>
                <input id="city" type="text" value={city} onChange={(event) => { setCity(event.target.value); }} placeholder="city"/>
                <input id="code" type="text" value={code} onChange={(event) => { setCode(event.target.value); }} placeholder="code"/>
                <input id="country" type="text" value={countryName} onChange={(event) => { setCountryName(event.target.value); }} placeholder="country"/>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => {
                    dispatch(createUser({
                        name,
                        age,
                        address: {
                            street,
                            number,
                            city,
                            country: {
                                code,
                                countryName,
                        }
                        }
                        }));
                    }}
                    >Add!</button>
            </form>
        </div>
        </section>
        </>
        
    );
}
function mapStateToProps({userReducer}) {
   debugger
    return {
        userList: userReducer.userList
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ }, dispatch),
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);


