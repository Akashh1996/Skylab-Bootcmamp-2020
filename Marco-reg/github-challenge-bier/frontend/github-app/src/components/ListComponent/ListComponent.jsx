import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {propTypes} from 'prop-types';
import { Link } from 'react-router-dom';
import {requestList} from '../../redux/actions/listActions';
import './ListComponent.css'

function List({list, dispatch}) {
    useEffect(()=> {
        if (!list || list.length !== 0) {
            dispatch(requestList());
            
        }
    }, [])

    if(list) {
        console.log(list[0].technology)
    }
    
  


    return(
        <>
        <div className="list_wrapper">
        
        {list &&
                list.length >= 0 &&
                <div>
                {list.map((projects) =>
                    <div className="project_wrapper">
                        <Link to= {`/detail/${projects.id}`}>
                    <h3 className="project_title">{projects.projectName}</h3>
                    </Link>
                    <p className="project_info">{projects.projectInfo}</p>
                    <p className="project_technology">{projects.technology.map((tech)=> <p className="technology">{tech}</p>)}</p>
                    </div>
                  )}
                </div>
        }


        </div>
        

        </>
        
    )
}
function mapStateToProps(state) {
    debugger
     return {
         list: state.listReducers.list
     };
 }
 function mapDispatchToProps(dispatch) {
     debugger
     return {
         actions: bindActionCreators({ }, dispatch),
         dispatch
     };
 }
 export default connect(mapStateToProps, mapDispatchToProps)(List);