# Ce script doit être lancé depuis la racine du projet car il contient des chemins relatifs.
# Un fichier avec le mot de passe du FTP (pour l'utilisateur github_demo) doit se trouver dans ../.secrets/ftp.txt.
# Le répertoire de déploiement sur le serveur FTP doit contenir un fichier unzip.php.

##################################################################################################################

# nom du répertoire sur le serveur FTP
remoteFolder = 'Fribourg_docs'

##################################################################################################################

import ftplib
import shutil
import urllib.request
import subprocess
import shutil
import os
import json
import ssl
import platform

isWindows = platform.platform().startswith('Windows')

print('build...')
if isWindows:
    subprocess.run(['pnpm', 'build'], shell=True)
else:
    subprocess.run(['pnpm', 'build'])

print('update application.json...')
with open('./dist/config/application.json', 'r', encoding='utf-8') as file:
    data = json.load(file)
with open('./dist/config/application.json', 'w', encoding='utf-8') as file:
    # data['oauthappid'] = data['oauthappid_tt']
    json.dump(data, file, ensure_ascii=False)

print('zip...')
zipFile = './dist.zip'
shutil.make_archive('./dist', 'zip', './dist')

print('ftp...')
with open('../.secrets/ftp.txt', 'r') as file:
    pwd = file.read()
ftp = ftplib.FTP('ftp.topomat.ch', 'github_demo', pwd)
ftp.encoding = 'utf-8'
with open(zipFile, 'rb') as file:
    ftp.storbinary(f'STOR /{remoteFolder}/dist.zip', file)
ftp.quit()

print('unzip...')
with urllib.request.urlopen(f'https://www.topomat.ch/demo/{remoteFolder}/unzip.php') as response:
    resp = response.read()
print(resp)

print('clean...')
shutil.rmtree('./dist')
os.remove(zipFile)