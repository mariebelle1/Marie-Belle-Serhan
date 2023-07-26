from flask import Flask

# Create a Flask application instance
app = Flask(__name__)

# Define a route and a function to handle the route
@app.route('/')
def hello_flask():
    return 'Hello, Flask!'

# Run the app if this file is executed
if __name__ == '__main__':
    app.run(debug=True)
