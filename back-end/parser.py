
import nltk
import os
import json
import requests

def parse_text(t):
    text = nltk.word_tokenize(t)
    pos_tagged = nltk.pos_tag(text)
    #[('They', 'PRP'), ('refuse', 'VBP'), ('to', 'TO'), ('permit', 'VB'), ('us', 'PRP'),
    #('to', 'TO'), ('obtain', 'VB'), ('the', 'DT'), ('refuse', 'NN'), ('permit', 'NN')]
    nouns = filter(lambda x:x[1]=='NN',pos_tagged)
    verbs = [x[0] for x in filter(lambda x:"VB" in x[1],pos_tagged)]
    #nouns
    #[('refuse', 'NN'), ('permit', 'NN')]


    #experimenting with this: give google assistant specific verb-noun commands

    os.system(f"python run_sti.py {verbs[0]},{nouns[0]}")


#alternative google-search method
url = "https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk&num=100"

headers = {
    'x-user-agent': "desktop",
    'x-rapidapi-host': "google-search3.p.rapidapi.com",
    'x-rapidapi-key': "638283c430msh0971943416a4f9bp1383f4jsn71c37aae755e"
    }

response = requests.request("GET", url, headers=headers)

print(json.loads(response.text)["results"])
