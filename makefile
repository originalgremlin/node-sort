REPORTER=dot

test:
	./node_modules/mocha/bin/mocha --reporter $(REPORTER)

test-watch:
	./node_modules/mocha/bin/mocha --reporter $(REPORTER) --growl --watch

.PHONY: test
