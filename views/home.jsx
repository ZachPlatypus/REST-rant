const React = require('react');
const Def = require('./default');

function home(){
    return(
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/burger.jpg" alt="burger picture" className="burgerImg"></img>
                    <div>
                        <p>Photo by <a href="https://unsplash.com/@briewilly">Chad Montano</a> on <a href="https://unsplash.com/photos/-GFCYhoRe48">Unsplash</a></p>
                    </div>
                </div>
            </main>
        </Def>
    )
}
module.exports = home