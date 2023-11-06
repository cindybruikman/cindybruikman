import EventsList from "../components/EventsList";
import EventSection from "../components/EventSection";

function EventsPage() {
  //Gebruik de geladen data van de loader functie.
  //Render de EventsList-component met de geladen evenementen.
  return (
    <div>
      <EventSection />
      <EventsList />
    </div>
  );
}

export default EventsPage;

//Functie voor het ophalen van evenementengegevens
