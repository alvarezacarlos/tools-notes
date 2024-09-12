-- selectores  
  selectores simples
    #id
    .class
    element.class
    element
    *
    element,element,..

  -- CSS [attribute] Selector (select elements with a specified attribute.)
    a[target] {
      background-color: yellow;
    }

  -- CSS [attribute="value"] Selector (select elements with a specified attribute and value.)
    a[target="_blank"] {
      background-color: yellow;
    }

  -- CSS [attribute~="value"] (select elements with an attribute value containing a specified word)
    [title~="flower"] {
      border: 5px solid yellow;
    }

  -- CSS [attribute|="value"] Selector (select elements with the specified attribute, whose value can be exactly the specified value, or the specified value followed by a hyphen (-).)
    [class|="top"] {
      background: yellow;
    }
  
  -- CSS [attribute^="value"] Selector (select elements with the specified attribute, whose value starts with the specified value.)
    [class^="top"] {
      background: yellow;
    }
  
  -- CSS [attribute$="value"] Selector (select elements whose attribute value ends with a specified value.)
    [class$="test"] {
      background: yellow;
    }

  -- CSS [attribute*="value"] Selector (select elements whose attribute value contains a specified value.)
    [class*="te"] {
      background: yellow;
    }
  
  -- Styling Forms 
  The attribute selectors can be useful for styling forms without class or ID:
    input[type="text"] {
      width: 150px;
      display: block;
      margin-bottom: 10px;
      background-color: yellow;
    }

    input[type="button"] {
      width: 120px;
      margin-left: 35px;
      display: block;
    }
  
  -- Attributes selectors
    [attribute] - [target] - Selects all elements with a target attribute
    [attribute=value] - [target="_blank"] - Selects all elements with target="_blank"
    [attribute~=value] - [title~="flower"] - Selects all elements with a title attribute that contains a space-separated list of words, one of which is "flower"
    [attribute|=value] - [lang|="en"] - Selects all elements with a lang attribute value starting with "en"
    [attribute^=value] - a[href^="https"] - Selects all <a> elements with a href attribute value starting with "https"
    [attribute$=value] - a[href$=".pdf"] - Selects all <a> elements with a href attribute value ending with ".pdf"
    [attribute*=value] - a[href*="w3schools"] - Selects all <a> elements with a href attribute value containing the substring "w3schools"

-- colors
  rgb
  rgba
  hex
  hsl 
    hsl(hue, saturation, lightness)
  hsla
    hsla(0, 100%, 30%, 0.3);
  
  -- Color Keywords
    transparent
      (The transparent keyword is used to make a color transparent. This is often used to make a transparent background color for an element.)
      </head>
      <style>
          body {
            background-image: url("paper.gif");
          }

          div.ex1 { 
            background-color: lightgreen;
            border: 2px solid black;
            padding: 15px;
          }

          div.ex2 { 
            background-color: transparent;
            border: 2px solid black;
            padding: 15px;
          } 
        </style>
      </head>
      <body>
        <h2>The transparent Keyword</h2>
        <div class="ex1">This div has a light green background.</div>
        <br>
        <div class="ex2">This div has a transparent background.</div>
      </body>

    currentcolor
      (In this example the border color of the <div> element will be blue, because the text color of the <div> element is blue)
      div {
        color: blue;
        border: 10px solid currentcolor; 
      }
    inherit 
    (The inherit keyword specifies that a property should inherit its value from its parent element.)
      div {
        border: 2px solid red;
      }

      span {
        border: inherit;
      }

-- background 
  background-color
  background-image: url("paper.gif");
  background-repeat: repeat-y;
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed; /*the background image NOT scroll with the rest of the page.*/

-- box model
  Border - A border that goes around the padding and content
  Content - The content of the box, where text and images appear
  Margin - Clears an area outside the border. The margin is transparent
  Padding - Clears an area around the content. The padding is transparent


  -- border
    border-width: 4px;
    border-style: dotted;  
    border-color: red;
    border: 4px dotted red; /*border shorthand property to set a "4px", "dotted", "red" border*/
    border-left-style: dotted; /* set the LEFT border to "dotted" */
    border-radius: 5px;

    border-top-style: dotted;
    border-right-style: solid;
    border-bottom-style: dotted;
    border-left-style: solid;

    --border styles
      dotted - Defines a dotted border
      dashed - Defines a dashed border
      solid - Defines a solid border
      double - Defines a double border
      groove - Defines a 3D grooved border. The effect depends on the border-color value
      ridge - Defines a 3D ridged border. The effect depends on the border-color value
      inset - Defines a 3D inset border. The effect depends on the border-color value
      outset - Defines a 3D outset border. The effect depends on the border-color value
      none - Defines no border
      hidden - Defines a hidden border
      
    -- all border properties
      border	Sets all the border properties in one declaration
      border-bottom	Sets all the bottom border properties in one declaration
      border-bottom-color	Sets the color of the bottom border
      border-bottom-style	Sets the style of the bottom border
      border-bottom-width	Sets the width of the bottom border
      border-color	Sets the color of the four borders
      border-left	Sets all the left border properties in one declaration
      border-left-color	Sets the color of the left border
      border-left-style	Sets the style of the left border
      border-left-width	Sets the width of the left border
      border-radius	Sets all the four border-*-radius properties for rounded corners
      border-right	Sets all the right border properties in one declaration
      border-right-color	Sets the color of the right border
      border-right-style	Sets the style of the right border
      border-right-width	Sets the width of the right border
      border-style	Sets the style of the four borders
      border-top	Sets all the top border properties in one declaration
      border-top-color	Sets the color of the top border
      border-top-style	Sets the style of the top border
      border-top-width	Sets the width of the top border
      border-width	Sets the width of the four borders
    

  -- margin
  -- padding
  -- height/width
    height	Sets the height of an element
    max-height	Sets the maximum height of an element
    max-width	Sets the maximum width of an element
    min-height	Sets the minimum height of an element
    min-width	Sets the minimum width of an element
    width	Sets the width of an element


-- outline
  outline-style: solid;
  outline-width: 5px;
  outline-color: red;
  outline: 4px dotted red;

  -- outline-style values  
    dotted - Defines a dotted outline
    dashed - Defines a dashed outline
    solid - Defines a solid outline
    double - Defines a double outline
    groove - Defines a 3D grooved outline
    ridge - Defines a 3D ridged outline
    inset - Defines a 3D inset outline
    outset - Defines a 3D outset outline
    none - Defines no outline
    hidden - Defines a hidden outline

  -- outline-offset
    outline-offset: 15px; /*adds space between an outline and the edge/border of an element. */

