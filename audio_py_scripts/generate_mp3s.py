#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Feb  9 18:34:50 2025

@author: benjamin
"""

# 2 minutes to official top, 1'30, 1 minute, 30 seconds, 20, 10, 5, 4, 3, 2, 1, official top, plus 1, 2, 3, 4, 5, 6,
#       7,
#       8, 9, 10, 20, 25, 26, 27, 28, 29, 30, start cancelled

audios = [
    ("5 minutes", 'otm5min.mp3'),
    ("4 minutes", 'otm4min.mp3'),
    ("3 minutes", 'otm3min.mp3'),
    ("Two minutes to official top", 'otm120.mp3'),
    ("1 30", 'otm90.mp3'),
    ("1 minute", 'otm60.mp3'),
    ("30 seconds", 'otm30.mp3'),
    ("Official top", 'ot.mp3'),
    ("Plus 1", 'plus_1.mp3'),
    ("1", '1.mp3'),
    ("2", '2.mp3'),
    ("3", '3.mp3'),
    ("4", '4.mp3'),
    ("5", '5.mp3'),
    ("6", '6.mp3'),
    ("7", '7.mp3'),
    ("8", '8.mp3'),
    ("9", '9.mp3'),
    ("10", '10.mp3'),
    ("20", '20.mp3'),
    ("25", '25.mp3'),
    ("26", '26.mp3'),
    ("27", '27.mp3'),
    ("28", '28.mp3'),
    ("29", '29.mp3'),
    ("30", '30.mp3'),
    ("Start cancelled", 'start_cancelled.mp3'),
    ]

from gtts import gTTS

def create_mp3(text, filename):
    tts = gTTS(text, lang="en")
    tts.save(filename)

for (text, filename) in audios:
    create_mp3(text, filename)