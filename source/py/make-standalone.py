#!/usr/bin/env python
# -*- coding: utf-8 -*-

from bs4 import BeautifulSoup
import base64
import sys
import os
import re
from mimetypes import MimeTypes

# VARIABLES

tags = {
	'link': 'href', 
	'img': 'src', 
	'source': 'src',
	'script': 'src'
}

# DEFINITIONS

def encode(tag, attr):
	tags = soup.find_all(tag)
	for tag in tags:
		if tag.has_attr(attr):
			mimetype = mime.guess_type(tag[attr])
			with open(f_path + tag[attr], 'rb') as attr_file:
				encoded_uri = 'data:' + mimetype[0] + ';base64,' + base64.b64encode(attr_file.read())
			tag[attr] = encoded_uri

# WORK

mime = MimeTypes()
f = open(sys.argv[1])
f_path = os.path.dirname(sys.argv[1])
if f_path != '':
	f_path = f_path + '/'
soup = BeautifulSoup(f, 'html.parser')

# encode favicon, styles, images, videos, audios, and scripts
for tag, attr in tags.iteritems():
	encode(tag, attr)

# encode background images
styled_tags = soup.find_all(style=True)
for tag in styled_tags:
	if 'background-image' in tag['style']:
		b_img_url = re.findall(r'background-image:url\((.*?)\);', tag['style'])[0]
		mimetype = mime.guess_type(b_img_url)
		with open(f_path + b_img_url, 'rb') as b_img_file:
			encoded_uri = 'data:' + mimetype[0] + ';base64,' + base64.b64encode(b_img_file.read())
		tag['style'] = tag['style'].replace(b_img_url, encoded_uri)

# encode fonts (they need to be included in an internal CSS style with the "fonts" ID)
font_css = soup.find('style', {'id': 'fonts'})
if font_css:
	fonts_url = re.findall(r'url\((.*?)\)', font_css.contents[0])
	for font_url in fonts_url:
		mimetype = mime.guess_type(font_url)
		with open(f_path + font_url, 'rb') as font_file:
			encoded_uri = 'data:' + mimetype[0] + ';base64,' + base64.b64encode(font_file.read())
		font_css.string = font_css.contents[0].replace(font_url, encoded_uri)

print soup