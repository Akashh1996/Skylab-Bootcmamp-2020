import React, {useEffect,useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestList,createProject} from '../../redux/actions/listActions';



function Form({list, dispatch}){
    const [projectName,setProjectName]=useState('');
    const [projectInfo,setProjectInfo]=useState('');
    const[photo,setPhoto]=useState('');


    return(
        <>
        <form>
            <input id="project-name"type="text" value={projectName} onChange={(event)=>{setProjectName(event.target.value)}}placeholder="projectName"/>
            <input id="project-info"type="text" value={projectInfo} onChange={(event)=>{setProjectInfo(event.target.value)}}placeholder="projectInfo"/>
            <input id="project-photo"type="text" value={photo} onChange={(event)=>{setPhoto(event.target.value)}}placeholder="photo"/>
            <button type="submit" id="submit-form" onClick={()=>{dispatch(createProject({projectName,projectInfo,photo}))}}>Submit</button>
        </form>

        </>
    )


    
}




function mapDispatchToProps(dispatch){
    debugger;
    return{
        actions:bindActionCreators({},dispatch),
        dispatch
    }
}

export default connect(mapDispatchToProps)(Form);