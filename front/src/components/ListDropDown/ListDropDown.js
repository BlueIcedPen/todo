import React, {useState} from 'react'
import ListData from '../ListData/ListData'
import {getTodos} from '../../api' 
import {withRouter} from 'react-router-dom'

const ListDropDown = ({listTitles, history})=>{

    const [selectedTitle, setSelectedTitle] = useState('')
    const [titleInfo, setTitleInfo] = useState([])


    const optionSelect = listTitles.map((item, key)=>{
        return <option key={key} value={item.name}>{item.name}</option>
    });

    const listChangeHandler = async (event)=>{
        // history.push(`/${event.target.value}`)
        const listInputTitle = event.target.value
        const data = await getTodos();
        const index = data.findIndex((x=>x.name === listInputTitle))
        const titleInfo = data[index]
        setTitleInfo(titleInfo['items'])
        // setSelectedTitle(listInputTitle)
        console.log(titleInfo['items'])
        // console.log(titleInfo)
    }


    return (
        <div>
            <select onChange={listChangeHandler}>
                {optionSelect}
            </select>

            <ListData titleInfo={titleInfo}/>
        </div>
    )
}

export default withRouter(ListDropDown);