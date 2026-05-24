import streamlit as str
import streamlit.components.v1 as components
import os

# Set page configurations
str.set_page_config(page_title="Udaan - Vidura", layout="wide")

def load_html_app():
    # 1. Read the core HTML file
    with open("index.html", "r", encoding="utf-8") as f:
        html_content = f.read()
        
    # 2. Read CSS and inject it before the closing </head> tag
    if os.path.exists("styles.css"):
        with open("styles.css", "r", encoding="utf-8") as f:
            css_content = f.read()
        css_tag = f"<style>{css_content}</style>"
        html_content = html_content.replace("</head>", f"{css_tag}</head>")
        
    # 3. Read JS and inject it before the closing </body> tag
    if os.path.exists("script.js"):
        with open("script.js", "r", encoding="utf-8") as f:
            js_content = f.read()
        js_tag = f"<script>{js_content}</script>"
        html_content = html_content.replace("</body>", f"{js_tag}</body>")
        
    return html_content

# Render the application fullscreen
html_source = load_html_app()

# Note: You can increase the height (e.g., to 1000 or 1200) to match your design height
components.html(html_source, height=900, scrolling=True)
