test:
	@./node_modules/mocha/bin/mocha ./test --reporter spec

test-travis:
	./node_modules/istanbul/lib/cli.js cover ./node_modules/mocha/bin/_mocha -- -R spec ./test/*

.PHONY: test test-travis
