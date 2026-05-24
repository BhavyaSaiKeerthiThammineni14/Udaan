import streamlit as str
import streamlit.components.v1 as components
import os

# Set page configurations
str.set_page_config(page_title="Udaan - Vidura", layout="wide")

def load_html_app():
    # Read the core HTML file
    with open("index.html", "r", encoding="utf-8") as f:
        html_content = f.read()
        
    # Optional: If your HTML doesn't already link styles/scripts internally 
    # or you want to guarantee they load inline, you can read and inject them here.
    
    return html_content

# Render the application fullscreen
html_source = load_html_app()
components.html(html_source, height=800, scrolling=True)
