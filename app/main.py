from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__, static_url_path='/static')

# Define a list to store the poll question and choices.
polls = [
    {
        'question': 'What is your favorite programming language?',
        'choices': ['Python', 'JavaScript'],
        'results': [0, 0],  # Initialize results with zeros.
    }
]

@app.route('/')
def index():
    return render_template('index.html', polls=polls)

@app.route('/poll/<int:poll_id>', methods=['GET', 'POST'])
def poll(poll_id):
    if request.method == 'POST':
        choice = int(request.form['choice'])
        polls[poll_id]['results'][choice] += 1
        return redirect(url_for('index'))
    return render_template('poll.html', poll=polls[poll_id])

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)
