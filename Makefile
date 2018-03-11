dev: stop clean build start logs

build:
	docker-compose build

clean:
	docker-compose down

logs:
	docker-compose logs -f --tail=50

start:
	docker-compose up -d

stop:
	docker-compose stop
	docker-compose rm -f

