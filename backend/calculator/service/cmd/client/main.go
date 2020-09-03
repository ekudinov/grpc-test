package main

import (
	"context"
	"github.com/ekudinov/grpc-test/backend/calculator/proto"
	g "github.com/ekudinov/grpc-test/backend/calculator/service/svc/client/grpc"
	"google.golang.org/grpc"
	"log"
	"os"
	"strconv"
)

func main() {

	operation := os.Args[1]
	if operation != "add" && operation != "sub" {
		panic("Operation must be add or sub")
	}
	a, e1 := strconv.Atoi(os.Args[2])
	if e1 != nil {
		panic("A must be Integer")
	}
	b, e2 := strconv.Atoi(os.Args[3])
	if e2 != nil {
		panic("B must be Integer")
	}

	conn, err := grpc.Dial(":5040", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("did not connect: %s", err)
	}
	defer conn.Close()

	calc, err1 := g.New(conn)
	if err1 != nil {
		log.Fatalf("did not create calc server service: %s", err)
	}

	req := &proto.Request{}
	req.A = int32(a)
	req.B = int32(b)

	var resp *proto.Response
	var err2 error
	if operation == "add" {
		resp, err2 = calc.Add(context.Background(), req)
	} else {
		resp, err2 = calc.Sub(context.Background(), req)
	}

	if err2 != nil {
		log.Fatalf("response err: %s", err2)
	}
	log.Printf("Response result:%d\n", resp.Result)
}
