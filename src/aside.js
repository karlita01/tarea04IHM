
const Aside = () => {
    return <aside>    
      <form>   
          <div class="mb-3">            
                  <label for="exampleInputUsuario1" class="form-label"> Usuario <i data-feather="user"/></label>
              <input type="Usuario" class="form-control" id="exampleInputUsuario1" placeholder="user123" />              
          </div>

          <div class="mb-3">            
                  <label for="exampleInputCorreo1" class="form-label">Correo Electrónico <i data-feather="mail"/></label>
              <input type="Correo" class="form-control" id="exampleInputCorreo1" placeholder="correo234@gmail.com" />
                              <div id="CorreoHelp" class="form-text">Rellenar campo obligatorio.</div>
          </div> 

          <div class="mb-3">        
                  <label for="exampleInputContraseña1" class="form-label">Contraseña <i data-feather="key"/></label>
              <input type="Contraseña" class="form-control" id="exampleInputContraseña1"></input>
                              <button type="submit" class="btn" ><p class="fw-bold">¿Olvidaste contraseña?</p></button>
          </div> 
                  
          <div class="mb-3">  
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                  <label class="form-check-label small" for="exampleCheck1">Guardar información</label>
          </div> 
          
          <div class="mb-3">                 
                  <button type="submit" class="btn btn-primary">INGRESAR <i data-feather="send"/></button>
          </div>  
      </form>
    </aside>;
}

export default Aside;