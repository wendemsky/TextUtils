import React from 'react'
import { useState } from 'react'

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: '#343A40',
    backgroundColor: 'white',
    border: '1px solid white'
  })
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = ()=>{
    if(myStyle.color === '#343A40'){
        setMyStyle({
            color: 'white',
            backgroundColor: '#343A40',
            border: '1px solid white'
        })
        setBtnText("Enable Light Mode");
    }else{
        setMyStyle({
            color: '#343A40',
            backgroundColor: 'white',
            border: '1px solid white'
        })
        setBtnText("Enable Dark Mode");
    }
  }
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-2'>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="card">
            <div className="card-header" id="headingOne">
            <h5 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                Collapsible Group Item #1
                </button>
            </h5>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample" style={myStyle}>
            <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
            </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    Collapsible Group Item #2
                    </button>
                </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample" style={myStyle}>
                <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                </div>
            </div>
        <div className="card">
            <div className="card-header" id="headingThree">
            <h5 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                Collapsible Group Item #3
                </button>
            </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample" style={myStyle}>
            <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
            </div>
            </div>
        </div>
        <div className='container my-3 mx-3'>
        <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
        </div>
        
    </div>
  )
}
