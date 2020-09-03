package handlers

import (
	"context"
	pb "github.com/ekudinov/grpc-test/backend/history/proto"
	"github.com/google/uuid"
	"time"
)

var history []*pb.Event

// NewService returns a naïve, stateless implementation of Service.
func NewService() pb.HistoryServer {
	return historyService{}
}

type historyService struct {
}

func (s historyService) GetAll(ctx context.Context, in *pb.HistoryRequest) (*pb.GetAllResponse, error) {
	var resp pb.GetAllResponse
	resp.Events = history
	return &resp, nil
}

func (s historyService) Clear(ctx context.Context, in *pb.HistoryRequest) (*pb.ClearResponse, error) {
	var resp pb.ClearResponse
	resp.Count = int32(len(history))
	history = nil
	return &resp, nil
}

func (s historyService) AddEvent(ctx context.Context, in *pb.AddEventRequest) (*pb.AddEventResponse, error) {
	var resp pb.AddEventResponse
	newEvent := in.Event
	newEvent.Id = uuid.New().String()
	newEvent.Time = time.Now().String()
	history = append(history, newEvent)
	resp.Id = newEvent.Id
	return &resp, nil
}
