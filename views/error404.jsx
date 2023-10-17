const React = require('react');
const Def = require('./default');

function error404(){
    return(
        <Def>
            <main>
                <img src="https://httpstatusdogs.com/img/404.jpg" alt="404 Not Found"></img>
            </main>
        </Def>
    )
}

module.exports = error404;