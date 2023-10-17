const React = require('react');
const Def = require('./default');

function home(){
    return(
        <Def>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button className="btn btn-primary">Places</button>
                </a>
            </main>
        </Def>
    )
}
module.exports = home