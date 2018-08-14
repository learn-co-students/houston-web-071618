class App


  def call(hash_del_ambiente)
    codigo_respuesta = 220
    cabeceras = { "comosea" => "true" }
    cuerpo = ['<html>soy un teapot</html>'] # or {}

    return [codigo_respuesta, cabeceras, cuerpo]
  end


end
