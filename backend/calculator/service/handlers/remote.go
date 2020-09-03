package handlers

import (
	"context"
	hpb "github.com/ekudinov/grpc-test/backend/history/proto"
	g "github.com/ekudinov/grpc-test/backend/history/service/svc/client/grpc"
	"google.golang.org/grpc"
	"log"
)

func AddEvent(operation string, a int32, b int32, result int32) {
	event := &hpb.Event{
		Name:   operation,
		A:      a,
		B:      b,
		Result: result,
	}
	conn, err := grpc.Dial("history:5041", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("did not connect: %s", err)
	}
	defer conn.Close()

	history, err1 := g.New(conn)
	if err1 != nil {
		log.Fatalf("did not create calc server service: %s", err)
	}

	reqAdd := &hpb.AddEventRequest{Event: event}
	res, err2 := history.AddEvent(context.Background(), reqAdd)
	if err2 != nil {
		log.Fatalf("response err for add item: %s", err2)
	}
	log.Printf("Response result for add item:%s\n", res.Id)
}