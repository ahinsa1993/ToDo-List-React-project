import React, { useState } from "react";
import ToDoList from "./ToDO_List";


const App = (props) => {

const [inputList, setInputList] = useState("");
const [Items,setItems] = useState([]);

const itemEvent = (event) => {
    setInputList(event.target.value);
}

const listOfItem = () => {
    setItems((oldItems) => {
        return [...oldItems,inputList];
    });
    setInputList(" ")
}
const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
        return oldItems.filter((arrElem,index) => {
            return index !==id;
        });
    });
};

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> 📑 ToDo List 📑</h1>
                    <br />
                    <input type="text" placeholder="Add Items" onChange={itemEvent} value={inputList}/>
                    <button onClick={listOfItem}>
                      +
                     </button>

                    <ol>
                        {Items.map((itemval, index) =>{
                           return <ToDoList 
                                text ={itemval}
                                key = {index}
                                id = {index}
                                onSelect ={deleteItems}
                            />;
                        })}
                        
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;