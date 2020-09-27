import React from 'react'


const ListData = ({titleInfo})=> {
    const customIndividual = titleInfo.map((item, key)=>{
        return (
            <div className="card" key={key}>
                <span>{item.name}</span>
                <button>Delete</button>
            </div>
        )
    })

    const addItemHandler = (event)=>{
        console.log(event.target.value);
    }
    return (
        <div >
            <div className="listData">
                {customIndividual}
            </div>
           
        </div>
    )
}

export default ListData;