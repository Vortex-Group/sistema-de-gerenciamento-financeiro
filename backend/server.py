from flask import Flask
from flask_cors import CORS, cross_origin

import json

dados = {
    "users": [{
        "id": "0",
        "nome": "Lucas Rodrigues",
        "saldo": "750",
        "receita": "2.500",
        "despesa": "1.750"
    }]
}

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/users")
def index():
    return dados


if __name__ == "__main__":
    app.run(debug=True)