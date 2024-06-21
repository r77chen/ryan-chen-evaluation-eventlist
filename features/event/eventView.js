class EventView {
  constructor() {
    this.addEventBtn = document.querySelector('.add-event-btn');
    this.eventList = document.querySelector('.event-list');
  }

  renderEventElement(event) {
    const { id, name, start, end } = event;
    const eventItem = document.createElement("tr");
    eventItem.classList.add("event-item");
    eventItem.id = id;

    const nameTd = document.createElement("td");
    nameTd.textContent = name;
    eventItem.appendChild(nameTd);

    const startTd = document.createElement("td");
    startTd.textContent = start;
    eventItem.appendChild(startTd);

    const endTd = document.createElement("td");
    endTd.textContent = end;
    eventItem.appendChild(endTd);

    const actionsTd = document.createElement("td");
    actionsTd.classList.add("event-actions");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = `<svg fill="white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>`;
    actionsTd.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = `<svg fill="white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>`;
    actionsTd.appendChild(deleteBtn);

    eventItem.appendChild(actionsTd);

    this.eventList.appendChild(eventItem);
  }


  addNewEventElement() {
    const eventItem = document.createElement("tr");
    eventItem.classList.add("event-item");

    const nameTd = document.createElement("td");
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Event Name";
    nameTd.appendChild(nameInput);
    eventItem.appendChild(nameTd);

    const startTd = document.createElement("td");
    const startInput = document.createElement("input");
    startInput.type = "date";
    startTd.appendChild(startInput);
    eventItem.appendChild(startTd);

    const endTd = document.createElement("td");
    const endInput = document.createElement("input");
    endInput.type = "date";
    endTd.appendChild(endInput);
    eventItem.appendChild(endTd);

    const actionsTd = document.createElement("td");
    actionsTd.classList.add("event-actions");

    const saveBtn = document.createElement("button");
    saveBtn.classList.add("add-btn");
    saveBtn.innerHTML = `
      <svg fill="white" focusable viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V18M18 12H6" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    actionsTd.appendChild(saveBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.innerHTML = `
      <svg fill="white" focusable="false" aria-hidden="true" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"/>
      </svg>`;
    actionsTd.appendChild(cancelBtn);

    eventItem.appendChild(actionsTd);

    this.eventList.appendChild(eventItem);

    // Focus on the name input
    nameInput.focus();
  }

  editEventElement(eventId) {
    const eventItem = document.getElementById(eventId);
    if (eventItem) {
      const nameTd = eventItem.querySelector("td:nth-child(1)");
      const startTd = eventItem.querySelector("td:nth-child(2)");
      const endTd = eventItem.querySelector("td:nth-child(3)");
      const actionsTd = eventItem.querySelector(".event-actions");

      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.value = nameTd.textContent;
      nameTd.innerHTML = "";
      nameTd.appendChild(nameInput);

      const startInput = document.createElement("input");
      startInput.type = "date";
      startInput.value = startTd.textContent;
      startTd.innerHTML = "";
      startTd.appendChild(startInput);

      const endInput = document.createElement("input");
      endInput.type = "date";
      endInput.value = endTd.textContent;
      endTd.innerHTML = "";
      endTd.appendChild(endInput);

      const saveBtn = document.createElement("button");
      saveBtn.classList.add("save-btn");
      saveBtn.innerHTML = `<svg fill="white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,20V8.414a1,1,0,0,0-.293-.707L16.293,3.293A1,1,0,0,0,15.586,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20A1,1,0,0,0,21,20ZM9,8h4a1,1,0,0,1,0,2H9A1,1,0,0,1,9,8Zm7,11H8V15a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Z"/></svg>`;

      const cancelBtn = document.createElement("button");
      cancelBtn.classList.add("cancel-btn");
      cancelBtn.innerHTML = `<svg fill="white" focusable="false" aria-hidden="true" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path></svg>`;

      actionsTd.innerHTML = "";
      actionsTd.appendChild(saveBtn);
      actionsTd.appendChild(cancelBtn);
    }
  }

  saveEventElement(eventId, updatedEvent) {
    const eventItem = document.getElementById(eventId);
    if (eventItem) {
      const nameTd = eventItem.querySelector("td:nth-child(1)");
      const startTd = eventItem.querySelector("td:nth-child(2)");
      const endTd = eventItem.querySelector("td:nth-child(3)");
      const actionsTd = eventItem.querySelector(".event-actions");

      nameTd.textContent = updatedEvent.name;
      startTd.textContent = updatedEvent.start;
      endTd.textContent = updatedEvent.end;

      const editBtn = document.createElement("button");
      editBtn.classList.add("edit-btn");
      editBtn.innerHTML = `<svg fill="white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>`;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.innerHTML = `<svg fill="white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>`;

      actionsTd.innerHTML = "";
      actionsTd.appendChild(editBtn);
      actionsTd.appendChild(deleteBtn);
    }
  }

  cancelEditEventElement(eventId, originalEvent) {
    const eventItem = document.getElementById(eventId);
    if (eventItem) {
      const nameTd = eventItem.querySelector("td:nth-child(1)");
      const startTd = eventItem.querySelector("td:nth-child(2)");
      const endTd = eventItem.querySelector("td:nth-child(3)");
      const actionsTd = eventItem.querySelector(".event-actions");

      nameTd.textContent = originalEvent.name;
      startTd.textContent = originalEvent.start;
      endTd.textContent = originalEvent.end;

      actionsTd.innerHTML = `
        <button class="edit-btn">
          <svg fill="white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
        </button>
        <button class="delete-btn">
          <svg fill="white" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
          `
    }
  }

  removeEventElement(eventId) {
    const eventItem = document.getElementById(eventId);
    if (eventItem) {
      eventItem.remove();
    }
  }
}
