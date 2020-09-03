package handlers

import (
	"context"
	pb "github.com/ekudinov/grpc-test/backend/calculator/proto"
)

// NewService returns a naïve, stateless implementation of Service.
func NewService() pb.CalculatorServer {
	return calculatorService{}
}

type calculatorService struct{}

func (s calculatorService) Add(ctx context.Context, in *pb.Request) (*pb.Response, error) {
	var resp pb.Response
	a, b := in.GetA(), in.GetB()
	resp = pb.Response{Result: a + b}
	go AddEvent("add", a, b, resp.Result)
	return &resp, nil
}

func (s calculatorService) Sub(ctx context.Context, in *pb.Request) (*pb.Response, error) {
	var resp pb.Response
	a, b := in.GetA(), in.GetB()
	resp = pb.Response{Result: a - b}
	go AddEvent("sub", a, b, resp.Result)
	return &resp, nil
}
