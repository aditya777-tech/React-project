import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

function Recipe() {
    const[activeTab,setActiveTab]=useState("instructions");

    let params = useParams();
    const[details, setDetails]=useState({});
    const fetchDetails = async ()=>{
const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
const detailData= await data.json();
setDetails(detailData);
console.log(detailData);
    }
    useEffect(()=>{
        fetchDetails();
    },[params.id]);
  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt=""/>
        </div>
       <Info>
        <Button className={activeTab ==='instructions'?'active':''}onClick={()=>setActiveTab("instructions")}>Instructions</Button>

        <Button className={activeTab ==='ingredients'?'active':''}onClick={()=>setActiveTab("ingredients")}>Ingredient</Button>
        {activeTab ==="instructions" &&(
             <div>
             <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
             <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
             
                     </div>

        )}
      {activeTab === "ingredients" &&(
         <ul>
         {details.extendedIngredients.map((ingredient)=>(
             <li key={ingredient.id}>{ingredient.original}</li>
         ))}
     </ul>

      )}
       
       </Info>
        
        </DetailWrapper>
  )
}
const DetailWrapper= styled.div`
margin-top:2rem;
margin-bottom:5rem;
margin-left:2rem;

.active{
    background:linear-gradient(35deg, #494949, #313131);
    color:white;
}
h2{
    margin-bottom:2rem;
}
h3{
    margin-top:1.1rem;
}
li{
    margin-top:2rem;
}
img{
    border-radius:10%;
    margin-bottom:1.2rem;
    transform:scale(0.9);
    
}






`;
const Button= styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-bottom:1.2rem;
margin-right:2rem;
font-weight:600;


`;
const Info= styled.div`
margin-left:0rem;





`;

export default Recipe