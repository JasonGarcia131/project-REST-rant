const React = require('react')
const Def = require('./default')

function home(){

    return(
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="./img/pizza.jpg" alt="pizza with many ingridients" />
                </div>
                <div>
                    Photo by Chad Montano
                </div>
                <a href="/places">
                <button className = 'btn-primary'>Places Pages</button>
                </a>
                
            </main>
        </Def>
    )

}

module.exports = home