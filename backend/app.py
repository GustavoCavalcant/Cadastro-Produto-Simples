from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL
import db_config

app = Flask(__name__)
CORS(app)
app.config.from_object(db_config)

mysql = MySQL(app)


@app.route('/produtos', methods=['GET'])
@cross_origin(origin='*')
def listar_produtos():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM product')
    result = cur.fetchall()
    cur.close()
    produtos = []
    for produto in result:
        produtos.append({
            'id': produto[0],
            'name': produto[1],
            'price': produto[2]
        })
    return jsonify(produtos)

@app.route('/produtos', methods=['POST'])
def cadastrar_produto():
    name = request.json['name']
    price = request.json['price']
    cur = mysql.connection.cursor()
    cur.execute(f'INSERT INTO product (name, price) VALUES (%s, %s)', (name, price))
    mysql.connection.commit()
    cur.close()
    return jsonify({'mensagem': 'Produto cadastrado com sucesso'})

if __name__ == '__main__':
    app.run()