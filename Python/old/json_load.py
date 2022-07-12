import json, requests
url = "https://raw.githubusercontent.com/Pearlitic/pearlitic.github.io/main/%25/class_data.json"
resp = requests.get(url)
data = json.loads(resp.text)
print(data)
