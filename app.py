from flask import Flask, render_template, request
import wikipediaapi

app = Flask(_name_)

def get_wiki_summary(topic):
    # Create a Wikipedia API object
    wiki = wikipediaapi.Wikipedia('en')
    
    # Get the page object for the given topic
    page = wiki.page(topic)
    
    # If the page exists, return its summary
    if page.exists():
        return page.summary
    else:
        return "Sorry, I couldn't find information on that topic."

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    question = request.form['question']
    answer = get_wiki_summary(question)
    return answer

if _name_ == "_main_":
    app.run(debug=True)