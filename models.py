from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    short_description = db.Column(db.String(100), nullable=False)
    thumbnail_path = db.Column(db.String(200))
    article_filename = db.Column(db.String(200))
    # You can add more fields as needed
