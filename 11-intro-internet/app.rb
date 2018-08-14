class App
  def call(environment_hash)

    response_code = 404
    headers = { "world" => "not found" }

    body = ""

    if environment_hash["PATH_INFO"] == "/world"
      body = ['goodbye world'] # or {}
    else
      body = ["hello world"]
    end

    # binding.pry

    return [response_code, headers, body]
  end
end
