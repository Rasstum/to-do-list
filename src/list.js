import React, {useEffect} from 'react';

    export function List({list,deleteOnClick}){
        useEffect(() => {
            console.log(list)
        }, [])

    return(
        <div className="list">
            <ul>
            {list.map(
                (member) => {
                    return(
                        <div className="item" key={member.key}>
                            <input value={member.name}></input>                            
                            <button value={member.key} onClick={() => deleteOnClick(member.key)}>clear</button>
                        </div>
                    )
                }
            )}
        </ul>
        </div>
    )
}
