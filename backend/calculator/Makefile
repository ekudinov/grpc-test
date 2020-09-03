.PHONY: proto
proto:
	rm -f ./proto/calculator.proto 2> /dev/null
	rm -f ./proto/calculator.pb.go 2> /dev/null
	cp ../../proto/calculator.proto ./proto
	truss --svcout ./service proto/calculator.proto

.PHONY: mod
mod:
	go mod tidy

.PHONY: server
server:
	go build -o calculator service/cmd/calculator/main.go

.PHONY: client
client:
	go build -o client service/cmd/client/main.go

.PHONY: clean
clean:
	rm -f client 2> /dev/null
	rm -f calculator 2> /dev/null
