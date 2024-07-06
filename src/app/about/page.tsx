import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Primeval Games",
  description: "Get to know us!",
};

const ABOUT_BLURB="Welcome to Primeval Games, where the spirit of adventure and the thrill of discovery come alive! Founded in [Year], our store is a haven for enthusiasts of Magic: The Gathering, Pokémon, and a wide array of other nerdy treasures. Our mission is to create a vibrant community where players and collectors can connect, compete, and share their passion. At Primeval Games, we pride ourselves on our extensive selection of trading cards, board games, and collectibles. Whether you're a seasoned strategist or a curious newcomer, our friendly staff is here to help you find what you're looking for and to provide a welcoming environment for all. Join us for regular tournaments, special events, and community gatherings that bring our diverse group of gamers together. Our store is more than just a place to shop—it's a place to belong."

const STORE_ADDRESS="4230 29th St SE, Kentwood, MI 49512"
const STORE_PHONE_NUMBER="616-500-8948";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
            <h1 className="text-green-900 text-2xl font-bold">About Us</h1>
            <p className="text-gray-400">{ABOUT_BLURB}</p>
        </div>
        <div className="flex flex-col gap-2">
            <h2 className="text-green-900 text-2xl font-bold">Visit Us</h2>
            <div>
                <p className="text-gray-400 italic">Find Us At:</p>
                <p className="text-gray-400">{STORE_ADDRESS}</p>
            </div>
            <div>
                <p className="text-gray-400 italic">Phone Number:</p>
                <p className="text-gray-400">{STORE_PHONE_NUMBER}</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.272344951469!2d-85.56534312335958!3d42.90929690022504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88184dace93c1311%3A0x5ade06c843c2c044!2sPrimeval%20Games!5e0!3m2!1sen!2sus!4v1720204332982!5m2!1sen!2sus" width="100%" height="450"  loading="lazy" />
        </div>
        <div className="flex flex-col gap-2">
            <h1 className="text-green-900 text-2xl font-bold">Store Hours</h1>
            <p className="text-gray-400">{ABOUT_BLURB}</p>
        </div>
    </div>
  )
}

export default AboutPage