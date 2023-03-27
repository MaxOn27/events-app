export async function getAllEvents() {
    const response = await fetch('https://events-3ff3b-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();

    const events = [];

    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        });
    }

    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id: string | string[] | undefined) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
}

interface DateFilter {
    year: any;
    month: any;
}

export async function getFilteredEvents(dateFilter: DateFilter) {
    const { year, month } = dateFilter;

    const allEvents = await getAllEvents();

    let filteredEvents = allEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}