-- text
  -- color
    color: red;


  -- horizontal alignment
    text-align: center;
    text-align: left;
    text-align: right;
    text-align: justify;

    -- text-align-last (property specifies how to align the last line of a text.)
      text-align-last: center;
      text-align-last: left;
      text-align-last: right;
      text-align-last: justify;

  -- vertical alignment
      vertical-align: baseline;
      vertical-align: text-top;
      vertical-align: text-bottom;
      vertical-align: sub;
      vertical-align: super;
      vertical-align: middle; /*center*/
  
  -- direction
    ltr	Text direction goes from left-to-right. This is default	
    rtl	Text direction goes from right-to-left	
    initial	Sets this property to its default value. Read about initial	
    inherit	Inherits this property from its parent element. Read about inherit

  -- unicode-bidi 
    unicode-bidi: bidi-override;

  -- text-decoration
    -- text-decoration-line
      text-decoration-line: overline;
      text-decoration-line: line-through;
      text-decoration-line: underline;
      text-decoration-line: overline underline;

    -- text-decoration-color
      text-decoration-line: line-through;
      text-decoration-color: blue;      

    -- text-decoration-style
      text-decoration-line: underline;
      text-decoration-color: red;
      text-decoration-style: wavy;
      
      -- values
      text-decoration-style: solid;
      text-decoration-style: double;
      text-decoration-style: dotted;
      text-decoration-style: dashed;
      text-decoration-style: wavy;
      
    -- text-decoration-thickness
      text-decoration-line: underline;
      text-decoration-thickness: auto; /*px, %*/

    -- text-decoration shorthand
      text-decoration: line color style thickness;
      text-decoration: underline red double 5px;

    -- text-decoration: none;
      text-decoration: none;

  -- text-transform
    none	No capitalization. The text renders as it is. This is default	
    capitalize	Transforms the first character of each word to uppercase	
    uppercase	Transforms all characters to uppercase	
    lowercase	Transforms all characters to lowercase	
    initial	Sets this property to its default value. Read about initial	
    inherit	Inherits this property from its parent element. Read about inherit

    example: text-transform: lowercase;

  -- Text spacing
    text-indent: 50px;
    letter-spacing: 5px;
    line-height: 0.8;
    word-spacing: 10px;
    white-space: nowrap;
  
  -- Text shadow
    text-shadow: horizontal-shadow vertical-shadow bluer-effect color;
    text-shadow: 2px 2px 5px red;

-- fonts
  -- font family
    font-family: "Times New Roman", Times, serif;

  -- font style
    font-style: normal;
    font-style: italic;
    font-style: oblique;
  
  -- font variant
    font-variant: normal;
    font-variant: small-caps;
  
  -- font weight
    font-weight: normal;
    font-weight: bold;c  

  -- font size
    font-size: 40px;
    font-size: 2.5em; /* 40px/16=2.5em */
    font-size:10vw

  -- google fonts
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">

  -- font paring
    font-family: "Sofia", sans-serif;
  
  -- font shorthands
    font: 20px Arial, sans-serif;
    font: italic small-caps bold 12px/30px Georgia, serif;

-- icons
  -- font awesome
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

    <i class="fas fa-cloud"></i>
    <i class="fas fa-heart"></i>
    <i class="fas fa-car"></i>
    <i class="fas fa-file"></i>
    <i class="fas fa-bars"></i>
  
  -- Bootstrap icons
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <i class="glyphicon glyphicon-cloud"></i>
    <i class="glyphicon glyphicon-remove"></i>
    <i class="glyphicon glyphicon-user"></i>
    <i class="glyphicon glyphicon-envelope"></i>
    <i class="glyphicon glyphicon-thumbs-up"></i>

  -- google icons
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <i class="material-icons">cloud</i>
    <i class="material-icons">favorite</i>
    <i class="material-icons">attachment</i>
    <i class="material-icons">computer</i>
    <i class="material-icons">traffic</i>
  
-- links
  -- links state (links can be styled differently depending on what state they are in.)
    a:link - a normal, unvisited link
    a:visited - a link the user has visited
    a:hover - a link when the user mouses over it
    a:active - a link the moment it is clicked
    
    -- example: 
      /* unvisited link */
      a:link {
        color: red;
      }

      /* visited link */
      a:visited {
        color: green;
      }

      /* mouse over link */
      a:hover {
        color: hotpink;
      }

      /* selected link */
      a:active {
        color: blue;
      }

-- cursor properties (some might be useful for links)
  <p>Mouse over the words to change the cursor.</p>
  <span style="cursor:auto">auto</span><br>
  <span style="cursor:crosshair">crosshair</span><br>
  <span style="cursor:default">default</span><br>
  <span style="cursor:e-resize">e-resize</span><br>
  <span style="cursor:help">help</span><br>
  <span style="cursor:move">move</span><br>
  <span style="cursor:n-resize">n-resize</span><br>
  <span style="cursor:ne-resize">ne-resize</span><br>
  <span style="cursor:nw-resize">nw-resize</span><br>
  <span style="cursor:pointer">pointer</span><br>
  <span style="cursor:progress">progress</span><br>
  <span style="cursor:s-resize">s-resize</span><br>
  <span style="cursor:se-resize">se-resize</span><br>
  <span style="cursor:sw-resize">sw-resize</span><br>
  <span style="cursor:text">text</span><br>
  <span style="cursor:w-resize">w-resize</span><br>
  <span style="cursor:wait">wait</span><br>

-- css lists
  -- unorder lists
  -- order lists

  -- list-style-type (List Item Marker)
    circle
    square
    upper-roman
    lower-roman
    example: list-style-type: circle;
  
  -- list-style-image (image as list item maker)
    list-style-image: url('sqpurple.gif');
  
  -- Position (position of the list item marker)
    list-style-position: outside;
      "list-style-position: outside;" means that the bullet points will be outside the list item. The start of each line of a list item will be aligned vertically. This is default.
    list-style-position: inside;
      "list-style-position: inside;" means that the bullet points will be inside the list item. As it is part of the list item, it will be part of the text and push the text at the start.
  
  -- list-style-none (Remove Default Settings)    
    list-style-type: none;

  -- List - Shorthand property
    list-style: item-marker position image-url; /*the */
    list-style: square inside url("sqpurple.gif");

