selectors
  Basics Selectors
    Tag or Type Selector
    class selector
    ID selector
  Combinators Selector
    Multiple Selector
      p, h1 {rule}
    Dependency Selector      
      Child at some position
        div p{rule}
      Directly Child
        div > p{rule}
      Directly after
        div + p{rule}
      Siblings
        div ~ p{rule}
  Attribute selectors
    a[target] /*elements that have a target attribute.*/
    a[target="_blank"] /*elements that have a target attribute with the value "_blank"*/
    img[title~="flower"] /*img wich has a title containing the word flower, flowers will not be a mach*/
    img[title^="blue"] /*img wich has a title starting the word blue*/
    img[title$="flower"] /*img wich has a title ending the word blue*/
    img[title*="flower"] /*img wich has a title ending the string flower. flowers will be a match*/
  Pseudo-classes (:hover, :active, :first-child, :last-child, :nth-child(), entre otros)
    hover
      a:hover{rule} /*when you mouse over a link.*/
    first-child
    /*affects any <p> element that are the first child of any element.*/    
      p:first-child
    focus /*when an element is focused*/
      input:focus    
  Pseudo-elements (::before, ::after, ::first-line, ::first-letter, etre otros)
    first-line
      .intro::first-line
    first-letter
      .intro::first-letter
    before and after
      p::before {  
        content: url('smiley.gif');
      }
      p::after {        
        content: url('smiley.gif');
      }
how to
color - rbg(), rbga(), hex, hsl(), hsla(), gradients
  background-color: rgba(255, 0, 0, 1.0);
  background-color: hsl(0, 100%, 50%); /*Set the hue to red, saturation to 100%, and lightness to 50%.*/
  background-color: hsla(0, 100%, 50%, 0.3);
    
  background-color: rgb(255, 0, 0);  
  opacity: 0.3; /*set the transparence for the whole element, not only the background, by using which CSS property?*/
background
  background-color
  background-image
  background-repeat: repeat-Y | repeat-X  
  background-position: top right
  background-attachment: fixed
  
  -- background image
    background-image: url('img1.gif');  
    background-size: 100px 80px;
    background-repeat: no-repeat;  

    background-origin: content-box;  /*position the image according to where the content is ositioned.*/

    -- example1      
    background-image: url('img1.gif'), url('img2.gif');
    background-repeat: no-repeat, no-repeat;  
    background-position: left top, right top; 

    -- example2
    padding: 20px;
    background-image: url('img1.gif');
    background-repeat: no-repeat;  
    background-origin: content-box;

    -- example3
      border: 10px dotted red;
      padding: 20px;
      background-color: yellow;
      background-clip: padding-box;

boxmodel
  border
    border-width: 4px;
    border-style: dotted;
      border-left-style
      border-right-style
      border-bottom-style
      border-top-style
    border-color: red;
    :- sh
      border: width style color;
      border: 2px solid red;
  -- border-radius (rounded corders  )    
      border-radius: 5px;
      border-bottom-left-radius: 10px;
  -- border image and the transparent border color
      border-image-source: url(border.png);
      border-image-repeat: repeat;  
      border-image-slice: 30;
      border: 10px solid transparent;
      :- sh
        border-image: url(border.png) 30 round;
  margin
    margin-left
    margin-right
    margin-top
    margin-bottom
    :- sh1
      margin: top&bottom left&right    
      margin: 20px 40px;
    :- sh2
      margin: top right bottom left
      margin: 10px 20px 25px 30px;
    :- sh1 margin auto (Note: width needs to be specified)
      margin: top&bottom left&right
    :- sh2 margin auto (Note: width needs to be specified)
      margin: top&bottom&left&right
      margin: auto;
  padding
    padding-left
    padding-right
    padding-top
    padding-bottom
    -- padding for all sides
    padding: 20px;
    :- sh1 padding  
      padding: top&bottom left&right
      padding: 40px 30px;
    :- sh2 padding
      padding: top bottom left right
      padding: 10px 30px 40px 50px;
  height
  width
  content 
    (Es el área dentro del elemento que muestra el contenido real, como texto, imágenes, etc.)
outline
  outline-width
  outline-style
  outline-color
  :- sh
    outline: 4px dotted red;
    outline: none;
text
  color: red;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase | capitalize;
  text-indent: 20px; /*Indent the first line of the <p> element with 20px.*/

  -- overflow
    text-overflow: ellipsis;
  -- word wrap
    word-wrap: break-word; /*<p> element should wrap, even if it needs to split in the middle of a word.*/
  -- word-break  
    word-break: break-word; /*break in the middle of a word.*/
    word-break: break-all; /*break between any two letters.*/
