const React = require('react')
const Def = require('./default')

function error404(){
return(
    
    <Def>
        <main id='error-page'>
            <h1>404: PAGE NOT FOUND</h1>
            <img src="'../img/404page.jpg'" alt="male looking down standing on a railroad track." />
            <div>
                PHOTO BY: <a href='https://unsplash.com/photos/E-b_VNmtGJY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'>Gabriel</a>
            </div>
            <p>oops, sorry, we cannot find this page.</p>
        </main>
    </Def>
)
}

module.exports = error404