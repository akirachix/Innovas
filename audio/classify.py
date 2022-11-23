import os
import httplib2
import http.client as httplib2
import urllib
import sys, getopt
import signal
import time
import twilio
import twilio.rest
from  twilio.rest import Client

from edge_impulse_linux.audio import AudioImpulseRunner
# Thinkspeak API Key
key = "0I0OQYIUKGCXYEZH" 




runner = None

def signal_handler(sig, frame):
    print('Interrupted')
    if (runner):
        runner.stop()
    sys.exit(0)

signal.signal(signal.SIGINT, signal_handler)

def help():
    print('python classify.py <path_to_model.eim> <audio_device_ID, optional>' )

def main(argv):
    ## Connecting to thinkspeak 
    params=urllib.parse.urlencode({'field1' : 'chainsaw', 'field2': 'background', 'field3': 'truck', 'key' : 'key'})
    headers={"Content-typZZe":"application/x-www-form-urlencode"}
    conn=httplib2.HTTPConnection("api.thingspeak.com:80")


    try:
        opts, args = getopt.getopt(argv, "h", ["--help"])
    except getopt.GetoptError:
        help()
        sys.exit(2)

    for opt, arg in opts:
        if opt in ('-h', '--help'):
            help()
            sys.exit()

    if len(args) == 0:
        help()
        sys.exit(2)

    model = args[0]

    dir_path = os.path.dirname(os.path.realpath(__file__))
    modelfile = os.path.join(dir_path, model)

    with AudioImpulseRunner(modelfile) as runner:
        try:
            # Posting data to think speak
            conn.request("POST","/update",params,headers)
            response=conn.getresponse()
            
            print(response.status,response.reason)
            data=response.read()
            conn.close()
            model_info = runner.init()
            labels = model_info['model_parameters']['labels']
            print('Loaded runner for "' + model_info['project']['owner'] + ' / ' + model_info['project']['name'] + '"')
            account_sid ="AC7794b0176007afd32865b0fb0af52865"
            auth_token ="3f141dfc71354f2b394bc4bb97a6918a"

            #Let the library choose an audio interface suitable for this model, or pass device ID parameter to manually select a specific audio interface
            selected_device_id = None
            if len(args) >= 2:
                selected_device_id=int(args[1])
                print("Device ID "+ str(selected_device_id) + " has been provided as an argument.")

            for res, audio in runner.classifier(device_id=selected_device_id):
                print('Result (%d ms.) ' % (res['timing']['dsp'] + res['timing']['classification']), end='')
                for label in labels:
                    score = res['result']['classification'][label]
                    print('%s: %.2f\t' % (label, score), end='')
                    
                    # Connecting to Twilio
                    account_sid ="AC48ddb1aed0cd0233c8c709ad7482cc12"
                    auth_token ="b54921e2580dbd240b3a2d4c7d28ad7c"
                    client = Client(account_sid, auth_token)
                    if label =='chainsaw' and score >= 0.75:
                        message = client.messages.create(
                        to= "+254741882520", 
                        from_="+19388882629",
                        body="Chainsaw sound detected at \n https://goo.gl/maps/xyqrKZdjjqmYEZR37")
                        print(message.sid)
                        print('chainsaw detected !!')
                    #elif label == 'truck' and label == 'chainsaw':
                     #   message = client.messages.create(
                     #   to="+254741882520",
                      #  from_="+19388882629",
                       # body="Logging activity detected at \n https://goo.gl/maps/xyqrKZdjjqmYEZR37")
                        #print(message.sid)
                        #print('Logging activity on going!!')
                    #elif label == 'truck' and score >= 0.75:
                     #   message = client.messages.create(
                      # to= "+254741882520", 
                       #from_="+19388882629",
                        #body="Truck sound detected at\n https://goo.gl/maps/xyqrKZdjjqmYEZR37")
                        #print(message.sid)
                        #print('Truck detected!!')
                    else:
                      print('background detected')
                            
                print('', flush=True)

        finally:
            if (runner):
                runner.stop()

if __name__ == '__main__':
    main(sys.argv[1:])
