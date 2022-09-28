import React, { useState } from 'react';
import Item from './Item';
import './TodoList.css';

function TodoList() {

    const deleteItem =(itemNumber)=>{

        setList(list.filter( (e)=>{

            return e !== list[itemNumber];

        }
        ))
        console.log('deleted item ' + itemNumber);
    } 

    const [rand , setRand] = useState(0);
    const [inputText , setInputText] = useState('');
    const [list , setList] = useState([]);
    // const [style , setStyle] = useState({backgroundColor: 'red',
    //                                      height: '50vh'});
    
    // const chngeSize = () =>{
    //     setStyle({
    //         backgroundColor: `rgb(100,${150},${100 + rand})`,
    //         height: '100vh', 
    //     });
    // };

  return (
    <div className='main-container'>

        <div className='inner-container'>
            <br/>
            <p className='heading'>TODO LIST</p>
            
            <div className='input-Field'>

                <input className='inputArea' type='text'
                 value={inputText}
                 onChange={(event) => {
                    setInputText(event.target.value);
                    // console.log(inputText);
                 }}
                 placeholder='Add item' />

                <button className ='addButton' onClick={ ()=>{

                    console.log(inputText);
                    
                        if(inputText !== ''){

                            setList(prevList => [...prevList,inputText] );
                            
                            
                        }
                        setInputText('');
                        // setRand(Math.floor(Math.random()*500));
                        // console.log(list);
                    

                }}>+</button>
            </div>
            
            <br/>

            <ul className='listItems'>
                
                {   
                    list.map((item , index)=>{
                        
                      return  <Item 
                                key = {index}
                                id={index}
                                value={item}
                                onSelect = {deleteItem}
                                 />
                    })
                }
            </ul>
        </div>

    </div>
  )
}

export default TodoList
