from flask import Flask, session, render_template, request, jsonify
from boggle import Boggle

app = Flask(__name__)
app.config['SECRET_KEY'] = 'X9F7T2H3L1QW'

boggle_game = Boggle()

@app.route('/')
def home():
    board = boggle_game.make_board()
    session['board'] = board
    return render_template("index.html", board=board, highscore=25, nplays=25)

@app.route('/check-word', methods=['POST'])
def check_word():
    word = request.args['word']
    board = session.get('board')
    response = boggle_game.check_valid_word(board, word)
    return jsonify({'result': response})

@app.route('/post-score', methods=['POST'])
def post_score():
    score = request.json['score']
    high_score = session.get('high_score', 0)
    nplays = session.get('nplays', 0)

    session['high-score'] = max(score, high_score)
    session['nplays'] = npla + 1

    return jsonify({'high_score': session['high_score'], 'nplays': session['nplays']})
