const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div >
              <h1 className='col-sm-6'>{ data.place.name }</h1>
              <img src="#" alt="" />
              <h2 className='col-sm-6'>Rating</h2>
              <div>Not rated</div>
              <h2 className='col-sm-6'>Description</h2>
              <div>`{data.place.city},{data.place.state}`</div>
              <h2>Comments</h2>
              <div className='col-sm-6'>No comments!</div>
              <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
              </a>  
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>     
            </div>
          </main>
        </Def>
    )
}

module.exports = show