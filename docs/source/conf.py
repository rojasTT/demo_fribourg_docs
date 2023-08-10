# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = '_maps Template'
copyright = '2023, Topomat Technologies'
author = 'Topomat Technologies'
release = '0.1'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

language = 'en'
locale_dirs = ['locale/']
gettext_compact = True
templates_path = ['_templates']
extensions = [
    'myst_parser',
    'rst2pdf.pdfbuilder',
    'docxbuilder'
]
suppress_warnings = ["myst.xref_missing"] # !!!! 
exclude_patterns = []

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinx_book_theme'
html_static_path = ['_static']
html_css_files = ['css/custom.css']
html_theme_options = {
    "use_download_button": False,
    "use_fullscreen_button": False,
    "show_toc_level": 2,
    # Icons can be added to redirect to clients website
    # "icon_links": [
    #         {
    #             "name": "Topomat",
    #             "url": "test.html",
    #             "icon": "_static/images/name-logo.png",
    #             "type": "local"
    #         }
    #     ]
}
# Client html control options:
html_name = "Documentation _maps"
html_logo = "_static/images/name-logo.png"
html_favicon = "_static/images/logo-mini.png"

# -- PDF Options for output --------------------------------------------------

pdf_documents = [('index', '_maps_docu', 'Template Doc _maps', 'Topomat Technologies')]
pdf_stylesheets = ['a4']
pdf_use_coverpage = False

# -- Docx Options for output -------------------------------------------------

docx_documents = [
    ('index', '_maps_docu.docx', {
         'title': project,
         'created': author,
     }, True),
]
# docx_style = 'path/to/custom_style.docx'
# docx_pagebreak_before_section = 1