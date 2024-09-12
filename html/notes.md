doctype
html
  head
    meta
    link
      favicon
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
      external css
        <link rel="stylesheet" href="styles.css" />
    title
      <title>HTML Tutorial</title>
body
  header
    nav
      ul 
        li
      ol
        li
  headings
    h1, h2, h3, h4, h5, h6
  links
    a
      absolute URLs
      relative URLs
      image as link
        <a href="default.asp">
          <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
        </a>
      link to an email address
        <a href="mailto:someone@example.com">Send email</a>
      button as link
        <button onclick="document.location='default.asp'">HTML Tutorial</button>
      link title
        <a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section">Visit our HTML Tutorial</a>
  paragraphs
    p
  images
    img
  line break (salto de linea en parrafos)
    br
  atributes (name/value pairs: name="value")
    href
    src
    alt
    width
    height
    style
  break line (horizontal line or rule used to separate content)
    hr
  defines pre-formated text
    pre
  styles (the style attribute)
    style="property:value;"
  text formatting elements
    bold text
      <b>
    important text
      <strong>
    italic text
      <i>
    emphasized text
      <em>
    marked or highlighted text
      <mark>
    smaller text
      <small>
    deleted text (the same as the css property: text-decoration: line-through;)
      <del>
    Inserted text (the same as the css property: text-decoration: underline;)
      <ins>
    Subscript text (seems to me that is most used in math formulas)
      <sub>
    Superscript text (seems to me that is most used in math formulas)
      <sup>
  quotationc
    blockquote
      <blockquote cite="http://www.worldwildlife.org/who/index.html">
        For 60 years, WWF has worked to help people and nature thrive. As the
        world's leading conservation organization, WWF works in nearly 100
        countries. At every level, we collaborate with people around the world to
        develop and deliver innovative solutions that protect communities,
        wildlife, and the places in which they live.
      </blockquote>
    q
      <p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>
    abbr (abreviacion)
      <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
    address
      <address>
        Written by John Doe.<br> 
        Visit us at:<br>
        Example.com<br>
        Box 564, Disneyland<br>
        USA
      </address>
    cite
      <p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>
    bdo (bi-directional override)
      <bdo dir="rtl">This line will be written from right to left</bdo>
  comments
    <!-- Write your comments here -->
  CSS can be added to HTML documents in 3 ways:
    Inline - by using the style attribute inside HTML elements
    Internal - by using a <style> element in the <head> section
    External - by using a <link> element to link to an external CSS file
  images
    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
    animated images
      <img src="programming.gif" alt="Computer Man" style="width:48px;height:48px;">
    common formats
      APNG, GIF, ICO, JPEG, PNG, SVG
    image map
      <img src="workplace.jpg" alt="Workplace" usemap="#workmap">
      <map name="workmap">
        <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.html">
        <area shape="rect" coords="290,172,333,250" alt="Phone" href="cellphone.html">
        <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.html">
      </map>
      Shapes
        You must define the shape of the clickable area, and you can choose one of these values:
          rect - defines a rectangular region
          circle - defines a circular region
          poly - defines a polygonal region
          default - defines the entire region
  picture element (Show different images for different screen sizes)
    <picture>
      <source media="(min-width: 650px)" srcset="img_food.jpg">
      <source media="(min-width: 465px)" srcset="img_car.jpg">
      <img src="img_girl.jpg">
    </picture>
  tables
    table
      thead, tr, th, 
      tbody, tr, td
      tfood, tr, td
    colspan (expandir una celda para que ocupe multiples columnas)
      <th colspan="2">Name</th>
    rowspan (expandir una celda para que ocupe multiples rows)
    styling for rows
      tr:nth-child(even) {
        background-color: #D6EEEE;
      }
      Note: If you use (odd) instead of (even), the styling will occur on row 1,3,5 etc. instead of 2,4,6 etc.
    styling for columns
      td:nth-child(even), th:nth-child(even) {
        background-color: #D6EEEE;
      }
      styling both rows and columns
            tr:nth-child(even) {
        background-color: rgba(150, 212, 212, 0.4);
      }

      th:nth-child(even),td:nth-child(even) {
        background-color: rgba(150, 212, 212, 0.4);
      }
    hover
      tr:hover {background-color: #D6EEEE;}
    colgroup for header/columns formating
      <table>
        <colgroup>
          <col span="2" style="background-color: #D6EEEE">
        </colgroup>
        <tr>
          <th>MON</th>
          <th>TUE</th>
          <th>WED</th>
          <th>THU</th>
        ...
  listas
    ordered list (ol) > li
    unordered list (ul) > li
      li
    description list (dl) > dt , dd
      <dl>
        <dt>Coffee</dt>
        <dd>- black hot drink</dd>
        <dt>Milk</dt>
        <dd>- white cold drink</dd>
      </dl>
  display value (block vs inline)
    block
      -always start on a new line
      -always take the full width availale
      -ex: address, article, aside, blockquote, canvas, dd, div, dl, dt, fieldset, figcaption, figure, footer, form, h1, h6, header, hr, li, main, nav, noscript, ol, p, pre, section, table, tfoot, ul, video, 
    inline
      -it does not start on a new line
      -it takes the space that needs only
      -ex:a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, output, q, samp, script, select, small, span, strong, sub, sup, textarea, time, tt, var
        Note: an inline elemet can not contain a block-level element
    Inline-block
      -If you change the <div> element's display property from block to inline-block, the <div> elements will no longer add a line break before and after, and will be displayed side by side instead of on top of each other.
  div
    it is often used as container for other html elements
  span
    it is used as an inline container to mark up a part of a text or document
  iframe (An HTML iframe is used to display a web page within a web page.)
    <iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"></iframe>
  html layout elements
    semantic tags
      article
      aside
      summary
      details      
        <details>
          <summary>Epcot Center</summary>
          <p>
            Epcot is a theme park at Walt Disney World Resort featuring exciting
            attractions, international pavilions, award-winning fireworks and
            seasonal special events.
          </p>
        </details>
      figcaption
      figure
        <figure>
          <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
          <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
        </figure>
      footer
        authorship information
        copyright information
        contact information
        sitemap
        back to top links
        related documents
      header
      main
      mark
      nav
      section
      summary
      time
         <time datetime="2008-02-14 20:00">Valentines day</time>
      form        
        TODO: https://www.w3schools.com/html/html_forms.asp
        form attributes
          action
          target
          method
          autocomplete
          novalidate        
        form elements
          input
            The default value of the type attribute is "text".
            input types
              <input type="button">
              <input type="checkbox">
              <input type="color">
              <input type="date">
              <input type="datetime-local">
              <input type="email">
              <input type="file">
              <input type="hidden">
              <input type="image">
              <input type="month">
              <input type="number">
              <input type="password">
              <input type="radio">
              <input type="range">
              <input type="reset">
              <input type="search">
              <input type="submit">
              <input type="tel">
              <input type="text">
              <input type="time">
              <input type="url">
              <input type="week">
            input restrictions
              -checked (Specifies that an input field should be pre-selected when the page loads (for type="checkbox" or type="radio"))
              -disabled (Specifies that an input field should be disabled)
              -max (Specifies the maximum value for an input field)
              -maxlength (Specifies the maximum number of character for an input field)
              -min (Specifies the minimum value for an input field)
              -pattern (Specifies a regular expression to check the input value against)
              -readonly (Specifies that an input field is read only (cannot be changed))
              -required (Specifies that an input field is required (must be filled out))
              -size (Specifies the width (in characters) of an input field)
              -step (Specifies the legal number intervals for an input field)
              -value (Specifies the default value for an input field)
          label
          select
          textarea
          button
          fieldset
          legend
          datalist
          output
          option
          optgroup
      TODO: https://www.w3schools.com/html/html5_semantic_elements.asp
    HTML Layout Techniques
      -css frameworks: bootstrap
      -css float property
        TODO: https://www.w3schools.com/html/tryit.asp?filename=tryhtml_layout_float
      -css flexbox
        TODO: https://www.w3schools.com/html/tryit.asp?filename=tryhtml_layout_flexbox
      -css grid
        TODO: https://www.w3schools.com/css/css_grid.asp
    responsive web design
      TODO: https://www.w3schools.com/html/html_responsive.asp
  code
    <code>
      x = 5;
      y = 6;
      z = x + y;
    </code>
  kbd (keyboard)
    <p>Save the document by pressing <kbd>Ctrl + S</kbd></p>
  samp (for program output)  <samp>
  script 
    <script src="myscript.js">
  html Character Entities: entity names and entity numbers
  charset
    TODO: https://www.w3schools.com/html/html_charset.asp
  URL (uniform resource locator)
    -scheme://prefix.domain:port/path/filename
      -scheme - defines the type of Internet service (most common is http or https)
        Common URL Schemes
          -http (HyperText Transfer Protocol Common web pages) (Not encrypted)
          -https (Secure HyperText Transfer Protocol)  (Secure web pages Encrypted)
          -ftp (File Transfer Protocol)  Downloading or uploading files
          -file () (A file on your computer)
      -prefix - defines a domain prefix (default for http is www)
      -domain - defines the Internet domain name (like w3schools.com)
      -port - defines the port number at the host (default for http is 80)
      -path - defines a path at the server (If omitted: the root directory of the site)
      -filename - defines the name of a document or resource  
  html graphics
    canvas
      TODO: https://www.w3schools.com/html/html5_canvas.asp
    svg
      TODO: https://www.w3schools.com/html/html5_svg.asp
  multimedia
    video
      <video width="320" height="240" autoplay muted>
        <source src="movie.mp4" type="video/mp4">
        <source src="movie.ogg" type="video/ogg">
        Your browser does not support the video tag.
      </video>
    audio
      <audio controls autoplay muted>
        <source src="horse.ogg" type="audio/ogg">
        <source src="horse.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    youtube
      <iframe width="420" height="315"
      src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
      </iframe>
    youtube loop
      <iframe width="420" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
      </iframe>
  html api
    TODO: https://www.w3schools.com/html/html5_geolocation.asp
  html examples
    TODO:https://www.w3schools.com/html/html_examples.asp

contenteditable
  The HTML global attribute contenteditable is used to make the content of an element editable by the user. When applied to an HTML element, it allows users to     modify the content directly within the web page, similar to a text editor.