-- tables
  -- borders  
    table, th, td{
      border: 1px solid #00fe;
      border-collapse: collapse;
    }
    
    -- horizontal dividers
      border-bottom: 1px solid #ddd;

  -- size
    table {
      width: 100%;
    }

    th {
      height: 70px;
    }

  -- alignment
    -- horizontal aligment
      td {
        text-align: center;
      }
    -- vertical alignment
      td {
        height: 50px;
        vertical-align: bottom;
      }

  -- style
    -- padding, text align and horizontal divider
      th, td {
        padding: 15px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }      
    
    -- hover table
      tr:hover {background-color: coral;}

    -- stripped table
      .divItems:nth-child(even){
        background-color: #eee;
      }

      .divItems:nth-child(odd){
        background-color: blue;
      }
  
  -- Responsive tables 
  (A responsive table will display a horizontal scroll bar if the screen is too small to display the full content)
    html
      <div class="table-container">
        <table></table>
      </div>
    css 
      table {
        border-collapse: collapse;
        width: 100%;
      }

      th,
      td {
        text-align: left;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      .table-container {
        overflow-x: auto;
      }
  
  -- caption
    html
     <div class="table-container">
        <table>
          <caption>Table 1.1 Customers</caption>
          <thead></thead>
          <tbody></tbody>
        </table>
      </div>
    css
      table {
        caption-side: bottom; /*top / bottom / initial /  inherit*/
      }

  -- empty-cells (Display no borders on empty cells in a table:)
    table {
      empty-cells: hide; /*show|hide|initial|inheri*/
    }

-- display
  inline (Displays an element as an inline element)
  block ( Displays an element as a block element)
  contents (Makes the container disappear, making the child elements children of the element the next level up in the DOM)
  flex (Displays an element as a block-level flex container)
  grid (Displays an element as a block-level grid container)
  inline-block (Displays an element as an inline-level block container. The element itself 
  is formatted as an inline element, but you can apply height and width values)
    Note: Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.
    Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.
    Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.

    --  inline y sus with and height          
      En general, los elementos con display: inline; no pueden tener ancho (width) ni alto (height) aplicados directamente a ellos. Esto se debe a que los elementos con display: inline; se comportan como parte del flujo de texto normal y se ajustan automáticamente al contenido que contienen.
      Cuando intentas aplicar width y height a un elemento con display: inline;, estas propiedades generalmente se ignoran. Sin embargo, hay algunas excepciones y casos especiales en los que se puede aplicar width y height a elementos con display: inline;:
      Imágenes: Las imágenes (<img>) son elementos inline por defecto, pero permiten aplicar width y height para controlar su tamaño. Esto se debe a que las imágenes son elementos reemplazables y tienen dimensiones intrínsecas que puedes modificar.
      inline-block: Si cambias el display del elemento de inline a inline-block, entonces sí puedes aplicar width y height. Los elementos con display: inline-block; combinan las características de los elementos en línea y de bloque, lo que les permite tener un ancho y un alto especificados.
      Entonces, si necesitas controlar el ancho y el alto de un elemento, y este es inline por defecto, puedes cambiar su display a inline-block o block, dependiendo de tu diseño y requisitos específicos.

      -- como se comporta inline-block
        Cuando aplicas display: inline-block; a un elemento, estás indicando que quieres combinar las características de los elementos en línea y en bloque.
        Comportamiento como inline para su exterior: El elemento se comportará como un elemento en línea en relación con su entorno exterior. Esto significa que fluirá junto con el texto y otros elementos en la misma línea, no iniciará una nueva línea antes o después de sí mismo, y aceptará márgenes horizontales.
        Comportamiento como block para su interior: Sin embargo, el elemento también se comportará como un elemento en bloque en relación con su contenido interno. Esto significa que aceptará anchos y alturas especificados, puede tener relleno (padding) y bordes, y formará un nuevo bloque de formato en el flujo del documento.
        Por lo tanto, display: inline-block; es una opción versátil que combina lo mejor de ambos mundos: la capacidad de fluir con el texto y otros elementos en línea, mientras que aún puede tener control sobre su contenido interno, lo que lo hace útil para una variedad de diseños y disposiciones en el diseño web.

  inline-flex Displays an element as an inline-level flex container
  inline-grid Displays an element as an inline-level grid container
  inline-table (The element is displayed as an inline-level table)
  list-item ( Let the element behave like a <li> element)
  run-in (Displays an element as either block or inline, depending on context)
  table ( Let the element behave like a <table> element)
  table-caption ( Let the element behave like a <caption> element)
  table-column-group (Let the element behave like a <colgroup> element)
  table-header-group (Let the element behave like a <thead> element)
  table-footer-group (Let the element behave like a <tfoot> element)
  table-row-group Let the element behave like a <tbody> element
  table-cell (Let the element behave like a <td> element)
  table-column (Let the element behave like a <col> element)
  table-row ( Let the element behave like a <tr> element)
  none (The element is completely removed)
  initial (Sets this property to its default value)
  inherit (Inherits this property from its parent element)

-- visibility 
  h2 {
    visibility: visible; /*visible|hidden|collapse|initial|inherit*/
  }

  visible	Default value. The element is visible	
  hidden	The element is hidden (but still takes up space)	
  collapse	Only for table rows (<tr>), row groups (<tbody>), columns (<col>), column groups (<colgroup>). This value removes a row or column, but it does not affect the table layout. The space taken up by the row or column will be available for other content. If collapse is used on other elements, it renders as "hidden"
  initial	Sets this property to its default value. Read about initial	
  inherit	Inherits this property from its parent element. Read about inherit

-- position
  static
  relative
  fixed
  absolute
  sticky

  -- html
   <body>
      <div class="table-container">
        <div class="box1">Box1</div>
        <div class="positionedText relative">Positioned Text</div>
        <div class="box2 relative">Box2</div>
        <div class="box3 absolute">Box3</div>
        <div class="box4 sticky">Box4</div>
        <div class="box5">Box4</div>
      </div>
    </body>
  
  -- css
    * {
      padding: 0;
      margin: 0;
    }

    .box1, .box2, .box3, .box4 {
      background-color: coral;
      height: 100px;
      width: 100px;
    }

    .box2{background-color: aquamarine;} 

    .box4{background-color: #eee;}

    .box5 {
      background-color: seagreen;
      min-height: 150vh;
    }

    .positionedText {
      background-color: red;
      padding: 8px;
      display: inline-block;
    }

    .fixed {
      position: fixed;
      top: 250px;
      left: 30%;
    }

    .static {
      position: static; /*default one*/
    }

    .relative {
      position: relative;
      top: 250px;
      left: 30%;
    }

    .absolute {
      position: absolute;
      top: 250px;
      left: 30%;
    }

    .sticky{
      position: sticky;
      top: 15px;
    }

-- z-index (The z-index property specifies the stack order of an element.)
  Note: z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items (elements that are direct children of display: flex elements).

-- overflow
  (The CSS overflow property controls what happens to content that is too big to fit into an area.)
    visible - Default. The overflow is not clipped. The content renders outside the element's box
    hidden - The overflow is clipped, and the rest of the content will be invisible
    scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content
    auto - Similar to scroll, but it adds scrollbars only when necessary
  Note: The overflow property only works for block elements with a specified height.

-- box-sizing 
    (box-sixing redefina la manera como se el navegador establece el ancho del navegador)
    code: box-sizing: border-box;

    -- without box-sizing
      -- html
        <div class="container">
          <div class="box">Contenido</div>
        </div>
      
      -- css 
        .container {
          width: 300px;
          background-color: red;
        }

        .box {
          width: 100%;
          padding: 20px;
          border: 2px solid #8b3636;
        }
      Note: no tiene border box, el div interno mantiene como 100% de ancho y luego el padding y los borders fueron agregarnos despues de haber ocupado todo el 100% de tu parent, ocacionando que se deborde el div interior fuera de su container.

    -- with the box-sizing
      -- html
        <div class="container">
          <div class="box">Contenido</div>
        </div>
      
      -- css
        .container {
          width: 300px;
          background-color: red;
        }

        .box {
          width: 100%;
          padding: 20px;
          border: 2px solid black;
          box-sizing: border-box;
          background-color: orange;
        }
      Note: con el box-sizing entonces el padding y el border son incluidos en ese 100% que ya tiene el componente por lo tanto afecta el espacio que queda disponible para el contenido, pero no se desborda.

  -- values 
    content-box: Este es el valor predeterminado de box-sizing. Con content-box, el ancho y la altura de un elemento se calculan exclusivamente basados en el contenido del elemento, excluyendo el relleno y el borde.

    border-box: Como ya sabemos, este valor ajusta el modelo de caja para que el ancho y la altura especificados incluyan el contenido, el relleno y el borde, todo dentro del tamaño total del elemento.

    padding-box: Con este valor, el ancho y la altura incluyen el contenido y el relleno, pero no el borde. El borde sigue siendo añadido al tamaño total del elemento.

-- content: "";
  (La regla CSS content: ""; se utiliza para insertar contenido generado mediante CSS. Esta propiedad se usa comúnmente con pseudo-elementos como ::before y ::after para agregar contenido adicional a un elemento HTML sin necesidad de modificar directamente el marcado HTML.)
  --code:
    .div::after {
      content: "";
    } 

    .div::before {
      content: "";
    } 

-- float
  (The CSS float property specifies how an element should float.)
  (The float property is used for positioning and formatting content e.g. let an image float left to the text in a container.)
  left - The element floats to the left of its container

  -- values
    right - The element floats to the right of its container
    none - The element does not float (will be displayed just where it occurs in the text). This is default
    inherit - The element inherits the float value of its parent

    -- html 
      <div class="app">
        <p>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg?crop=0.668xw:1.00xh;0.184xw,0&resize=640:*"
            alt="Pineapple"
            style="width: 170px; height: 170px; margin-left: 15px"
            class="imgToLeft"
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
          scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
          congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
          aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.
          Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit.
        </p>
      </div>
    
    --  css
      * {
        padding: 0;
        margin: 0;
      }

      .imgToRight{
        float: right;
        max-height: 200px;
      }

      .imgToLeft{
        float: left;
        max-height: 200px;
      }

      .app{
        background-color: #eee;
        padding: 8px;
        width: 70%;
        margin: 0 auto;
        min-height: 250px;
      }

  -- clear (When we use the float property, and we want the next element below (not on right or left), we will have to use the clear property.)
    none - The element is not pushed below left or right floated elements. This is default
    left - The element is pushed below left floated elements
    right - The element is pushed below right floated elements
    both - The element is pushed below both left and right floated elements
    inherit - The element inherits the clear value from its parent

  -- code
    -- html
      <body>
        <h2>Grid of Boxes</h2>
        <p>Float boxes side by side:</p>

        <div class="clearfix">
          <div class="box" style="background-color: #bbb">
            <p>Some text inside the box.</p>
          </div>
          <div class="box" style="background-color: #ccc">
            <p>Some text inside the box.</p>
          </div>
          <div class="box" style="background-color: #ddd">
            <p>Some text inside the box.</p>
          </div>
          
        </div>

        <p>
          <strong>Note:</strong> Here, we use the clearfix hack to take care of the
          layout flow. We also use the box-sizing property to make sure that the box
          doesn't break due to extra padding. Try to remove this code to see the
          effect.
        </p>
      </body>

    -- css
      * {
        box-sizing: border-box;
      }

      p {
        background-color: lightblue;
      }

      .box {
        float: left;
        width: 33.33%;
        padding: 50px;
      }

      /* 
      .clearfix {
        overflow: hidden;
      } */

      /* .clearfix::after {
        content: "";
        clear: both;
        display: table;
      }  */

    Note: 
      clear: both; es una propiedad que se aplica a un elemento para indicar que no se permiten elementos flotantes en ninguno de los lados del elemento. Es decir, si hay elementos flotantes a la izquierda, a la derecha o en ambos lados del elemento que tiene clear: both;, este elemento no flotante comenzará en una nueva línea después de los flotantes.
      
      En ciertas situaciones, overflow: hidden; puede tener un efecto similar a clear: both; en términos de limpiar flotadores.
      Cuando aplicas overflow: hidden; a un contenedor que contiene elementos flotantes, el contenedor se expandirá automáticamente para contener esos elementos flotantes. Esto puede tener el efecto secundario de "limpiar" los flotadores, es decir, forzar al contenedor a tener una altura adecuada para contener todos los elementos flotantes dentro de él, similar a lo que haría clear: both;.

      -- display table
        La razón por la que display: table; se usa a veces en esta técnica es que crea un contexto de formato de tabla que hace que el elemento ::after se comporte como una fila de tabla, lo que garantiza que ocupe un espacio en la página y empuje cualquier contenido flotante debajo.

        Sin embargo, display: table; no es la opción más semántica en este caso. Es preferible utilizar display: block;, ya que los elementos de bloque son la elección natural para contenedores de contenido en HTML. Al usar display: block;, estás asegurando que el elemento ::after se comporte como un bloque y comience en una nueva línea después de los elementos flotantes, lo que es más consistente con la intención de la propiedad clear: both;.

        En resumen, mientras que display: table; puede funcionar en la técnica clearfix, display: block; es una opción más apropiada y semántica cuando se usa junto con clear: both;.
  
  -- Nav with float and explanation
    -- html
      <body>
        <nav>
          <ul>        
            <li><a href="#">Home</a></li>
            <li><a href="#">item 1</a></li>
            <li><a href="#">item 2</a></li>
            <li><a href="#">item 3</a></li>
          </ul>
        </nav>
      </body>
    
    -- css
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      /* nav{
        background-color: orange;
        padding:4px;
      } */

      ul{
        list-style-type: none;  
        margin: 0;
        padding: 0;
        background-color: #333;  
        min-height: 4px;
        overflow: hidden;
      }

      li{
        float: left;  
      }

      a{
        display: inline-block;
        text-decoration: none;
        background-color: coral;
        padding: 14px 16px;
        color: #fff;
      }

      a:hover{
        background-color: #fff;
        color: #000;
      }

    -- Explanation
      Q:
      porqué en el codigo siguiente los li se debordan del ul y porque a menos que coloque el overflow: hidden no se acomodo el ul al alto adecuado?
      ul{
        list-style-type: none;  
        margin: 0;
        padding: 0;
        background-color: #333;
        min-height: 4px;
        /* overflow: hidden; */
      }
      A:
      En el código que proporcionaste, los elementos li se desbordan del ul debido a que el ul no está calculando correctamente su altura para contener a los elementos li. El motivo por el cual el ul no se ajusta al alto adecuado sin overflow: hidden; se debe a la naturaleza del modelo de caja de CSS y al comportamiento de los elementos flotantes.

      Cuando aplicas estilos como float: left; a los elementos li, estos elementos flotan fuera del flujo normal del documento, lo que significa que el ul no considera la altura de los elementos flotantes al calcular su propia altura. Esto puede llevar a que el ul no tenga una altura suficiente para contener a los elementos li, resultando en el desbordamiento de los elementos li fuera del ul.

      Al aplicar overflow: hidden; al ul, estás creando un nuevo contexto de formato para el ul, lo que obliga al ul a considerar la altura de los elementos flotantes dentro de él al calcular su propia altura. Esto asegura que el ul tenga una altura suficiente para contener a los elementos li y evita el desbordamiento.

      Por lo tanto, agregar overflow: hidden; al ul es una solución común para evitar el desbordamiento cuando se usan elementos flotantes dentro de un contenedor. Sin embargo, debes tener en cuenta que overflow: hidden; también puede ocultar el contenido que desborda del contenedor, por lo que debes evaluar si esta solución es adecuada para tu caso de uso específico.
  
  -- properties learnt
    box-sizing	Defines how the width and height of an element are calculated: should they include padding and borders, or not
    clear	Specifies what should happen with the element that is next to a floating element
    float	Specifies whether an element should float to the left, right, or not at all
    overflow	Specifies what happens if content overflows an element's box
    overflow-x	Specifies what to do with the left/right edges of the content if it overflows the element's content area
    overflow-y	Specifies what to do with the top/bottom edges of the content if it overflows the element's content area

-- Combinadores
  element element - div p - Selects all <p> elements inside <div> elements
  element>element - div > p - Selects all <p> elements where the parent is a <div> element
  element+element - div + p - Selects the first <p> element that are placed immediately after <div> elements
  element1~element2 - p ~ ul - Selects every <ul> element that are preceded by a <p> element

-- pseudoclases (A pseudo-class is used to define a special state of an element.)
  -- Anchor Pseudo-classes
    /* unvisited link */
    a:link {
      color: #FF0000;
    }

    /* visited link */
    a:visited {
      color: #00FF00;
    }

    /* mouse over link */
    a:hover {
      color: #FF00FF;
    }

    /* selected link */
    a:active {
      color: #0000FF;
    }

  -- hover
    :active - a:active - Selects the active link
    :checked - input:checked - Selects every checked <input> element
    :disabled - input:disabled - Selects every disabled <input> element
    :empty - p:empty - Selects every <p> element that has no children
    :enabled - input:enabled - Selects every enabled <input> element
    :first-child - p:first-child - Selects every <p> elements that is the first child of its parent
    :first-of-type - p:first-of-type - Selects every <p> element that is the first <p> element of its parent
    :focus - input:focus - Selects the <input> element that has focus
    :hover - a:hover - Selects links on mouse over
    :in-range - input:in-range - Selects <input> elements with a value within a specified range
    :invalid - input:invalid - Selects all <input> elements with an invalid value
    :lang(language) - p:lang(it) - Selects every <p> element with a lang attribute value starting with "it"
    :last-child - p:last-child - Selects every <p> elements that is the last child of its parent
    :last-of-type - p:last-of-type - Selects every <p> element that is the last <p> element of its parent
    :link - a:link - Selects all unvisited links
    :not(selector) - :not(p) - Selects every element that is not a <p> element
    :nth-child(n) - p:nth-child(2) - Selects every <p> element that is the second child of its parent
    :nth-last-child(n) - p:nth-last-child(2) - Selects every <p> element that is the second child of its parent, counting from the last child
    :nth-last-of-type(n) - p:nth-last-of-type(2) - Selects every <p> element that is the second <p> element of its parent, counting from the last child
    :nth-of-type(n) - p:nth-of-type(2) - Selects every <p> element that is the second <p> element of its parent
    :only-of-type - p:only-of-type - Selects every <p> element that is the only <p> element of its parent
    :only-child - p:only-child - Selects every <p> element that is the only child of its parent
    :optional - input:optional - Selects <input> elements with no "required" attribute
    :out-of-range - input:out-of-range - Selects <input> elements with a value outside a specified range
    :read-only - input:read-only - Selects <input> elements with a "readonly" attribute specified
    :read-write - input:read-write - Selects <input> elements with no "readonly" attribute
    :required - input:required - Selects <input> elements with a "required" attribute specified
    :root - root - Selects the document's root element
    :target - #news:target - Selects the current active #news element (clicked on a URL containing that anchor name)
    :valid - input:valid - Selects all <input> elements with a valid value
    :visited - a:visited - Selects all visited links

-- pseudo elements (A CSS pseudo-element is used to style specified parts of an element.)
  ::after - p::after - Insert content after every <p> element
  ::before - p::before - Insert content before every <p> element
  ::first-letter - p::first-letter - Selects the first letter of every <p> element
  ::first-line - p::first-line - Selects the first line of every <p> element
  ::marker - ::marker - Selects the markers of list items
  ::selection - p::selection - Selects the portion of an element that is selected by a user

  -- w3schools.com/css/css_pseudo_classes.asp

-- opacity (The opacity property specifies the opacity/transparency of an element.)
  The opacity property can take a value from 0.0 - 1.0.

-- css navigation Bar (TODO: https://www.w3schools.com/css/css_navbar.asp)
  -- Vertical Navigation Bar (TODO: w3schools.com/css/css_navbar_vertical.asp)
  -- Horizontal Navication Bar (TODO: w3schools.com/css/css_navbar_horizontal.asp)

-- CSS Dropdowns (TODO: w3schools.com/css/css_dropdowns.asp)

-- CSS Image Gallery (TODO: https://www.w3schools.com/css/css_image_gallery.asp)

-- CSS Image Sprites (TODO: w3schools.com/css/css_image_sprites.asp)

-- Forms (TODO: https://www.w3schools.com/css/css_form.asp)

-- CSS Counters (https://www.w3schools.com/css/css_counters.asp)

-- CSS website layout (TODO: https://www.w3schools.com/css/css_website_layout.asp)

-- CSS Units (There are two types of length units: absolute and relative.)
  -- absolute units
    The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.
    Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is known, such as for print layout.
    -- List
      cm - centimeters
      mm - millimeters
      in - inches (1in = 96px = 2.54cm)
      px * - pixels (1px = 1/96th of 1in)  
        Pixels (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens 1px implies multiple device pixels.
      pt - points (1pt = 1/72 of 1in) 
      pc - picas (1pc = 12 pt)

  -- relative units
    Relative length units specify a length relative to another length property. Relative length units scale better between different rendering mediums.

    -- list
      em - Relative to the font-size of the element (2em means 2 times the size of the current font)
      ex - Relative to the x-height of the current font (rarely used)
      ch - Relative to width of the "0" (zero)
      rem - Relative to font-size of the root element
      vw - Relative to 1% of the width of the viewport*
      vh - Relative to 1% of the height of the viewport*
      vmin - Relative to 1% of viewport's* smaller dimension
      vmax - Relative to 1% of viewport's* larger dimension
      % - Relative to the parent element

    -- Tip: The em and rem units are practical in creating perfectly scalable layout!
      Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.

-- CSS Specificity
  If there are two or more CSS rules that point to the same element, the selector with the highest specificity value will "win", and its style declaration will be applied to that HTML element. Think of specificity as a score/rank that determines which style declaration is ultimately applied to an element.

  --  Specificity Hierarchy (starts at zero 0)
    Every CSS selector has its place in the specificity hierarchy. There are four categories which define the specificity level of a selector:
    1 - !important  -  if you use the !important rule, it will even override inline styles! (BAD PRACTICE)    
    2 - (1000) - Inline styles - Example: <h1 style="color: pink;"> - Inline style gets a specificity value of 1000, and is always given the highest priority!
    3 - (100) IDs - Example: #navbar
    4 - (10) Classes, pseudo-classes, attribute selectors - Example: .test, :hover, [href]
    5 - (1) Elements and pseudo-elements - Example: h1, ::before

    Example: 
      A: h1
      B: h1#content
      C: <h1 id="content" style="color: pink;">Heading</h1>

      Note: 
        The specificity of A is 1 (one element selector)
        The specificity of B is 101 (one ID reference + one element selector)
        The specificity of C is 1000 (inline styling)
        Since the third rule (C) has the highest specificity value (1000), this style declaration will be applied.

-- Math Functions
  -- The calc() Function
    calc(expression)
    expression	Required. A mathematical expression. The result will be used as the value. The following operators can be used: + - * /

    Examples: 
      #div1 {
        position: absolute;
        left: 50px;
        width: calc(100% - 100px);
        border: 1px solid black;
        background-color: yellow;
        padding: 5px;
      }  

  -- The max() Function
  max(value1, value2, ...)
  The max() function uses the largest value, from a comma-separated list of values, as the property value.
  Example: 
    #div1 {
      background-color: yellow;
      height: 100px;
      width: max(50%, 300px);
    }

  -- The min() Function
  min(value1, value2, ...)
  The min() function uses the smallest value, from a comma-separated list of values, as the property value.
  Example: 
    #div1 {
      background-color: yellow;
      height: 100px;
      width: min(50%, 300px);
    }

  -- math functions list
    calc()	Allows you to perform calculations to determine CSS property values
    max()	Uses the largest value, from a comma-separated list of values, as the property value
    min()	Uses the smallest value, from a comma-separated list of values, as the property value

-------------------------------------------------------------------- Avanzado
-- border-radius
  border-top-left-radius
  border-top-right-radius
  border-bottom-right-radius
  border-bottom-left-radius properties
  
  border-radius: top-left top-right bottom-right bottom-left;
  border-radius: 15px 50px 30px 5px;

-- border-image
  w3schools.com/css/css3_border_images.asp
  The border-image property is actually a shorthand property for:
    border-image-source
    border-image-slice
    border-image-width
    border-image-outset
    border-image-repeat

-- background
    <head>
      <style> 
      #example1 {
        background-image: url(img_flwr.gif), url(paper.gif);
        background-position: right bottom, left top;
        background-repeat: no-repeat, repeat;
        padding: 15px;
      }
      </style>
    </head>
    <body>
      <h1>Multiple Backgrounds</h1>
      <p>The following div element has two background images:</p>
      <div id="example1">
        <h1>Lorem Ipsum Dolor</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      </div>
    </body>

  -- background size
    https://www.w3schools.com/css/tryit.asp?filename=trycss3_background-size_contain
    #div1 {
      background: url(img_flower.jpg);
      background-size: 100px 80px;
      background-repeat: no-repeat;
    }

    #div1 {
      background: url(img_flower.jpg);
      background-size: contain;
      background-repeat: no-repeat;
    }

    #div2 {
      background: url(img_flower.jpg);
      background-size: cover;
      background-repeat: no-repeat;
    }

  -- define size of multiple images background
  #example1 {
    background: url(img_tree.gif) left top no-repeat, url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
    background-size: 50px, 130px, auto;
  }

  -- Full Size Background Image
    html {
      background: url(img_man.jpg) no-repeat center fixed;
      background-size: cover;
    }
  
  -- Hero Image
   <style>
      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }

      .hero-image {
        background: url(img_man.jpg) no-repeat center; 
        background-size: cover;
        height: 500px;
        position: relative;
      }

      .hero-text {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
      }
    </style>
    </head>
    <body>
      <div class="hero-image">
        <div class="hero-text">
          <h1 style="font-size:50px">I am John Doe</h1>
          <h3>And I'm a Photographer</h3>
          <button>Hire me</button>
        </div>
      </div>
      <p>Page content..</p>
      <p>Note that this technique will also make the image responsive: Resize the browser window to see the effect.</p>
    </body>

  -- background-origin (specifies where the background image is positioned.)
    border-box - the background image starts from the upper left corner of the border
    padding-box - (default) the background image starts from the upper left corner of the padding edge
    content-box - the background image starts from the upper left corner of the content
    <style>
      #example1 {
        border: 10px solid black;
        padding: 35px;
        background: url(img_flwr.gif);
        background-repeat: no-repeat;
      }

      #example2 {
        border: 10px solid black;
        padding: 35px;
        background: url(img_flwr.gif);
        background-repeat: no-repeat;
        background-origin: border-box;
      }

      #example3 {
        border: 10px solid black;
        padding: 35px;
        background: url(img_flwr.gif);
        background-repeat: no-repeat;
        background-origin: content-box;
      }
      </style>
      </head>
      <body>

      <h1>The background-origin Property</h1>

      <p>No background-origin (padding-box is default):</p>
      <div id="example1">
        <h2>Lorem Ipsum Dolor</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      </div>

      <p>background-origin: border-box:</p>
      <div id="example2">
        <h2>Lorem Ipsum Dolor</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      </div>

      <p>background-origin: content-box:</p>
      <div id="example3">
        <h2>Lorem Ipsum Dolor</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      </div>

      </body>

  -- background clip (specifies the painting area of the background.)
    border-box - (default) the background is painted to the outside edge of the border
    padding-box - the background is painted to the outside edge of the padding
    content-box - the background is painted within the content box
    <style>
    #example1 {
      border: 10px dotted black;
      padding: 35px;
      background: yellow;
    }

    #example2 {
      border: 10px dotted black;
      padding: 35px;
      background: yellow;
      background-clip: padding-box;
    }

    #example3 {
      border: 10px dotted black;
      padding: 35px;
      background: yellow;
      background-clip: content-box;
    }
    </style>
    </head>
    <body>

    <h1>The background-clip Property</h1>

    <p>No background-clip (border-box is default):</p>
    <div id="example1">
      <h2>Lorem Ipsum Dolor</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    </div>

    <p>background-clip: padding-box:</p>
    <div id="example2">
      <h2>Lorem Ipsum Dolor</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    </div>

    <p>background-clip: content-box:</p>
    <div id="example3">
      <h2>Lorem Ipsum Dolor</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    </div>

    </body>

