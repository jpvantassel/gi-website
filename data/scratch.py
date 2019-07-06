import json

with open("officers.json","r") as f:
    a = json.load(f)

print(a)