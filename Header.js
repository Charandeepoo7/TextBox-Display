import React, { useState } from 'react'

export const Header = ({header}) => {
    const [title, setTitle] = useState("");
    const [regno, setRegno] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title){
            alert("Textbox cannot be blank");
        }
        else{
            header(title, regno);
            setTitle("");
            setRegno("");
        }
    }
    return (
        <div className='container my-3'>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter your name</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="tododet" aria-describedby="todohelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="regno" className="form-label">Enter your regno</label>
                    <input type="text" value={regno} onChange={(e)=>setRegno(e.target.value)} className="form-control" id="tododesc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Login</button>
            </form>

        </div>
    )
}

export default Header