-- Gradietns
  CSS gradients let you display smooth transitions between two or more specified colors.
    Linear Gradients (goes down/up/left/right/diagonally)
    Radial Gradients (defined by their center)
    Conic Gradients (rotated around a center point)
  
  -- linear gradient
    background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
    -- Top to Bottom
      direction - Top to Bottom (this is default)
      background-image: linear-gradient(red, yellow);
    -- Left to Right
      background-image: linear-gradient(to right, red , yellow);
    -- Diagonal
      background-image: linear-gradient(to bottom right, red, yellow);
    -- multiple colors
      background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
      background-image: linear-gradient(red, yellow, green);
    -- Transparency
      background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
  
    -- Repeating a linear-gradient
      background-image: repeating-linear-gradient(red, yellow 10%, green 20%);

  -- radial gradient
    -- Evenly Spaced Color Stops (this is default)
      background-image: radial-gradient(shape size at position, start-color, ..., last-color);
      By default, shape is ellipse, size is farthest-corner, and position is center.
      background-image: radial-gradient(red, yellow, green);

    -- Differently Spaced Color Stops
      background-image: radial-gradient(red, yellow, green);
    
    -- Set Shape
      The shape parameter defines the shape. It can take the value circle or ellipse. The default value is ellipse.
      background-image: radial-gradient(circle, red, yellow, green);
    
    Use of Different Size Keywords
      closest-side
      farthest-side
      closest-corner
      farthest-corner
    
      background-image: radial-gradient(closest-side at 60% 55%, red, yellow, black);

  -- Conic Gradient
    background-image: conic-gradient([from angle] [at position,] color [degree], color [degree], ...);
    By default, angle is 0deg and position is center.
    If no degree is specified, the colors will be spread equally around the center point.

    -- Three Colors
      background-image: conic-gradient(red, yellow, green);

    -- Five Colors
      background-image: conic-gradient(red, yellow, green, blue, black);

    -- Three Colors and Degrees
      background-image: conic-gradient(red 45deg, yellow 90deg, green 210deg);

    -- Pie Charts
      Just add border-radius: 50% to make the conic gradient look like a pie:
      #grad {
        background-image: conic-gradient(red, yellow, green, blue, black);
        border-radius: 50%;
      }

      -- Here is another pie chart with defined degrees for all the colors:
        background-image: conic-gradient(red 0deg, red 90deg, yellow 90deg, yellow 180deg, green 180deg, green 270deg, blue 270deg);
        border-radius: 50%;
    
    -- Conic Gradient With Specified From Angle
      background-image: conic-gradient(from 90deg, red, yellow, green);
    
    -- Conic Gradient With Specified Center Position
      background-image: conic-gradient(at 60% 45%, red, yellow, green);

    -- Repeating a Conic Gradient
      background-image: repeating-conic-gradient(red 10%, yellow 20%);
      border-radius: 50%;

      background-image: repeating-conic-gradient(red 0deg 10deg, yellow 10deg 20deg, blue 20deg 30deg);
      border-radius: 50%;

