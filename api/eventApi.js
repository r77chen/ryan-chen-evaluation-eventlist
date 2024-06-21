const eventAPI = (() => {
  const BASE_EVENT_API = "http://localhost:3000/events";

  const fetchEventsAPI = async () => {
    try {
    return fetch(BASE_EVENT_API).then((res) => res.json());
    } catch (err) {
      console.log(`Error happen in GET API DATA: ${err}`);
    }
  };

  const postEventAPI = async (newEvent) => {
    try {
    return fetch(BASE_EVENT_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEvent)
    }).then((res) => res.json());
  } catch (err) {
    console.log(`Error happen in POST API DATA: ${err}`);
  }
  };

  const deleteEventAPI = async (eventId) => {
    try {
    return fetch(`${BASE_EVENT_API}/${eventId}`, {
      method: "DELETE"
    }).then((res) => res.json());
  } catch (err) {
    console.log(`Error happen in DELETE API DATA: ${err}`);
  }
  };

  return {
    fetchEventsAPI,
    postEventAPI,
    deleteEventAPI
  };
})();
