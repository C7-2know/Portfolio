const Carousel=()=>{
    return(
        <div id="carousel"  className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="S lide 1"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2" ></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3" ></button>

            </div>
            <div className="carousel-inner border">
                <div className="carousel-item active  w">
                    <img src="img1.jpg" className="d-block img-fluid h-25 " alt=""/>
                </div>
                <div className="carousel-item">
                    <img src="profile.jpg" className="d-block img-fluid h-25" alt=""/>
                </div>
                <div className="carousel-item">
                    <img src="img2.jpg" className="d-block img-fluid h-25" alt=""/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Carousel;