'use strict';

angular.module('streetCarApp')
.service('EventService', function($http) {

  this.getEvents = function() {
    return $http.get('/api/events');
  };

  this.getEvent = function() {
    return $http.get('/api/events/get_event');
  }; 
  
  this.addEvents = function(itinerary, events) {
    return $http.post('/api/itineraries', { itinerary: itinerary , events: events } );
  };

  this.getItineraryEvents = function(id) {
    return $http.get('/api/events/' + id);
  };
  
});