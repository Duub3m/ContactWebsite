from flask import request, jsonify
from config import app, db
from models import Contact

@app.route("/contacts" , methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()

# Checks if we are running our main file directly
if __name__ == "__main__": 
    with app.app_context():
        db.create_all()

    app.run(debug=True)