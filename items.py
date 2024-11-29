import psycopg2

def connect_to_db():
    
    conn = psycopg2.connect(
        database="grocery",
        user="root",
        password="Vijay@000",
        host="localhost",
        port="5432" 
    )
    return conn

def get_inventory():
   
    conn = connect_to_db()
    cur = conn.cursor()
    cur.execute("SELECT * FROM inventory")
    inventory_data = cur.fetchall()
    cur.close()
    conn.close()
    return inventory_data

def update_inventory(item_name, new_quantity):
   
    conn = connect_to_db()
    cur = conn.cursor()
    cur.execute("UPDATE inventory SET stock = %s WHERE name = %s", (new_quantity, item_name))
    conn.commit()
    cur.close()
    conn.close()


inventory = get_inventory()
print(inventory)


update_inventory('Apple', 45)