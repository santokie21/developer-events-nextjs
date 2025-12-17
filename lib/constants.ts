export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "React Conf 2025",
    image: "/images/event1.png",
    slug: "react-conf-2025",
    location: "Denver, Colorado",
    date: "May 12-14, 2025",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "JavaScript Summit",
    image: "/images/event2.png",
    slug: "javascript-summit",
    location: "San Francisco, California",
    date: "June 3-5, 2025",
    time: "8:30 AM - 6:00 PM",
  },
  {
    title: "Next.js Conf Europe",
    image: "/images/event3.png",
    slug: "nextjs-conf-europe",
    location: "Berlin, Germany",
    date: "July 1-3, 2025",
    time: "10:00 AM - 5:00 PM",
  },
  {
    title: "Web Dev Hackathon",
    image: "/images/event4.png",
    slug: "web-dev-hackathon",
    location: "Austin, Texas",
    date: "August 9-11, 2025",
    time: "12:00 PM - 12:00 AM",
  },
  {
    title: "TypeScript Advanced Workshop",
    image: "/images/event5.png",
    slug: "typescript-workshop",
    location: "New York, New York",
    date: "September 15-17, 2025",
    time: "9:00 AM - 4:00 PM",
  },
  {
    title: "Tech Meetup Series 2025",
    image: "/images/event6.png",
    slug: "tech-meetup-series",
    location: "Remote",
    date: "Ongoing - Monthly",
    time: "7:00 PM - 9:00 PM EST",
  },
];
