#!/usr/bin/python
import datetime
import zipfile
import os

name = "src"

if __name__ == '__main__':
    path = os.path.dirname(os.path.realpath(__file__))
    cmd = '/Applications/nwjs.app/Contents/MacOS/nwjs "'+path+'/' + name+'"'
    os.system(cmd);