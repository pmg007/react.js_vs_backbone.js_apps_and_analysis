import time
import os
from selenium.webdriver.support import expected_conditions as expect
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.firefox.webdriver import FirefoxProfile
chromedriver = "/usr/local/bin/chromedriver"
firefoxdriver = "/usr/local/bin/geckodriver"
driver = webdriver.Chrome(chromedriver)

## to use when checking with Firefox
# driver = webdriver.Firefox(executable_path = firefoxdriver)

base_url = "http://localhost:8000"
driver.get(base_url)

elem = WebDriverWait(driver, 30, 1).until(
      expect.visibility_of_element_located(
      (By.XPATH, "//input[@placeholder='What needs to be done?']")))

text = "Task"
elem.clear()
for i in range(10):
    elem.clear()
    elem.send_keys(text + str(i + 1))    
    elem.send_keys(Keys.ENTER)
    time.sleep(1)
