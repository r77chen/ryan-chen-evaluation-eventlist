class EventModel {
  #events;
  constructor() {
    this.#events = [];
  }

  addEvent(newEvent) {
    this.#events.push(newEvent);
  }

  setEvents(events) {
    this.#events = events;
  }

  updateEvent(id, updatedEvent) {
    this.#events = this.#events.map((event) =>
      event.id === id ? { ...event, ...updatedEvent } : event
    )
  }

  removeEvent(id) {
    this.#events = this.#events.filter((event) => event.id !== id);
  }

}