-- shadow
  text-shadow
    text-shadow: horizontal vertical blur color;
    text-shadow: 2px 2px 5px red;
    text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  box-shadow
    box-shadow: horizontal vertical blur spread  color;
    box-shadow: 10px 10px 5px lightblue;
    box-shadow: 10px 10px 5px lightblue;
    box-shadow: 10px 10px 5px lightblue inset;  /*The inset parameter changes the shadow from an outer shadow (outset) to an inner shadow.*/
    box-shadow: 5px 5px blue, 10px 10px red, 15px 15px green;

    -- Cards
      <style>
      div.card {
        width: 250px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
      }

      div.header {
        background-color: #4CAF50;
        color: white;
        padding: 10px;
        font-size: 40px;
      }

      div.container {
        padding: 10px;
      }
      </style>
      </head>
      <body>

      <h1>Create Cards</h1>

      <p>The box-shadow property can be used to create paper-like cards:</p>

      <div class="card">
        <div class="header">
          <h1>1</h1>
        </div>

        <div class="container">
          <p>January 1, 2021</p>
        </div>
      </div>

      </body>

    -- image card
      <style>
        div.polaroid {
          width: 250px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          text-align: center;
        }

        div.container {
          padding: 10px;
        }
        </style>
        </head>
        <body>

        <h1>Create Polaroid Images</h1>

        <p>The box-shadow property can be used to create polaroid images:</p>

        <div class="polaroid">
          <img src="rock600x400.jpg" alt="Norway" style="width:100%">
          <div class="container">
            <p>Hardanger, Norway</p>
          </div>
        </div>

        </body>

