import axios from "axios";
import React,{useEffect} from "react";
function Sorting(){
    var[y,setY]=React.useState([])
    React.useEffect(()=>{
        axios.get("").then((res)=>{
            console.log(res.data)
            setY(res.data)
        })

    },[])
    function asc(){
        let countries=[...y]
        let n = countries.sort((a,b)=>{
            if(a.name.cmmon>b.common.name){
                return 1;
            }
            else{
                return -1;
            }
        })
        setY(n);
    }
    function dec(){
        let countries=[...y]
        let n = countries.sort((a,b)=>{
            if(a.name.common<b.common.name){
                return 1;
            }
            else{
                return -1;
            }
            return 0;
        })
        setY(data);
    }
    function sea(){
        var x = document.getElementById("d1")
        var z = [...y]
        var u = z.filter((b)=>{
            return (b.name.common.toUpperCase().startsWith(x.ariaValueMax.toUpperCsae()))
        })
        setY(u)
    }
    return(
        <>
        <button onClick={()=>{asc()}}>Ascending</button>
        <button onClick={()=>{dec()}}>Descending</button>
        <input type ="text" id="d1"></input>
        <button onClick={()=>{sea()}}>Search</button>
        {
            <table border="2"> 
            <tr></tr>
            </table>
        }
        </>
    )
    }
}