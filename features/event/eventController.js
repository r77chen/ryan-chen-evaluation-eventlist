class EventController {
  #model;
  #view;
  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.initApp();
  }

  initApp() {
    this.setUpEvents();
    this.fetchEvents();
  }

  setUpEvents() {
    this.setUpDeleteEvent();
    this.setUpAddEvent();
    this.setUpEditEvent();
  }

  fetchEvents() {
    eventAPI.fetchEventsAPI().then((events) => {
      this.#model.setEvents(events);
      events.forEach((event) => {
        this.#view.renderEventElement(event);
      });
    });
  }

  setUpAddEvent() {
    this.#view.addEventBtn.addEventListener("click", () => {
      // Add a new event row with empty inputs
      this.#view.addNewEventElement();
      
      // Focus on the Event input
      const eventItem = document.querySelector('.event-item:last-child');
      const nameInput = eventItem.querySelector('input[type="text"]');
      nameInput.focus();
      
      const saveBtn = document.querySelector('.event-item:last-child .add-btn');
      const cancelBtn = document.querySelector('.event-item:last-child .cancel-btn');

      saveBtn.addEventListener("click", () => {
        const nameInput = eventItem.querySelector('input[type="text"]');
        const startInput = eventItem.querySelector('input[type="date"]');
        const endInput = eventItem.querySelectorAll('input[type="date"]')[1];

        const newEvent = {};

        if(nameInput && startInput && endInput){
          newEvent.name = nameInput.value,
          newEvent.start = startInput.value,
          newEvent.end = endInput.value
          newEvent.id = uuidv4();
          };

        // Check if any input is empty
        if (!newEvent.name || !newEvent.start || !newEvent.end) {
          alert("Inputs are Required");
        } else {
          eventAPI.postEventAPI(newEvent).then((_newEvent) => {
            this.#model.addEvent(_newEvent);
            this.#view.renderEventElement(_newEvent);
            eventItem.remove();
          });
        }
      });

      cancelBtn.addEventListener("click", () => {
        eventItem.remove();
      });
    });
  }

  setUpDeleteEvent() {
    this.#view.eventList.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        const eventId = e.target.closest('tr').getAttribute("id");

        eventAPI.deleteEventAPI(eventId).then(() => {
          this.#model.removeEvent(eventId);
          this.#view.removeEventElement(eventId);
        });
      }
    });
  }

  setUpEditEvent() {
    this.#view.eventList.addEventListener("click", (e) => {
      if (e.target.classList.contains("edit-btn")) {
        const eventId = e.target.closest('tr').getAttribute("id");
        this.#view.editEventElement(eventId);
      }

      if (e.target.classList.contains("save-btn")) {
        const eventId = e.target.closest('tr').getAttribute("id");
        const eventItem = document.getElementById(eventId);

        const updatedEvent = {
          name: eventItem.querySelector("td:nth-child(1) input").value,
          start: eventItem.querySelector("td:nth-child(2) input").value,
          end: eventItem.querySelector("td:nth-child(3) input").value,
          id: eventItem.id
        };

        if (!updatedEvent.name || !updatedEvent.start || !updatedEvent.end) {
          alert("Inputs are Required");
        } else {
          console.log(updatedEvent);
          eventAPI.putEventAPI(updatedEvent).then((_updatedEvent) => {
            this.#model.updateEvent(eventId, _updatedEvent);
            this.#view.saveEventElement(eventId, _updatedEvent);
          });
        }
      }

      if (e.target.classList.contains("cancel-btn")) {
        const eventId = e.target.closest('tr').getAttribute("id");
        const originalEvent = this.#model.getEvent().find(event => event.id === eventId);
        this.#view.cancelEditEventElement(eventId, originalEvent);
      }
    });
  }
}
