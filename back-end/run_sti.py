import sys
import os

#install from https://github.com/googlesamples/assistant-sdk-python/tree/master/google-assistant-sdk/googlesamples/assistant/grpc

query = sys.argv[1]
with open("querytext.txt","w") as f:
	f.write(query)

os.system("python single_textinput.py --device-id calhackssdk1 --device-model-id <ID> ")
