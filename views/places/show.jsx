const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div>
              <img src={data.place.pic} alt={data.place.name}  />
              <h3>`Located in {data.place.city},{data.place.state}`</h3>
              <h2 className='col-sm-6'>Rating</h2>
              <div>Not rated</div>
              <h2 className='col-sm-6'>Description</h2>
              <h3>
                {data.place.showEstablished()}
              </h3>
              <h4>
                Serving {data.place.cuisines}
              </h4>
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