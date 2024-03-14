from app import create_app, db
from models import Project

app = create_app()

with app.app_context():
    sample_project = Project(
        title='Sample Project 2',
        short_description='This is the description for Sample Project 2.',
        thumbnail_path='thumbnail2.png',
        article_filename='project2.html'
    )

    db.session.add(sample_project)
    db.session.commit()
