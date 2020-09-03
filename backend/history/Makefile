.PHONY: proto
proto:
	rm -f ./proto/history.proto 2> /dev/null
	rm -f ./proto/history.pb.go 2> /dev/null
	cp ../../proto/history.proto ./proto
	truss --svcout ./service proto/history.proto

.PHONY: mod
mod:
	go mod tidy

.PHONY: server
server:
	go build -o history service/cmd/history/main.go

.PHONY: client
client:
	go build -o client service/cmd/client/main.go

.PHONY: clean
clean:
	rm -f client 2> /dev/null
	rm -f history 2> /dev/null
