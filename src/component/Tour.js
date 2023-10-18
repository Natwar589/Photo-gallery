import Cards from './Cards';
 
function Tour({tours ,removeTour})
{ 
    console.log(typeof(removeTour))
    return(
        <div className='container'>
            <div className='title'>
                <h2>Plan with NSR</h2>

            </div>
            <div className='cards'>
                {
                   tours.map((tour) => {
                    return <Cards {...tour} removeTour={removeTour} ></Cards>

                   })
                }
            </div>
        </div>
    );
}
export default Tour;