import paho.mqtt.client as mqtt
import time
from essential_generators import DocumentGenerator

BROKER = 'localhost'
PORT = 1883
TOPIC = 'app/logs'

client = mqtt.Client()
client.connect(BROKER, PORT)

gen = DocumentGenerator()

while True:
    message = f"Random sentence: {gen.sentence()}"
    client.publish(TOPIC, message, retain=True)
    print(f"Published: {message}")
    time.sleep(2)
    