-- text effects
  text-overflow - The CSS text-overflow property specifies how overflowed content that is not displayed should be signaled to the user.
    overflow: hidden;
  word-wrap - allows long words to be able to be broken and wrap onto the next line. 
    word-wrap: break-word;
  word-break - specifies line breaking rules.
    p.test1 {
      word-break: keep-all;
    }

    p.test2 {
      word-break: break-all;
    }

  writing-mode
    (specifies whether lines of text are laid out horizontally or vertically.)
    p.test1 {
      writing-mode: horizontal-tb;
    }

    span.test2 {
      writing-mode: vertical-rl;
    }

    p.test2 {
      writing-mode: vertical-rl;
    }

-- transform
  -- 2D Transforms
    (CSS transforms allow you to move, rotate, scale, and skew elements.)
    -- transform property
      translate() - moves an element from its current position (according to the parameters given for the X-axis and the Y-axis).
        div {
          width: 300px;
          height: 100px;
          background-color: yellow;
          border: 1px solid black;
          transform: translate(50px,100px);
        }
      rotate() - rotates an element clockwise or counter-clockwise according to a given degree.
      div {
          width: 300px;
          height: 100px;
          background-color: yellow;
          border: 1px solid black;
        }

        div#myDiv {
          transform: rotate(20deg);
        }

        <div id="myDiv">
        This div element is rotated clockwise 20 degrees.
        </div>

      scale() - increases or decreases the size of an element (according to the parameters given for the width and height).
        div {
          margin: 150px;
          width: 200px;
          height: 100px;
          background-color: yellow;
          border: 1px solid black;
          transform: scale(2,3);
        }

        scaleY() - transform: scaleY(3);      

      skew() - skews an element along the X and Y axis by the given angle.
        transform: skew(20deg, 10deg);
      skewX()
        transform: skewX(20deg);
      skewY() 
        transform: skewY(20deg);

      matrix() -  method combines all the 2D transform methods into one.
        The matrix() method take six parameters, containing mathematic functions, which allows you to rotate, scale, move (translate), and skew elements.
        The parameters are as follow: matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())
          div {
            transform: matrix(1, -0.3, 0, 1, 0, 0);
          }
    
  -- 3D transforms
    -- transform
      rotateX()
      rotateY()
      rotateZ()
        transform: rotateZ(90deg);
      
  -- All props
    none - Defines that there should be no transformation 
    matrix(n,n,n,n,n,n) - Defines a 2D transformation, using a matrix of six values 
    matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) - Defines a 3D transformation, using a 4x4 matrix of 16 values 
    translate(x,y) - Defines a 2D translation 
    translate3d(x,y,z) - Defines a 3D translation 
    translateX(x) - Defines a translation, using only the value for the X-axis 
    translateY(y) - Defines a translation, using only the value for the Y-axis 
    translateZ(z) - Defines a 3D translation, using only the value for the Z-axis 
    scale(x,y) - Defines a 2D scale transformation 
    scale3d(x,y,z) - Defines a 3D scale transformation 
    scaleX(x) - Defines a scale transformation by giving a value for the X-axis 
    scaleY(y) - Defines a scale transformation by giving a value for the Y-axis 
    scaleZ(z) - Defines a 3D scale transformation by giving a value for the Z-axis 
    rotate(angle) - Defines a 2D rotation, the angle is specified in the parameter 
    rotate3d(x,y,z,angle) - Defines a 3D rotation 
    rotateX(angle) - Defines a 3D rotation along the X-axis 
    rotateY(angle) - Defines a 3D rotation along the Y-axis 
    rotateZ(angle) - Defines a 3D rotation along the Z-axis 
    skew(x-angle,y-angle) - Defines a 2D skew transformation along the X- and the Y-axis 
    skewX(angle) - Defines a 2D skew transformation along the X-axis 
    skewY(angle) - Defines a 2D skew transformation along the Y-axis 
    perspective(n) - Defines a perspective view for a 3D transformed element 
    initial - Sets this property to its default value. Read about initial 
    inherit - Inherits this property from its parent element. Read about inherit 
  

  --  transform origin 
    The transform-origin property allows you to change the position of transformed elements.
    2D transformations can change the x- and y-axis of an element. 3D transformations can also change the z-axis of an element.
    transform-origin: x-axis y-axis z-axis|initial|inherit;
    transform-origin: 20% 40%;
    Note: This property must be used together with the transform property.

  --  transform style
    transform-style: flat|preserve-3d|initial|inherit;
    The transform-style property specifies how nested elements are rendered in 3D space.
    Note: This property must be used together with the transform property.
    transform-style: preserve-3d;

    -- values
      flat	Specifies that child elements will NOT preserve its 3D position. This is default
      preserve-3d	Specifies that child elements will preserve its 3D position
      initial	Sets this property to its default value. Read about initial
      inherit	Inherits this property from its parent element. Read about inherit

  -- perspective
    It is used to give a 3D-positioned element some perspective.
    The perspective property defines how far the object is away from the user. So, a lower value will result in a more intensive 3D effect than a higher value.
    perspective: length|none;
    values
      length	How far the element is placed from the view	
      none	Default value. Same as 0. The perspective is not set	
      initial	Sets this property to its default value. Read about initial	
      inherit	Inherits this property from its parent element. Read about inherit

  -- perspective-origin (Define at from which position the user is looking at the 3D-positioned element)
    perspective: 100px;
    perspective-origin: left;
    perspective-origin: x-axis y-axis|initial|inherit;
    perspective-origin: center top;
    perspective-origin: center center;
    perspective-origin: center bottom;
    perspective-origin: right bottom;
    perspective-origin: left bottom;
    perspective-origin: 10% bottom;
    perspective-origin: 20% bottom;

  -- backface-visibility
  backface-visibility: visible;

  -- All props
    matrix3d (n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)	Defines a 3D transformation, using a 4x4 matrix of 16 values
    translate3d(x,y,z)	Defines a 3D translation
    translateX(x)	Defines a 3D translation, using only the value for the X-axis
    translateY(y)	Defines a 3D translation, using only the value for the Y-axis
    translateZ(z)	Defines a 3D translation, using only the value for the Z-axis
    scale3d(x,y,z)	Defines a 3D scale transformation
    scaleX(x)	Defines a 3D scale transformation by giving a value for the X-axis
    scaleY(y)	Defines a 3D scale transformation by giving a value for the Y-axis
    scaleZ(z)	Defines a 3D scale transformation by giving a value for the Z-axis
    rotate3d(x,y,z,angle)	Defines a 3D rotation
    rotateX(angle)	Defines a 3D rotation along the X-axis
    rotateY(angle)	Defines a 3D rotation along the Y-axis
    rotateZ(angle)	Defines a 3D rotation along the Z-axis
    perspective(n)	Defines a perspective view for a 3D transformed element

