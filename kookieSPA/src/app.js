function changeContent(page){
    const contentdiv = document.getElementById('content');
    switch(page){
        case 'home': contentdiv.innerHTML=`<div id="description">
        <h3>Simple recipe to make cookies</h3>
        <p>
            Cookies are an easy dessert, a convenient snack, and even a quick breakfast with a hot cup of
            coffee, but did you know that cookies are more than just delicious? That’s right. They’re also
            interesting to learn about, and we’re here with some fascinating fun facts about cookies and their
            history!
        <ul>
            <li>People in the United States purchase over 2 billion cookies per year. </li>
            <li>Half the cookies people bake at home are chocolate chip.</li>
            <li>Chocolate chips don’t melt because they contain less cocoa butter than chocolate bars—if you
                crush up candy bars to add to your cookies, expect them to be extra gooey from the melted
                chocolate!</li>
        </ul>
        </p>
    </div>
    <div id="link-more">Check out more about it <a
                href="https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/">here.</a> </div>
        </p>
    </div>`;
    break;

    case 'Cookie':contentdiv.innerHTML=`<div id="cookie-img" class="zoom">
    <img id="choco-cookie" src="chocolate-chip-cookie.jpg" alt="chocolate-chip-cookie">
</div>
</main>
<p  >
<h3 style="text-align: center;">Recipe to make cookies</h3>
<ol id="steps">
<li>Make the chocolate chip cookie dough</li>
<li>Bake until you are hungry</li>
<li>Eat the delicious hot kookies!</li>
</ol>
<div id="link-more">Check out more about it <a
    href="https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/">here.</a> </div>
</p>
</div>`;
break;

case 'Submit-Recipe': contentdiv.innerHTML=`<div id="recipe" class="form">
<h3>Submit Your Recipe</h3>
<form id="recipe-form">
    <div class="form-group">
        <label for="name">Full Name</label><br>
        <input type="text" id="name" name="Full Name" required>

    </div>
    <div class="form-group">
        <label for="emial">Email Id</label><br>
        <input type="email" id="email" name="Email Address" required>
    </div>
    <div class="form-group">
        <label for="recipe-type">Type of the Recipe</label><br>
        <select id="recipe-type" name="Recipe type" required>
            <option value="">Select type</option>
            <option value="starters">Starters</option>
            <option value="main-course">Main-Course</option>
            <option value="desert">Desert</option>
            <option value="Beverages">Beverages</option>
        </select>
    </div>
    <div class="form-group">
        <label>Upload Your Recipe</label><br>
        <input type="file" name="recipe" accept=".pdf,.doc,.docx,.png,.jpg">
    </div>
    <div class="form-group">
        <label for="about-me">About the Recipe</label><br>
        <textarea id="about-me" style="margin-top:8px;" name="about-me" rows="5"
            placeholder="Describe about your recipe's cultural and historical significance (can also include what makes theis recipe speacil for you personally)..."></textarea>
    </div>
    <div class="form-group">
        <label>
            <input type="checkbox" name="terms" required>I agree to the terms and conditons.
        </label>
    </div>
    <div class="form-group">
        <input type="submit" value="Submit Application">
    </div>
</form>
</div>`;
break;
default:
            contentDiv.innerHTML = '<h2>Page not found!</h2>';
    }
}