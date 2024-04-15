import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';

function Veggie() {

  const [veggie,setveggie]=useState([]);

  useEffect(()=>{
    getveggie();

  },[]);

  const getveggie= async () =>{
    const check = localStorage.getItem("veggie");
    if(check){
      setveggie(JSON.parse(check));
    }
    else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);

      const data = await api.json();
    localStorage.setItem("veggie",JSON.stringify(data.recipes));
  setveggie(data.recipes);
  console.log(data.recipes);

    }


   
    

  };
  return (
    <div>
     
        
    <Wrapper>
        <h3>Our Vegitarian picks</h3>
        <Splide options={{
          perPage:3,
          arrows:true,
          pagination: true,
          
          drag:'free',
          gap:'1.2rem',
    
        }}>
        {veggie.map((recipe)=>{
         return(
          <SplideSlide key={recipe.id}>
            <Link to={'/Recipe/'+ recipe.id}>
    <Card>
    
        <p>{recipe.title}</p>
        <img src={recipe.image} alt= {recipe.title}/>
   
    
    <Gradient/>
    </Card>
    </Link>
    </SplideSlide>
    
    
         );
    
        })}
        </Splide>
    </Wrapper>
          
    
       
        </div>
    
  )
}

const Wrapper = styled.div`
margin: 2rem 0rem;
h3{
  margin:1.1rem;
  margin-top:0.5rem;
}




`








;

const Card = styled.div`
min-height: 16rem;
border-radius: 15%;
overflow: hidden;
position:relative;

img{
    border-radius: 15% ;
    position:absolute;
     width: 100%;
     height: 100%;
    object-fit: cover;
    

}
p{
  position:absolute;
  z-index:10;
  left:50%;
  right:99%;
  bottom:40%;
  transform: translate(-50%,0%);
  color:white;
  width:100%;
  text-align:center;
  font-weight:600;
  font-size:0.8rem;
  height:40%;
  display:flex;
  justify-content:center;
  align-items:center;


}


`;
const Gradient = styled.div`
z-index:3;
position: absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.4));





`;


export default Veggie