-- transitions (change property values smoothly, over a given duration.)
  -- props
  transition
  transition-delay
    transition-delay: 1s;
  transition-duration
  transition-property
  transition-timing-function

  Note: If the duration part is not specified, the transition will have no effect, because the default value is 0.

  -- transition-timing-function
    Specify the Speed Curve of the Transition
    -- values 
      ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
      linear - specifies a transition effect with the same speed from start to end
      ease-in - specifies a transition effect with a slow start
      ease-out - specifies a transition effect with a slow end
      ease-in-out - specifies a transition effect with a slow start and end
      cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function

    -- code
      <head>
        <style> 
          div {
            width: 100px;
            height: 100px;
            background: red;
            transition: width 2s;
          }

          #div1 {transition-timing-function: linear;}
          #div2 {transition-timing-function: ease;}
          #div3 {transition-timing-function: ease-in;}
          #div4 {transition-timing-function: ease-out;}
          #div5 {transition-timing-function: ease-in-out;}

          div:hover {
            width: 300px;
          }
        </style>
      </head>
      <body>

        <h1>The transition-timing-function Property</h1>

        <p>Hover over the div elements below, to see the different speed curves:</p>

        <div id="div1">linear</div><br>
        <div id="div2">ease</div><br>
        <div id="div3">ease-in</div><br>
        <div id="div4">ease-out</div><br>
        <div id="div5">ease-in-out</div><br>

      </body>

  -- transition + transform
  <head>
    <style> 
    div {
      width: 100px;
      height: 100px;
      background: red;
      transition: width 2s, height 2s, transform 2s;
    }

    div:hover {
      width: 300px;
      height: 300px;
      transform: rotate(180deg);
    }
    </style>
    </head>
    <body>

    <h1>Transition + Transform</h1>

    <p>Hover over the div element below:</p>

    <div></div>

    </body>

  -- More Transition Examples
    div {
      transition-property: width;
      transition-duration: 2s;
      transition-timing-function: linear;
      transition-delay: 1s;
    }

    -- shorthand
    div {
      transition: width 2s linear 1s;
    }

