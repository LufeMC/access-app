import requests
from bs4 import BeautifulSoup
from googlesearch import search
import sys
import json
import parse

#with open("result.json","r") as f:
#	res_dict = json.load(f)
#maxkey = max([int(x) for x in res_dict])

#s3 = 'how+check+ip+address+windows+cmd'
#s2 = input(' Search for: ')
s2 = ' '.join(sys.argv[1:])
s3 = '%20'.join(s2.split())
#https://www.google.com/amp/s/www.geeksforgeeks.org/performing-google-search-using-python-code/amp/
#'BNeawe s3v9rd AP7Wnd'
link = f'https://www.google.com/search?q={s3}'

html_text = requests.get(link).text
stuff = BeautifulSoup(html_text, 'lxml').find_all('div')
res = []
for info in stuff:
	info2 = info.find_all('div')
	for x in info2:
		info3 = x.text
		if len(info3) > 50 and info3 not in res:
			res.append(info3)
result_text = '\n\n'.join([x for x in res[8:10] if (x and not(x.isspace()))]) #10-8 is length of results
'''try:
	with open("result.txt","w",encoding="cp850") as f:
		f.write(result_text)
except UnicodeEncodeError:
	try:
		with open("result.txt","w",encoding="utf-8") as f:
			f.write(result_text)
	except UnicodeEncodeError:
		f.write("An error occurred")'''
#res_dict[maxkey+1] = result_text

#with open("result.json","w",encoding="cp850") as f:
#	json.dump(res_dict,f,indent=4)
with open("recentlyAnsweredQuery.txt","w") as f:
	f.write(s2)


for link in search(s2)[:3]:
	link_res = requests.get(link).text
	cont = BeautifulSoup(link_res,'lxml').find_all('div')
	res2 = []
	for c in cont:
		c2 = c.find_all('div')
		for x in c2:
			c3 = x.text
			if 80 >len(c3) > 50 and c3 not in res2:
				res2.append(c3)
	res2txt = '\n\n'.join([x for x in res2[3:6] if (x and not(x.isspace()))])

	result_text += res2txt

try:
	with open("result.txt","w",encoding="cp850") as f:
		f.write(result_text)
except UnicodeEncodeError:
	try:
		with open("result.txt","w",encoding="utf-8") as f:
			f.write(result_text)
	except UnicodeEncodeError:
		f.write("An error occurred")


parse.parse_txt("result.txt")

#print(colored_b + colored1 + "Open a link related to the search")
#print(colored_b + colored2 + "Search for a number of links and save them to a file")

"""option = input('Choose option  ')
if option == '1':
	op = int(input('Open link number  '))
	print('May take a while...')
	for link in search(s2):
		print(link)
		import webbrowser
		webbrowser.open(link)
		break
elif option == '2':
	op = int(input('How many links?  '))
	with open('links.txt', 'a') as f:
		for link in search(s2, stop=op):
			print(link, file=f)


"""

 
# to search

'''
query = "Geeksforgeeks"
 
for j in search(query):
    print(j)

'''
