test:
	@./node_modules/mocha/bin/mocha ./test --reporter spec

test-travis:
	./node_modules/istanbul/lib/cli.js cover ./node_modules/mocha/bin/_mocha -- -R spec ./test/*

release-patch: test
	npm version patch

release-minor: test
	npm version minor

release-major: test
	npm version major

.PHONY: test test-travis
