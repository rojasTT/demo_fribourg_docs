@echo off

set PYTHONPATH="C:\Users\tt_or\AppData\Local\Programs\Python\Python311\python.exe"

if exist .venv\ (
    echo .venv exists ...

    echo Activating environnement ...
    REM python -c "import os, sys; print(os.path.dirname(sys.executable))"
    .\.venv\Scripts\activate
    REM python -c "import os, sys; print(os.path.dirname(sys.executable))"

    @REM cd public/docs
    
    echo Checking Python version ...
    python "%~dp0check_python_version.py"
    if %errorlevel% equ 1 (
        echo Python version doesn't meet requirements. Need 3.6 or higher
        exit
    )
    
    echo Installing requirements.txt ...
    pip install -r requirements.txt

    echo Building html doc ...
    .\make.bat html
    .\make.bat pdf

) else (
    echo Creating venv named .venv ...
    %PYTHONPATH% -m venv .venv
    
    echo Activating environnemnt ...
    .\.venv\Scripts\activate

    @REM cd public/docs

    echo Checking Python version ...
    python "%~dp0check_python_version.py"
    if %errorlevel% equ 1 (
        echo Python version doesn't meet requirements. Need 3.6 or higher
        exit
    )

    echo Installing requirements.txt ...
    pip install -r requirements.txt

    echo Building html doc ...
    .\make.bat html
    .\make.bat pdf

)
