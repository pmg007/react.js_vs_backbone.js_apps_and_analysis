# CSC 510 Project - React.js vs Backbone.js [s_idukut]

### Goal
The goal is to compare the two libraries, React.js and Backbone.js, based on various metrics and determine appropriate usability and applicability of each.

### Repo contents
This repository contains two apps in the todomvc folder, scripts in the scripts folder and results for performance tests, community support, jmeter, plato, sonarqube.


### Tools/technologies used
 
 React, Backbone, JS, Python2.x, Python 3.x, Selenium, Chrome dev Tools, JMeter, plato, SonarQube

### todo apps
1. React app
  - Navigate to the react folder and then open terminal and type 'python -m SimpleHTTPServer 8000' (using Python 2)
2. Backbone app
  - Navigate to the backbone folder and then open terminal and type  'python -m SimpleHTTPServer 8001' (using Python 2)
  
### Information regarding scripts
1. git_script.py
  - Please use Python 3.x.
  - The access token for the API usage has been hidden from public.
  - Install necessary packages as requried in the script.
  - Enter the public GitHub URL of the repository to be explored for obtaining metrics after running the script as "python3 git_script.py" on the terminal.
2. selenium_script_react_chrome.py
  - Please use Python 3.x for running the script
  - Install necessary packages as requried in the script.
  - Download chromedriver from [here](https://sites.google.com/a/chromium.org/chromedriver/downloads) and place it desired location which then need to be used in the script.
  - Migrate to the location of the react app and then simply start a server on 8000 by simply using "python -m SimpleHTTPServer 8000" (please note that for this server use Python 2.x).
  - Simply run the script as "python3 selenium_script_react_chrome.py"
3. selenium_script_backbone_chrome.py
  - Please use Python 3.x for running the script
  - Install necessary packages as requried in the script.
  - Download chromedriver from [here](https://sites.google.com/a/chromium.org/chromedriver/downloads) and place it desired location which then need to be used in the script.
  - Migrate to the location of the backbone app and then simply start a server on 8001 by simply typing "python -m SimpleHTTPServer 8001" (please note that for this server use Python 2.x).
  - Simply run the script as "python3 selenium_script_backbone_chrome.py"

