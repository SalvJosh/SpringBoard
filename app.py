from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from models import User
import os

# Initialize Flask app
app = Flask(__name__)
app.jinja_env.autoescape = True
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default_secret')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Avoid unnecessary warnings

@app.route('/')
def home():
    return render_template('base.html')

# Initialize extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "app_routes.login"

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# login_manager = LoginManager(app)
# login_manager.login_view = 'login'
# login_manager.login_message_category = 'info'

# Register Blueprints
def register_blueprints():
    from routes import app_routes
    app.register_blueprint(app_routes)

register_blueprints()

if __name__ == '__main__':
    app.run(debug=True)