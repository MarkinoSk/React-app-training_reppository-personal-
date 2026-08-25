import pic from './assets/150x150.png'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={pic}
            alt="just image"></img>
            <h2 className='card-title'>product</h2>
            <p className='card-text'>-just buy it</p>

        </div>

    );
}

export default Card