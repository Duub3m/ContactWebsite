from config import db

class Contact(db.Model):
    id = db.Coloumn(db.Integer, primary_key=True)
    first_name = db.Coloumn(db.String(80), unique = False, nullable=False)
    last_name = db.Coloumn(db.String(80), unique = False, nullable=False)
    email = db.Coloumn(db.String(120), unique = True, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "email": self.email
        }