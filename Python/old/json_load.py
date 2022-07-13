import json, requests
url = "https://raw.githubusercontent.com/Pearlitic/pearlitic.github.io/main/%25/class_data.json"
resp = requests.get(url)
data = json.loads(resp.text)
print(data)

import pandas as pd

dff = pd.concat({
        k: pd.DataFrame.from_dict(v, 'index') for k, v in data.items()
    }, 
    axis=0)

df = pd.DataFrame(data.items(), columns=["Char", "age"]) 
