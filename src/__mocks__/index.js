export const langCodes = {
    EN: 'english',
    //FR: 'french',
    //ES: 'spanish',
    IT: 'italian'
};

export const trips = {
    'lon-new': {
        id: 1, title: 'Newcastle - London', date: 'today', route: '/trips/lon-new', notifications: 1, additionalInfo: '1 Change (Leeds)',
        announcements: {
            [langCodes.EN]: [
                { message: 'The stop Leeds is cancelled becuause the station is ugly', time: '2019-09-15T20:13:09Z', location: 'train' },
                { message: 'An elicopter is taking off platform 1', time: '2019-09-15T19:13:09Z', location: 'station' },
                { message: 'The train is changing platform from 1 to 2', time: '2019-09-15T18:33:09Z', location: 'station' },
                { message: 'A guy is standing naked on the train track', time: '2019-09-15T13:15:09Z', location: 'station' },
                { message: 'The train from Newcastle arriving at platform 1, will be delayed', time: '2019-09-15T13:12:09Z', location: 'station' },
                { message: 'A spaceship is reversing into platform 5', time: '2019-09-15T13:10:09Z', location: 'station' },
                { message: `This train won't stop in Durham because the train driver ex wife lives there`, time: '2019-09-15T13:09:09Z', location: 'train' },
                { message: `If you see something that doesn't look right, run for your life`, time: '2019-09-15T12:47:09Z', location: 'station' },
            ],
            [langCodes.IT]: [
                { message: 'La fermata Leeds è stata cancellata in quanto la stazione è brutta', time: '2019-09-15T20:13:09Z', location: 'train' },
                { message: 'Un elicottero sta decollando dal binario 1', time: '2019-09-15T19:13:09Z', location: 'station' },
                { message: 'Il treno cambierà binario, da 1 a 2', time: '2019-09-15T18:33:09Z', location: 'station' },
                { message: `C'è un uomo nudo sui binari`, time: '2019-09-15T13:15:09Z', location: 'station' },
                { message: 'Il treno in arrivo da Newcastle, sulla piattaforma 1, è in ritardo', time: '2019-09-15T13:12:09Z', location: 'station' },
                { message: 'Una nave spaziale sta facendo manovre sul binario 5', time: '2019-09-15T13:10:09Z', location: 'station' },
                { message: `Questo treno non si fermerà a Durham perchè l'ex moglie del conducente live là`, time: '2019-09-15T13:09:09Z', location: 'train' },
                { message: `Se vedi qualcosa che ti sembra sospetto, scappa`, time: '2019-09-15T12:47:09Z', location: 'station' },
            ]
        }
    },
    'new-lon': { id: 2, title: 'London - Newcastle', date: 'tomorrow', route: '/trips/new-lon', additionalInfo: '0 Change', },
    'lon-man': { id: 3, title: 'London - Manchester', date: '27/10/2019', route: '/trips/lon-man', additionalInfo: '1 Change (Birmingham New Street)', },
};


export const pastTrips = {
    'lon-new': { id: 4, title: 'Newcastle - London', date: '29/08/2019', additionalInfo: '2 Change (Leeds/Oxford)', },
    'new-lon': { id: 5, title: 'London - Newcastle', date: '20/08/2019', additionalInfo: '0 Change', },
}