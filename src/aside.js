const Aside = () => {
    return <aside>
        <form>
                    <div class="mb-4">
                        <label for="exampleInputUsuario1" class="form-label">Usuario </label>
                        <input type="Usuario" class="form-control" id="exampleInputUsuario1"></input>
                      </div>

                    <div class="mb-4">
                      <label for="exampleInputCorreo1" class="form-label">Correo Electrónico*</label>
                      <input type="Correo" class="form-control" id="exampleInputCorreo1" aria-describedby="emailHelp"></input>
                      <div id="CorreoHelp" class="form-text">Rellenar campo obligatorio.</div>
                    </div>

                    <div class="mb-4">
                      <label for="exampleInputContraseña1" class="form-label">Contraseña</label>
                      <input type="Contraseña" class="form-control" id="exampleInputContraseña1"></input>
                      <button type="submit" class="btn" ><p class="fw-bold">¿Olvidaste contraseña?</p></button>
                    </div>
                    
                    <div class="mb-4 form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                      <label class="form-check-label small" for="exampleCheck1">Guardar información</label>
                    </div>

                    <button type="submit" class="btn btn-primary">INGRESAR</button>
                  </form>
    </aside>;
}

export default Aside;