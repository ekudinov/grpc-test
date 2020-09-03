module github.com/ekudinov/grpc-test/backend/calculator

go 1.14

require (
	github.com/ekudinov/grpc-test/backend/history v0.0.0-00010101000000-000000000000
	github.com/go-kit/kit v0.10.0
	github.com/gogo/protobuf v1.3.1
	github.com/gorilla/mux v1.8.0
	github.com/pkg/errors v0.9.1
	google.golang.org/genproto v0.0.0-20200831141814-d751682dd103 // indirect
	google.golang.org/grpc v1.31.1
)

replace github.com/ekudinov/grpc-test/backend/history => ../history
