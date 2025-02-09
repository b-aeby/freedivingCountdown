# -*- coding: utf-8 -*-
"""
Created on Wed Jan 22 10:28:24 2025

@author: baeby
"""

import pyttsx3

# Initialize the pyttsx3 engine
engine = pyttsx3.init()

# Specify the text you want to convert to speech
text = "Start cancelled."

# Specify the output file path for the WAV file
output_file = "otp31.wav"

# Save the speech to a WAV file
engine.save_to_file(text, output_file)

# Run the speech synthesis process
engine.runAndWait()

print(f"Speech saved to {output_file}")