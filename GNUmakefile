default: run

build:
	mkdir loudml-grafana-app
	rsync -rpE dist/ loudml-grafana-app/
	zip -y -r -q loudml-grafana-app-1.7.0dev-grafana6.zip loudml-grafana-app
	rm -rf loudml-grafana-app

run:
	yarn watch
