const eventListeners = {};

export function subscribe(eventType, callback) {
  if (!eventListeners[eventType]) {
    eventListeners[eventType] = [];
  }
  eventListeners[eventType].push(callback);
}

export function unsubscribe(eventType, callback) {
  const listeners = eventListeners[eventType];
  if (listeners) {
    const index = listeners.indexOf(callback);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  }
}

export function publish(eventType, data) {
  const listeners = eventListeners[eventType];
  if (listeners) {
    listeners.forEach((callback) => callback(data));
  }
}
