import React from "react";
import "./Feedback.css";

const FeedBack = () => {
  return ( 
    <div class="container">  
    <div class='rating-container'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      
      <div class="star-widget">
        <input type="radio" name="rate" id="rate-5"/>
        <label for="rate-5" class="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-4"/>
        <label for="rate-4" class="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-3"/>
        <label for="rate-3" class="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-2"/>
        <label for="rate-2" class="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-1"/>
        <label for="rate-1" class="fas fa-star"></label>
        
        <form action="#">      
          <header></header>          
        </form>
        
      </div>      
    </div>
    <div class='btn'>
      <button type='submit'>Post</button>
    </div>
  </div> 
  );
};

export default FeedBack;