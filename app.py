from flask import Flask, render_template
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
import os

from models import db, Project

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///yourdatabase.db'  # Adjust for your database
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Optional: to suppress a warning

    db.init_app(app)  # Initialize SQLAlchemy with the Flask app

    return app

app = create_app()

with app.app_context():
    # Create tables if they don't exist
    db.create_all()

admin = Admin(app, name='MyPortfolio', template_mode='bootstrap3')

# Add views for Flask-Admin. Here, we're adding Project model
admin.add_view(ModelView(Project, db.session))


@app.route('/')
def index():
    projects = Project.query.all()  # Fetch all projects from the database
    return render_template('index.html', projects=projects)

@app.route('/project/<int:project_id>')
def project(project_id):
    project = Project.query.get_or_404(project_id)

    # Construct the path to the article file
    article_path = os.path.join(app.root_path, 'articles', project.article_filename)

    # Read the content of the article file
    with open(article_path, 'r', encoding='utf-8') as file:
        article_content = file.read()

    # Render the template with the article content
    return render_template('project_detail.html', project=project, article_content=article_content)

if __name__ == '__main__':
    app.run(debug=True)
