package main

import (
	"context"
	"github.com/ekudinov/grpc-test/backend/history/proto"
	g "github.com/ekudinov/grpc-test/backend/history/service/svc/client/grpc"
	"google.golang.org/grpc"
	"log"
	"os"
)

func main() {

	operation := os.Args[1]
	if operation != "all" && operation != "clean" && operation != "add" {
		panic("Operation must be all or clean or add")
	}

	conn, err := grpc.Dial(":5041", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("did not connect: %s", err)
	}
	defer conn.Close()

	history, err1 := g.New(conn)
	if err1 != nil {
		log.Fatalf("did not create calc server service: %s", err)
	}

	req := &proto.HistoryRequest{}

	if operation == "all" {
		all, err := history.GetAll(context.Background(), req)
		if err != nil {
			log.Fatalf("response err for get all: %s", err)
		}
		log.Printf("Response result for get all:%v\n", all.Events)
	} else if operation == "clean" {
		count, err := history.Clear(context.Background(), req)
		if err != nil {
			log.Fatalf("response err for clear: %s", err)
		}
		log.Printf("Response result for clear:%d\n", count.Count)
	} else {
		reqAdd := &proto.AddEventRequest{
			Event: &proto.Event{
				Name:   "add",
				A:      3,
				B:      6,
				Result: 9,
			}}
		res, err := history.AddEvent(context.Background(), reqAdd)
		if err != nil {
			log.Fatalf("response err for add item: %s", err)
		}
		log.Printf("Response result for add item:%d\n", res.Id)
	}




}
