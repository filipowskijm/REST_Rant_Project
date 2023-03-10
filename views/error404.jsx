const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <h2>Oops, sorry, we can't find this page!</h2>
                <img src='/images/surprised-man.jpg' alt='Surprised Man'></img>
                <div>
                    Photo by <a href='https://unsplash.com/@krakenimages?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'> krakenimages </a> on <a href='https://unsplash.com/'>Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404