import { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import Winner1Image from '../../images/CEDH_Tournament_Winner_January_2024_MichaelStark.jpg';

type CEDHTournamentResult = {
  commander: string;
  date: string;
  decklistLink: string;
  image: StaticImageData;
  winnerName: string;
}

export const metadata: Metadata = {
  title: "Schedule | Primeval Games",
  description: "Check out our events and hours!",
};

const CEDH_BLURB = "Once a month we host our competitive commander event (cEDH) with grand prizes and 100% proxy friendly! Make sure to sign up on TopDeck to the monthly event for your chance at glory and add your name to the titans below!"



const cedhTournamentResults: CEDHTournamentResult[] = [
  {
    commander: 'Kinnan, Bonder Prodigy',
    date: 'January 19th 2024',
    decklistLink: 'https://www.moxfield.com/decks/E9boxGVcqEWZxk24yyigEw',
    image: Winner1Image,
    winnerName: 'Michael Stark',
  }

]

export const CEDHTournamentResultSection = ({winnerName, date, decklistLink, image, commander}: CEDHTournamentResult) => {
  return(
    <div className="flex justify-between border-solid border-2 rounded-md border-green-900 bg-green-900">
      <div className="p-5">
        <h3 className="text-xl text-gray-100">Tournament Date: {date}</h3>
        <p className='text-gray-100'>Winner: <strong>{winnerName}</strong> piloting <strong>{commander}</strong>!</p>
        <a href={decklistLink} target="#" className="text-green-100 underline">Decklist</a>
      </div>
      <Image src={image} alt={`Tournament Winner ${winnerName} photo`} className="max-h-60 w-auto"/>
    </div>
  )
}

const SchedulePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
            <h1 className="text-green-900 text-2xl font-bold">Store Hours</h1>
            <ul>
              <li className='text-gray-400'><strong className='italic'>Sunday:</strong> 11:00-21:00</li>
              <li className='text-gray-400'><strong className='italic'>Monday:</strong> 16:00-22:00</li>
              <li className='text-gray-400'><strong className='italic'>Tuesday:</strong> CLOSED</li>
              <li className='text-gray-400'><strong className='italic'>Wednesday:</strong> 11:00-18:00</li>
              <li className='text-gray-400'><strong className='italic'>Thursday:</strong> 11:00-22:00</li>
              <li className='text-gray-400'><strong className='italic'>Friday:</strong> 11:00-24:00</li>
            </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-green-900 text-2xl font-bold">Google Calendar</h3>
        <p className="text-red-400">TODO: This is a placeholder for connecting a Google Calendar Embed.</p>
        <div className="h-40 w-full bg-green-100 rounded-md" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-green-900 text-2xl font-bold">Monthly cEDH Tournament</h3>
        <p className="text-gray-400">{CEDH_BLURB}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-green-900 text-2xl font-bold">Victorius Titans!</h3>
        {cedhTournamentResults.map((eventResult) => {
          return(
            <CEDHTournamentResultSection {...eventResult} />
          )
        })}
      </div>
    </div>
  )
}

export default SchedulePage