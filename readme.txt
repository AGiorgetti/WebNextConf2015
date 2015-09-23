-----------------------
Setup:

Install node: http://www.nodejs.org

Install tsd: npm install tsd -g

from a console prompt:

npm install

tsd install

-----------------------
Visual Studio Code

edit the file settings.json and specify the correct absolute path for "typescript.tsdk" 

-----------------------
Update definitions:

tsd update -s -o
tsd rebundle

ncu --upgradeAll
npm install

-----------------------
Purge global caches:

tsd purge