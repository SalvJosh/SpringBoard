from flask import Blueprint, render_template, redirect, url_for, flash, request
from flask_login import login_user, logout_user, current_user, login_required
from app import db, bcrypt
from models import User, Movie
from forms import RegistrationForm, LoginForm, SearchForm
import requests
import os

app_routes = Blueprint('app_routes', __name__)
OMDB_API_KEY = os.getenv('OMDB_API_KEY', 'your_default_api_key')

@app_routes.route('/')
def home():
    return render_template('base.html')

@app_routes.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('app_routes.home'))
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, email=form.email.data, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        flash('Account created successfully! Please log in.', 'success')
        return redirect(url_for('app_routes.login'))
    return render_template('register.html', form=form)

@app_routes.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('app_routes.profile'))

    form = LoginForm()
    print("DEBUG: Form Object ->", form)  # Debug print
    return render_template('login.html', form=form)

    # if form.validate_on_submit():
    #     user = User.query.filter_by(username=form.username.data).first()
    #     if user and bcrypt.check_password_hash(user.password, form.password.data):
    #         login_user(user)
    #         flash('Login successful!', 'success')
    #         return redirect(url_for('app_routes.home'))
    #     else:
    #         flash('Login unsuccessful. Please check username and password.', 'danger')
    # return render_template('login.html', form=form)

@app_routes.route('/profile')
@login_required  # Ensures only logged-in users can access this page
def profile():
    return render_template('profile.html', user=current_user)

@app_routes.route("/logout", methods=["GET", "POST"])
@login_required
def logout():
    logout_user()
    flash("You have been logged out.", "info")
    return redirect(url_for("app_routes.login"))

@app_routes.route('/search', methods=['GET'])
def search_movie():
    form = SearchForm()
    query = request.args.get('movie_name')
    movie_data = None
    if query:
        response = requests.get(f'https://www.omdbapi.com/?apikey={OMDB_API_KEY}&s={query}')
        movie_data = response.json() if response.status_code == 200 else None
    return render_template('search.html', movie_data=movie_data, form=form)

@app_routes.route('/watchlist')
@login_required
def watchlist():
    movies = Movie.query.filter_by(user_id=current_user.id).all()
    return render_template('watchlist.html', movies=movies)

@app_routes.route('/watchlist/add', methods=['POST'])
@login_required
def add_to_watchlist():
    title = request.form.get('title')
    year = request.form.get('year')
    poster = request.form.get('poster')
    if title and year:
        movie = Movie(title=title, year=year, poster=poster, user_id=current_user.id)
        db.session.add(movie)
        db.session.commit()
        flash(f'{title} added to your watchlist!', 'success')
    return redirect(url_for('app_routes.watchlist'))

@app_routes.route('/watchlist/mark_watched/<int:movie_id>', methods=['POST'])
@login_required
def mark_watched(movie_id):
    movie = Movie.query.get_or_404(movie_id)
    if movie.user_id != current_user.id:
        flash('Unauthorized action.', 'danger')
        return redirect(url_for('app_routes.watchlist'))
    movie.watched = True
    db.session.commit()
    flash(f'{movie.title} marked as watched!', 'success')
    return redirect(url_for('app_routes.watchlist'))

# from flask import Blueprint, render_template, redirect, url_for, flash, request
# from flask_login import login_user, login_required, logout_user, current_user
# from models import db, User, Movie
# from forms import RegistrationForm, LoginForm
# import requests
# from config import Config
# from urllib.parse import quote  # ✅ Import URL encoding

# app_routes = Blueprint('app_routes', __name__)

# # Home Route
# @app_routes.route("/")
# def home():
#     return render_template("index.html")

# # User Registration
# @app_routes.route("/register", methods=["GET", "POST"])
# def register():
#     form = RegistrationForm()
#     if form.validate_on_submit():
#         new_user = User(username=form.username.data)
#         new_user.set_password(form.password.data)
#         db.session.add(new_user)
#         db.session.commit()
#         flash("Registration successful! Please log in.", "success")
#         return redirect(url_for("app_routes.login"))
#     return render_template("register.html", form=form)

# # User Login
# @app_routes.route("/login", methods=["GET", "POST"])
# def login():
#     form = LoginForm()
#     if form.validate_on_submit():
#         user = User.query.filter_by(username=form.username.data).first()
#         if user and user.check_password(form.password.data):
#             login_user(user)
#             return redirect(url_for("app_routes.home"))
#         else:
#             flash("Invalid credentials", "danger")
#     return render_template("login.html", form=form)

# # Logout
# @app_routes.route("/logout", methods=["GET", "POST"])
# @login_required
# def logout():
#     logout_user()
#     flash("You have been logged out.", "info")
#     return redirect(url_for("app_routes.login"))


# # Search Movie using OMDB API
# @app_routes.route('/search_movie', methods=['GET'])
# def search_movie():
#     query = request.args.get('movie_name')
    
#     if not query:
#         flash("Please enter a movie name to search.", "warning")
#         return render_template('search.html', movie_data=None)

#     # ✅ Properly encode the query to avoid errors with spaces and special characters
#     url = f"http://www.omdbapi.com/?s={quote(query)}&apikey={Config.OMDB_API_KEY}"
#     response = requests.get(url)
    
#     if response.status_code != 200:
#         flash("Error retrieving movie data.", "danger")
#         return render_template('search.html', movie_data=None)

#     movie_data = response.json()

#     if movie_data.get("Response") == "False":
#         flash("Movie not found. Try another search.", "warning")
#         return render_template('search.html', movie_data=None)

#     return render_template('search.html', movie_data=movie_data)


# # Add Movie to Watchlist
# @app_routes.route('/add_movie', methods=['POST'])
# @login_required
# def add_movie():
#     title = request.form.get('title')
#     movie = Movie(title=title, user_id=current_user.id)
#     db.session.add(movie)
#     db.session.commit()
#     flash('Movie added to your watchlist!', 'success')
#     return redirect(url_for('app_routes.watchlist'))

# # Watchlist Page
# @app_routes.route('/watchlist')
# @login_required
# def watchlist():
#     movies = Movie.query.filter_by(user_id=current_user.id).all()
#     return render_template('watchlist.html', movies=movies)