-- animations
  CSS allows animation of HTML elements without using JavaScript!
  An animation lets an element gradually change from one style to another.
  You can change as many CSS properties you want, as many times as you want.
  To use CSS animation, you must first specify some keyframes for the animation.
  Keyframes hold what styles the element will have at certain times.

  -- props
    @keyframes
    animation-name
    animation-duration
    animation-delay
    animation-iteration-count
    animation-direction
    animation-timing-function
    animation-fill-mode
    animation
  
  -- The @keyframes Rule
    When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.
    To get an animation to work, you must bind the animation to an element.

    -- example: 
      <head>
      <style> 
      div {
        width: 100px;
        height: 100px;
        background-color: red;
        animation-name: example;
        animation-duration: 4s;
      }

      @keyframes example {
        from {background-color: red;}
        to {background-color: yellow;}
      }
      </style>
      </head>
      <body>

      <h1>CSS Animation</h1>

      <div></div>

      <p><b>Note:</b> When an animation is finished, it goes back to its original style.</p>

      </body>

    -- more examples
      <head>
        <style> 
        div {
          width: 100px;
          height: 100px;
          background-color: red;
          position: relative;
          animation-name: example;
          animation-duration: 4s;
        }

        @keyframes example {
          0%   {background-color:red; left:0px; top:0px;}
          25%  {background-color:yellow; left:200px; top:0px;}
          50%  {background-color:blue; left:200px; top:200px;}
          75%  {background-color:green; left:0px; top:200px;}
          100% {background-color:red; left:0px; top:0px;}
        }
        </style>
        </head>
        <body>

        <h1>CSS Animation</h1>

        <div></div>

        <p><b>Note:</b> When an animation is finished, it goes back to its original style.</p>

        </body>

  --  animation-delay - delay animation 
    animation-delay: -2s;
    animation-delay: 3s;

  -- animation-iteration-count - set how many the iteration should run
    animation-iteration-count: 3;
    animation-iteration-count: infinite;

  -- nimation-direction - Run Animation in Reverse Direction or Alternate Cycles
    normal - The animation is played as normal (forwards). This is default
    reverse - The animation is played in reverse direction (backwards)
    alternate - The animation is played forwards first, then backwards
    alternate-reverse - The animation is played backwards first, then forwards

  -- animation-fill-mode 
    none - Default value. Animation will not apply any styles to the element before or after it is executing
    forwards - The element will retain the style values that is set by the last keyframe (depends on animation-direction and animation-iteration-count)
    backwards - The element will get the style values that is set by the first keyframe (depends on animation-direction), and retain this during the animation-delay period
    both - The animation will follow the rules for both forwards and backwards, extending the animation properties in both directions
  
    --  animation shorthand
      div {
        animation-name: example;
        animation-duration: 5s;
        animation-timing-function: linear;
        animation-delay: 2s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
      }

    -- shorthand 
        div {
          animation: example 5s linear 2s infinite alternate;
        }

-- Tooltips
  TODO: https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip

-- Tooltip Arrows 
  TODO: w3schools.com/css/tryit.asp?filename=trycss_tooltip_arrow_bottom

-- Fade In Tooltips (Animation)
  TODO: https://www.w3schools.com/css/css_tooltip.asp

-- Images
    TODO: w3schools.com/css/css3_images.asp

  -- image reflection
    TODO: https://www.w3schools.com/css/css3_image_reflection.asp

    -- The object-fit Property
      The CSS object-fit property is used to specify how an <img> or <video> should be resized to fit its container.
      TODO: w3schools.com/css/css3_object-fit.asp

    --The object-position Property
      The CSS object-position property is used to specify how an <img> or <video> should be positioned within its container.
      TODO: w3schools.com/css/css3_object-position.asp

    -- Masking Properties
    TODO: https://www.w3schools.com/css/css3_masking.asp

-- Button
  TODO: https://www.w3schools.com/css/css3_buttons.asp

-- Pagination
  TODO: https://www.w3schools.com/css/css3_pagination.asp

-- Multiple Columns
  TODO: w3schools.com/css/css3_multiple_columns.asp

-- User Interface
  TODO: https://www.w3schools.com/css/css3_user_interface.asp

-- variables
  TODO: https://www.w3schools.com/css/css3_variables.asp

-- boz-sizing
  TODO: https://www.w3schools.com/css/css3_box-sizing.asp

-- media queries
  TODO: w3schools.com/css/css3_mediaqueries.asp

  -- examples: 
    TODO: https://www.w3schools.com/css/css3_mediaqueries_ex.asp

-- flexbox
  TODO:  https://www.w3schools.com/css/css3_flexbox.asp

-- grid
  TODO: https://www.w3schools.com/css/css_grid.asp

-- RWD (Responsive Web Design)
  TODO: https://www.w3schools.com/css/css_rwd_intro.asp

-- sass
  TODO: https://www.w3schools.com/sass/default.php

  -- sass functions
    TODO: w3schools.com/sass/sass_functions_string.php

-- CSS Examples
  TODO: https://www.w3schools.com/css/css_templates.asp
