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
    cursor = mysql.connection.cursor()
    cursor.execute('SELECT * FROM product')
    result = cursor.fetchall()
    cursor.close()
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
    return jsonify({'mensagem': 'Produto cadastrado com sucesso!'})


@app.route('/produtos/<int:id>', methods=['PUT'])
def atualizar_produto(id):
    name = request.json['name']
    price = request.json['price']
    cursor = mysql.connection.cursor()
    cursor.execute('UPDATE product SET name = %s, price = %s WHERE id = %s', (name, price, id))
    mysql.connection.commit()
    cursor.close()
    return jsonify({'mensagem': 'Produto atualizado com sucesso!'})


@app.route('/produtos/<int:id>', methods=['DELETE'])
def delete_produto(id):
    cursor = mysql.connection.cursor()
    cursor.execute('DELETE FROM product WHERE id = %s', (id,))
    mysql.connection.commit()
    cursor.close()
    return jsonify({'mensagem': 'Produto exluído com sucesso!'})




if __name__ == '__main__':
    app.run()