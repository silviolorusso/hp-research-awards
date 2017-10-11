# make a standalone HTML version of the publication

stand:
	@rm public/standalone/*
	@for f in public/*.html ; do python source/py/make-standalone.py $$f > public/standalone/`basename $$f` ; done
	@echo 'The standalone HTML versions are now in the /standalone directory. Enjoy!'

stand-test:
	@python source/py/make-standalone.py source/test/index.html > public/standalone/index-test.html
	@echo 'The standalone test HTML version is now in the /standalone directory. Enjoy!'