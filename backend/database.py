#Importando MySQL Connector
import mysql.connector
from mysql.connector import errorcode

#Funções SQL
def start_connection():
    connection = None
    try:
	    db_connection = mysql.connector.connect(host='localhost', user='root', password='alunoifro', database='monetis')
	    print("Conexão com database estabelecida!")
    except mysql.connector.Error as error:
        print('\033[1;49;32mO database não existe ou não foi encontrado.\033[m')
    return connection

def search_data(connection, SQL_search_data):
    data = None
    try:
        cursor = connection.cursor()
        cursor.execute(SQL_search_data)
        data = cursor.fetchall()
        print('\033[1;49;32mBusca de dados bem sucedida.\033[m')
    except mysql.connector.Error as error:
	    print('\033[1;49;32mBusca de dados mal sucedida.\033[m')
    return data

def insert_data(connection, SQL_insert_data):
    try:
        cursor = connection.cursor()
        cursor.execute(SQL_insert_data)
        data = cursor.commit()
        print('\033[1;49;32mInserção de dados bem sucedida.\033[m')
    except mysql.connector.Error as error:
	    print('\033[1;49;32mInserção de dados mal sucedida.\033[m')

def alter_data(connection, SQL_alter_data):
    try:
        cursor = connection.cursor()
        cursor.execute(SQL_alter_data)
        conexao.commit()
        print('\033[1;49;32mInserção de dados bem sucedida.\033[m')
    except mysql.connector.Error as error:
	    print('\033[1;49;32mInserção de dados mal sucedida.\033[m')