font
  font-family: Verdana;
  font-style: italic;
  font-size: 50px;
  font-weight: bold;
  font-variant: small-caps;

  -- @font-face
    @font-face {
      font-family: sansation;      
      src: url("sansation_light.woff");
    }
    body {
      font-family: sansation;
    }
links
  a:link /*unvisited*/
  a:visited /*visited*/
  a:hover /*mouse over link*/
list - ul | ol
  list-style-type: square | none | upper-roman;
  list-style-image: url("bling.jpg");
tables
  table, thead, tbody, tfood, tr, th, td
  border-collapse: collapse;
display/visibilitty
  visibility: hidden;
  display: none;
pasitioning
  position: fixed | relative | absolute| static | ;
    /*fixed: fixed at a given position and relative to the window/frame edges*/
    /*relative: relative to its normal position*/
    /*absolute: not fixed and relative to the window frame edges*/
    /*static: default value. Not affected by top, right, etc*/
    /*sticky: just as fixed but it moved with the website untill an specified position at the top*/
  top: 50px;
  right: 10px;
z-index
  position: absolute;
  z-index: 1 | 0;
overflow
  overflow: scroll | hidden | auto;
  overflow-X: scroll | hidden | auto;
  overflow-Y: scroll | hidden | auto;
align
  margin: auto;
  text-align: center;
  top: 40px;
  left: 30px;
  right: 20px;
  bottom: 10px;
opacity
  0.0 to 1 - 0 completly transparency and 1 fully visible
  opacity: 50%; 
gradient
  linear-gradient
    background-image: linear-gradient(white, green);
    background-image: linear-gradient(to right, white, green);/*linear gradient going from left to right.*/
    background-image: linear-gradient(to right, white, green);/background-image: linear-gradient(to left, white, green);/*linear gradient going from left to right.*/
    /*going diagonally from top left to bottom right*/
    background-image: linear-gradient(to bottom right, white, reen); /*going diagonally from top left to bottom right.*/
    background-image: linear-gradient(70deg, white, green); /*going at a 70 degree angle.*/
  radial-gradient
    background-image: radial-gradient(white, green); /*transitioning from "white" to "green".*/
    background-image: radial-gradient(circle, white, green);/*transitioning from "white" to "green", in a circle shape.*/  
shadow
  -- text shadow
    text-shadow: 2px 2px;
    text-shadow: 2px 2px 5px green; /*Set a "2px" horizontal, and "2px" vertical, "green" text shadow for the <h1> element, with a "5px" blur radius.*/
    text-shadow: 2px 2px 5px green, 3px 3px 10px red; 
  -- box shadow
    box-shadow: 10px 10px;
transformations (2D and 3D)
  -- 2D
    -- translate 
      trasform: translate(x, y)
      transform: translate(100px, 200px); /*translate 100px to the right, and 200px down.*/
    -- rotate      
      transform: rotate(45deg);
    -- scale    
      transform: scale(width, height);
      transform: scale(0.5, 2);
    -- skew
    transform: skew(x, y);
    transform: skew(20deg, 30deg);
  -- 3D
    -- rotateX
      transform: rotateX(150deg);
    -- rotateY
      transform: rotateY(120deg);
    -- rotateZ
      transform: rotateZ(90deg);    
transitions  
  transition: width 2s;  
  transition-timing-function: ease-in-out;  
  transition-delay: 0.5s;  
  transition: background 2s, transform 2s;
  :- sh
  transition: width 2s ease-in-out 0.5s;
animations
  animation-delay: 1s;
  animation-iteration-count: infinite;  /*loop forever animation*/
  animation-direction: alternate; /*direction*/ 
  animation-timing-function: ease-in-out;/*speed curve.*/

  -- example 1
  div {
    width: 100px;
    height: 100px;
    background-color: red;
    animation-name: example;  
    animation-duration: 2s;
  }
  @keyframes example {
    from { background-color: red;}
    to {background-color: blue;}
  }

  -- examle 2
  div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 4s;
  }

  @keyframes example {
    0% {
      left: 0px;
      top: 0px;
    }
    25% {
      left: 0px;
      top: 200px;
    }
    50% {
      left: 200px;
      top: 200px;
    }
    75% {
      left: 200px;
      top: 0px;
    }
    100% {
      left: 0px;
      top: 0px;
    }
  }

  -- example 3 - animation delay
  div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 2s;

    animation-delay: 1s;
  }

  @keyframes example {
    0% {
      background-color: red;
      left: 0px;
    }
    50% {
      background-color: yellow;
      left: 200px;
    }
    100% {
      background-color: red;
      left: 0px;
    }
  }
