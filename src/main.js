const Main = () => {
    return <main>
        <div class="card" >
                    
                    

        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://i.pinimg.com/564x/a9/9f/b7/a99fb72c77e52f642e6758ffb83be4e3.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://i.pinimg.com/564x/6d/66/9a/6d669aa8c6d62e6ddb9ec2cf6d369ecc.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://i.pinimg.com/564x/2f/a0/fa/2fa0fae87242637a7a31f06a61429cf4.jpg" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <div class="card-body">
                      <h5 class="card-title">TODO CON ESTILO</h5>
                      <p class="card-text">¡Explora SportShop y lleva tu entrenamiento al siguiente nivel!</p>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    </main>;
}

export default Main;