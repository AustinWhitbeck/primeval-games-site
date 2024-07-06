import Image from 'next/image';
import PrimevalLogo from '../images/PrimevalGamesLogo_Large.jpg';

const INTRO_BLURB = "Embark on a journey to a realm where legendary power and boundless adventure await. At Primeval Games, we bring the spirit of epic battles and ancient wonders to life. Dive into our vast collection of Magic: The Gathering cards, discover the thrill of Pokémon trading, and explore a world of nerdy treasures. Our store is a haven for enthusiasts seeking to harness their strategic prowess and unleash their inner champions. Join our vibrant community, participate in dynamic tournaments, and uncover powerful artifacts that will elevate your gaming experience. At Primeval Games, every moment is a step into a legendary saga.";


export default function Home() {
  return (
    <main >
      <div className="flex justify-center">
        <Image src={PrimevalLogo} alt="Primeval Logo" className='h-60 w-60 rounded-lg'/>
      </div>
          <h1 className="text-4xl font-bold underline text-green-900">
              Primeval Games
          </h1>
          <h3>{INTRO_BLURB}</h3>
    </main>
  );
}
