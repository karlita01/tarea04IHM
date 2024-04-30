const Footer = () => {
    return <footer>
       <div className="container-fluid bg-primary-subtle">
            <div className= "row text-center">
                <div className= "md-col-12">
                    <br></br>
                    <p>SÍGUENOS AQUÍ</p>
                    
                </div>
                
                
            </div> 

            <div className = "row text-center">
                <div className= "col-md-3">    
                    <a href="https://www.facebook.com/" target="_blank"> <i data-feather="facebook"/> </a> 
                </div>
                
                <div className= "col-md-3">    
                <a href="https://www.instagram.com/" target="_blank"> <i data-feather="instagram"/> </a> 
                </div>

                <div className= "col-md-3">    
                <a href="https://www.X.com/" target="_blank">  <i data-feather="at-sign"/> </a> 
                </div>

                <div className= "col-md-3">    
                <a href="https://www.twitter.com/" target="_blank"> <i data-feather="twitter"/>  </a> 
                </div>
                
            </div>

            <div className= "row text-center">
                <div className= "md-col-12">
                    <p> Copyright © 2024 Karlita</p>
                    <p>Web diseñada por Karlita Yerlin Baltodano León</p>
                </div>
                
                
            </div>

        </div>
        
    </footer>;
}

export default Footer;
