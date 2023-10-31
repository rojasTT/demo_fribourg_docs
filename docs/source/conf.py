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

language = 'de'
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
    "navbar_end": ["button.html"],
    # "use_download_button": False,
    # "use_fullscreen_button": False,
    # "show_toc_level": 2,
    # "template_path": ["_templates"],
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
html_name = "Documentation demo"
html_logo = "_static/images/name-logo.png"
html_favicon = "_static/images/favicon.ico"

# -- PDF Options for output --------------------------------------------------

# pdf_documents = [('index', 'demo_fribourg', 'Demo Fribourg', 'Topomat Technologies')]
# pdf_stylesheets = ['a4']
# pdf_use_coverpage = False
# pdf_break_level = 1

# -- Docx Options for output -------------------------------------------------

# docx_documents = [
#     ('index', '_maps_docu.docx', {
#          'title': project,
#          'created': author,
#      }, True),
# ]
# docx_style = 'path/to/custom_style.docx'
# docx_pagebreak_before_section = 1