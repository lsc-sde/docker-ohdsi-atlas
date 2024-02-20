import kopf
import logging
import time
import asyncio
import kubernetes
import base64 
import os

@kopf.on.create("Service")
@kopf.on.update("Service")
@kopf.on.resume("Service")
def serviceUpdated(annotations, status, name, namespace, **_):
    # your code here
    print(f"{name} has been updated")
    
